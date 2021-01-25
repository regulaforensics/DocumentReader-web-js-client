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


import { LCID } from './lcid';
import { TextFieldType } from './text-field-type';
import { VerificationResult } from './verification-result';

/**
 * 
 * @export
 * @interface VerifiedFieldMap
 */
export interface VerifiedFieldMap {
    /**
     * 
     * @type {TextFieldType}
     * @memberof VerifiedFieldMap
     */
    wFieldType?: TextFieldType;
    /**
     * 
     * @type {LCID}
     * @memberof VerifiedFieldMap
     */
    wLCID?: LCID;
    /**
     * Field data extracted from mrz(machine readable zone)
     * @type {string}
     * @memberof VerifiedFieldMap
     */
    Field_MRZ?: string;
    /**
     * Field data extracted from visual zone
     * @type {string}
     * @memberof VerifiedFieldMap
     */
    Field_Visual?: string;
    /**
     * Field data extracted from barcode
     * @type {string}
     * @memberof VerifiedFieldMap
     */
    Field_Barcode?: string;
    /**
     * Field data extracted from rfid chip
     * @type {string}
     * @memberof VerifiedFieldMap
     */
    Field_RFID?: string;
    /**
     * results comparison matrix. Elements of the matrix with indices 0, 1, 2, 3 take one of the values Disabled(0), Verified(1) or Not_Verified(2), elements with indices 4, 5, 6, 7, 8 are one of the values Disabled(0), Compare_Match(3) or Compare_Not_Match(4). Elements of the Matrix matrix have the following semantic meaning: - element with index 0 –– the result of verification of data from the MRZ; - 1 –– the result of verification of data from the RFID microcircuit; - 2 –– the result of verification of data from text areas of the document; - 3 –– the result of verification data from barcodes; - 4 - the result of comparing MRZ data and RFID microcircuits; - 5 - the result of comparing MRZ data and text areas of document filling; - 6 - the result of comparing MRZ data and bar codes; - 7 - the result of comparing the data of text areas of the document and the RFID chip; - 8 - the result of comparing the data of the text areas of the document and barcodes; - 9 - the result of comparing the data of the RFID chip and barcodes.
     * @type {Array<VerificationResult>}
     * @memberof VerifiedFieldMap
     */
    Matrix?: Array<VerificationResult>;
}


