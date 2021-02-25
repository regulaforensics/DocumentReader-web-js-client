/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 5.5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ImageQA } from './image-qa';
import { MeasureSystem } from './measure-system';
import { Result } from './result';
import { Scenario } from './scenario';
import { TextFieldType } from './text-field-type';

/**
 * 
 * @export
 * @interface ProcessParams
 */
export interface ProcessParams {
    /**
     * 
     * @type {Scenario}
     * @memberof ProcessParams
     */
    scenario: Scenario;
    /**
     * Types of results to return in response. See \'Result\' enum for available options
     * @type {Array<Result>}
     * @memberof ProcessParams
     */
    resultTypeOutput?: Array<Result>;
    /**
     * This option can be set to true if the image you provide contains double page spread of the passport and you want to process both pages in one go. It makes sense to use it for documents that have meaningful information on both pages, like Russian domestic passport, or some others. By default is set to false.
     * @type {boolean}
     * @memberof ProcessParams
     */
    doublePageSpread?: boolean;
    /**
     * List of text field types to extract. If empty, all text fields from template will be extracted. Narrowing the list can shorten processing time. By default is empty.
     * @type {Array<TextFieldType>}
     * @memberof ProcessParams
     */
    fieldTypesFilter?: Array<TextFieldType>;
    /**
     * This option allows you to set dates format so that solution will return dates in this format. For example, if you supply \'MM/dd/yyyy\', and document have printed date \'09 JUL 2020\' for the date os issue, you will get \'07/09/2020\' as a result. By default it is set to system locale default (where the service is running).
     * @type {string}
     * @memberof ProcessParams
     */
    dateFormat?: string;
    /**
     * 
     * @type {MeasureSystem}
     * @memberof ProcessParams
     */
    measureSystem?: MeasureSystem;
    /**
     * This option controls maximum resolution in dpi of output images. Resolution will remain original in case 0 is supplied. By default is set to return images in response with resolution not greater than 300 dpi.
     * @type {number}
     * @memberof ProcessParams
     */
    imageDpiOutMax?: number;
    /**
     * This option can be set to true if you know for sure that the image you provide contains already cropped document by its edges. This was designed to process on the server side images captured and cropped on mobile. By default is set to false.
     * @type {boolean}
     * @memberof ProcessParams
     */
    alreadyCropped?: boolean;
    /**
     * This option allows to pass custom processing parameters that can be implemented in future without changing API.
     * @type {{ [key: string]: object; }}
     * @memberof ProcessParams
     */
    customParams?: { [key: string]: object; };
    /**
     * This option can be set to true if you need to get base64 string of transaction processing log.
     * @type {boolean}
     * @memberof ProcessParams
     */
    log?: boolean;
    /**
     * Force use of specific template ID and skip document type identification step.
     * @type {number}
     * @memberof ProcessParams
     */
    forceDocID?: number;
    /**
     * When disabled, text field OCR will be done as is and then the recognized value will be matched to the field mask for validity. If enabled, we are trying to read a field value with maximum efforts to match the mask and provide a correctly formatted value, making assumptions based on the provided field mask in the template.
     * @type {boolean}
     * @memberof ProcessParams
     */
    matchTextFieldMask?: boolean;
    /**
     * When enabled, shorten the list of candidates to process during document detection in a single image process mode. Reduces processing time for specific backgrounds.
     * @type {boolean}
     * @memberof ProcessParams
     */
    fastDocDetect?: boolean;
    /**
     * When enabled, fail OCR field validity, if there is a glare over the text field on the image.
     * @type {boolean}
     * @memberof ProcessParams
     */
    updateOCRValidityByGlare?: boolean;
    /**
     * When enabled together with \"doublePageSpread\" and there is a passport with two pages spread in the image, pages will be cropped, straightened and aligned together, as if the document was captured on a flatbed scanner.
     * @type {boolean}
     * @memberof ProcessParams
     */
    generateDoublePageSpreadImage?: boolean;
    /**
     * When enabled, each field in template will be checked for value presence and if the field is marked as required, but has no value, it will have \"error\" in validity status.
     * @type {boolean}
     * @memberof ProcessParams
     */
    checkRequiredTextFields?: boolean;
    /**
     * 
     * @type {ImageQA}
     * @memberof ProcessParams
     */
    imageQA?: ImageQA;
}


