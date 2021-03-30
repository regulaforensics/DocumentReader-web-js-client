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


import { AuthenticityResult } from './authenticity-result';
import { ChosenDocumentTypeResult } from './chosen-document-type-result';
import { DocumentImageResult } from './document-image-result';
import { DocumentTypesCandidatesResult } from './document-types-candidates-result';
import { GraphicsResult } from './graphics-result';
import { ImageQualityListResult } from './image-quality-list-result';
import { ImagesResult } from './images-result';
import { LexicalAnalysisResultAllOf } from './lexical-analysis-result-all-of';
import { ListVerifiedFields } from './list-verified-fields';
import { ResultItem } from './result-item';
import { StatusResult } from './status-result';
import { TextDataResult } from './text-data-result';
import { TextResult } from './text-result';

/**
 * @type LexicalAnalysisResult
 * Lexical data analysis allows you to compare the results of reading the text data of the MRZ, the document filling area, barcodes and data from the memory of the RFID chip for an additional assessment of the authenticity of the document. Single result for all pages. Deprecated since 5.2. Instead consider to use Result.TEXT type. 
 * @export
 */
export type LexicalAnalysisResult = LexicalAnalysisResultAllOf & ResultItem;



