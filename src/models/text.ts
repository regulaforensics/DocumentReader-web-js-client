/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Regula Document Reader Web API
 *
 * The version of the OpenAPI document: 5.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AvailableSource } from './available-source';
import { CheckResult } from './check-result';
import { TextField } from './text-field';

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
     * 
     * @type {Array<TextField>}
     * @memberof Text
     */
    fieldList: Array<TextField>;
    /**
     * 
     * @type {Array<AvailableSource>}
     * @memberof Text
     */
    availableSourceList: Array<AvailableSource>;
}


