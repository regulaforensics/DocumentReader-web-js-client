/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 7.4.0
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
import { DeviceInfo } from '../models';
// @ts-ignore
import { DeviceInfoDeprecated } from '../models';
/**
 * HealthcheckApi - axios parameter creator
 * @export
 */
export const HealthcheckApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Server healthcheck
         * @param {string} [xRequestID] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        healthz: async (xRequestID?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/healthz`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xRequestID !== undefined && xRequestID !== null) {
                localVarHeaderParameter['X-RequestID'] = String(xRequestID);
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
         * @summary Server health check
         * @param {string} [xRequestID] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ping: async (xRequestID?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/ping`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xRequestID !== undefined && xRequestID !== null) {
                localVarHeaderParameter['X-RequestID'] = String(xRequestID);
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
         * @summary License healthcheck
         * @param {string} [xRequestID] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readyz: async (xRequestID?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/readyz`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xRequestID !== undefined && xRequestID !== null) {
                localVarHeaderParameter['X-RequestID'] = String(xRequestID);
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
 * HealthcheckApi - functional programming interface
 * @export
 */
export const HealthcheckApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Server healthcheck
         * @param {string} [xRequestID] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async healthz(xRequestID?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeviceInfo>> {
            const localVarAxiosArgs = await HealthcheckApiAxiosParamCreator(configuration).healthz(xRequestID, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Server health check
         * @param {string} [xRequestID] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ping(xRequestID?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeviceInfoDeprecated>> {
            const localVarAxiosArgs = await HealthcheckApiAxiosParamCreator(configuration).ping(xRequestID, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary License healthcheck
         * @param {string} [xRequestID] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async readyz(xRequestID?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await HealthcheckApiAxiosParamCreator(configuration).readyz(xRequestID, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * HealthcheckApi - factory interface
 * @export
 */
export const HealthcheckApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Server healthcheck
         * @param {string} [xRequestID] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        healthz(xRequestID?: string, options?: any): AxiosPromise<DeviceInfo> {
            return HealthcheckApiFp(configuration).healthz(xRequestID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Server health check
         * @param {string} [xRequestID] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ping(xRequestID?: string, options?: any): AxiosPromise<DeviceInfoDeprecated> {
            return HealthcheckApiFp(configuration).ping(xRequestID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary License healthcheck
         * @param {string} [xRequestID] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readyz(xRequestID?: string, options?: any): AxiosPromise<void> {
            return HealthcheckApiFp(configuration).readyz(xRequestID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * HealthcheckApi - object-oriented interface
 * @export
 * @class HealthcheckApi
 * @extends {BaseAPI}
 */
export class HealthcheckApi extends BaseAPI {
    /**
     * 
     * @summary Server healthcheck
     * @param {string} [xRequestID] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthcheckApi
     */
    public healthz(xRequestID?: string, options?: any) {
        return HealthcheckApiFp(this.configuration).healthz(xRequestID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Server health check
     * @param {string} [xRequestID] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthcheckApi
     */
    public ping(xRequestID?: string, options?: any) {
        return HealthcheckApiFp(this.configuration).ping(xRequestID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary License healthcheck
     * @param {string} [xRequestID] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthcheckApi
     */
    public readyz(xRequestID?: string, options?: any) {
        return HealthcheckApiFp(this.configuration).readyz(xRequestID, options).then((request) => request(this.axios, this.basePath));
    }
}
