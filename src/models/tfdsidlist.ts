/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Regula Document Reader Web API
 *
 * The version of the OpenAPI document: 5.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DocumentFormat } from './document-format';
import { DocumentType } from './document-type';

/**
 * Extended document type info and Regula\'s \'Information Reference Systems\' links
 * @export
 * @interface TFDSIDList
 */
export interface TFDSIDList {
    /**
     * ICAO code of the issuing country
     * @type {string}
     * @memberof TFDSIDList
     */
    ICAO?: string;
    /**
     * Document identifiers in \'Information Reference Systems\'
     * @type {Array<number>}
     * @memberof TFDSIDList
     */
    List?: Array<number>;
    /**
     * 
     * @type {DocumentType}
     * @memberof TFDSIDList
     */
    dType?: DocumentType;
    /**
     * 
     * @type {DocumentFormat}
     * @memberof TFDSIDList
     */
    dFormat?: DocumentFormat;
    /**
     * Flag indicating the presence of MRZ on the document
     * @type {boolean}
     * @memberof TFDSIDList
     */
    dMRZ?: boolean;
    /**
     * Document description
     * @type {string}
     * @memberof TFDSIDList
     */
    dDescription?: string;
    /**
     * Year of publication of the document
     * @type {string}
     * @memberof TFDSIDList
     */
    dYear?: string;
    /**
     * Issuing country name
     * @type {string}
     * @memberof TFDSIDList
     */
    dCountryName?: string;
    /**
     * Issuing state code
     * @type {string}
     * @memberof TFDSIDList
     */
    dStateCode?: string;
    /**
     * Issuing state name
     * @type {string}
     * @memberof TFDSIDList
     */
    dStateName?: string;
}


