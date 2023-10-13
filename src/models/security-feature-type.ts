/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 6.9.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Enumeration contains identifiers determining type of features for a document authenticity checks: https://docs.regulaforensics.com/develop/doc-reader-sdk/web-service/development/enums/security-feature-type/
 * @export
 * @enum {string}
 */
export enum SecurityFeatureType {
    /**
    * Blank element
    */
    BLANK = 0,
    /**
    * Personalization element
    */
    FILL = 1,
    /**
    * Photo
    */
    PHOTO = 2,
    /**
    * MRZ
    */
    MRZ = 3,
    /**
    * False luminescence
    */
    FALSE_LUMINESCENCE = 4,
    /**
    * Hologram (static)
    */
    HOLO_SIMPLE = 5,
    /**
    * Hologram (static verify)
    */
    HOLO_VERIFY_STATIC = 6,
    /**
    * Hologram (static verify multiple)
    */
    HOLO_VERIFY_MULTI_STATIC = 7,
    /**
    * Hologram (dynamic verify)
    */
    HOLO_VERIFY_DYNAMIC = 8,
    /**
    * Pattern (non-interrupted)
    */
    PATTERN_NOT_INTERRUPTED = 9,
    /**
    * Pattern (non-shifted)
    */
    PATTERN_NOT_SHIFTED = 10,
    /**
    * Pattern (same colors)
    */
    PATTERN_SAME_COLORS = 11,
    /**
    * Pattern (IR invisible)
    */
    PATTERN_IR_INVISIBLE = 12,
    /**
    * Photo size
    */
    PHOTO_SIZE_CHECK = 13,
    /**
    * Main vs ghost portrait comparison
    */
    PORTRAIT_COMPARISON_VS_GHOST = 14,
    /**
    * Main vs RFID portrait comparison
    */
    PORTRAIT_COMPARISON_VS_RFID = 15,
    /**
    * Main vs other page portrait comparison
    */
    PORTRAIT_COMPARISON_VS_VISUAL = 16,
    /**
    * Barcode
    */
    BARCODE = 17,
    /**
    * Pattern (different line thickness)
    */
    PATTERN_DIFFERENT_LINES_THICKNESS = 18,
    /**
    * Main vs live camera portrait comparison
    */
    PORTRAIT_COMPARISON_VS_CAMERA = 19,
    /**
    * RFID vs live camera portrait comparison
    */
    PORTRAIT_COMPARISON_RFID_VS_CAMERA = 20,
    /**
    * Ghost photo
    */
    GHOST_PHOTO = 21,
    /**
    * Clear ghost photo
    */
    CLEAR_GHOST_PHOTO = 22,
    /**
    * Invisible object
    */
    INVISIBLE_OBJECT = 23,
    /**
    * Low contrast object
    */
    LOW_CONTRAST_OBJECT = 24,
    /**
    * Photo color check
    */
    PHOTO_COLOR = 25,
    /**
    * Photo squareness
    */
    PHOTO_SHAPE = 26,
    /**
    * Photo corners shape
    */
    PHOTO_CORNERS = 27,
    /**
    * OCR
    */
    OCR = 28,
    /**
    * External vs main portrait comparison
    */
    PORTRAIT_COMPARISON_EXT_VS_VISUAL = 29,
    /**
    * External vs RFID portrait comparison
    */
    PORTRAIT_COMPARISON_EXT_VS_RFID = 30,
    /**
    * External vs live camera portrait comparison
    */
    PORTRAIT_COMPARISON_EXT_VS_CAMERA = 31,
    /**
    * Portrait Depth
    */
    LIVENESS_DEPTH = 32,
    /**
    * Micro text
    */
    MICRO_TEXT = 33,
    /**
    * Fluorescent Object
    */
    FLUORESCENT_OBJECT = 34,
    /**
    * Facial landmarks check
    */
    LANDMARK_CHECK = 35,
    /**
    * Facial image presence
    */
    FACE_PRESENCE = 36,
    /**
    * Facial image absence
    */
    FACE_ABSENCE = 38,
    /**
    * Liveness screen capture
    */
    LIVENESS_SCREEN_CAPTURE = 39,
    /**
    * Liveness electronic device
    */
    LIVENESS_ELECTRONIC_DEVICE = 40,
    /**
    * Liveness OVI
    */
    LIVENESS_OVI = 41,
    /**
    * Barcode size check
    */
    BARCODE_SIZE_CHECK = 42,
    /**
    * LASINK
    */
    LASINK = 43,
    /**
    * Liveness MLI
    */
    LIVENESS_MLI = 44,
    /**
    * Liveness barcode background
    */
    LIVENESS_BARCODE_BACKGROUND = 45
}



