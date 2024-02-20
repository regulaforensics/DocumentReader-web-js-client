/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 7.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ContainerList } from './container-list';
import { ProcessingStatus } from './processing-status';
import { RfidLocation } from './rfid-location';
import { TransactionInfo } from './transaction-info';

/**
 * 
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
    /**
     * 
     * @type {RfidLocation}
     * @memberof InlineResponse2001
     */
    ChipPage?: RfidLocation;
    /**
     * 
     * @type {ProcessingStatus}
     * @memberof InlineResponse2001
     */
    ProcessingFinished?: ProcessingStatus;
    /**
     * 
     * @type {ContainerList}
     * @memberof InlineResponse2001
     */
    ContainerList?: ContainerList;
    /**
     * 
     * @type {TransactionInfo}
     * @memberof InlineResponse2001
     */
    TransactionInfo?: TransactionInfo;
    /**
     * Base64 encoded transaction processing log
     * @type {string}
     * @memberof InlineResponse2001
     */
    log?: string;
    /**
     * Free-form object provided in request. See passBackObject property of ProcessRequest.
     * @type {{ [key: string]: object; }}
     * @memberof InlineResponse2001
     */
    passBackObject?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2001
     */
    morePagesAvailable?: number;
    /**
     * Time the document processing has taken, ms.
     * @type {number}
     * @memberof InlineResponse2001
     */
    elapsedTime?: number;
}

