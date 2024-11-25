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


import { CheckResult } from './check-result';
import { OriginalSymbol } from './original-symbol';
import { RectangleCoordinates } from './rectangle-coordinates';
import { RfidOrigin } from './rfid-origin';
import { Source } from './source';

/**
 * 
 * @export
 * @interface TextFieldValue
 */
export interface TextFieldValue {
    /**
     * 
     * @type {Source}
     * @memberof TextFieldValue
     */
    source: Source;
    /**
     * Parsed/processed value. Date format converted for output, delimiters removed
     * @type {string}
     * @memberof TextFieldValue
     */
    value: string;
    /**
     * Original value as seen in the document
     * @type {string}
     * @memberof TextFieldValue
     */
    originalValue?: string;
    /**
     * 
     * @type {CheckResult}
     * @memberof TextFieldValue
     */
    originalValidity: CheckResult;
    /**
     * 
     * @type {Array<OriginalSymbol>}
     * @memberof TextFieldValue
     */
    originalSymbols?: Array<OriginalSymbol>;
    /**
     * Page index of the image from input list
     * @type {number}
     * @memberof TextFieldValue
     */
    pageIndex: number;
    /**
     * Min recognition probability. Combined minimum probability from single characters probabilities
     * @type {number}
     * @memberof TextFieldValue
     */
    probability: number;
    /**
     * 
     * @type {RectangleCoordinates}
     * @memberof TextFieldValue
     */
    fieldRect?: RectangleCoordinates;
    /**
     * 
     * @type {RfidOrigin}
     * @memberof TextFieldValue
     */
    rfidOrigin?: RfidOrigin;
}


