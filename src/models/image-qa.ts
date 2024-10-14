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
    brightnessThreshold?: number;
    /**
    * This parameter sets threshold for Image QA check of the presented document physical dpi. If actual document dpi is below this threshold, check will fail.
    * @type {number}
    * @memberof ImageQA
    */
    dpiThreshold?: number;
    /**
    * This parameter sets threshold for Image QA check of the presented document perspective angle in degrees. If actual document perspective angle is above this threshold, check will fail.
    * @type {number}
    * @memberof ImageQA
    */
    angleThreshold?: number;
    /**
    * This option enables focus check while performing image quality validation.
    * @type {boolean}
    * @memberof ImageQA
    */
    focusCheck?: boolean;
    /**
    * This option enables glares check while performing image quality validation.
    * @type {boolean}
    * @memberof ImageQA
    */
    glaresCheck?: boolean;
    /**
    * This option enables colorness check while performing image quality validation.
    * @type {boolean}
    * @memberof ImageQA
    */
    colornessCheck?: boolean;
    /**
    * This option enables screen capture (moire patterns) check while performing image quality validation.
    * @type {boolean}
    * @memberof ImageQA
    */
    moireCheck?: boolean;
    /**
    * This parameter specifies the necessary margin. Default 0.
    * @type {number}
    * @memberof ImageQA
    */
    documentPositionIndent?: number;
}
