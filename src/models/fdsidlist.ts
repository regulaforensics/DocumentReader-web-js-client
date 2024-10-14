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


import type { DocumentFormat } from './document-format';
import type { DocumentType } from './document-type';

/**
* Extended document type info and Regula\'s \'Information Reference Systems\' links
* @export
* @interface FDSIDList
*/
export interface FDSIDList {
    /**
    * ICAO code of the issuing country
    * @type {string}
    * @memberof FDSIDList
    */
    ICAOCode: string;
    /**
    * Number of elements in the List
    * @type {number}
    * @memberof FDSIDList
    */
    Count: number;
    /**
    * Document identifiers in \'Information Reference Systems\'
    * @type {Array<number>}
    * @memberof FDSIDList
    */
    List: Array<number>;
    /**
    * 
    * @type {DocumentType}
    * @memberof FDSIDList
    */
    dType: DocumentType;
    /**
    * 
    * @type {DocumentFormat}
    * @memberof FDSIDList
    */
    dFormat: DocumentFormat;
    /**
    * Flag indicating the presence of MRZ on the document
    * @type {boolean}
    * @memberof FDSIDList
    */
    dMRZ: boolean;
    /**
    * Document description
    * @type {string}
    * @memberof FDSIDList
    */
    dDescription?: string;
    /**
    * Year of publication of the document
    * @type {string}
    * @memberof FDSIDList
    */
    dYear: string;
    /**
    * Issuing country name
    * @type {string}
    * @memberof FDSIDList
    */
    dCountryName: string;
    /**
    * Issuing state code
    * @type {string}
    * @memberof FDSIDList
    */
    dStateCode?: string;
    /**
    * Issuing state name
    * @type {string}
    * @memberof FDSIDList
    */
    dStateName?: string;
    /**
    * Whether the document is deprecated
    * @type {boolean}
    * @memberof FDSIDList
    */
    isDeprecated: boolean;
}
