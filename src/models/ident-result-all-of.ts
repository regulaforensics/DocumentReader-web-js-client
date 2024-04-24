/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 7.1.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AreaContainer } from './area-container';
import { ImageData } from './image-data';
import { Light } from './light';
import { RectangleCoordinates } from './rectangle-coordinates';
import { SecurityFeatureType } from './security-feature-type';

/**
 * 
 * @export
 * @interface IdentResultAllOf
 */
export interface IdentResultAllOf {
    /**
     * 
     * @type {SecurityFeatureType}
     * @memberof IdentResultAllOf
     */
    ElementType?: SecurityFeatureType;
    /**
     * 
     * @type {Light}
     * @memberof IdentResultAllOf
     */
    LightIndex?: Light;
    /**
     * 
     * @type {RectangleCoordinates}
     * @memberof IdentResultAllOf
     */
    Area?: RectangleCoordinates;
    /**
     * 
     * @type {ImageData}
     * @memberof IdentResultAllOf
     */
    Image?: ImageData;
    /**
     * 
     * @type {ImageData}
     * @memberof IdentResultAllOf
     */
    EtalonImage?: ImageData;
    /**
     * Probability percent for IMAGE_PATTERN check or element\'s visibility for IR_VISIBILITY
     * @type {number}
     * @memberof IdentResultAllOf
     */
    PercentValue?: number;
    /**
     * 
     * @type {AreaContainer}
     * @memberof IdentResultAllOf
     */
    AreaList?: AreaContainer;
}


