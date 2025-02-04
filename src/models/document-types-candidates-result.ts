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
import type { DocumentTypesCandidatesList } from './document-types-candidates-list';

/**
 * 
 * @export
 * @interface DocumentTypesCandidatesResult
 */
export interface DocumentTypesCandidatesResult {
    /**
     * 
     * @type {DocumentTypesCandidatesList}
     * @memberof DocumentTypesCandidatesResult
     */
    'CandidatesList'?: DocumentTypesCandidatesList;
    /**
     * 
     * @type {number}
     * @memberof DocumentTypesCandidatesResult
     */
    'buf_length'?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentTypesCandidatesResult
     */
    'light'?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentTypesCandidatesResult
     */
    'list_idx'?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentTypesCandidatesResult
     */
    'page_idx'?: number;
    /**
     * Same as Result type, but used for safe parsing of not-described values. See Result type.
     * @type {number}
     * @memberof DocumentTypesCandidatesResult
     */
    'result_type': number;
}

