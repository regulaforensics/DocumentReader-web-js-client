import { GraphicFieldType, Images, ImagesField, ImagesAvailableSource, ImagesFieldValue, Source } from '../models';
import * as converter from 'base64-arraybuffer';

export class ImagesExt implements Images {
    availableSourceList: Array<ImagesAvailableSource>;
    fieldList: Array<ImagesFieldWrapper>;

    constructor(origin: Images) {
        this.availableSourceList = origin.availableSourceList;
        this.fieldList = origin.fieldList.map((field) => new ImagesFieldWrapper(field));
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

    constructor(origin: ImagesField) {
        this.fieldName = origin.fieldName;
        this.fieldType = origin.fieldType;
        this.valueList = origin.valueList;
    }

    public getValue(source?: Source, original = false) {
        let fieldValue;
        if (!source) {
            // rfid -> visual -> barcode
            fieldValue =
                this.getValueBySource(Source.RFID) ||
                this.getValueBySource(Source.VISUAL) ||
                this.getValueBySource(Source.BARCODE);
        } else {
            fieldValue = this.getValueBySource(source);
        }

        if (!fieldValue) return;

        if (original && fieldValue.originalValue) {
            return base64ToBuffer(fieldValue.originalValue);
        }
        return base64ToBuffer(fieldValue.value);
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
