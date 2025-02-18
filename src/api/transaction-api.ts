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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { ListTransactionsByTagResponse } from '../models';
// @ts-ignore
import type { TransactionProcessGetResponse } from '../models';
// @ts-ignore
import type { TransactionProcessRequest } from '../models';
// @ts-ignore
import type { TransactionProcessResponse } from '../models';
// @ts-ignore
import type { TransactionProcessResult } from '../models';
/**
 * TransactionApi - axios parameter creator
 * @export
 */
export const TransactionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete Reprocess transactions by tag
         * @param {string} tagId Tag id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV2TagTagIdDelete: async (tagId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tagId' is not null or undefined
            assertParamExists('apiV2TagTagIdDelete', 'tagId', tagId)
            const localVarPath = `/api/v2/tag/{tagId}`
                .replace(`{${"tagId"}}`, encodeURIComponent(String(tagId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get transactions by tag
         * @param {string} tagId Tag id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV2TagTagIdTransactionsGet: async (tagId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tagId' is not null or undefined
            assertParamExists('apiV2TagTagIdTransactionsGet', 'tagId', tagId)
            const localVarPath = `/api/v2/tag/{tagId}/transactions`
                .replace(`{${"tagId"}}`, encodeURIComponent(String(tagId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Reprocess transaction file
         * @param {string} transactionId Transaction id
         * @param {string} name File name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV2TransactionTransactionIdFileGet: async (transactionId: string, name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionId' is not null or undefined
            assertParamExists('apiV2TransactionTransactionIdFileGet', 'transactionId', transactionId)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('apiV2TransactionTransactionIdFileGet', 'name', name)
            const localVarPath = `/api/v2/transaction/{transactionId}/file`
                .replace(`{${"transactionId"}}`, encodeURIComponent(String(transactionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Reprocess transaction data
         * @param {string} transactionId Transaction id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV2TransactionTransactionIdGet: async (transactionId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionId' is not null or undefined
            assertParamExists('apiV2TransactionTransactionIdGet', 'transactionId', transactionId)
            const localVarPath = `/api/v2/transaction/{transactionId}`
                .replace(`{${"transactionId"}}`, encodeURIComponent(String(transactionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Reprocess
         * @param {string} transactionId Transaction id
         * @param {TransactionProcessRequest} transactionProcessRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV2TransactionTransactionIdProcessPost: async (transactionId: string, transactionProcessRequest: TransactionProcessRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionId' is not null or undefined
            assertParamExists('apiV2TransactionTransactionIdProcessPost', 'transactionId', transactionId)
            // verify required parameter 'transactionProcessRequest' is not null or undefined
            assertParamExists('apiV2TransactionTransactionIdProcessPost', 'transactionProcessRequest', transactionProcessRequest)
            const localVarPath = `/api/v2/transaction/{transactionId}/process`
                .replace(`{${"transactionId"}}`, encodeURIComponent(String(transactionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(transactionProcessRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Reprocess transaction result
         * @param {string} transactionId Transaction id
         * @param {boolean} [withImages] With base64 images or url
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV2TransactionTransactionIdResultsGet: async (transactionId: string, withImages?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionId' is not null or undefined
            assertParamExists('apiV2TransactionTransactionIdResultsGet', 'transactionId', transactionId)
            const localVarPath = `/api/v2/transaction/{transactionId}/results`
                .replace(`{${"transactionId"}}`, encodeURIComponent(String(transactionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
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
    const localVarAxiosParamCreator = TransactionApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Delete Reprocess transactions by tag
         * @param {string} tagId Tag id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV2TagTagIdDelete(tagId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV2TagTagIdDelete(tagId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TransactionApi.apiV2TagTagIdDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get transactions by tag
         * @param {string} tagId Tag id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV2TagTagIdTransactionsGet(tagId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListTransactionsByTagResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV2TagTagIdTransactionsGet(tagId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TransactionApi.apiV2TagTagIdTransactionsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get Reprocess transaction file
         * @param {string} transactionId Transaction id
         * @param {string} name File name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV2TransactionTransactionIdFileGet(transactionId: string, name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<File>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV2TransactionTransactionIdFileGet(transactionId, name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TransactionApi.apiV2TransactionTransactionIdFileGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get Reprocess transaction data
         * @param {string} transactionId Transaction id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV2TransactionTransactionIdGet(transactionId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionProcessGetResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV2TransactionTransactionIdGet(transactionId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TransactionApi.apiV2TransactionTransactionIdGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Reprocess
         * @param {string} transactionId Transaction id
         * @param {TransactionProcessRequest} transactionProcessRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV2TransactionTransactionIdProcessPost(transactionId: string, transactionProcessRequest: TransactionProcessRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionProcessResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV2TransactionTransactionIdProcessPost(transactionId, transactionProcessRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TransactionApi.apiV2TransactionTransactionIdProcessPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get Reprocess transaction result
         * @param {string} transactionId Transaction id
         * @param {boolean} [withImages] With base64 images or url
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV2TransactionTransactionIdResultsGet(transactionId: string, withImages?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionProcessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV2TransactionTransactionIdResultsGet(transactionId, withImages, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TransactionApi.apiV2TransactionTransactionIdResultsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * TransactionApi - factory interface
 * @export
 */
export const TransactionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TransactionApiFp(configuration)
    return {
        /**
         * 
         * @summary Delete Reprocess transactions by tag
         * @param {string} tagId Tag id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV2TagTagIdDelete(tagId: string, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.apiV2TagTagIdDelete(tagId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get transactions by tag
         * @param {string} tagId Tag id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV2TagTagIdTransactionsGet(tagId: string, options?: RawAxiosRequestConfig): AxiosPromise<ListTransactionsByTagResponse> {
            return localVarFp.apiV2TagTagIdTransactionsGet(tagId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Reprocess transaction file
         * @param {string} transactionId Transaction id
         * @param {string} name File name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV2TransactionTransactionIdFileGet(transactionId: string, name: string, options?: RawAxiosRequestConfig): AxiosPromise<File> {
            return localVarFp.apiV2TransactionTransactionIdFileGet(transactionId, name, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Reprocess transaction data
         * @param {string} transactionId Transaction id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV2TransactionTransactionIdGet(transactionId: string, options?: RawAxiosRequestConfig): AxiosPromise<TransactionProcessGetResponse> {
            return localVarFp.apiV2TransactionTransactionIdGet(transactionId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Reprocess
         * @param {string} transactionId Transaction id
         * @param {TransactionProcessRequest} transactionProcessRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV2TransactionTransactionIdProcessPost(transactionId: string, transactionProcessRequest: TransactionProcessRequest, options?: RawAxiosRequestConfig): AxiosPromise<TransactionProcessResult> {
            return localVarFp.apiV2TransactionTransactionIdProcessPost(transactionId, transactionProcessRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Reprocess transaction result
         * @param {string} transactionId Transaction id
         * @param {boolean} [withImages] With base64 images or url
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV2TransactionTransactionIdResultsGet(transactionId: string, withImages?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<TransactionProcessResponse> {
            return localVarFp.apiV2TransactionTransactionIdResultsGet(transactionId, withImages, options).then((request) => request(axios, basePath));
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
     * @param {string} tagId Tag id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApi
     */
    public apiV2TagTagIdDelete(tagId: string, options?: RawAxiosRequestConfig) {
        return TransactionApiFp(this.configuration).apiV2TagTagIdDelete(tagId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get transactions by tag
     * @param {string} tagId Tag id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApi
     */
    public apiV2TagTagIdTransactionsGet(tagId: string, options?: RawAxiosRequestConfig) {
        return TransactionApiFp(this.configuration).apiV2TagTagIdTransactionsGet(tagId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Reprocess transaction file
     * @param {string} transactionId Transaction id
     * @param {string} name File name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApi
     */
    public apiV2TransactionTransactionIdFileGet(transactionId: string, name: string, options?: RawAxiosRequestConfig) {
        return TransactionApiFp(this.configuration).apiV2TransactionTransactionIdFileGet(transactionId, name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Reprocess transaction data
     * @param {string} transactionId Transaction id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApi
     */
    public apiV2TransactionTransactionIdGet(transactionId: string, options?: RawAxiosRequestConfig) {
        return TransactionApiFp(this.configuration).apiV2TransactionTransactionIdGet(transactionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Reprocess
     * @param {string} transactionId Transaction id
     * @param {TransactionProcessRequest} transactionProcessRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApi
     */
    public apiV2TransactionTransactionIdProcessPost(transactionId: string, transactionProcessRequest: TransactionProcessRequest, options?: RawAxiosRequestConfig) {
        return TransactionApiFp(this.configuration).apiV2TransactionTransactionIdProcessPost(transactionId, transactionProcessRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Reprocess transaction result
     * @param {string} transactionId Transaction id
     * @param {boolean} [withImages] With base64 images or url
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionApi
     */
    public apiV2TransactionTransactionIdResultsGet(transactionId: string, withImages?: boolean, options?: RawAxiosRequestConfig) {
        return TransactionApiFp(this.configuration).apiV2TransactionTransactionIdResultsGet(transactionId, withImages, options).then((request) => request(this.axios, this.basePath));
    }
}

