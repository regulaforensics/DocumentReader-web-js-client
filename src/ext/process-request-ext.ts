import { ContainerList, ProcessParams, ProcessSystemInfo } from '../models';
import { ProcessRequestImageWrapper } from './process-request-image-wrapper';

export type Base64String = string;

export interface ProcessRequestExt {
    /**
     *
     * @type {ProcessParams}
     * @memberof ProcessRequestExt
     */
    processParam: ProcessParams;

    /**
     *
     * @type {Array<ProcessRequestImage>}
     * @memberof ProcessRequestExt
     */
    images: Array<ProcessRequestImageWrapper | ArrayBuffer | Base64String>;

    /**
     * @type {ContainerList}
     * @memberOf ProcessRequestExt
     */
    ContainerList: ContainerList;

    /**
     *
     * @type {ProcessParams}
     * @memberof ProcessRequestExt
     */
    systemInfo?: ProcessSystemInfo;

    /**
     * Free-form object to be included in response. Must be object, not list or simple value.
     * Do not affect document processing. Use it freely to pass your app params. Stored in process logs.
     * @type {{ [key: string]: object; }}
     * @memberof ProcessRequestExt
     */
    passBackObject?: { [key: string]: any };
}

export const instanceOfProcessRequest = (data: any): data is ProcessRequestExt => {
    return 'images' in data;
};
