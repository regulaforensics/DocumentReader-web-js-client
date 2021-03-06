/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 5.5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Document processing scenario
 * @export
 * @enum {string}
 */
export enum Scenario {
    MRZ = 'Mrz',
    BARCODE = 'Barcode',
    LOCATE = 'Locate',
    OCR = 'Ocr',
    DOCTYPE = 'DocType',
    MRZ_OR_BARCODE = 'MrzOrBarcode',
    MRZ_OR_LOCATE = 'MrzOrLocate',
    MRZ_AND_LOCATE = 'MrzAndLocate',
    MRZ_OR_OCR = 'MrzOrOcr',
    MRZ_OR_BARCODE_OR_OCR = 'MrzOrBarcodeOrOcr',
    LOCATE_VISUAL_AND_MRZ_OR_OCR = 'LocateVisual_And_MrzOrOcr',
    FULL_PROCESS = 'FullProcess',
    FULL_AUTH = 'FullAuth',
    ID3RUS = 'Id3Rus',
    RUS_STAMP = 'RusStamp',
    OCR_FREE = 'OcrFree',
    CREDIT_CARD = 'CreditCard',
    CAPTURE = 'Capture'
}



