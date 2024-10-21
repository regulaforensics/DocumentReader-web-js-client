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
 * Enumeration contains a set of constants specifying the type of the RFIDchip from MIFARE® family (for chips of type A)
 * @export
 * @enum {string}
 */
export enum RfidAChip {
    /**
    * Unknown
    */
    UNKNOWN = 0,
    /**
    * MIFARE® 1K
    */
    MIFARE_1K = 1,
    /**
    * MIFARE® 4K
    */
    MIFARE_4K = 2,
    /**
    * MIFARE® Ultralight
    */
    MIFARE_ULTRALIGHT = 3,
    /**
    * MIFARE® DESFire
    */
    MIFARE_DES_FIRE = 4,
    /**
    * MIFARE® ProX or SmartMX xD(T)
    */
    MIFARE_PROX = 5
}

