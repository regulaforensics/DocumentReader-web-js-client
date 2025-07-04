/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by OpenAPI Generator.
 * Do not edit the file manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { RFIDErrorCodes } from './rfiderror-codes';
// May contain unused imports in some cases
// @ts-ignore
import type { RfidApplicationType } from './rfid-application-type';
// May contain unused imports in some cases
// @ts-ignore
import type { RfidDataFile } from './rfid-data-file';

/**
 * Structure is used to describe the contents of a single LDS application and their analysis within the context of the communication session with electronic document
 * @export
 * @interface RfidApplication
 */
export interface RfidApplication {
    /**
     * 
     * @type {RfidApplicationType}
     * @memberof RfidApplication
     */
    'Type': RfidApplicationType;
    /**
     * 
     * @type {RFIDErrorCodes}
     * @memberof RfidApplication
     */
    'Status': RFIDErrorCodes;
    /**
     * Application identifier
     * @type {string}
     * @memberof RfidApplication
     */
    'ApplicationID': string;
    /**
     * Version of the application
     * @type {string}
     * @memberof RfidApplication
     */
    'Version': string;
    /**
     * Unicode version for application
     * @type {string}
     * @memberof RfidApplication
     */
    'UnicodeVersion': string;
    /**
     * Algorithm for calculating hash values for files for the procedure of PA
     * @type {string}
     * @memberof RfidApplication
     */
    'DataHashAlgorithm': string;
    /**
     * List of containers to store information about the read files of the application
     * @type {Array<RfidDataFile>}
     * @memberof RfidApplication
     */
    'Files': Array<RfidDataFile>;
}



