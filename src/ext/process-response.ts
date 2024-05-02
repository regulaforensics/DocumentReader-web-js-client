import {
    AuthenticityResult,
    ContainerList,
    ImageQualityCheckList,
    ImageQualityResult,
    ImagesResult,
    ProcessingStatus,
    ProcessResponse,
    Result,
    ResultItem,
    RfidLocation,
    Status,
    StatusResult,
    TextResult,
    ChosenDocumentTypeResult,
    DocBarCodeInfo,
    TransactionInfo,
    OneCandidate,
} from '../models';
import { TextExt } from './text-ext';
import { ImagesExt } from './images-ext';
import * as converter from 'base64-arraybuffer';
import { Authenticity } from './authenticity';

export class Response {
    // other future modules:
    // - authenticity
    // - document
    status?: Status;
    text?: TextExt;
    images?: ImagesExt;

    lowLvlResponse: LowLvlResponse;
    rawResponse: ProcessResponse;

    constructor(original: ProcessResponse) {
        const lowLvlResponse = new LowLvlResponse(original);
        this.lowLvlResponse = lowLvlResponse;
        this.rawResponse = original;

        this.status = lowLvlResponse.statusResult()?.Status;
        const textResult = lowLvlResponse.textResult();
        if (textResult) {
            this.text = new TextExt(textResult.Text);
        }
        const imagesResult = lowLvlResponse.imagesResult();
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
        return <Array<ImageQualityCheckList>>this.lowLvlResponse.resultsByType(Result.IMAGE_QUALITY);
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
            const blob = new Blob([new Uint8Array(decoded)]);
            return getTextFromReadableStream(blob.stream().pipeThrough(new DecompressionStream('deflate')));
        }
        return Promise.resolve('');
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

    constructor(original: ProcessResponse) {
        this.ContainerList = original.ContainerList;
        this.ProcessingFinished = original.ProcessingFinished;
        this.TransactionInfo = original.TransactionInfo;
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

    public resultByType(type: Result): ResultItem | undefined {
        for (const container of this.ContainerList.List) {
            if (container.result_type === type) {
                return container;
            }
        }
    }

    public resultByTypeAndPage(type: Result, page_idx = 0): ResultItem | undefined {
        for (const container of this.ContainerList.List) {
            if (container.result_type === type && container.page_idx == page_idx) {
                return container;
            }
        }
    }

    public resultsByType(type: Result): Array<ResultItem | AuthenticityResult | ImageQualityCheckList> {
        return this.ContainerList.List.filter((container) => container.result_type === type);
    }
}

async function getTextFromReadableStream(readableStream: ReadableStream) {
    const decoder = new TextDecoder('utf-8');
    let result = '';

    const reader = readableStream.getReader();
    while (true) {
        const { done, value } = await reader.read();
        if (done) {
            break;
        }
        result += decoder.decode(value);
    }

    // Decode the last chunk if it wasn't completely decoded
    result += decoder.decode();

    return result;
}
