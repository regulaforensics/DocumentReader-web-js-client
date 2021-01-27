import {AuthenticityCheckResult, CheckResult, PhotoIdentResult, SecurityFeatureType} from "../../models";

export class ImageIdent implements AuthenticityCheckResult {
    List: Array<PhotoIdentResult>;
    Result: CheckResult;
    Type: SecurityFeatureType;

    constructor(origin: AuthenticityCheckResult) {
        this.List = <Array<PhotoIdentResult>>origin.List
        this.Result = origin.Result
        this.Type = origin.Type
    }
}