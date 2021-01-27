import {AuthenticityCheckResult, CheckResult, FiberResult, SecurityFeatureType} from "../../models";

export class Fiber implements AuthenticityCheckResult {
    List: Array<FiberResult>;
    Result: CheckResult;
    Type: SecurityFeatureType;

    constructor(origin: AuthenticityCheckResult) {
        this.List = <Array<FiberResult>>origin.List
        this.Result = origin.Result
        this.Type = origin.Type
    }
}