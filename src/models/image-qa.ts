/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by OpenAPI Generator.
 * Do not edit the file manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { InputImageQualityChecks } from './input-image-quality-checks';

/**
 * 
 * @export
 * @interface ImageQA
 */
export interface ImageQA {
    /**
     * Set the threshold for an actual document brightness below which the check fails
     * @type {number}
     * @memberof ImageQA
     */
    'brightnessThreshold'?: number;
    /**
     * This parameter sets threshold for Image QA check of the presented document physical dpi. If actual document dpi is below this threshold, check will fail.
     * @type {number}
     * @memberof ImageQA
     */
    'dpiThreshold'?: number;
    /**
     * This parameter sets threshold for Image QA check of the presented document perspective angle in degrees. If actual document perspective angle is above this threshold, check will fail.
     * @type {number}
     * @memberof ImageQA
     */
    'angleThreshold'?: number;
    /**
     * This option enables focus check while performing image quality validation.
     * @type {boolean}
     * @memberof ImageQA
     */
    'focusCheck'?: boolean;
    /**
     * This option enables glares check while performing image quality validation.
     * @type {boolean}
     * @memberof ImageQA
     */
    'glaresCheck'?: boolean;
    /**
     * This option enables colorness check while performing image quality validation.
     * @type {boolean}
     * @memberof ImageQA
     */
    'colornessCheck'?: boolean;
    /**
     * This option enables screen capture (moire patterns) check while performing image quality validation.
     * @type {boolean}
     * @memberof ImageQA
     */
    'moireCheck'?: boolean;
    /**
     * This parameter specifies the necessary margin. Default 0.
     * @type {number}
     * @memberof ImageQA
     */
    'documentPositionIndent'?: number;
    /**
     * This parameter controls the quality checks that the image should pass to be considered a valid input during the scanning process.
     * @type {Array<InputImageQualityChecks>}
     * @memberof ImageQA
     */
    'expectedPass'?: Array<InputImageQualityChecks>;
}

