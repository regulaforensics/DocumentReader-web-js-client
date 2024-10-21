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
 * Enumeration contains a set of constants that define the type of application within the context of the communication session with electronic document
 * @export
 * @enum {string}
 */
export enum RfidApplicationType {
    /**
    * Not defined
    */
    UNSPECIFIED = 0,
    /**
    * ePassport application
    */
    E_PASSPORT = 1,
    /**
    * eID application
    */
    E_ID = 2,
    /**
    * eSign application
    */
    E_SIGN = 3,
    /**
    * eDL application
    */
    E_DL = 4,
    /**
    * Master File
    */
    ROOT_FILES = 0
}

