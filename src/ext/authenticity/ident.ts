import {
    AuthenticityCheckResult,
    CheckResult,
    IdentResult,
    SecurityFeatureType
} from "../../models";

export class Ident implements AuthenticityCheckResult {
    List: Array<IdentResult>;
    Result: CheckResult;
    Type: SecurityFeatureType;

    constructor(origin: AuthenticityCheckResult) {
        this.List = <Array<IdentResult>>origin.List
        this.Result = origin.Result
        this.Type = origin.Type
    }

    public itemByElementType(elementType: SecurityFeatureType): IdentResult | undefined {
        for (const result of this.List) {
            if (result.ElementType === elementType) {
                return result
            }
        }
        return undefined
    }
}