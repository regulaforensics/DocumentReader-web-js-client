import { HealthcheckApi } from '../api/healthcheck-api';
import { ProcessApi } from '../api/process-api';
import { TransactionApi } from '../api/transaction-api';
import { ProcessResult } from './process-result';
import { Configuration, ConfigurationParameters } from '../configuration';
import globalAxios, { AxiosInstance, AxiosResponse } from 'axios';
import { BASE_PATH } from '../base';
import {
    ProcessRequestImage,
    Light,
    ProcessRequest as ProcessRequestBase,
    Scenario,
    Result,
    DeviceInfo,
    TransactionProcessRequest,
    TransactionProcessResult,
    ListTransactionsByTagResponse,
    TransactionProcessGetResponse,
    Healthcheck,
} from '../models';
import { Base64String, instanceOfProcessRequest, ProcessRequestExt } from './process-request-ext';
import { ProcessRequestImageWrapper } from './process-request-image-wrapper';
import * as converter from 'base64-arraybuffer';

export class DocumentReaderApi {
    private readonly healthcheckApi: HealthcheckApi;
    private readonly processApi: ProcessApi;
    private readonly transactionApi: TransactionApi;

    private license: string | undefined;

    constructor(
        configuration?: ConfigurationParameters,
        basePath: string = BASE_PATH,
        axios: AxiosInstance = globalAxios,
    ) {
        this.healthcheckApi = new HealthcheckApi(new Configuration(configuration), basePath, axios);
        this.processApi = new ProcessApi(new Configuration(configuration), basePath, axios);
        this.transactionApi = new TransactionApi(new Configuration(configuration), basePath, axios);
    }

    async ping(xRequestID?: string): Promise<DeviceInfo> {
        const axiosResult = await this.healthcheckApi.ping(xRequestID);
        return axiosResult.data;
    }

    async health(xRequestID?: string): Promise<Healthcheck> {
        const axiosResult = await this.healthcheckApi.healthz(xRequestID);
        return axiosResult.data;
    }

    /**
     *
     * @summary Process list of documents images and return extracted data
     * @param {ProcessRequestExt} [request] Request options such as image, results types and etc.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError} If some request params are missed
     * */
    async process(
        request: ProcessRequestExt | ProcessRequestBase,
        xRequestID?: string,
        options?: any,
    ): Promise<ProcessResult> {
        let baseRequest;

        if (instanceOfProcessRequest(request)) {
            if (!request.processParam) {
                request.processParam = {
                    scenario: Scenario.FULL_PROCESS,
                    resultTypeOutput: [Result.TEXT],
                };
            }
            if (!request.systemInfo) {
                request.systemInfo = {};
            }

            if (!request.systemInfo.license && this.license) {
                request.systemInfo.license = this.license;
            }

            baseRequest = requestToBaseRequest(request);
        } else {
            baseRequest = request;
        }

        const axiosResult = await this.processApi.apiProcess(baseRequest, xRequestID, options);
        return new ProcessResult(axiosResult.data);
    }

    public setLicense(license: ArrayBuffer | Base64String) {
        if (typeof license === 'string') {
            this.license = license;
        } else {
            this.license = bufferToBase64String(license);
        }
    }

    /**
     *
     * @summary Reprocess
     * @param {string} transactionId Transaction id
     * @param {TransactionProcessRequest} transactionProcessRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public reprocessTransaction(
        transactionId: string,
        transactionProcessRequest: TransactionProcessRequest,
        options?: any,
    ): Promise<AxiosResponse<TransactionProcessResult, any>> {
        return this.transactionApi.apiV2TransactionTransactionIdProcessPost(
            transactionId,
            transactionProcessRequest,
            options,
        );
    }

    /**
     *
     * @summary Get Reprocess transaction result
     * @param {string} transactionId Transaction id
     * @param {boolean} [withImages] With base64 images or url
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getReprocessTransactionResult(
        transactionId: string,
        withImages?: boolean,
        options?: any,
    ): Promise<ProcessResult> {
        const axiosResult = await this.transactionApi.apiV2TransactionTransactionIdResultsGet(
            transactionId,
            withImages,
            options,
        );
        return new ProcessResult(axiosResult.data);
    }

    /**
     *
     * @summary Get transactions by tag
     * @param {string} tagId Tag id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTransactionsByTag(tagId: string, options?: any): Promise<AxiosResponse<ListTransactionsByTagResponse>> {
        return this.transactionApi.apiV2TagTagIdTransactionsGet(tagId, options);
    }

    /**
     *
     * @summary Delete Reprocess transactions by tag
     * @param {string} tagId Tag id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteReprocessTransactionsByTag(tagId: string, options?: any): Promise<AxiosResponse<object, any>> {
        return this.transactionApi.apiV2TagTagIdDelete(tagId, options);
    }

    /**
     *
     * @summary Get Reprocess transaction file
     * @param {string} transactionId Transaction id
     * @param {string} name File name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getReprocessTransactionFile(
        transactionId: string,
        name: string,
        options?: any,
    ): Promise<AxiosResponse<any, any>> {
        return this.transactionApi.apiV2TransactionTransactionIdFileGet(transactionId, name, options);
    }

    /**
     *
     * @summary Get Reprocess transaction data
     * @param {string} transactionId Transaction id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getReprocessTransactionData(
        transactionId: string,
        options?: any,
    ): Promise<AxiosResponse<TransactionProcessGetResponse, any>> {
        return this.transactionApi.apiV2TransactionTransactionIdGet(transactionId, options);
    }
}

export function requestToBaseRequest(request: ProcessRequestExt): ProcessRequestBase {
    const imageList: Array<ProcessRequestImage> = [];

    request.images.forEach((image, index) => {
        if (typeof image === 'string') {
            imageList.push({ ImageData: { image: image }, light: Light.WHITE, page_idx: index });
        } else if (image instanceof ArrayBuffer) {
            const data = bufferToBase64String(image);
            imageList.push({ ImageData: { image: data }, light: Light.WHITE, page_idx: index });
        } else {
            imageList.push(imageDataToBaseImageData(image, index));
        }
    });

    return {
        ...request,
        List: imageList,
    };
}

function imageDataToBaseImageData(image: ProcessRequestImageWrapper, arrayIndex: number): ProcessRequestImage {
    let data: string;
    if (typeof image.ImageData === 'string') {
        data = image.ImageData;
    } else {
        data = bufferToBase64String(image.ImageData);
    }
    return {
        ImageData: { image: data },
        light: image.light,
        page_idx: typeof image.page_idx === 'undefined' ? arrayIndex : image.page_idx,
    };
}

function bufferToBase64String(buffer: ArrayBuffer) {
    return converter.encode(buffer);
}
