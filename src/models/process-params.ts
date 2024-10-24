/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 7.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AuthParams } from './auth-params';
import { DocumentFormat } from './document-format';
import { DocumentType } from './document-type';
import { FaceApi } from './face-api';
import { ImageQA } from './image-qa';
import { LogLevel } from './log-level';
import { MRZFormat } from './mrzformat';
import { MeasureSystem } from './measure-system';
import { MrzDetectModeEnum } from './mrz-detect-mode-enum';
import { PerDocumentConfig } from './per-document-config';
import { ProcessParamsRfid } from './process-params-rfid';
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
     * The list of LCID types to recognize. If empty, values with all LCID types will be extracted. Empty by default.
     * @type {Array<number>}
     * @memberof ProcessParams
     */
    lcidFilter?: Array<number>;
    /**
     * The list of LCID types to ignore during the recognition. If empty, values with all LCID types will be extracted. Narrowing down the list can reduce processing time. Empty by default.
     * @type {Array<number>}
     * @memberof ProcessParams
     */
    lcidIgnoreFilter?: Array<number>;
    /**
     * This parameter allows processing an image that contains a person and a document and compare the portrait photo from the document with the person\'s face
     * @type {boolean}
     * @memberof ProcessParams
     */
    oneShotIdentification?: boolean;
    /**
     * This parameter allows comparing faces on Regula Face Web Service
     * @type {boolean}
     * @memberof ProcessParams
     */
    useFaceApi?: boolean;
    /**
     * 
     * @type {FaceApi}
     * @memberof ProcessParams
     */
    faceApi?: FaceApi;
    /**
     * This parameter allows enabling the CAN (Card Access Number) detection and recognition when using scenarios with document location and MRZ reading, such as the MrzAndLocate scenario.
     * @type {boolean}
     * @memberof ProcessParams
     */
    doDetectCan?: boolean;
    /**
     * This parameter allows setting maximum height in pixels of output images and thus reducing image size to desired. Does not change the aspect ratio. Changes disabled if equals to 0. Default 0.
     * @type {number}
     * @memberof ProcessParams
     */
    imageOutputMaxHeight?: number;
    /**
     * This parameter allows setting maximum width in pixels of output images and thus reducing image size to desired. Does not change the aspect ratio. Changes disabled if equals to 0. Default 0.
     * @type {number}
     * @memberof ProcessParams
     */
    imageOutputMaxWidth?: number;
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
     * Enable this option if the image you provide contains double page spread of the passport and you want to process both pages in one go. It makes sense to use it for documents that have meaningful information on both pages, like Russian domestic passport, or some others. Disabled by default.
     * @type {boolean}
     * @memberof ProcessParams
     * @deprecated
     */
    doublePageSpread?: boolean;
    /**
     * When enabled together with \"doublePageSpread\" and there is a passport with two pages spread in the image, pages will be cropped, straightened and aligned together, as if the document was captured on a flatbed scanner. Disabled by default.
     * @type {boolean}
     * @memberof ProcessParams
     */
    generateDoublePageSpreadImage?: boolean;
    /**
     * List of text field types to extract. If empty, all text fields from template will be extracted. Narrowing the list can shorten processing time. Empty by default.
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
     * This parameter controls maximum resolution in dpi of output images. Resolution will remain original in case 0 is supplied. By default is set to return images in response with resolution not greater than 300 dpi for all scenarios except FullAuth. In FullAuth scenario this limit is 1000 dpi by default.
     * @type {number}
     * @memberof ProcessParams
     */
    imageDpiOutMax?: number;
    /**
     * This option can be enabled if you know for sure that the image you provide contains already cropped document by its edges. This was designed to process on the server side images captured and cropped on mobile. Disabled by default.
     * @type {boolean}
     * @memberof ProcessParams
     */
    alreadyCropped?: boolean;
    /**
     * This option allows passing custom processing parameters that can be implemented in future without changing API.
     * @type {{ [key: string]: object; }}
     * @memberof ProcessParams
     */
    customParams?: { [key: string]: object; };
    /**
     * This option allows setting additional custom configuration per document type. If recognized document has ID specified in config, processing adjusts according to designated configuration.
     * @type {Array<PerDocumentConfig>}
     * @memberof ProcessParams
     */
    config?: Array<PerDocumentConfig>;
    /**
     * When enabled, results will contain transaction processing log. Disabled by default
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
     * When disabled, text field OCR will be done as is and then the recognized value will be matched to the field mask for validity. If enabled, we are trying to read a field value with maximum efforts to match the mask and provide a correctly formatted value, making assumptions based on the provided field mask in the template. Enabled by default.
     * @type {boolean}
     * @memberof ProcessParams
     */
    matchTextFieldMask?: boolean;
    /**
     * When enabled, shorten the list of candidates to process during document detection in a single image process mode. Reduces processing time for specific backgrounds. Enabled by default.
     * @type {boolean}
     * @memberof ProcessParams
     * @deprecated
     */
    fastDocDetect?: boolean;
    /**
     * When enabled, fail OCR field validity, if there is a glare over the text field on the image. Disabled by default.
     * @type {boolean}
     * @memberof ProcessParams
     */
    updateOCRValidityByGlare?: boolean;
    /**
     * When enabled, each field in template will be checked for value presence and if the field is marked as required, but has no value, it will have \'error\' in validity status. Disabled by default.
     * @type {boolean}
     * @memberof ProcessParams
     */
    checkRequiredTextFields?: boolean;
    /**
     * When enabled, returns cropped barcode images for unknown documents. Disabled by default.
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
     * When enabled, image quality checks status affects document optical and overall status. Disabled by default.
     * @type {boolean}
     * @memberof ProcessParams
     */
    respectImageQuality?: boolean;
    /**
     * 
     * @type {DocumentFormat}
     * @memberof ProcessParams
     */
    forceDocFormat?: DocumentFormat;
    /**
     * When enabled, no graphic fields will be cropped from document image. Disabled by default.
     * @type {boolean}
     * @memberof ProcessParams
     */
    noGraphics?: boolean;
    /**
     * When enabled, all personal data will be forcibly removed from the logs. Disabled by default.
     * @type {boolean}
     * @memberof ProcessParams
     */
    depersonalizeLog?: boolean;
    /**
     * This option allows locating and cropping multiple documents from one image if enabled. Disabled by default.
     * @type {boolean}
     * @memberof ProcessParams
     */
    multiDocOnImage?: boolean;
    /**
     * This option allows shifting the date of expiry into the future or past for number of months specified. This is useful, for example, in some cases when document might be still valid for some period after original expiration date to prevent negative validity status for such documents. Or by shifting the date to the past will set negative validity for the documents that is about to expire in a specified number of months. 0 by default
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
     * When enabled, returns input images in output. Disabled by default.
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
     * When enabled, make sure that in series processing MRZ is located fully inside the result document image, if present on the document. Enabling this option may add extra processing time, by disabling optimizations, but allows more stability in output image quality. Disabled by default.
     * @type {boolean}
     * @memberof ProcessParams
     */
    forceReadMrzBeforeLocate?: boolean;
    /**
     * Allows you to fail both the Barcode format check and overall statuses of the document if the Digital signature check is not performed
     * @type {boolean}
     * @memberof ProcessParams
     */
    forceBarcodeChecks?: boolean;
    /**
     * This option can be disabled to stop parsing after barcode is read. Enabled by default.
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
     * When enabled, the Surname and GivenNames fields from MRZ will be divided into ft_First_Name, ft_Second_Name, ft_Third_Name, ft_Fourth_Name, ft_Last_Name fields. Disabled by default.
     * @type {boolean}
     * @memberof ProcessParams
     */
    splitNames?: boolean;
    /**
     * When enabled, OCR of perforated fields in the document template will not be performed. Disabled by default.
     * @type {boolean}
     * @memberof ProcessParams
     */
    disablePerforationOCR?: boolean;
    /**
     * List of specific eligible document types from DocumentType enum to recognize from. You may, for example, specify only passports to be recognized by setting this property. Empty by default.
     * @type {Array<DocumentType>}
     * @memberof ProcessParams
     */
    documentGroupFilter?: Array<DocumentType>;
    /**
     * Authenticity checks that should be performed regardless of the document type. The available checks are listed in the eRPRM_Authenticity enum. Note that only supported by your license checks can be added. 
     * @type {number}
     * @memberof ProcessParams
     */
    processAuth?: number;
    /**
     * This parameter is used to specify the document reader device type from which input images were captured. Default 0.
     * @type {number}
     * @memberof ProcessParams
     */
    deviceId?: number;
    /**
     * This parameter is used to specify the document reader device type from which input images were captured. Default 0.
     * @type {number}
     * @memberof ProcessParams
     */
    deviceType?: number;
    /**
     * This parameter is used to specify the document reader device type from which input images were captured
     * @type {string}
     * @memberof ProcessParams
     */
    deviceTypeHex?: string;
    /**
     * This parameter is used to tell the processing engine to ignore any parameters saved in the image when scanned from the document reader device. Default false
     * @type {boolean}
     * @memberof ProcessParams
     */
    ignoreDeviceIdFromImage?: boolean;
    /**
     * List of the document ID\'s to process. All documents will be processed, if empty.
     * @type {Array<number>}
     * @memberof ProcessParams
     */
    documentIdList?: Array<number>;
    /**
     * 
     * @type {ProcessParamsRfid}
     * @memberof ProcessParams
     */
    rfid?: ProcessParamsRfid;
    /**
     * This parameter is used to enable authenticity checks
     * @type {boolean}
     * @memberof ProcessParams
     */
    checkAuth?: boolean;
    /**
     * 
     * @type {AuthParams}
     * @memberof ProcessParams
     */
    authParams?: AuthParams;
    /**
     * 
     * @type {MrzDetectModeEnum}
     * @memberof ProcessParams
     */
    mrzDetectMode?: MrzDetectModeEnum;
    /**
     * This parameter is used to generate numeric representation for issuing state and nationality codes
     * @type {boolean}
     * @memberof ProcessParams
     */
    generateNumericCodes?: boolean;
}


