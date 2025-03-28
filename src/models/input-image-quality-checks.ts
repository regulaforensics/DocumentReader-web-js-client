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



/**
 * Input image quality checks for the document processing
 * @export
 * @enum {string}
 */
export enum InputImageQualityChecks {
    /**
    * Signals glare presence on the image
    */
    Glares = 'glaresCheck',
    /**
    * Signals whether image is in focus
    */
    Focus = 'focusCheck',
    /**
    * Signals if image resolution is below threshold
    */
    Resolution = 'dpiThreshold',
    /**
    * Signals if image is colorless
    */
    Colorness = 'colornessCheck',
    /**
    * Signals if document in the image has prespective distortion above threshold
    */
    Perspective = 'perspectiveCheck',
    /**
    * Signals if document is not fully present in the image
    */
    Bounds = 'documentPosition',
    /**
    * Signals if the portrait is present
    */
    Portrait = 'portraitCheck',
    /**
    * Signals if the document image is bright enough
    */
    Brightness = 'brightnessCheck',
    /**
    * Signals if the document image has occlusion
    */
    Occlusion = 'occlusionCheck'
}



