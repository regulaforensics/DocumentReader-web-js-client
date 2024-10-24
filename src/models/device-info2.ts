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
 * 
 * @export
 * @interface DeviceInfo2
 */
export interface DeviceInfo2 {
    /**
     * 
     * @type {string}
     * @memberof DeviceInfo2
     */
    app?: string;
    /**
     * 
     * @type {string}
     * @memberof DeviceInfo2
     */
    licenseId?: string;
    /**
     * 
     * @type {string}
     * @memberof DeviceInfo2
     */
    licenseType?: string;
    /**
     * 
     * @type {string}
     * @memberof DeviceInfo2
     */
    licenseSerial?: string;
    /**
     * 
     * @type {string}
     * @memberof DeviceInfo2
     */
    licenseValidUntil?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DeviceInfo2
     */
    scenarios?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DeviceInfo2
     */
    version?: string;
}


