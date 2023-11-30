import { ProcessRequestImage } from '../models';
import { Base64String } from './process-request-ext';

export interface ProcessRequestImageWrapper extends Omit<ProcessRequestImage, 'ImageData'> {
    ImageData: ArrayBuffer | Base64String;
}
