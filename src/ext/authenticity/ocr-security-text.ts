import {AuthenticityCheckResult, CheckResult, OCRSecurityTextResult, SecurityFeatureType} from "../../models";

export class OCRSecurityText implements AuthenticityCheckResult {
    List: Array<OCRSecurityTextResult>;
    Result: CheckResult;
    Type: SecurityFeatureType;

    constructor(origin: AuthenticityCheckResult) {
        this.List = <Array<OCRSecurityText>>origin.List
        this.Result = origin.Result
        this.Type = origin.Type
    }
}