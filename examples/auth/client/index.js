import * as fs from 'fs';
import {
    DocumentReaderApi,
    Scenario,
    Source,
    GraphicFieldType,
    Light,
} from '@regulaforensics/document-reader-webclient';
import axios from 'axios';
import qs from 'qs';

const GATEWAY_BASE_URL = 'http://localhost:8080';

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

const apiBasePath = process.env.API_BASE_PATH || 'http://localhost:4333';
let license = process.env.TEST_LICENSE;

if (fs.existsSync('regula.license')) {
    license = fs.readFileSync('regula.license');
}
const token = await get_authorization_token();

const api = new DocumentReaderApi({
    basePath: apiBasePath,
    baseOptions: { headers: { Authorization: `Bearer ${token}` } },
});

// Uncomment the line below if you want to transfer the license with each request
// api.setLicense(license);

const serverInfo = await api.ping();

const white_page_0 = fs.readFileSync('WHITE.jpg').buffer;

const request = {
    images: [
        {
            ImageData: white_page_0,
            light: Light.WHITE,
            page_idx: 0,
        },
    ],
    processParam: {
        scenario: Scenario.FULL_PROCESS,
        alreadyCropped: true,
    },
};

const response = await api.process(request);

// images example
const documentImage = response.images.getField(GraphicFieldType.DOCUMENT_FRONT).getValue();
const portraitField = response.images.getField(GraphicFieldType.PORTRAIT);
const portraitFromVisual = portraitField.getValue(Source.VISUAL);
fs.appendFileSync('portrait.jpg', Buffer.from(portraitFromVisual));
fs.appendFileSync('document-image.jpg', Buffer.from(documentImage));

console.log('---------------------------------------------------------------');
console.log(`Document name: ${response.documentType().DocumentName}`);
console.log('---------------------------------------------------------------');

response.text.fieldList.forEach((field) => {
    console.log(`\n[${field.fieldName}]`);
    field.valueList.forEach(({ source, value }) => {
        console.log(`  - Source: ${source}`);
        console.log(`    Value : ${value}`);
    });
    console.log('---------------------------------------------------------------');
});
console.log(`          -Web API version: ${serverInfo.version}-`);
