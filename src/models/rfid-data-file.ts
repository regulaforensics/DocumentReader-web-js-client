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


// May contain unused imports in some cases
// @ts-ignore
import type { GraphicFieldType } from './graphic-field-type';
// May contain unused imports in some cases
// @ts-ignore
import type { ParsedData } from './parsed-data';
// May contain unused imports in some cases
// @ts-ignore
import type { ParsingNotificationCodes } from './parsing-notification-codes';
// May contain unused imports in some cases
// @ts-ignore
import type { RFIDErrorCodes } from './rfiderror-codes';
// May contain unused imports in some cases
// @ts-ignore
import type { RfidDataFileType } from './rfid-data-file-type';
// May contain unused imports in some cases
// @ts-ignore
import type { SecurityObjectCertificates } from './security-object-certificates';
// May contain unused imports in some cases
// @ts-ignore
import type { TextFieldType } from './text-field-type';
// May contain unused imports in some cases
// @ts-ignore
import type { TrfFtBytes } from './trf-ft-bytes';

/**
 * Structure is used to describe the contents of a single file of the LDS of electronic document and the analysis of its contents within the context of the communication session with electronic document
 * @export
 * @interface RfidDataFile
 */
export interface RfidDataFile {
    /**
     * File identifier. Each byte of FileID represented by its hexadecimal value. The individual bytes are separated by spaces (e.g. 01 1E)
     * @type {string}
     * @memberof RfidDataFile
     */
    'FileID'?: string;
    /**
     * 
     * @type {RfidDataFileType}
     * @memberof RfidDataFile
     */
    'Type': RfidDataFileType;
    /**
     * 
     * @type {TrfFtBytes}
     * @memberof RfidDataFile
     */
    'FileData'?: TrfFtBytes;
    /**
     * 
     * @type {RFIDErrorCodes}
     * @memberof RfidDataFile
     */
    'ReadingStatus': RFIDErrorCodes;
    /**
     * Time of reading, milliseconds
     * @type {number}
     * @memberof RfidDataFile
     */
    'ReadingTime'?: number;
    /**
     * 
     * @type {RFIDErrorCodes}
     * @memberof RfidDataFile
     */
    'PA_Status'?: RFIDErrorCodes;
    /**
     * List of remarks arisen when reading data from the memory of the chip and analysing their ASN.1-structure.
     * @type {Array<ParsingNotificationCodes>}
     * @memberof RfidDataFile
     */
    'Notifications'?: Array<ParsingNotificationCodes>;
    /**
     * List of document text fields formed on the basis of the file contents
     * @type {Array<TextFieldType>}
     * @memberof RfidDataFile
     */
    'DocFields_Text'?: Array<TextFieldType>;
    /**
     * List of document graphic fields formed on the basis of the file contents
     * @type {Array<GraphicFieldType>}
     * @memberof RfidDataFile
     */
    'DocFields_Graphics'?: Array<GraphicFieldType>;
    /**
     * List of the original binary representation of graphic document fields formed on the basis of the file contents
     * @type {Array<GraphicFieldType>}
     * @memberof RfidDataFile
     */
    'DocFields_Originals'?: Array<GraphicFieldType>;
    /**
     * 
     * @type {ParsedData}
     * @memberof RfidDataFile
     */
    'ParsedData'?: ParsedData;
    /**
     * 
     * @type {SecurityObjectCertificates}
     * @memberof RfidDataFile
     */
    'SecurityObject_Certificates'?: SecurityObjectCertificates;
}



