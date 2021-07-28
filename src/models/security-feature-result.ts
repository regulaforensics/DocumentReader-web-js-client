/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 5.7.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AreaContainer } from './area-container';
import { AuthenticityCheckResultItem } from './authenticity-check-result-item';
import { CheckDiagnose } from './check-diagnose';
import { CheckResult } from './check-result';
import { Critical } from './critical';
import { FiberResult } from './fiber-result';
import { IdentResult } from './ident-result';
import { OCRSecurityTextResult } from './ocrsecurity-text-result';
import { PhotoIdentResult } from './photo-ident-result';
import { RectangleCoordinates } from './rectangle-coordinates';
import { SecurityFeatureResultAllOf } from './security-feature-result-all-of';
import { SecurityFeatureType } from './security-feature-type';
import { Visibility } from './visibility';

/**
 * @type SecurityFeatureResult
 * @export
 */
export type SecurityFeatureResult = AuthenticityCheckResultItem & SecurityFeatureResultAllOf;



