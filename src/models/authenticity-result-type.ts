/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 7.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Enumeration describes available authenticity checks: https://docs.regulaforensics.com/develop/doc-reader-sdk/web-service/development/enums/authenticity-result-type/.
 * @export
 * @enum {string}
 */
export enum AuthenticityResultType {
    /**
    * Document luminescence check in UV light
    */
    UV_LUMINESCENCE = 1,
    /**
    * B900 ink MRZ contrast check in IR light
    */
    IR_B900 = 2,
    /**
    * Image patterns presence/absence check (position, shape, color)
    */
    IMAGE_PATTERN = 4,
    /**
    * Confirm laminate integrity check in axial light
    */
    AXIAL_PROTECTION = 8,
    /**
    * Protection fibers presence check (color, density) in UV light
    */
    UV_FIBERS = 16,
    /**
    * Document elements visibility check in IR light
    */
    IR_VISIBILITY = 32,
    /**
    * OCR for the text field in UV light comparison with other text sources check
    */
    OCR_SECURITY_TEXT = 64,
    /**
    * Invisible Personal Information (IPI) visualization
    */
    IPI = 128,
    /**
    * Owner&#39;s photo embedding check (is photo printed or sticked)
    */
    PHOTO_EMBED_TYPE = 512,
    /**
    * OVI check. Deprecated, use Document liveness check instead
    */
    OVI = 1024,
    /**
    * Hologram presence check. Deprecated
    */
    HOLOGRAMS = 4096,
    /**
    * Owner&#39;s photo area advanced check (photo shape, size, position, etc.)
    */
    PHOTO_AREA = 8192,
    /**
    * Portrait comparison check (document printed vs chip vs live)
    */
    PORTRAIT_COMPARISON = 32768,
    /**
    * Barcode format check (code metadata, data format, contents format, etc.)
    */
    BARCODE_FORMAT_CHECK = 65536,
    /**
    * Kinegram check
    */
    KINEGRAM = 131072,
    /**
    * LetterScreen check
    */
    LETTER_SCREEN = 262144,
    /**
    * Hologram detection and validation check
    */
    HOLOGRAM_DETECTION = 524288,
    /**
    * Fingerprint comparison check
    */
    FINGERPRINT_COMPARISON = 1048576,
    /**
    * Document liveness check
    */
    LIVENESS = 2097152,
    /**
    * Extended OCR Check
    */
    EXTENDED_OCR_CHECK = 4194304,
    /**
    * Extended MRZ check
    */
    EXTENDED_MRZ_CHECK = 8388608,
    /**
    * Encrypted IPI
    */
    ENCRYPTED_IPI = 16777216
}



