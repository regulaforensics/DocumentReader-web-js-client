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


import type { CheckResult } from './check-result';
import type { TextAvailableSource } from './text-available-source';
import type { TextField } from './text-field';

/**
 * Contains all document text fields data with validity and cross-source compare checks
 * @export
 * @interface Text
 */
export interface Text {
    /**
     * 
     * @type {CheckResult}
     * @memberof Text
     */
    status: CheckResult;
    /**
     * 
     * @type {CheckResult}
     * @memberof Text
     */
    validityStatus: CheckResult;
    /**
     * 
     * @type {CheckResult}
     * @memberof Text
     */
    comparisonStatus: CheckResult;
    /**
     * Date format
     * @type {string}
     * @memberof Text
     */
    dateFormat: string;
    /**
     * 
     * @type {Array<TextField>}
     * @memberof Text
     */
    fieldList: Array<TextField>;
    /**
     * 
     * @type {Array<TextAvailableSource>}
     * @memberof Text
     */
    availableSourceList: Array<TextAvailableSource>;
}
