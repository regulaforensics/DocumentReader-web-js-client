import {
    AuthenticityResult,
    ChosenDocumentTypeResult,
    ContainerList,
    DocBarCodeInfo,
    ImageQualityCheckList,
    ImageQualityResult,
    ImagesResult,
    InlineResponse2001,
    OneCandidate,
    ProcessingStatus,
    ProcessResponse,
    Result,
    RfidLocation,
    Status,
    StatusResult,
    TextResult,
    TransactionInfo,
} from '../models';
import { TextExt } from './text-ext';
import { ImagesExt } from './images-ext';
import * as converter from 'base64-arraybuffer';
import { Authenticity } from './authenticity';
import * as pako from 'pako';

export class Response {
    // other future modules:
    // - authenticity
    // - document
    status?: Status;
    text?: TextExt;
    images?: ImagesExt;
    TransactionInfo: TransactionInfo;

    lowLvlResponse: LowLvlResponse;
    rawResponse: ProcessResponse | InlineResponse2001;

    constructor(original: ProcessResponse | InlineResponse2001) {
        const lowLvlResponse = new LowLvlResponse(original);
        const statusResult = lowLvlResponse.statusResult()?.Status;
        const textResult = lowLvlResponse.textResult();
        const imagesResult = lowLvlResponse.imagesResult();

        this.lowLvlResponse = lowLvlResponse;
        this.rawResponse = original;
        this.TransactionInfo = original.TransactionInfo || {};

        if (statusResult) {
            this.status = statusResult;
        }
        if (textResult) {
            this.text = new TextExt(textResult.Text);
        }
        if (imagesResult) {
            this.images = new ImagesExt(imagesResult.Images);
        }
    }

    public authenticity(page_idx = 0): Authenticity | undefined {
        const r = <AuthenticityResult>this.lowLvlResponse.resultByTypeAndPage(Result.AUTHENTICITY, page_idx);
        if (r) {
            return new Authenticity(r.AuthenticityCheckList, page_idx);
        }
    }

    public json() {
        return JSON.stringify(this.lowLvlResponse);
    }

    public authenticityPerPage(): Array<Authenticity> {
        const filteredByTypeArray = <Array<AuthenticityResult>>this.lowLvlResponse.resultsByType(Result.AUTHENTICITY);

        return filteredByTypeArray
            .map((e: AuthenticityResult) => new Authenticity(e.AuthenticityCheckList, e.page_idx || 0))
            .sort((a, b) => a.page_idx - b.page_idx);
    }

    public imageQualityChecks(page_idx = 0): ImageQualityCheckList | undefined {
        const result = <ImageQualityResult>this.lowLvlResponse.resultByTypeAndPage(Result.IMAGE_QUALITY, page_idx);
        if (result) {
            return result.ImageQualityCheckList;
        }
    }

    public imageQualityChecksPerPage(): Array<ImageQualityCheckList> | undefined {
        return <Array<ImageQualityCheckList>>(<unknown>this.lowLvlResponse.resultsByType(Result.IMAGE_QUALITY));
    }

    public documentType(page_idx = 0): OneCandidate | undefined {
        const result = <ChosenDocumentTypeResult>(
            this.lowLvlResponse.resultByTypeAndPage(Result.DOCUMENT_TYPE, page_idx)
        );
        if (result) {
            return result.OneCandidate;
        }
    }

    public decodedLog() {
        const log = this.lowLvlResponse.log;
        if (log) {
            const decoded = converter.decode(log);
            const uintArray = new Uint8Array(decoded);

            let dataUintArray;
            try {
                const currentDataUintArray = pako.inflate(uintArray);

                dataUintArray = currentDataUintArray.length > uintArray.length ? currentDataUintArray : uintArray;
            } catch (err) {
                dataUintArray = uintArray;
            }

            const uintArraySize = dataUintArray.length;
            const step = 10000;
            const result = [];
            const convertedUnitArray = [].slice.call(dataUintArray);
            // To avoid maximum call stack size excess
            for (let i = 0; i < uintArraySize; i += step) {
                const chunk = String.fromCharCode.apply(null, convertedUnitArray.slice(i, i + step));
                result.push(chunk);
            }
            return result.join('');
        }
    }
}

export class LowLvlResponse implements ProcessResponse {
    ContainerList: ContainerList;
    ProcessingFinished: ProcessingStatus;
    TransactionInfo: TransactionInfo;
    ChipPage?: RfidLocation;
    log?: string;
    passBackObject?: { [key: string]: any };
    morePagesAvailable?: number;

    constructor(original: ProcessResponse | InlineResponse2001) {
        this.ContainerList = original.ContainerList || { Count: 0, List: [] };
        this.ProcessingFinished = original.ProcessingFinished || ProcessingStatus.NOT_FINISHED;
        this.TransactionInfo = original.TransactionInfo || {};
        this.ChipPage = original.ChipPage;
        this.log = original.log;
        this.passBackObject = original.passBackObject;
        this.morePagesAvailable = original.morePagesAvailable;
    }

    public statusResult(): StatusResult | undefined {
        return <StatusResult>this.resultByType(Result.STATUS);
    }

    public textResult(): TextResult | undefined {
        return <TextResult>this.resultByType(Result.TEXT);
    }

    public imagesResult(): ImagesResult | undefined {
        return <ImagesResult>this.resultByType(Result.IMAGES);
    }

    public barcodeResult(): DocBarCodeInfo | undefined {
        return <DocBarCodeInfo>this.resultByType(Result.BARCODES);
    }

    public documentTypeResults(): Array<ChosenDocumentTypeResult> | undefined {
        return <Array<ChosenDocumentTypeResult>>this.resultsByType(Result.DOCUMENT_TYPE);
    }

    public resultByType(type: Result): ContainerList['List'][number] | undefined {
        for (const container of this.ContainerList.List) {
            if (container.result_type === type) {
                return container;
            }
        }
    }

    public resultByTypeAndPage(type: Result, page_idx = 0): ContainerList['List'][number] | undefined {
        for (const container of this.ContainerList.List) {
            if (container.result_type === type && container.page_idx == page_idx) {
                return container;
            }
        }
    }

    public resultsByType(type: Result): ContainerList['List'] {
        return this.ContainerList.List.filter((container) => container.result_type === type);
    }
}
