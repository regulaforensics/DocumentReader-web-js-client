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


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { InlineResponse200 } from '../models';
// @ts-ignore
import { InlineResponse2001 } from '../models';
// @ts-ignore
import { TransactionProcessGetResponse } from '../models';
// @ts-ignore
import { TransactionProcessRequest } from '../models';
/**
 * TransactionApi - axios parameter creator
 * @export
 */
export const TransactionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete Reprocess transactions by tag
         * @param {number} tagId Tag id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV2TagTagIdDelete: async (tagId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'tagId' is not null or undefined
            if (tagId === null || tagId === undefined) {
                throw new RequiredError('tagId','Required parameter tagId was null or undefined when calling apiV2TagTagIdDelete.');
            }
            const localVarPath = `/api/v2/tag/{tagId}`
                .replace(`{${"tagId"}}`, encodeURIComponent(String(tagId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Reprocess transaction file
         * @param {number} transactionId Transaction id
         * @param {string} name File name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV2TransactionTransactionIdFileGet: async (transactionId: number, name: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionId' is not null or undefined
            if (transactionId === null || transactionId === undefined) {
                throw new RequiredError('transactionId','Required parameter transactionId was null or undefined when calling apiV2TransactionTransactionIdFileGet.');
            }
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling apiV2TransactionTransactionIdFileGet.');
            }
            const localVarPath = `/api/v2/transaction/{transactionId}/file`
                .replace(`{${"transactionId"}}`, encodeURIComponent(String(transactionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Reprocess transaction data
         * @param {number} transactionId Transaction id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV2TransactionTransactionIdGet: async (transactionId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionId' is not null or undefined
            if (transactionId === null || transactionId === undefined) {
                throw new RequiredError('transactionId','Required parameter transactionId was null or undefined when calling apiV2TransactionTransactionIdGet.');
            }
            const localVarPath = `/api/v2/transaction/{transactionId}`
                .replace(`{${"transactionId"}}`, encodeURIComponent(String(transactionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Reprocess
         * @param {number} transactionId Transaction id
         * @param {TransactionProcessRequest} transactionProcessRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV2TransactionTransactionIdProcessPost: async (transactionId: number, transactionProcessRequest: TransactionProcessRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionId' is not null or undefined
            if (transactionId === null || transactionId === undefined) {
                throw new RequiredError('transactionId','Required parameter transactionId was null or undefined when calling apiV2TransactionTransactionIdProcessPost.');
            }
            // verify required parameter 'transactionProcessRequest' is not null or undefined
            if (transactionProcessRequest === null || transactionProcessRequest === undefined) {
                throw new RequiredError('transactionProcessRequest','Required parameter transactionProcessRequest was null or undefined when calling apiV2TransactionTransactionIdProcessPost.');
            }
            const localVarPath = `/api/v2/transaction/{transactionId}/process`
                .replace(`{${"transactionId"}}`, encodeURIComponent(String(transactionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof transactionProcessRequest !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(transactionProcessRequest !== undefined ? transactionProcessRequest : {})
                : (transactionProcessRequest || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Reprocess transaction result
         * @param {number} transactionId Transaction id
         * @param {boolean} [withImages] With base64 images or url
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV2TransactionTransactionIdResultsGet: async (transactionId: number, withImages?: boolean, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionId' is not null or undefined
            if (transactionId === null || transactionId === undefined) {
                throw new RequiredError('transactionId','Required parameter transactionId was null or undefined when calling apiV2TransactionTransactionIdResultsGet.');
            }
            const localVarPath = `/api/v2/transaction/{transactionId}/results`
                .replace(`{${"transactionId"}}`, encodeURIComponent(String(transactionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (withImages !== undefined) {
                localVarQueryParameter['withImages'] = withImages;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TransactionApi - functional programming interface
 * @export
 */
export const TransactionApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete Reprocess transactions by tag
         * @param {number} tagId Tag id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV2TagTagIdDelete(tagId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await TransactionApiAxiosParamCreator(configuration).apiV2TagTagIdDelete(tagId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get Reprocess transaction file
         * @param {number} transactionId Transaction id
         * @param {string} name File name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV2TransactionTransactionIdFileGet(transactionId: number, name: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await TransactionApiAxiosParamCreator(configuration).apiV2TransactionTransactionIdFileGet(transactionId, name, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get Reprocess transaction data
         * @param {number} transactionId Transaction id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV2TransactionTransactionIdGet(transactionId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionProcessGetResponse>> {
            const localVarAxiosArgs = await TransactionApiAxiosParamCreator(configuration).apiV2TransactionTransactionIdGet(transactionId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Reprocess
         * @param {number} transactionId Transaction id
         * @param {TransactionProcessRequest} transactionProcessRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV2TransactionTransactionIdProcessPost(transactionId: number, transactionProcessRequest: TransactionProcessRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200>> {
            const localVarAxiosArgs = await TransactionApiAxiosParamCreator(configuration).apiV2TransactionTransactionIdProcessPost(transactionId, transactionProcessRequest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get Reprocess transaction result
         * @param {number} transactionId Transaction id
         * @param {boolean} [withImages] With base64 images or url
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV2TransactionTransactionIdResultsGet(transactionId: number, withImages?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2001>> {
            const localVarAxiosArgs = await TransactionApiAxiosParamCreator(configuration).apiV2TransactionTransactionIdResultsGet(transactionId, withImages, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TransactionApi - factory interface
 * @export
 */
export const TransactionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Delete Reprocess transactions by tag
         * @param {number} tagId Tag id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV2TagTagIdDelete(tagId: number, options?: any): AxiosPromise<object> {
            return TransactionApiFp(configuration).apiV2TagTagIdDelete(tagId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Reprocess transaction file
         * @param {number} transactionId Transaction id
         * @param {string} name File name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV2TransactionTransactionIdFileGet(transactionId: number, name: string, options?: any): AxiosPromise<any> {
            return TransactionApiFp(configuration).apiV2TransactionTransactionIdFileGet(transactionId, name, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Reprocess transaction data
         * @param {number} transactionId Transaction id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV2TransactionTransactionIdGet(transactionId: number, options?: any): AxiosPromise<TransactionProcessGetResponse> {
            return TransactionApiFp(configuration).apiV2TransactionTransactionIdGet(transactionId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Reprocess
         * @param {number} transactionId Transaction id
         * @param {TransactionProcessRequest} transactionProcessRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV2TransactionTransactionIdProcessPost(transactionId: number, transactionProcessRequest: TransactionProcessRequest, options?: any): AxiosPromise<InlineResponse200> {
            return TransactionApiFp(configuration).apiV2TransactionTransactionIdProcessPost(transactionId, transactionProcessRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Reprocess transaction result
         * @param {number} transactionId Transaction id
         * @param {boolean} [withImages] With base64 images or url
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV2TransactionTransactionIdResultsGet(transactionId: number, withImages?: boolean, options?: any): AxiosPromise<InlineResponse2001> {
            return TransactionApiFp(configuration).apiV2TransactionTransactionIdResultsGet(transactionId, withImages, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TransactionApi - object-oriented interface
 * @export
 * @class TransactionApi
 * @extends {BaseAPI}
 */
export class TransactionApi extends BaseAPI {
    /**
     * 
     * @summary Delete Reprocess transactions by tag
     * @param {number} tagId Tag id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApi
     */
    public apiV2TagTagIdDelete(tagId: number, options?: any) {
        return TransactionApiFp(this.configuration).apiV2TagTagIdDelete(tagId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Reprocess transaction file
     * @param {number} transactionId Transaction id
     * @param {string} name File name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApi
     */
    public apiV2TransactionTransactionIdFileGet(transactionId: number, name: string, options?: any) {
        return TransactionApiFp(this.configuration).apiV2TransactionTransactionIdFileGet(transactionId, name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Reprocess transaction data
     * @param {number} transactionId Transaction id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApi
     */
    public apiV2TransactionTransactionIdGet(transactionId: number, options?: any) {
        return TransactionApiFp(this.configuration).apiV2TransactionTransactionIdGet(transactionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Reprocess
     * @param {number} transactionId Transaction id
     * @param {TransactionProcessRequest} transactionProcessRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApi
     */
    public apiV2TransactionTransactionIdProcessPost(transactionId: number, transactionProcessRequest: TransactionProcessRequest, options?: any) {
        return TransactionApiFp(this.configuration).apiV2TransactionTransactionIdProcessPost(transactionId, transactionProcessRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Reprocess transaction result
     * @param {number} transactionId Transaction id
     * @param {boolean} [withImages] With base64 images or url
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApi
     */
    public apiV2TransactionTransactionIdResultsGet(transactionId: number, withImages?: boolean, options?: any) {
        return TransactionApiFp(this.configuration).apiV2TransactionTransactionIdResultsGet(transactionId, withImages, options).then((request) => request(this.axios, this.basePath));
    }
}
