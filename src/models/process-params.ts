/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 6.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DocumentFormat } from './document-format';
import { ImageQA } from './image-qa';
import { LogLevel } from './log-level';
import { MRZFormat } from './mrzformat';
import { MeasureSystem } from './measure-system';
import { PerDocumentConfig } from './per-document-config';
import { Result } from './result';
import { Scenario } from './scenario';
import { TextFieldType } from './text-field-type';
import { TextPostProcessing } from './text-post-processing';

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
     * When enabled together with \"doublePageSpread\" and there is a passport with two pages spread in the image, pages will be cropped, straightened and aligned together, as if the document was captured on a flatbed scanner.
     * @type {boolean}
     * @memberof ProcessParams
     */
    generateDoublePageSpreadImage?: boolean;
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
     * This option allows to set additional custom configuration per document type. If recognized document has id specified in config, processing adjusts according to designated configuration.
     * @type {Array<PerDocumentConfig>}
     * @memberof ProcessParams
     */
    config?: Array<PerDocumentConfig>;
    /**
     * This option can be set to true if you need to get base64 string of transaction processing log.
     * @type {boolean}
     * @memberof ProcessParams
     */
    log?: boolean;
    /**
     * 
     * @type {LogLevel}
     * @memberof ProcessParams
     */
    logLevel?: LogLevel;
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
     * When enabled, each field in template will be checked for value presence and if the field is marked as required, but has no value, it will have \"error\" in validity status.
     * @type {boolean}
     * @memberof ProcessParams
     */
    checkRequiredTextFields?: boolean;
    /**
     * When enabled, returns cropped barcode images for unknown documents
     * @type {boolean}
     * @memberof ProcessParams
     */
    returnCroppedBarcode?: boolean;
    /**
     * 
     * @type {ImageQA}
     * @memberof ProcessParams
     */
    imageQa?: ImageQA;
    /**
     * 
     * @type {DocumentFormat}
     * @memberof ProcessParams
     */
    forceDocFormat?: DocumentFormat;
    /**
     * When enabled no graphic fields will be cropped from document image.
     * @type {boolean}
     * @memberof ProcessParams
     */
    noGraphics?: boolean;
    /**
     * Specifies minimal area of the image that document should cover to be treated as candidate when locating. Value should be in range from 0 to 1, where 1 is when document should fully cover the image.
     * @type {number}
     * @memberof ProcessParams
     */
    documentAreaMin?: number;
    /**
     * When enabled all personal data will be forcibly removed from the logs.
     * @type {boolean}
     * @memberof ProcessParams
     */
    depersonalizeLog?: boolean;
    /**
     * This option allows locating and cropping multiple documents from one image if enabled.
     * @type {boolean}
     * @memberof ProcessParams
     */
    multiDocOnImage?: boolean;
    /**
     * This option allows shifting the date of expiry into the future or past for number of months specified. This is useful, for example, in some cases when document might be still valid for some period after original expiration date to prevent negative validity status for such documents. Or by shifting the date to the past will set negative validity for the documents that is about to expire in a specified number of months.
     * @type {number}
     * @memberof ProcessParams
     */
    shiftExpiryDate?: number;
    /**
     * This options allows specifying the minimal age in years of the document holder for the document to be considered valid.
     * @type {number}
     * @memberof ProcessParams
     */
    minimalHolderAge?: number;
    /**
     * This option allows returning input images in output if enabled.
     * @type {boolean}
     * @memberof ProcessParams
     */
    returnUncroppedImage?: boolean;
    /**
     * This option allows limiting MRZ formats to be recognized by specifying them in array.
     * @type {Array<MRZFormat>}
     * @memberof ProcessParams
     */
    mrzFormatsFilter?: Array<MRZFormat>;
    /**
     * This option can be set to true to make sure that in series processing MRZ is located fully inside the result document image, if present on the document. Enabling this option may add extra processing time, by disabling optimizations, but allows more stability in output image quality.
     * @type {boolean}
     * @memberof ProcessParams
     */
    forceReadMrzBeforeLocate?: boolean;
    /**
     * This option can be set to false to stop parsing after barcode is read.
     * @type {boolean}
     * @memberof ProcessParams
     */
    parseBarcodes?: boolean;
    /**
     * 
     * @type {TextPostProcessing}
     * @memberof ProcessParams
     */
    convertCase?: TextPostProcessing;
    /**
     * If it is set to true, the Surname and GivenNames fields from the MRZ will be divided into the ft_First_Name, ft_Second_Name, ft_Third_Name, ft_Fourth_Name, ft_Last_Name fields
     * @type {boolean}
     * @memberof ProcessParams
     */
    splitNames?: boolean;
    /**
     * Disables reading perforated fields
     * @type {boolean}
     * @memberof ProcessParams
     */
    disablePerforationOCR?: boolean;
    /**
     * Checks filter
     * @type {boolean}
     * @memberof ProcessParams
     */
    processAuth?: boolean;
    /**
     * Filter documents by group
     * @type {string}
     * @memberof ProcessParams
     */
    documentGroupFilter?: string;
    /**
     * When it true ImageQuality can affect on Optical Status
     * @type {boolean}
     * @memberof ProcessParams
     */
    respectImageQuality?: boolean;
}


