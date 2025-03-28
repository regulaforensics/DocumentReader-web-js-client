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
import type { DetailsRFID } from './details-rfid';
// May contain unused imports in some cases
// @ts-ignore
import type { RfidDG1 } from './rfid-dg1';
// May contain unused imports in some cases
// @ts-ignore
import type { RfidDataFileType } from './rfid-data-file-type';
// May contain unused imports in some cases
// @ts-ignore
import type { RfidSessionData } from './rfid-session-data';

/**
 * Structure is used for storing the results of one bar-code module reading.
 * @export
 * @interface BinaryData
 */
export interface BinaryData {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'RFID_Authentication_Info'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'RFID_MIFARE_Data_Validity'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'RFID_MIFARE_Data'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'RFID_EF_COM'?: { [key: string]: any; };
    /**
     * 
     * @type {RfidDG1}
     * @memberof BinaryData
     */
    'RFID_DG1'?: RfidDG1;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'RFID_DG2'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'RFID_DG3'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'RFID_DG4'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'RFID_DG5'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'RFID_DG6'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'RFID_DG7'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'RFID_DG8'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'RFID_DG9'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'RFID_DG10'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'RFID_DG11'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'RFID_DG12'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'RFID_DG13'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'RFID_DG14'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'RFID_DG15'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'RFID_DG16'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'RFID_EF_SOD'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eID_DG1'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eID_DG2'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eID_DG3'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eID_DG4'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eID_DG5'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eID_DG6'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eID_DG7'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eID_DG8'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eID_DG9'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eID_DG10'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eID_DG11'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eID_DG12'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eID_DG13'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eID_DG14'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eID_DG15'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eID_DG16'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eID_DG17'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eID_DG18'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eID_DG19'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eID_DG20'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eID_DG21'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eDL_COM'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eDL_SOD'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eDL_DG1'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eDL_DG2'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eDL_DG3'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eDL_DG4'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eDL_DG5'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eDL_DG6'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eDL_DG7'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eDL_DG8'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eDL_DG9'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eDL_DG10'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eDL_DG11'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eDL_DG12'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eDL_DG13'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'eDL_DG14'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'Visible_Digital_Seal'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'Visible_Digital_Seal_NC'?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BinaryData
     */
    'Digital_Signature'?: { [key: string]: any; };
    /**
     * 
     * @type {RfidSessionData}
     * @memberof BinaryData
     */
    'RFID_Session_Data'?: RfidSessionData;
    /**
     * 
     * @type {DetailsRFID}
     * @memberof BinaryData
     */
    'RFID_Session_Data_Status'?: DetailsRFID;
    /**
     * Indexes of groups that aren\'t read
     * @type {Array<RfidDataFileType>}
     * @memberof BinaryData
     */
    'RFID_ePassp_Directory'?: Array<RfidDataFileType>;
}

