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
import type { ParsingNotificationCodes } from './parsing-notification-codes';
// May contain unused imports in some cases
// @ts-ignore
import type { RFIDErrorCodes } from './rfiderror-codes';
// May contain unused imports in some cases
// @ts-ignore
import type { RfidAttributeData } from './rfid-attribute-data';
// May contain unused imports in some cases
// @ts-ignore
import type { RfidCertificateEx } from './rfid-certificate-ex';
// May contain unused imports in some cases
// @ts-ignore
import type { RfidDistinguishedName } from './rfid-distinguished-name';
// May contain unused imports in some cases
// @ts-ignore
import type { TrfFtBytes } from './trf-ft-bytes';

/**
 * Structure is used to describe the contents of a single copy of digital signature of the document security object and the results of its check within the context of the communication session with electronic document
 * @export
 * @interface RfidSignerInfoEx
 */
export interface RfidSignerInfoEx {
    /**
     * Version of SignerInfo ASN.1 structure
     * @type {number}
     * @memberof RfidSignerInfoEx
     */
    'Version': number;
    /**
     * 
     * @type {RfidDistinguishedName}
     * @memberof RfidSignerInfoEx
     */
    'Issuer': RfidDistinguishedName;
    /**
     * 
     * @type {TrfFtBytes}
     * @memberof RfidSignerInfoEx
     */
    'SerialNumber': TrfFtBytes;
    /**
     * 
     * @type {TrfFtBytes}
     * @memberof RfidSignerInfoEx
     */
    'SubjectKeyIdentifier': TrfFtBytes;
    /**
     * Hash algorithm identifier (OID) for digital signature generation
     * @type {string}
     * @memberof RfidSignerInfoEx
     */
    'DigestAlgorithm': string;
    /**
     * List of the signed attributes
     * @type {Array<RfidAttributeData>}
     * @memberof RfidSignerInfoEx
     */
    'SignedAttributes': Array<RfidAttributeData>;
    /**
     * Digital signature algorithm identifier (OID)
     * @type {string}
     * @memberof RfidSignerInfoEx
     */
    'SignatureAlgorithm': string;
    /**
     * 
     * @type {TrfFtBytes}
     * @memberof RfidSignerInfoEx
     */
    'Signature': TrfFtBytes;
    /**
     * 
     * @type {RFIDErrorCodes}
     * @memberof RfidSignerInfoEx
     */
    'PA_Status': RFIDErrorCodes;
    /**
     * Certificate chain, used for the digital signature verification.
     * @type {Array<RfidCertificateEx>}
     * @memberof RfidSignerInfoEx
     */
    'CertificateChain': Array<RfidCertificateEx>;
    /**
     * Binary data array used to calculate the hash value for digital signature verification. Base64 encoded.
     * @type {string}
     * @memberof RfidSignerInfoEx
     */
    'DataToHash': string;
    /**
     * 
     * @type {Array<ParsingNotificationCodes>}
     * @memberof RfidSignerInfoEx
     */
    'Notifications': Array<ParsingNotificationCodes>;
}



