/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Regula Document Reader Web API
 *
 * The version of the OpenAPI document: 5.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { BarcodeTextDataResult } from './barcode-text-data-result';
import { ChosenDocumentTypeResult } from './chosen-document-type-result';
import { DocVisualExtendedInfo } from './doc-visual-extended-info';
import { DocumentTypesCandidatesResult } from './document-types-candidates-result';
import { GraphicsResult } from './graphics-result';
import { LexicalAnalysisResult } from './lexical-analysis-result';
import { MrzOcrExtendedResult } from './mrz-ocr-extended-result';
import { MrzOcrExtendedResultAllOf } from './mrz-ocr-extended-result-all-of';
import { RawImageResult } from './raw-image-result';
import { ResultItem } from './result-item';
import { RfidTextDataResult } from './rfid-text-data-result';
import { StatusResult } from './status-result';
import { TextResult } from './text-result';

/**
 * @type VisualOcrExtendedResult
 * Text fields from document OCR with symbol probabilities
 * @export
 */
export type VisualOcrExtendedResult = MrzOcrExtendedResultAllOf & ResultItem;



