import { ProcessRequest } from '../models';
import { ProcessRequestImageWrapper } from './process-request-image-wrapper';

export type Base64String = string;

export interface ProcessRequestExt extends ProcessRequest {
    /**
     *
     * @type {Array<ProcessRequestImage>}
     * @memberof ProcessRequestExt
     */
    images: Array<ProcessRequestImageWrapper | ArrayBuffer | Base64String>;
}

export const instanceOfProcessRequest = (data: any): data is ProcessRequestExt => {
    return 'images' in data;
};
