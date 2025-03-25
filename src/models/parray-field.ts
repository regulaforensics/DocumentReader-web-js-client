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
import type { BarcodeType } from './barcode-type';
// May contain unused imports in some cases
// @ts-ignore
import type { BcPDF417INFO } from './bc-pdf417-info';
// May contain unused imports in some cases
// @ts-ignore
import type { BcROIDETECT } from './bc-roidetect';
// May contain unused imports in some cases
// @ts-ignore
import type { DataModule } from './data-module';

/**
 * 
 * @export
 * @interface PArrayField
 */
export interface PArrayField {
    /**
     * 
     * @type {number}
     * @memberof PArrayField
     */
    'bcAngle_DETECT': number;
    /**
     * 
     * @type {number}
     * @memberof PArrayField
     */
    'bcCodeResult': number;
    /**
     * 
     * @type {number}
     * @memberof PArrayField
     */
    'bcCountModule': number;
    /**
     * 
     * @type {Array<DataModule>}
     * @memberof PArrayField
     */
    'bcDataModule': Array<DataModule>;
    /**
     * 
     * @type {BcPDF417INFO}
     * @memberof PArrayField
     */
    'bcPDF417INFO'?: BcPDF417INFO;
    /**
     * 
     * @type {BcROIDETECT}
     * @memberof PArrayField
     */
    'bcROI_DETECT': BcROIDETECT;
    /**
     * 
     * @type {number}
     * @memberof PArrayField
     */
    'bcTextDecoderTypes'?: number;
    /**
     * 
     * @type {number}
     * @memberof PArrayField
     */
    'bcTextFieldType'?: number;
    /**
     * 
     * @type {BarcodeType}
     * @memberof PArrayField
     */
    'bcType_DECODE': BarcodeType;
    /**
     * 
     * @type {number}
     * @memberof PArrayField
     */
    'bcType_DETECT': number;
}



