/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by OpenAPI Generator.
 * Do not edit the file manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { FaceApiSearch } from './face-api-search';

/**
 * 
 * @export
 * @interface FaceApi
 */
export interface FaceApi {
    /**
     * The URL of the Regula Face Web service to be used.
     * @type {string}
     * @memberof FaceApi
     */
    'url'?: string;
    /**
     * The processing mode: \"match\" or \"match+search\".
     * @type {string}
     * @memberof FaceApi
     */
    'mode'?: string;
    /**
     * 
     * @type {FaceApiSearch}
     * @memberof FaceApi
     */
    'search'?: FaceApiSearch;
    /**
     * The similarity threshold, 0-100. Above 75 means that the faces\' similarity is verified, below 75 is not.
     * @type {number}
     * @memberof FaceApi
     */
    'threshold'?: number;
    /**
     * The Regula Face Web service requests timeout, ms.
     * @type {number}
     * @memberof FaceApi
     */
    'serviceTimeout'?: number;
    /**
     * Proxy to use, should be set according to the <a href=\"https://curl.se/libcurl/c/CURLOPT_PROXY.html\" target=\"_blank\">cURL standard</a>.
     * @type {string}
     * @memberof FaceApi
     */
    'proxy'?: string;
    /**
     * Username and password to use for proxy authentication, should be set according to the <a href=\"https://curl.se/libcurl/c/CURLOPT_PROXYUSERPWD.html\" target=\"_blank\">cURL standard</a>.
     * @type {string}
     * @memberof FaceApi
     */
    'proxy_userpwd'?: string;
    /**
     * Proxy protocol type, should be set according to the <a href=\"https://curl.se/libcurl/c/CURLOPT_PROXYTYPE.html\" target=\"_blank\">cURL standard</a>.
     * @type {number}
     * @memberof FaceApi
     */
    'proxy_type'?: number;
    /**
     * The age threshold for the portrait comparison. Default: 13.
     * @type {number}
     * @memberof FaceApi
     */
    'childAgeThreshold'?: number;
    /**
     * Estimated duration of validity for a child\'s passport, years. Default: 5.
     * @type {number}
     * @memberof FaceApi
     */
    'childDocValidityYears'?: number;
}

