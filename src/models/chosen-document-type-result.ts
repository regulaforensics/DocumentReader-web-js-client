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
import { ChosenDocumentTypeResultAllOf } from './chosen-document-type-result-all-of';
import { DocumentTypesCandidatesResult } from './document-types-candidates-result';
import { GraphicsResult } from './graphics-result';
import { LexicalAnalysisResult } from './lexical-analysis-result';
import { MrzOcrExtendedResult } from './mrz-ocr-extended-result';
import { OneCandidate } from './one-candidate';
import { RawImageResult } from './raw-image-result';
import { ResultItem } from './result-item';
import { RfidTextDataResult } from './rfid-text-data-result';
import { StatusResult } from './status-result';
import { TextResult } from './text-result';
import { VisualOcrExtendedResult } from './visual-ocr-extended-result';

/**
 * @type ChosenDocumentTypeResult
 * Contains information about the type of document that was determined based on the analysis of the provided image
 * @export
 */
export type ChosenDocumentTypeResult = ChosenDocumentTypeResultAllOf & ResultItem;



