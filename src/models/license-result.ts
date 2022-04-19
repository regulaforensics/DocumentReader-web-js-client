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


import { AuthenticityResult } from './authenticity-result';
import { ChosenDocumentTypeResult } from './chosen-document-type-result';
import { DocBarCodeInfo } from './doc-bar-code-info';
import { DocumentImageResult } from './document-image-result';
import { DocumentPositionResult } from './document-position-result';
import { DocumentTypesCandidatesResult } from './document-types-candidates-result';
import { EncryptedRCLResult } from './encrypted-rclresult';
import { GraphicsResult } from './graphics-result';
import { ImageQualityResult } from './image-quality-result';
import { ImagesResult } from './images-result';
import { LexicalAnalysisResult } from './lexical-analysis-result';
import { LicenseResult } from './license-result';
import { LicenseResultAllOf } from './license-result-all-of';
import { ResultItem } from './result-item';
import { StatusResult } from './status-result';
import { TextDataResult } from './text-data-result';
import { TextResult } from './text-result';

/**
 * @type LicenseResult
 * @export
 */
export type LicenseResult = LicenseResultAllOf & ResultItem;



