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


import type { LivenessParams } from './liveness-params';

/**
 * 
 * @export
 * @interface AuthParams
 */
export interface AuthParams {
    /**
     * This parameter is used to enable document liveness check
     * @type {boolean}
     * @memberof AuthParams
     */
    checkLiveness?: boolean;
    /**
     * 
     * @type {LivenessParams}
     * @memberof AuthParams
     */
    livenessParams?: LivenessParams;
    /**
     * This parameter is used to enable Document luminescence check in UV light
     * @type {boolean}
     * @memberof AuthParams
     */
    checkUVLuminiscence?: boolean;
    /**
     * This parameter is used to enable B900 ink MRZ contrast check in IR light
     * @type {boolean}
     * @memberof AuthParams
     */
    checkIRB900?: boolean;
    /**
     * This parameter is used to enable Image patterns presence/absence check (position, shape, color)
     * @type {boolean}
     * @memberof AuthParams
     */
    checkImagePatterns?: boolean;
    /**
     * This parameter is used to enable Fibers detection
     * @type {boolean}
     * @memberof AuthParams
     */
    checkFibers?: boolean;
    /**
     * This parameter is used to enable Extended MRZ Check
     * @type {boolean}
     * @memberof AuthParams
     */
    checkExtMRZ?: boolean;
    /**
     * This parameter is used to enable Extended OCR Check
     * @type {boolean}
     * @memberof AuthParams
     */
    checkExtOCR?: boolean;
    /**
     * This parameter is used to enable laminate integrity check in axial light
     * @type {boolean}
     * @memberof AuthParams
     */
    checkAxial?: boolean;
    /**
     * This parameter is used to enable Barcode format check (code metadata, data format, contents format, etc.)
     * @type {boolean}
     * @memberof AuthParams
     */
    checkBarcodeFormat?: boolean;
    /**
     * This parameter is used to enable Document elements visibility check in IR light
     * @type {boolean}
     * @memberof AuthParams
     */
    checkIRVisibility?: boolean;
    /**
     * This parameter is used to enable Invisible Personal Information (IPI) check
     * @type {boolean}
     * @memberof AuthParams
     */
    checkIPI?: boolean;
    /**
     * This parameter is used to enable Owner\'s photo embedding check (is photo printed or sticked)
     * @type {boolean}
     * @memberof AuthParams
     */
    checkPhotoEmbedding?: boolean;
    /**
     * This parameter is used to enable Portrait comparison check
     * @type {boolean}
     * @memberof AuthParams
     */
    checkPhotoComparison?: boolean;
    /**
     * This parameter is used to enable LetterScreen check
     * @type {boolean}
     * @memberof AuthParams
     */
    checkLetterScreen?: boolean;
}
