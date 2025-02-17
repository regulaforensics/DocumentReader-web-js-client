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
import type { SymbolRecognitionResult } from './symbol-recognition-result';

/**
 * Describes single row recognition results in multi-line text field of a document
 * @export
 * @interface StringRecognitionResult
 */
export interface StringRecognitionResult {
    /**
     * Number of StringResult array elements
     * @type {number}
     * @memberof StringRecognitionResult
     */
    'SymbolsCount': number;
    /**
     * Array of recognition results for individual characters of a string
     * @type {Array<SymbolRecognitionResult>}
     * @memberof StringRecognitionResult
     */
    'StringResult': Array<SymbolRecognitionResult>;
    /**
     * Buf_Text text string length
     * @type {number}
     * @memberof StringRecognitionResult
     */
    'Buf_Length'?: number;
    /**
     * Text field data in UTF8 format. Results of reading different lines of a multi-line field are separated by \'^\'
     * @type {string}
     * @memberof StringRecognitionResult
     */
    'Buf_Text'?: string;
}

