import {AuthenticityCheckResult, CheckResult, SecurityFeatureResult, SecurityFeatureType} from "../../models";

export class SecurityFeature implements AuthenticityCheckResult {
    List: Array<SecurityFeatureResult>;
    Result: CheckResult;
    Type: SecurityFeatureType;

    constructor(origin: AuthenticityCheckResult) {
        this.List = <Array<SecurityFeatureResult>>origin.List
        this.Result = origin.Result
        this.Type = origin.Type
    }

    public itemByElementType(elementType: SecurityFeatureType): SecurityFeatureResult | undefined {
        for (const result of this.List) {
            if (result.ElementType === elementType) {
                return result
            }
        }
        return undefined
    }
}