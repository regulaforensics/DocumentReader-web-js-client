import { TextAvailableSource, CheckResult, Text, TextFieldType, LCID } from '../models';
import { TextFieldExt } from './text-field-ext';

export class TextExt implements Text {
    status: CheckResult;
    validityStatus: CheckResult;
    comparisonStatus: CheckResult;

    availableSourceList: Array<TextAvailableSource>;
    fieldList: Array<TextFieldExt>;

    constructor(origin: Text) {
        this.status = origin.status;
        this.validityStatus = origin.validityStatus;
        this.comparisonStatus = origin.comparisonStatus;
        this.availableSourceList = origin.availableSourceList;
        this.fieldList = origin.fieldList.map((field) => new TextFieldExt(field));
    }

    public getField(type: TextFieldType, lcid?: number): TextFieldExt | undefined {
        let result;
        for (const field of this.fieldList) {
            if (field.fieldType == type) {
                if (lcid != undefined && field.lcid == lcid) {
                    return field;
                } else if (lcid == undefined && field.lcid == LCID.LATIN) {
                    return field;
                } else if (lcid == undefined && result == undefined) {
                    result = field;
                }
            }
        }
        return result;
    }

    public getFieldByName(name: string, lcid?: number): TextFieldExt | undefined {
        let result;
        for (const field of this.fieldList) {
            if (field.fieldName == name) {
                if (lcid != undefined && field.lcid == lcid) {
                    return field;
                } else if (lcid == undefined && field.lcid == LCID.LATIN) {
                    return field;
                } else if (lcid == undefined && result == undefined) {
                    result = field;
                }
            }
        }
        return result;
    }

    public getFieldValue(type: TextFieldType, lcid?: number) {
        return this.getField(type, lcid)?.getValue();
    }

    public getFieldValueByName(name: string, lcid?: number) {
        return this.getFieldByName(name, lcid)?.getValue();
    }
}
