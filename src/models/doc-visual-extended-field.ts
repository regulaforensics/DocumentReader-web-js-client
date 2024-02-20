/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 7.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { LCID } from './lcid';
import { RectangleCoordinates } from './rectangle-coordinates';
import { StringRecognitionResult } from './string-recognition-result';
import { TextFieldType } from './text-field-type';

/**
 * 
 * @export
 * @interface DocVisualExtendedField
 */
export interface DocVisualExtendedField {
    /**
     * 
     * @type {TextFieldType}
     * @memberof DocVisualExtendedField
     */
    wFieldType: TextFieldType;
    /**
     * Field name. Only use to search values for fields with fieldType=50(other). In general, use wFieldType for lookup.
     * @type {string}
     * @memberof DocVisualExtendedField
     */
    FieldName: string;
    /**
     * 
     * @type {LCID}
     * @memberof DocVisualExtendedField
     */
    wLCID: LCID;
    /**
     * Array of recognizing probabilities for a each line of text field. Only for Result.VISUAL_TEXT and Result.MRZ_TEXT results.
     * @type {Array<StringRecognitionResult>}
     * @memberof DocVisualExtendedField
     */
    StringsResult?: Array<StringRecognitionResult>;
    /**
     * Text field data in UTF8 format. Results of reading different lines of a multi-line field are separated by \'^\'
     * @type {string}
     * @memberof DocVisualExtendedField
     */
    Buf_Text?: string;
    /**
     * 
     * @type {RectangleCoordinates}
     * @memberof DocVisualExtendedField
     */
    FieldRect?: RectangleCoordinates;
    /**
     * Origin data group information. Only for Result.RFID_TEXT results.
     * @type {number}
     * @memberof DocVisualExtendedField
     */
    RFID_OriginDG?: number;
    /**
     * Index of the text field record in origin data group. Only for Result.RFID_TEXT results.
     * @type {number}
     * @memberof DocVisualExtendedField
     */
    RFID_OriginTagEntry?: number;
}


