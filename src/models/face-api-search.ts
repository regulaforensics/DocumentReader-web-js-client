/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.   # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 7.4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * A search filter that can be applied if the \"match+search\" mode is enabled. May include limit, threshold, group_ids. If the group_ids are specified, the search is performed only in these groups. Find more information in the <a href=\"https://dev.regulaforensics.com/FaceSDK-web-openapi/#tag/search/operation/search\" target=\"_blank\">OpenAPI documentation</a>.
 * @export
 * @interface FaceApiSearch
 */
export interface FaceApiSearch {
    /**
     * The maximum number of results to be returned.
     * @type {number}
     * @memberof FaceApiSearch
     */
    'limit'?: number;
    /**
     * The similarity threshold.
     * @type {number}
     * @memberof FaceApiSearch
     */
    'threshold'?: number;
    /**
     *  The groups where to conduct the search.
     * @type {Array<number>}
     * @memberof FaceApiSearch
     */
    'group_ids'?: Array<number>;
}

