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


import type { AreaContainer } from './area-container';
import type { Critical } from './critical';
import type { RectangleCoordinates } from './rectangle-coordinates';
import type { SecurityFeatureType } from './security-feature-type';
import type { Visibility } from './visibility';

/**
 * 
 * @export
 * @interface SecurityFeatureResultAllOf
 */
export interface SecurityFeatureResultAllOf {
    /**
     * 
     * @type {SecurityFeatureType}
     * @memberof SecurityFeatureResultAllOf
     */
    ElementType: SecurityFeatureType;
    /**
     * 
     * @type {RectangleCoordinates}
     * @memberof SecurityFeatureResultAllOf
     */
    ElementRect: RectangleCoordinates;
    /**
     * 
     * @type {Visibility}
     * @memberof SecurityFeatureResultAllOf
     */
    Visibility: Visibility;
    /**
     * 
     * @type {Critical}
     * @memberof SecurityFeatureResultAllOf
     */
    CriticalFlag: Critical;
    /**
     * 
     * @type {AreaContainer}
     * @memberof SecurityFeatureResultAllOf
     */
    AreaList?: AreaContainer;
    /**
     * 
     * @type {number}
     * @memberof SecurityFeatureResultAllOf
     */
    Reserved2?: number;
}
