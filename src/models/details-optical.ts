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


import { CheckResult } from './check-result';

/**
 * 
 * @export
 * @interface DetailsOptical
 */
export interface DetailsOptical {
    /**
     * 
     * @type {CheckResult}
     * @memberof DetailsOptical
     */
    overallStatus: CheckResult;
    /**
     * 
     * @type {CheckResult}
     * @memberof DetailsOptical
     */
    docType: CheckResult;
    /**
     * 
     * @type {CheckResult}
     * @memberof DetailsOptical
     */
    expiry: CheckResult;
    /**
     * 
     * @type {CheckResult}
     * @memberof DetailsOptical
     */
    imageQA: CheckResult;
    /**
     * 
     * @type {CheckResult}
     * @memberof DetailsOptical
     */
    mrz: CheckResult;
    /**
     * Number of processed pages in the document
     * @type {number}
     * @memberof DetailsOptical
     */
    pagesCount: number;
    /**
     * 
     * @type {CheckResult}
     * @memberof DetailsOptical
     */
    security: CheckResult;
    /**
     * 
     * @type {CheckResult}
     * @memberof DetailsOptical
     */
    text: CheckResult;
}


