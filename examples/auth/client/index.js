import * as fs from 'fs';
import {
    DocumentReaderApi,
    Result,
    Scenario,
    Source,
    TextFieldType,
    GraphicFieldType,
    Light,
    SecurityFeatureType,
} from '@regulaforensics/document-reader-webclient';
import axios from 'axios';
import qs from 'qs';

const GATEWAY_BASE_URL = 'http://localhost:8080';

const { PORTRAIT, DOCUMENT_FRONT } = GraphicFieldType;
const { DOCUMENT_NUMBER } = TextFieldType;

async function get_authorization_token() {
    let data = qs.stringify({
        grant_type: 'password',
        username: 'testuser1',
        password: 't3stP@ss',
        client_id: 'account',
        scope: 'openid',
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${GATEWAY_BASE_URL}/realms/regula/protocol/openid-connect/token`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data,
    };
    return axios
        .request(config)
        .then((response) => {
            return response.data['access_token'];
        })
        .catch((error) => {
            console.log(error);
        });
}

(async () => {
    const apiBasePath = process.env.API_BASE_PATH || 'http://localhost:4333';
    let license = process.env.TEST_LICENSE; // optional, used here only for smoke test purposes

    if (fs.existsSync('regula.license')) {
        license = fs.readFileSync('regula.license');
    }
    const token = await get_authorization_token();

    const api = new DocumentReaderApi({
        basePath: apiBasePath,
        baseOptions: { headers: { Authorization: `Bearer ${token}` } },
    });

    api.setLicense(license);

    const serverInfo = await api.ping();

    const white_page_0 = fs.readFileSync('WHITE.jpg').buffer;
    const ir_page_0 = fs.readFileSync('IR.jpg').buffer;
    const uv_page_0 = fs.readFileSync('UV.jpg').buffer;

    const request = {
        images: [
            {
                ImageData: white_page_0,
                light: Light.WHITE,
                page_idx: 0,
            },
            {
                ImageData: ir_page_0,
                light: Light.IR,
                page_idx: 0,
            },
            {
                ImageData: uv_page_0,
                light: Light.UV,
                page_idx: 0,
            },
        ],
        processParam: {
            scenario: Scenario.FULL_AUTH,
            resultTypeOutput: [
                // actual results
                Result.STATUS,
                Result.AUTHENTICITY,
                Result.TEXT,
                Result.IMAGES,
                Result.DOCUMENT_TYPE,
                Result.DOCUMENT_TYPE_CANDIDATES,
                Result.IMAGE_QUALITY,
                // legacy results
                Result.MRZ_TEXT,
                Result.VISUAL_TEXT,
                Result.BARCODE_TEXT,
                Result.RFID_TEXT,
                Result.VISUAL_GRAPHICS,
                Result.BARCODE_GRAPHICS,
                Result.RFID_GRAPHICS,
                Result.LEXICAL_ANALYSIS,
            ],
        },
    };

    const response = await api.process(request);

    const requestJson = JSON.stringify(request);
    const responseJson = response.json();

    const docOverallStatus = response.status.overallStatus;
    const docOpticalTextStatus = response.status.detailsOptical.text;

    // text fields example
    const docNumberField = response.text.getField(DOCUMENT_NUMBER);
    const docNumberFieldByName = response.text.getFieldByName('Document Number');

    const docNumberVisual = docNumberField.getValue(Source.VISUAL);
    const docNumberMrz = docNumberField.getValue(Source.MRZ);
    const docNumberVisualValidity = docNumberField.sourceValidity(Source.VISUAL);
    const docNumberMrzValidity = docNumberField.sourceValidity(Source.MRZ);
    const docNumberMrzVisualMatching = docNumberField.crossSourceComparison(Source.MRZ, Source.VISUAL);

    const docAuthenticity = response.authenticity();

    const docIrB900 = docAuthenticity.irB900Checks();
    const docIrB900BlankChecks = docIrB900.checksByElement(SecurityFeatureType.BLANK);

    const docImagePattern = docAuthenticity.imagePatternChecks();
    const docImagePatternBlankChecks = docImagePattern.checksByElement(SecurityFeatureType.BLANK);

    // images example
    const documentImage = response.images.getField(DOCUMENT_FRONT).getValue();
    const portraitField = response.images.getField(PORTRAIT);
    const portraitFromVisual = portraitField.getValue(Source.VISUAL);
    fs.appendFileSync('portrait.jpg', Buffer.from(portraitFromVisual));
    fs.appendFileSync('document-image.jpg', Buffer.from(documentImage));

    const docImageQuality = response.imageQualityChecks();

    console.log('-----------------------------------------------------------------');
    console.log(`            Web API version: ${serverInfo.version}`);
    console.log('-----------------------------------------------------------------');
    console.log(`           Document Overall Status: ${docOverallStatus}`);
    console.log(`            Document Number Visual: ${docNumberVisual}`);
    console.log(`               Document Number MRZ: ${docNumberMrz}`);
    console.log(`Validity Of Document Number Visual: ${docNumberVisualValidity}`);
    console.log(`   Validity Of Document Number MRZ: ${docNumberMrzValidity}`);
    console.log(`      MRZ-Visual values comparison: ${docNumberMrzVisualMatching}`);
    console.log('-----------------------------------------------------------------');

    // how to get low lvl individual results
    const lexResult = response.lowLvlResponse.resultByType(Result.LEXICAL_ANALYSIS);
})();
