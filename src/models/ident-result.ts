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
import type { AreaContainer } from './area-container';
// May contain unused imports in some cases
// @ts-ignore
import type { CheckDiagnose } from './check-diagnose';
// May contain unused imports in some cases
// @ts-ignore
import type { CheckResult } from './check-result';
// May contain unused imports in some cases
// @ts-ignore
import type { ImageData } from './image-data';
// May contain unused imports in some cases
// @ts-ignore
import type { Light } from './light';
// May contain unused imports in some cases
// @ts-ignore
import type { RectangleCoordinates } from './rectangle-coordinates';
// May contain unused imports in some cases
// @ts-ignore
import type { SecurityFeatureType } from './security-feature-type';

/**
 * 
 * @export
 * @interface IdentResult
 */
export interface IdentResult {
    /**
     * Same as authenticity result type, but used for safe parsing of not-described values: https://docs.regulaforensics.com/develop/doc-reader-sdk/web-service/development/enums/authenticity-result-type/
     * @type {number}
     * @memberof IdentResult
     */
    'Type': number;
    /**
     * 
     * @type {CheckResult}
     * @memberof IdentResult
     */
    'ElementResult'?: CheckResult;
    /**
     * 
     * @type {CheckDiagnose}
     * @memberof IdentResult
     */
    'ElementDiagnose'?: CheckDiagnose;
    /**
     * 
     * @type {number}
     * @memberof IdentResult
     */
    'PercentValue'?: number;
    /**
     * 
     * @type {SecurityFeatureType}
     * @memberof IdentResult
     */
    'ElementType': SecurityFeatureType;
    /**
     * 
     * @type {Light}
     * @memberof IdentResult
     */
    'LightIndex': Light;
    /**
     * 
     * @type {RectangleCoordinates}
     * @memberof IdentResult
     */
    'Area'?: RectangleCoordinates;
    /**
     * 
     * @type {ImageData}
     * @memberof IdentResult
     */
    'Image': ImageData;
    /**
     * 
     * @type {ImageData}
     * @memberof IdentResult
     */
    'EtalonImage': ImageData;
    /**
     * 
     * @type {AreaContainer}
     * @memberof IdentResult
     */
    'AreaList'?: AreaContainer;
}



