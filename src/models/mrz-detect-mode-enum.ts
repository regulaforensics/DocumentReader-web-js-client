/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 7.4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
* Make better MRZ detection on complex noisy backgrounds, like BW photocopy of some documents.
* @export
* @enum {string}
*/

export const MrzDetectModeEnum = {
    eMDM_Default: 0,
    eMDM_ResizeBinarizeWindow: 1,
    eMDM_BlurBeforeBinarization: 2
} as const;

export type MrzDetectModeEnum = typeof MrzDetectModeEnum[keyof typeof MrzDetectModeEnum];

