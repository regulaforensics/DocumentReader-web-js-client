/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 5.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ChosenDocumentTypeResult } from './chosen-document-type-result';
import { DocVisualExtendedInfo } from './doc-visual-extended-info';
import { DocumentImageResult } from './document-image-result';
import { DocumentTypesCandidatesResult } from './document-types-candidates-result';
import { GraphicsResult } from './graphics-result';
import { ImagesResult } from './images-result';
import { LexicalAnalysisResult } from './lexical-analysis-result';
import { ResultItem } from './result-item';
import { StatusResult } from './status-result';
import { TextDataResult } from './text-data-result';
import { TextDataResultAllOf } from './text-data-result-all-of';
import { TextResult } from './text-result';

/**
 * @type TextDataResult
 * Text fields extracted from one document source. Contains results of specific source for each provided page.
 * @export
 */
export type TextDataResult = ResultItem & TextDataResultAllOf;



