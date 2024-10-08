/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 7.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AreaArray } from './area-array';
import { CheckResult } from './check-result';
import { ImageQualityCheckType } from './image-quality-check-type';
import { SecurityFeatureType } from './security-feature-type';

/**
 * 
 * @export
 * @interface ImageQualityCheck
 */
export interface ImageQualityCheck {
    /**
     * 
     * @type {ImageQualityCheckType}
     * @memberof ImageQualityCheck
     */
    type?: ImageQualityCheckType;
    /**
     * 
     * @type {CheckResult}
     * @memberof ImageQualityCheck
     */
    result?: CheckResult;
    /**
     * 
     * @type {SecurityFeatureType}
     * @memberof ImageQualityCheck
     */
    featureType?: SecurityFeatureType;
    /**
     * 
     * @type {AreaArray}
     * @memberof ImageQualityCheck
     */
    areas?: AreaArray;
    /**
     * 
     * @type {number}
     * @memberof ImageQualityCheck
     */
    mean?: number;
    /**
     * 
     * @type {number}
     * @memberof ImageQualityCheck
     */
    std_dev?: number;
    /**
     * 
     * @type {number}
     * @memberof ImageQualityCheck
     */
    probability?: number;
}


