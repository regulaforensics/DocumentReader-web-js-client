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



/**
* Defining the geometric format of documents in accordance with ISO / IEC 7810
* @export
* @enum {string}
*/

export const DocumentFormat = {
    /**
    * Unknown document format
    */
    UNKNOWN: -1,
    /**
    * ID1 document format
    */
    ID1: 0,
    /**
    * ID2 document format
    */
    ID2: 1,
    /**
    * ID3 document format
    */
    ID3: 2,
    /**
    * Undefined document format
    */
    NON: 3,
    /**
    * A4 document format
    */
    A4: 4,
    /**
    * ID3 double document format
    */
    ID3_X2: 5,
    /**
    * ID1 format document rotated 90 °
    */
    ID1_90: 10,
    /**
    * ID1 format document rotated 180 °
    */
    ID1_180: 11,
    /**
    * ID1 format document rotated 270 °
    */
    ID1_270: 12,
    /**
    * ID2 format document rotated 90 °
    */
    ID2_180: 13,
    /**
    * ID3 format document rotated 180 °
    */
    ID3_180: 14,
    /**
    * Arbitrary format
    */
    CUSTOM: 1000,
    /**
    * Flexible format. Standard formats can be resized during cropping, depending on various factors: light, background...
    */
    FLEXIBLE: 1002
} as const;

export type DocumentFormat = typeof DocumentFormat[keyof typeof DocumentFormat];

