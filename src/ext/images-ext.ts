import { GraphicFieldType, Images, ImagesField, ImagesAvailableSource, ImagesFieldValue, Source } from '../models';
import * as converter from 'base64-arraybuffer';

export class ImagesExt implements Images {
    availableSourceList: Array<ImagesAvailableSource>;
    fieldList: Array<ImagesFieldWrapper>;
    fieldCount: number;
    availableSourceCount: number;

    constructor(origin: Images) {
        this.availableSourceList = origin.availableSourceList;
        this.fieldList = origin.fieldList.map((field) => new ImagesFieldWrapper(field));
        this.fieldCount = origin.fieldCount;
        this.availableSourceCount = origin.availableSourceCount;
    }

    public getField(type: GraphicFieldType): ImagesFieldWrapper | undefined {
        for (const field of this.fieldList) {
            if (field.fieldType == type) {
                return field;
            }
        }
    }

    public getFields(type: GraphicFieldType): Array<ImagesFieldWrapper> | undefined {
        return this.fieldList.filter((field) => field.fieldType == type);
    }
}

export class ImagesFieldWrapper implements ImagesField {
    fieldName: string;
    fieldType: GraphicFieldType;
    valueList: Array<ImagesFieldValue>;
    valueCount: number;

    constructor(origin: ImagesField) {
        this.fieldName = origin.fieldName;
        this.fieldType = origin.fieldType;
        this.valueList = origin.valueList;
        this.valueCount = origin.valueCount;
    }

    public getValue(source?: Source, original = false) {
        const fieldValue = source
            ? this.getValueBySource(source)
            : this.getValueBySource(Source.RFID) ||
              this.getValueBySource(Source.VISUAL) ||
              this.getValueBySource(Source.BARCODE);

        if (!fieldValue) return;

        const valueToConvert = original && fieldValue.originalValue ? fieldValue.originalValue : fieldValue.value;

        return valueToConvert ? base64ToBuffer(valueToConvert) : undefined;
    }

    private getValueBySource(source: Source): ImagesFieldValue | undefined {
        for (const value of this.valueList) {
            if (value.source == source) {
                return value;
            }
        }
    }
}

function base64ToBuffer(str: string) {
    return converter.decode(str);
}
