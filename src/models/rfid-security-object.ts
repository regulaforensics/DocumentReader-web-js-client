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


import type { ParsingErrorCodes } from './parsing-error-codes';
import type { RfidSignerInfoEx } from './rfid-signer-info-ex';

/**
* Structure is used to describe the contents of a single document security object (SO) and the results of its check within the context of the communication session with electronic document
* @export
* @interface RfidSecurityObject
*/
export interface RfidSecurityObject {
    /**
    * Security object version
    * @type {number}
    * @memberof RfidSecurityObject
    */
    Version: number;
    /**
    * Identifier of the security object
    * @type {string}
    * @memberof RfidSecurityObject
    */
    ObjectType: string;
    /**
    * Reference to the source file of the security object data
    * @type {number}
    * @memberof RfidSecurityObject
    */
    FileReference: number;
    /**
    * List of remarks arisen during the analysis of SO data structure.
    * @type {Array<ParsingErrorCodes>}
    * @memberof RfidSecurityObject
    */
    Notifications: Array<ParsingErrorCodes>;
    /**
    * List of containers to store information about digital signature objects contained in the SO
    * @type {Array<RfidSignerInfoEx>}
    * @memberof RfidSecurityObject
    */
    SignerInfos: Array<RfidSignerInfoEx>;
}
