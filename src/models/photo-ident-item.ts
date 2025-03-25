/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.   # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 7.6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { ImageData } from './image-data';
// May contain unused imports in some cases
// @ts-ignore
import type { Light } from './light';
// May contain unused imports in some cases
// @ts-ignore
import type { RawImageContainerList } from './raw-image-container-list';
// May contain unused imports in some cases
// @ts-ignore
import type { RectangleCoordinates } from './rectangle-coordinates';

/**
 * 
 * @export
 * @interface PhotoIdentItem
 */
export interface PhotoIdentItem {
    /**
     * 
     * @type {Light}
     * @memberof PhotoIdentItem
     */
    'LightIndex': Light;
    /**
     * 
     * @type {RectangleCoordinates}
     * @memberof PhotoIdentItem
     */
    'Area': RectangleCoordinates;
    /**
     * 
     * @type {ImageData}
     * @memberof PhotoIdentItem
     */
    'SourceImage': ImageData;
    /**
     * 
     * @type {RawImageContainerList}
     * @memberof PhotoIdentItem
     */
    'ResultImages': RawImageContainerList;
    /**
     * 
     * @type {number}
     * @memberof PhotoIdentItem
     */
    'FieldTypesCount'?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof PhotoIdentItem
     */
    'FieldTypesList'?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof PhotoIdentItem
     */
    'Step'?: number;
    /**
     * 
     * @type {number}
     * @memberof PhotoIdentItem
     */
    'Angle'?: number;
    /**
     * 
     * @type {number}
     * @memberof PhotoIdentItem
     */
    'Reserved1'?: number;
    /**
     * 
     * @type {number}
     * @memberof PhotoIdentItem
     */
    'Reserved2'?: number;
    /**
     * 
     * @type {number}
     * @memberof PhotoIdentItem
     */
    'Reserved3'?: number;
}



