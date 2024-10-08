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


import { Light } from './light';
import { RectangleCoordinates } from './rectangle-coordinates';

/**
 * 
 * @export
 * @interface FiberResultAllOf
 */
export interface FiberResultAllOf {
    /**
     * For UV_Fibers authenticity result type
     * @type {number}
     * @memberof FiberResultAllOf
     */
    RectCount?: number;
    /**
     * Expected fibers number. For UV_Fibers authentication result type
     * @type {number}
     * @memberof FiberResultAllOf
     */
    ExpectedCount?: number;
    /**
     * 
     * @type {Light}
     * @memberof FiberResultAllOf
     */
    LightValue?: Light;
    /**
     * For UV_Background authentication result type
     * @type {number}
     * @memberof FiberResultAllOf
     */
    LightDisp?: number;
    /**
     * Coordinates of located areas for defined fibers type
     * @type {Array<RectangleCoordinates>}
     * @memberof FiberResultAllOf
     */
    RectArray?: Array<RectangleCoordinates>;
    /**
     * Fibers width value for located areas (in pixels)
     * @type {Array<number>}
     * @memberof FiberResultAllOf
     */
    Width?: Array<number>;
    /**
     * Fibers length value for located areas (in pixels)
     * @type {Array<number>}
     * @memberof FiberResultAllOf
     */
    Length?: Array<number>;
    /**
     * Fibers value for areas (in pixels)
     * @type {Array<number>}
     * @memberof FiberResultAllOf
     */
    Area?: Array<number>;
    /**
     * Fibers color value
     * @type {Array<number>}
     * @memberof FiberResultAllOf
     */
    ColorValues?: Array<number>;
}


