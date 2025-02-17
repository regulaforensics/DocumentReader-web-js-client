import { AuthenticityCheckResult, AuthenticityResultType, CheckResult, OCRSecurityTextResult } from '../../models';

export class OCRSecurityTextChecks {
    List: Array<OCRSecurityTextResult>;
    Result: CheckResult;
    Type: AuthenticityResultType;

    constructor(origin: AuthenticityCheckResult) {
        this.List = <Array<OCRSecurityTextResult>>origin.List;
        this.Result = origin.Result;
        this.Type = origin.Type;
    }
}
