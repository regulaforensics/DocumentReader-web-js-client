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
import type { RfidAChip } from './rfid-achip';
// May contain unused imports in some cases
// @ts-ignore
import type { RfidBaudRate } from './rfid-baud-rate';
// May contain unused imports in some cases
// @ts-ignore
import type { RfidType } from './rfid-type';

/**
 * Structure is used to store extended information about the characteristics of the RFID-chip located in the scope of the reader
 * @export
 * @interface RfidCardPropertiesExt
 */
export interface RfidCardPropertiesExt {
    /**
     * 
     * @type {RfidType}
     * @memberof RfidCardPropertiesExt
     */
    'RFID_Type': RfidType;
    /**
     * Numeric Baudrate1 value in hexadecimal format (e.g. 0x0000000F)
     * @type {string}
     * @memberof RfidCardPropertiesExt
     */
    'Baudrate1': string;
    /**
     * Numeric Baudrate2 value in hexadecimal format
     * @type {string}
     * @memberof RfidCardPropertiesExt
     */
    'Baudrate2': string;
    /**
     * Boolean Support_4 value
     * @type {boolean}
     * @memberof RfidCardPropertiesExt
     */
    'Support_4': boolean;
    /**
     * 
     * @type {RfidAChip}
     * @memberof RfidCardPropertiesExt
     */
    'ChipType_A': RfidAChip;
    /**
     * Sign of support for ISO/IEC 14443-3 data exchange protocol
     * @type {boolean}
     * @memberof RfidCardPropertiesExt
     */
    'Support_Mifare': boolean;
    /**
     * Amount of operational memory MIFARE® of the chip, kilobytes
     * @type {number}
     * @memberof RfidCardPropertiesExt
     */
    'MifareMemory': number;
    /**
     * UID contents in text format. Each byte is represented by its hexadecimal value. The individual bytes are separated by spaces (e.g. F9 4F 41 60)
     * @type {string}
     * @memberof RfidCardPropertiesExt
     */
    'UID': string;
    /**
     * Reply of the «A» type chip to «REQA» command of ISO/IEC 14443-3 protocol (Answer To Request, Type A – ATQA) – for the internal use by the main control library
     * @type {any}
     * @memberof RfidCardPropertiesExt
     */
    'ATQ_A': any;
    /**
     * Response of type-A RFID-chip to SELECT command of ISO/IEC 14443-3 protocol (Select Acknowledge, SAK).
     * @type {any}
     * @memberof RfidCardPropertiesExt
     */
    'SAK': any;
    /**
     * ATQ_B contents in text format. Each byte is represented by its hexadecimal value. The individual bytes are separated by spaces (e.g. 50 F9 4F 41 60 00 00 00 00 77 81 81)
     * @type {any}
     * @memberof RfidCardPropertiesExt
     */
    'ATQ_B': any;
    /**
     * 
     * @type {RfidBaudRate}
     * @memberof RfidCardPropertiesExt
     */
    'BitRateS': RfidBaudRate;
    /**
     * 
     * @type {RfidBaudRate}
     * @memberof RfidCardPropertiesExt
     */
    'BitRateR': RfidBaudRate;
    /**
     * ATR-string of RFID-chip
     * @type {string}
     * @memberof RfidCardPropertiesExt
     */
    'ATR': string;
}



