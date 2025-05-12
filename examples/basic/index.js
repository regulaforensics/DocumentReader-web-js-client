import * as fs from 'fs';
import {
    DocumentReaderApi,
    Scenario,
    Light,
    Source,
    GraphicFieldType,
} from '@regulaforensics/document-reader-webclient';

const apiBasePath = process.env.API_BASE_PATH || 'https://api.regulaforensics.com';

const api = new DocumentReaderApi({ basePath: apiBasePath });

const serverInfo = await api.health();

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

if (documentImage) {
    fs.appendFileSync('document-image.jpg', Buffer.from(documentImage));
}

if (portraitField) {
    const portraitFromVisual = portraitField.getValue(Source.VISUAL);
    fs.appendFileSync('portrait.jpg', Buffer.from(portraitFromVisual));
}

console.log('---------------------------------------------------------------');
console.log(`Document name: ${response.documentType()?.DocumentName || 'UNKNOWN'}`);
console.log('---------------------------------------------------------------');

if (response.text) {
    response.text.fieldList.forEach((field) => {
        console.log(`\n[${field.fieldName}]`);
        field.valueList.forEach(({ source, value }) => {
            console.log(`  - Source: ${source}`);
            console.log(`    Value : ${value}`);
        });
        console.log('---------------------------------------------------------------');
    });
} else {
    console.log('                       NO TEXT DATA');
    console.log('---------------------------------------------------------------');
}

console.log(`          -Web API version: ${serverInfo.version}-`);
