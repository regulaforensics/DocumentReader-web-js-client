import {
    AuthenticityCheckList as BaseAuthenticityCheckList, AuthenticityCheckResult
} from "../../models/index.js";
import {Fiber} from "./fiber.js";
import {Ident} from "./ident.js";
import {ImageIdent} from "./image-ident.js";
import {OCRSecurityText} from "./ocr-security-text.js";
import {SecurityFeature} from "./security-feature.js";

export class Authenticity implements BaseAuthenticityCheckList {
    List: Array<AuthenticityCheckResult>;

    constructor(origin: BaseAuthenticityCheckList) {
        this.List = origin.List
    }

    public uvLuminescence(): SecurityFeature | undefined {
        const uvLuminescenceType = 1
        return this.securityFeatureOrUndefined(uvLuminescenceType)
    }

    public irB900(): SecurityFeature | undefined {
        const irB900Type = 4
        return this.securityFeatureOrUndefined(irB900Type)
    }

    public imagePattern(): Ident | undefined {
        const imagePatternType = 4;
        return this.identOrUndefined(imagePatternType);
    }

    public axialProtection(): SecurityFeature | undefined {
        const axialProtectionType = 8;
        return this.securityFeatureOrUndefined(axialProtectionType);
    }

    public uvFiber(): Fiber | undefined {
        const uvFiberType = 16;
        return this.fiberOrUndefined(uvFiberType);
    }

    public irVisibility(): Ident | undefined {
        const irVisibilityType = 32;
        return this.identOrUndefined(irVisibilityType);
    }

    public ocrSecurityText(): OCRSecurityText | undefined {
        const ocrSecurityTextType = 64;
        return this.ocrSecurityTextOrUndefined(ocrSecurityTextType);
    }

    public ipi(): ImageIdent | undefined {
        const ipiType = 128;
        return this.imageIdentOrUndefined(ipiType);
    }

    public irImage(): ImageIdent | undefined {
        const irImageType = 256;
        return this.imageIdentOrUndefined(irImageType);
    }

    public embedImage(): SecurityFeature | undefined {
        const embedImageType = 512;
        return this.securityFeatureOrUndefined(embedImageType);
    }

    public ovi(): Ident | undefined {
        const oviType = 1024;
        return this.identOrUndefined(oviType);
    }

    public irLuminescence(): Ident | undefined {
        const irLuminescenceType = 2048;
        return this.identOrUndefined(irLuminescenceType);
    }

    public holograms(): SecurityFeature | undefined {
        const hologramsType = 4096;
        return this.securityFeatureOrUndefined(hologramsType);
    }

    public imageArea(): SecurityFeature | undefined {
        const imageAreaType = 8192;
        return this.securityFeatureOrUndefined(imageAreaType);
    }

    public uvBackground(): Fiber | undefined {
        const uvBackgroundType = 16384;
        return this.fiberOrUndefined(uvBackgroundType);
    }

    public portraitComparison(): Ident | undefined {
        const portraitComparisonType = 32768;
        return this.identOrUndefined(portraitComparisonType);
    }

    public barcodeFormatCheck(): SecurityFeature | undefined {
        const barcodeFormatCheckType = 65536;
        return this.securityFeatureOrUndefined(barcodeFormatCheckType);
    }

    public kinegram(): Ident | undefined {
        const kinegramType = 131072;
        return this.identOrUndefined(kinegramType);
    }

    public letterScreen(): Ident | undefined {
        const letterScreenType = 262144;
        return this.identOrUndefined(letterScreenType);
    }

    public hologramsDetection(): Ident | undefined {
        const hologramsDetectionType = 524288;
        return this.identOrUndefined(hologramsDetectionType);
    }

    public fingerprintComparison(): Ident | undefined {
        const fingerprintComparisonType = 1048576;
        return this.identOrUndefined(fingerprintComparisonType);
    }

    public cancellingDocumentDetector(): SecurityFeature | undefined {
        const cancellingDocumentDetectorType = 2097152;
        return this.securityFeatureOrUndefined(cancellingDocumentDetectorType);
    }


    public resultByType(authenticityType: number): AuthenticityCheckResult | undefined {
        for (const result of this.List) {
            if (result.Type == authenticityType) {
                return result
            }
        }
        return undefined
    }

    private fiberOrUndefined(authenticityType: number): Fiber | undefined {
        const result = this.resultByType(authenticityType)
        if (result) {
            return new Fiber(result)
        }
        return undefined
    }

    private identOrUndefined(authenticityType: number): Ident | undefined {
        const result = this.resultByType(authenticityType)
        if (result) {
            return new Ident(result)
        }
        return undefined
    }

    private imageIdentOrUndefined(authenticityType: number): ImageIdent | undefined {
        const result = this.resultByType(authenticityType)
        if (result) {
            return new ImageIdent(result)
        }
        return undefined
    }

    private ocrSecurityTextOrUndefined(authenticityType: number): OCRSecurityText | undefined {
        const result = this.resultByType(authenticityType)
        if (result) {
            return new OCRSecurityText(result)
        }
        return undefined
    }

    private securityFeatureOrUndefined(authenticityType: number): SecurityFeature | undefined {
        const result = this.resultByType(authenticityType)
        if (result) {
            return new SecurityFeature(result)
        }
        return undefined
    }
}