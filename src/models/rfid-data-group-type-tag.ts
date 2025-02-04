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
 * Enumeration representing RFID Data Group Types. Constants with prefix  correspond to the informational data groups of ePassport application, with prefix EID_ – those of eID application, with prefix EDL_ – eDL application
 * @export
 * @enum {number}
 */

export enum RfidDataGroupTypeTag {
    /**
    * Common Data Group Type
    */
    COM = 96,
    /**
    * Data Group 1
    */
    DG1 = 97,
    /**
    * Data Group 2
    */
    DG2 = 117,
    /**
    * Data Group 3
    */
    DG3 = 99,
    /**
    * Data Group 4
    */
    DG4 = 118,
    /**
    * Data Group 5
    */
    DG5 = 101,
    /**
    * Data Group 6
    */
    DG6 = 102,
    /**
    * Data Group 7
    */
    DG7 = 103,
    /**
    * Data Group 8
    */
    DG8 = 104,
    /**
    * Data Group 9
    */
    DG9 = 105,
    /**
    * Data Group 10
    */
    DG10 = 106,
    /**
    * Data Group 11
    */
    DG11 = 107,
    /**
    * Data Group 12
    */
    DG12 = 108,
    /**
    * Data Group 13
    */
    DG13 = 109,
    /**
    * Data Group 14
    */
    DG14 = 110,
    /**
    * Data Group 15
    */
    DG15 = 111,
    /**
    * Data Group 16
    */
    DG16 = 112,
    /**
    * Start of Data
    */
    SOD = 119,
    /**
    * Extended Interoperable Data, Data Group 1
    */
    EID_DG1 = 97,
    /**
    * Extended Interoperable Data, Data Group 2
    */
    EID_DG2 = 98,
    /**
    * Extended Interoperable Data, Data Group 3
    */
    EID_DG3 = 99,
    /**
    * Extended Interoperable Data, Data Group 4
    */
    EID_DG4 = 100,
    /**
    * Extended Interoperable Data, Data Group 5
    */
    EID_DG5 = 101,
    /**
    * Extended Interoperable Data, Data Group 6
    */
    EID_DG6 = 102,
    /**
    * Extended Interoperable Data, Data Group 7
    */
    EID_DG7 = 103,
    /**
    * Extended Interoperable Data, Data Group 8
    */
    EID_DG8 = 104,
    /**
    * Extended Interoperable Data, Data Group 9
    */
    EID_DG9 = 105,
    /**
    * Extended Interoperable Data, Data Group 10
    */
    EID_DG10 = 106,
    /**
    * Extended Interoperable Data, Data Group 11
    */
    EID_DG11 = 107,
    /**
    * Extended Interoperable Data, Data Group 12
    */
    EID_DG12 = 108,
    /**
    * Extended Interoperable Data, Data Group 13
    */
    EID_DG13 = 109,
    /**
    * Extended Interoperable Data, Data Group 14
    */
    EID_DG14 = 110,
    /**
    * Extended Interoperable Data, Data Group 15
    */
    EID_DG15 = 111,
    /**
    * Extended Interoperable Data, Data Group 16
    */
    EID_DG16 = 112,
    /**
    * Extended Interoperable Data, Data Group 17
    */
    EID_DG17 = 113,
    /**
    * Extended Interoperable Data, Data Group 18
    */
    EID_DG18 = 114,
    /**
    * Extended Interoperable Data, Data Group 19
    */
    EID_DG19 = 115,
    /**
    * Extended Interoperable Data, Data Group 20
    */
    EID_DG20 = 116,
    /**
    * Extended Interoperable Data, Data Group 21
    */
    EID_DG21 = 117,
    /**
    * Extended Length Data, Common Data Group Type
    */
    EDL_COM = 96,
    /**
    * Extended Length Data, Start of Data
    */
    EDL_SOD = 119,
    /**
    * Extended Length Data, Certificate Holder Authorization
    */
    EDL_CE = 119,
    /**
    * Extended Length Data, Data Group 1
    */
    EDL_DG1 = 97,
    /**
    * Extended Length Data, Data Group 2
    */
    EDL_DG2 = 107,
    /**
    * Extended Length Data, Data Group 3
    */
    EDL_DG3 = 108,
    /**
    * Extended Length Data, Data Group 4
    */
    EDL_DG4 = 101,
    /**
    * Extended Length Data, Data Group 5
    */
    EDL_DG5 = 103,
    /**
    * Extended Length Data, Data Group 6
    */
    EDL_DG6 = 117,
    /**
    * Extended Length Data, Data Group 7
    */
    EDL_DG7 = 99,
    /**
    * Extended Length Data, Data Group 8
    */
    EDL_DG8 = 118,
    /**
    * Extended Length Data, Data Group 9
    */
    EDL_DG9 = 112,
    /**
    * Extended Length Data, Data Group 11
    */
    EDL_DG11 = 109,
    /**
    * Extended Length Data, Data Group 12
    */
    EDL_DG12 = 113,
    /**
    * Extended Length Data, Data Group 13
    */
    EDL_DG14 = 111,
    /**
    * Extended Length Data, Data Group 14
    */
    NUMBER_1103 = 110
}



