/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.   # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 7.4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Determines the presence and location of an RFID chip in a document. 0 - no rfid chip; 1 - chip is located in the document data page; 2 - chip is located in the back page or inlay of the document
 * @export
 * @enum {string}
 */
export enum RfidLocation {
    /**
    * There is no RFID chip in the document
    */
    NONE = 0,
    /**
    * The RFID chip is located in the document data page
    */
    MAIN_PAGE = 1,
    /**
    * The RFID chip is located in the back page or inlay of the document
    */
    BACK_PAGE = 2
}

