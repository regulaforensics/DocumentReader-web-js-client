/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by OpenAPI Generator.
 * Do not edit the file manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { InData } from './in-data';
// May contain unused imports in some cases
// @ts-ignore
import type { OutData } from './out-data';

/**
 * 
 * @export
 * @interface TransactionProcessResult
 */
export interface TransactionProcessResult {
    /**
     * 
     * @type {OutData}
     * @memberof TransactionProcessResult
     */
    'OutData'?: OutData;
    /**
     * 
     * @type {InData}
     * @memberof TransactionProcessResult
     */
    'InData'?: InData;
    /**
     * 
     * @type {string}
     * @memberof TransactionProcessResult
     */
    'tag'?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionProcessResult
     */
    'transactionId'?: string;
}

