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
import type { RfidDataGroupTypeTag } from './rfid-data-group-type-tag';
// May contain unused imports in some cases
// @ts-ignore
import type { StringRecognitionResult } from './string-recognition-result';
// May contain unused imports in some cases
// @ts-ignore
import type { TextFieldType } from './text-field-type';

/**
 * Structure and serves for storing information from one text data field. Variant with field logical type and RFID data.
 * @export
 * @interface DocVisualExtendedFieldRfid
 */
export interface DocVisualExtendedFieldRfid {
    /**
     * 
     * @type {RfidDataGroupTypeTag}
     * @memberof DocVisualExtendedFieldRfid
     */
    'RFID_OriginDG': RfidDataGroupTypeTag;
    /**
     * 
     * @type {number}
     * @memberof DocVisualExtendedFieldRfid
     */
    'RFID_OriginDGTag'?: number;
    /**
     * Record index of the text field source in the data group
     * @type {number}
     * @memberof DocVisualExtendedFieldRfid
     */
    'RFID_OriginTagEntry': number;
    /**
     * 
     * @type {number}
     * @memberof DocVisualExtendedFieldRfid
     */
    'RFID_OriginEntryView'?: number;
    /**
     * 
     * @type {number}
     * @memberof DocVisualExtendedFieldRfid
     */
    'FieldType': number;
    /**
     * 
     * @type {TextFieldType}
     * @memberof DocVisualExtendedFieldRfid
     */
    'wFieldType': TextFieldType;
    /**
     * Field symbolic name (null-terminated string)
     * @type {string}
     * @memberof DocVisualExtendedFieldRfid
     */
    'FieldName': string;
    /**
     * Number of StringsResult array elements
     * @type {number}
     * @memberof DocVisualExtendedFieldRfid
     */
    'StringsCount': number;
    /**
     * Array of recognizing probabilities for a each line of text field. Only for Result.VISUAL_TEXT and Result.MRZ_TEXT results.
     * @type {Array<StringRecognitionResult>}
     * @memberof DocVisualExtendedFieldRfid
     */
    'StringsResult': Array<StringRecognitionResult>;
    /**
     * Buf_Text text string length
     * @type {number}
     * @memberof DocVisualExtendedFieldRfid
     */
    'Buf_Length': number;
    /**
     * Text field data in UTF8 format. Results of reading different lines of a multi-line field are separated by \'^\'
     * @type {string}
     * @memberof DocVisualExtendedFieldRfid
     */
    'Buf_Text': string;
    /**
     * 
     * @type {string}
     * @memberof DocVisualExtendedFieldRfid
     */
    'FieldMask'?: string;
    /**
     * 
     * @type {number}
     * @memberof DocVisualExtendedFieldRfid
     */
    'Validity'?: number;
    /**
     * 
     * @type {number}
     * @memberof DocVisualExtendedFieldRfid
     */
    'InComparison'?: number;
}



