# Regula Document Reader js client for the browser and node.js based on axios test

[![npm version](https://img.shields.io/npm/v/@regulaforensics/document-reader-webclient?color=yellow&style=flat-square)](https://www.npmjs.org/package/@regulaforensics/document-reader-webclient)
![npm type definitions](https://img.shields.io/npm/types/typescript?style=flat-square&collor=858df6)
[![documentation](https://img.shields.io/badge/docs-en-f6858d?style=flat-square)](https://support.regulaforensics.com/hc/en-us/articles/115000916306-Documentation)
[![OpenAPI](https://img.shields.io/badge/OpenAPI-defs-8c0a56?style=flat-square)](https://github.com/regulaforensics/DocumentReader-web-openapi)
[![live](https://img.shields.io/badge/live-demo-0a8c42?style=flat-square)](https://api.regulaforensics.com/)

Documents recognition as easy as reading two bytes.

If you have any problems with or questions about this client, please contact us
through a [GitHub issue](https://github.com/regulaforensics/DocumentReader-api-js-client/issues).
You are invited to contribute new features, fixes, or updates, large or small.
We are always thrilled to receive pull requests, and do our best to process them as fast as we can.
See [dev guide](https://github.com/regulaforensics/DocumentReader-web-js-client/blob/master/dev.md)

## Install package

```
npm install @regulaforensics/document-reader-webclient
```
## Basic Example

Performing request:
```js
import { DocumentReaderApi, Scenario, TextFieldType, GraphicFieldType } from '@regulaforensics/document-reader-webclient';
const { DOCUMENT_NUMBER, SURNAME_AND_GIVEN_NAMES, DATE_OF_BIRTH } = TextFieldType;
const { PORTRAIT, SIGNATURE } = GraphicFieldType;

const imageAsBase64String = getDocImageAsBase64String();
const api = new DocumentReaderApi({ basePath: 'http://localhost:8080' });
const result = await api.process({ images: [documentImage], processParam: { scenario: Scenario.FULL_PROCESS} });
```

Parsing results:
```js
// text fields
const docNumber = result.text?.getField(DOCUMENT_NUMBER);
const fullName = result.text?.getField(SURNAME_AND_GIVEN_NAMES);
const dateOfBirth = result.text?.getField(DATE_OF_BIRTH);

// graphics fields
const portraitAsBase64 = result.images?.getField(PORTRAIT);
const signatureAsBase64 = result.images?.getField(SIGNATURE);
```


## Compatibility

Language level
* ES5 with some ES6 features [Promise] and whatwg **URL**. If your environment doesn't support ES6 required features, you can polyfill.
* nodejs 18+

Module system
* CommonJS
* ES6 module system

Definitions
* TypeScript's definitions should be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#including-declarations-in-your-npm-package))
