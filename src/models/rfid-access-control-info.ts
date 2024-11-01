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


import type { ParsingErrorCodes } from './parsing-error-codes';
import type { RFIDErrorCodes } from './rfiderror-codes';
import type { RfidAccessControlProcedureType } from './rfid-access-control-procedure-type';

/**
 * Structure is used to describe the results of a single authentication procedure or a procedure of secure data access within the context of the communication session with electronic document
 * @export
 * @interface RfidAccessControlInfo
 */
export interface RfidAccessControlInfo {
    /**
     * 
     * @type {RfidAccessControlProcedureType}
     * @memberof RfidAccessControlInfo
     */
    Type: RfidAccessControlProcedureType;
    /**
     * 
     * @type {RFIDErrorCodes}
     * @memberof RfidAccessControlInfo
     */
    Status: RFIDErrorCodes;
    /**
     * Index of the active variant of the procedure
     * @type {number}
     * @memberof RfidAccessControlInfo
     */
    ActiveOptionIdx?: number;
    /**
     * List of remarks arisen during the procedure.
     * @type {Array<ParsingErrorCodes>}
     * @memberof RfidAccessControlInfo
     */
    Notifications: Array<ParsingErrorCodes>;
    /**
     * List of structures with are used to describe the variants of the authentication or secure data access procedure performance within the context of the communication session with electronic document
     * @type {Array<any>}
     * @memberof RfidAccessControlInfo
     */
    AccessControlOptions?: Array<any>;
}
