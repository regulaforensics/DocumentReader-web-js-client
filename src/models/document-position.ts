/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 6.6.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DocumentFormat } from './document-format';
import { Point } from './point';

/**
 * 
 * @export
 * @interface DocumentPosition
 */
export interface DocumentPosition {
    /**
     * 
     * @type {DocumentFormat}
     * @memberof DocumentPosition
     */
    docFormat?: DocumentFormat;
    /**
     * 
     * @type {number}
     * @memberof DocumentPosition
     */
    Angle?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentPosition
     */
    Width?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentPosition
     */
    Height?: number;
    /**
     * 
     * @type {Point}
     * @memberof DocumentPosition
     */
    Center?: Point;
    /**
     * 
     * @type {Point}
     * @memberof DocumentPosition
     */
    LeftBottom?: Point;
    /**
     * 
     * @type {Point}
     * @memberof DocumentPosition
     */
    LeftTop?: Point;
    /**
     * 
     * @type {Point}
     * @memberof DocumentPosition
     */
    RightBottom?: Point;
    /**
     * 
     * @type {Point}
     * @memberof DocumentPosition
     */
    RightTop?: Point;
    /**
     * 
     * @type {number}
     * @memberof DocumentPosition
     */
    Dpi?: number;
}


