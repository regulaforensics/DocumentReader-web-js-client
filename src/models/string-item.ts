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
import type { ErrorCoordinates } from './error-coordinates';
// May contain unused imports in some cases
// @ts-ignore
import type { FieldItem } from './field-item';
// May contain unused imports in some cases
// @ts-ignore
import type { RectangleCoordinates } from './rectangle-coordinates';
// May contain unused imports in some cases
// @ts-ignore
import type { SymbolEstimationItem } from './symbol-estimation-item';

/**
 * 
 * @export
 * @interface StringItem
 */
export interface StringItem {
    /**
     * 
     * @type {number}
     * @memberof StringItem
     */
    'ALIGNMENT_SYMBOLS_IN_STRING': number;
    /**
     * 
     * @type {number}
     * @memberof StringItem
     */
    'CHECK_SUMS': number;
    /**
     * 
     * @type {ErrorCoordinates}
     * @memberof StringItem
     */
    'ErrorPOSITION': ErrorCoordinates;
    /**
     * 
     * @type {number}
     * @memberof StringItem
     */
    'FieldCount': number;
    /**
     * 
     * @type {Array<FieldItem>}
     * @memberof StringItem
     */
    'Fields': Array<FieldItem>;
    /**
     * 
     * @type {number}
     * @memberof StringItem
     */
    'STRINGS_DISTANCE': number;
    /**
     * 
     * @type {number}
     * @memberof StringItem
     */
    'STRINGS_INTERVAL': number;
    /**
     * 
     * @type {number}
     * @memberof StringItem
     */
    'STRING_FILLING': number;
    /**
     * 
     * @type {number}
     * @memberof StringItem
     */
    'STRING_POSITION': number;
    /**
     * 
     * @type {number}
     * @memberof StringItem
     */
    'SYMBOLS_PARAM': number;
    /**
     * 
     * @type {number}
     * @memberof StringItem
     */
    'SizeError_ALIGNMENT': number;
    /**
     * 
     * @type {number}
     * @memberof StringItem
     */
    'SizeError_DISTANCE': number;
    /**
     * 
     * @type {number}
     * @memberof StringItem
     */
    'SizeError_INTERVAL': number;
    /**
     * 
     * @type {number}
     * @memberof StringItem
     */
    'StringAngle': number;
    /**
     * 
     * @type {RectangleCoordinates}
     * @memberof StringItem
     */
    'StringBorders': RectangleCoordinates;
    /**
     * 
     * @type {number}
     * @memberof StringItem
     */
    'SymbolsCount': number;
    /**
     * 
     * @type {Array<SymbolEstimationItem>}
     * @memberof StringItem
     */
    'SymbolsEstimations': Array<SymbolEstimationItem>;
}

