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


import type { DocumentsDatabase } from './documents-database';

/**
* 
* @export
* @interface TransactionInfo
*/
export interface TransactionInfo {
    /**
    * 
    * @type {string}
    * @memberof TransactionInfo
    */
    ComputerName?: string;
    /**
    * 
    * @type {string}
    * @memberof TransactionInfo
    */
    DateTime?: string;
    /**
    * 
    * @type {DocumentsDatabase}
    * @memberof TransactionInfo
    */
    DocumentsDatabase?: DocumentsDatabase;
    /**
    * 
    * @type {string}
    * @memberof TransactionInfo
    */
    SystemInfo?: string;
    /**
    * 
    * @type {string}
    * @memberof TransactionInfo
    */
    Tag?: string;
    /**
    * 
    * @type {string}
    * @memberof TransactionInfo
    */
    TransactionID?: string;
    /**
    * 
    * @type {string}
    * @memberof TransactionInfo
    */
    UserName?: string;
    /**
    * 
    * @type {string}
    * @memberof TransactionInfo
    */
    Version?: string;
}
