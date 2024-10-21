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


import type { GraphicFieldType } from './graphic-field-type';
import type { TextFieldType } from './text-field-type';

/**
 * Structure is used to store an array of binary information that is a part of one of the informational data groups
 * @export
 * @interface TrfFtBytes
 */
export interface TrfFtBytes {
    /**
     * Logical type of the field
     * @type {GraphicFieldType | TextFieldType}
     * @memberof TrfFtBytes
     */
    Type: GraphicFieldType | TextFieldType;
    /**
     * Result of logical analysis of compliance of the contents of the field with the requirements of the specification
     * @type {number}
     * @memberof TrfFtBytes
     */
    Status: number;
    /**
     * Length of Data array
     * @type {number}
     * @memberof TrfFtBytes
     */
    Length: number;
    /**
     * Binary data array. Base64 encoded.
     * @type {string}
     * @memberof TrfFtBytes
     */
    Data: string;
}
