/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.   # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 7.6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { DocumentFormat } from './document-format';
// May contain unused imports in some cases
// @ts-ignore
import type { RfidDataGroupTypeTag } from './rfid-data-group-type-tag';

/**
 * Structure used to store the contents of EF.DG1 informational data group of ePassport application – document MRZ data
 * @export
 * @interface RfidDG1
 */
export interface RfidDG1 {
    /**
     * 
     * @type {RfidDataGroupTypeTag}
     * @memberof RfidDG1
     */
    'Type': RfidDataGroupTypeTag;
    /**
     * 
     * @type {DocumentFormat}
     * @memberof RfidDG1
     */
    'DocumentID': DocumentFormat;
    /**
     * Symbolic code of document type
     * @type {string}
     * @memberof RfidDG1
     */
    'DocumentType': string;
    /**
     * Symbolic code of document issuing state
     * @type {string}
     * @memberof RfidDG1
     */
    'State': string;
    /**
     * DO’s name and surname
     * @type {string}
     * @memberof RfidDG1
     */
    'Holder': string;
    /**
     * Document number
     * @type {string}
     * @memberof RfidDG1
     */
    'DocumentNumber': string;
    /**
     * Check digit of document number
     * @type {number}
     * @memberof RfidDG1
     */
    'CheckDigitDocumentNumber': number;
    /**
     * Symbolic code of DO’s nationality
     * @type {string}
     * @memberof RfidDG1
     */
    'Nationality': string;
    /**
     * DO’s date of birth
     * @type {string}
     * @memberof RfidDG1
     */
    'Birthday': string;
    /**
     * Check digit of DO’s date of birth
     * @type {number}
     * @memberof RfidDG1
     */
    'CheckDigitBirthday': number;
    /**
     * DO’s sex
     * @type {string}
     * @memberof RfidDG1
     */
    'Sex': string;
    /**
     * Term of validity of the document
     * @type {string}
     * @memberof RfidDG1
     */
    'ExpiryDate': string;
    /**
     * Check digit of term of validity of the document
     * @type {number}
     * @memberof RfidDG1
     */
    'CheckDigitExpiryDate': number;
    /**
     * DO’s personal number or other additional data
     * @type {string}
     * @memberof RfidDG1
     */
    'OptionalData': string;
    /**
     * Check digit of additional data
     * @type {number}
     * @memberof RfidDG1
     */
    'CheckDigitOptionalData': number;
    /**
     * General check digit
     * @type {number}
     * @memberof RfidDG1
     */
    'CheckDigitComposite': number;
}



