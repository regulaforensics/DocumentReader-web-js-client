/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 6.6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Location of data in RFID chip
 * @export
 * @interface RfidOrigin
 */
export interface RfidOrigin {
    /**
     * Source data group file
     * @type {number}
     * @memberof RfidOrigin
     */
    dg: number;
    /**
     * Index of the source record of the image with biometric information in the information data group
     * @type {number}
     * @memberof RfidOrigin
     */
    dgTag?: number;
    /**
     * Index of the template in the record with biometric data
     * @type {number}
     * @memberof RfidOrigin
     */
    tagEntry?: number;
    /**
     * Index of the variant of the biometric data template
     * @type {number}
     * @memberof RfidOrigin
     */
    entryView?: number;
}


