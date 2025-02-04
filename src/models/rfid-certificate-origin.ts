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



/**
 * Enumeration contains a set of constants that define the source of certificate used in the procedure of document security object digital signature verification
 * @export
 * @enum {number}
 */

export enum RfidCertificateOrigin {
    /**
    * The source is not defined
    */
    UNDEFINED = 0,
    /**
    * Local PKD
    */
    PKD = 1,
    /**
    * Document security object
    */
    SECURITY_OBJECT = 2,
    /**
    * User-defined
    */
    USER_DEFINED = 3,
    /**
    * Contents of the Master List
    */
    MASTER_LIST_PKD = 4,
    /**
    * Security object of the Master List
    */
    MASTER_LIST_SO = 5,
    /**
    * Security object of the Defect List
    */
    DEFECT_LIST_SO = 6,
    /**
    * Security object of the Deviation List
    */
    DEVIATION_LIST_SO = 7,
    /**
    * Security object of the Black List
    */
    BLACK_LIST_SO = 8
}



