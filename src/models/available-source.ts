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


import { CheckResult } from './check-result';
import { Source } from './source';

/**
 * 
 * @export
 * @interface AvailableSource
 */
export interface AvailableSource {
    /**
     * 
     * @type {Source}
     * @memberof AvailableSource
     */
    source: Source;
    /**
     * 
     * @type {CheckResult}
     * @memberof AvailableSource
     */
    validityStatus: CheckResult;
}


