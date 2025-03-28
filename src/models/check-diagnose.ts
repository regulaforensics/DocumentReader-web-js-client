/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.   # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 7.6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Enumeration contains identifiers which determinate the single document element authenticity check outcome reason: https://docs.regulaforensics.com/develop/doc-reader-sdk/web-service/development/enums/check-diagnose/
 * @export
 * @enum {number}
 */

export enum CheckDiagnose {
    UNKNOWN = 0,
    PASS = 1,
    INVALID_INPUT_DATA = 2,
    INTERNAL_ERROR = 3,
    EXCEPTION_IN_MODULE = 4,
    UNCERTAIN_VERIFICATION = 5,
    NECESSARY_IMAGE_NOT_FOUND = 7,
    PHOTO_SIDES_NOT_FOUND = 8,
    INVALID_CHECKSUM = 10,
    SYNTAX_ERROR = 11,
    LOGIC_ERROR = 12,
    SOURCES_COMPARISON_ERROR = 13,
    FIELDS_COMPARISON_LOGIC_ERROR = 14,
    INVALID_FIELD_FORMAT = 15,
    TRUE_LUMINESCENCE_ERROR = 20,
    FALSE_LUMINESCENCE_ERROR = 21,
    FIXED_PATTERN_ERROR = 22,
    LOW_CONTRAST_IN_IR_LIGHT = 23,
    INCORRECT_BACKGROUND_LIGHT = 24,
    BACKGROUND_COMPARISON_ERROR = 25,
    INCORRECT_TEXT_COLOR = 26,
    PHOTO_FALSE_LUMINESCENCE = 27,
    TOO_MUCH_SHIFT = 28,
    CONTACT_CHIP_TYPE_MISMATCH = 29,
    FIBERS_NOT_FOUND = 30,
    TOO_MANY_OBJECTS = 31,
    SPECKS_IN_UV = 33,
    TOO_LOW_RESOLUTION = 34,
    INVISIBLE_ELEMENT_PRESENT = 40,
    VISIBLE_ELEMENT_ABSENT = 41,
    ELEMENT_SHOULD_BE_COLORED = 42,
    ELEMENT_SHOULD_BE_GRAYSCALE = 43,
    PHOTO_WHITE_IR_DONT_MATCH = 44,
    UV_DULL_PAPER_MRZ = 50,
    FALSE_LUMINESCENCE_IN_MRZ = 51,
    UV_DULL_PAPER_PHOTO = 52,
    UV_DULL_PAPER_BLANK = 53,
    UV_DULL_PAPER_ERROR = 54,
    FALSE_LUMINESCENCE_IN_BLANK = 55,
    BAD_AREA_IN_AXIAL = 60,
    FALSE_IPI_PARAMETERS = 65,
    ENCRYPTED_IPI_NOT_FOUND = 66,
    ENCRYPTED_IPI_DATA_DONT_MATCH = 67,
    FIELD_POS_CORRECTOR_HIGHLIGHT_IR = 80,
    FIELD_POS_CORRECTOR_GLARES_IN_PHOTO_AREA = 81,
    FIELD_POS_CORRECTOR_PHOTO_REPLACED = 82,
    FIELD_POS_CORRECTOR_LANDMARKS_CHECK_ERROR = 83,
    FIELD_POS_CORRECTOR_FACE_PRESENCE_CHECK_ERROR = 84,
    FIELD_POS_CORRECTOR_FACE_ABSENCE_CHECK_ERROR = 85,
    FIELD_POS_CORRECTOR_INCORRECT_HEAD_POSITION = 86,
    OVI_IR_INVISIBLE = 90,
    OVI_INSUFFICIENT_AREA = 91,
    OVI_COLOR_INVARIABLE = 92,
    OVI_BAD_COLOR_FRONT = 93,
    OVI_BAD_COLOR_SIDE = 94,
    OVI_WIDE_COLOR_SPREAD = 95,
    OVI_BAD_COLOR_PERCENT = 96,
    HOLOGRAM_ELEMENT_ABSENT = 100,
    HOLOGRAM_SIDE_TOP_IMAGES_ABSENT = 101,
    HOLOGRAM_ELEMENT_PRESENT = 102,
    HOLOGRAM_FRAMES_IS_ABSENT = 103,
    HOLOGRAM_HOLO_FIELD_IS_ABSENT = 104,
    PHOTO_PATTERN_INTERRUPTED = 110,
    PHOTO_PATTERN_SHIFTED = 111,
    PHOTO_PATTERN_DIFFERENT_COLORS = 112,
    PHOTO_PATTERN_IR_VISIBLE = 113,
    PHOTO_PATTERN_NOT_INTERSECT = 114,
    PHOTO_SIZE_IS_WRONG = 115,
    PHOTO_PATTERN_INVALID_COLOR = 116,
    PHOTO_PATTERN_SHIFTED_VERT = 117,
    PHOTO_PATTERN_PATTERN_NOT_FOUND = 118,
    PHOTO_PATTERN_DIFFERENT_LINES_THICKNESS = 119,
    PHOTO_IS_NOT_RECTANGLE = 120,
    PHOTO_CORNERS_IS_WRONG = 121,
    DOCUMENT_IS_CANCELLING = 122,
    TEXT_COLOR_SHOULD_BE_BLUE = 130,
    TEXT_COLOR_SHOULD_BE_GREEN = 131,
    TEXT_COLOR_SHOULD_BE_RED = 132,
    TEXT_SHOULD_BE_BLACK = 133,
    BARCODE_WAS_READ_WITH_ERRORS = 140,
    BARCODE_DATA_FORMAT_ERROR = 141,
    BARCODE_SIZE_PARAMS_ERROR = 142,
    NOT_ALL_BARCODES_READ = 143,
    GLARES_IN_BARCODE_AREA = 144,
    NO_CERTIFICATE_FOR_DIGITAL_SIGNATURE_CHECK = 145,
    PORTRAIT_COMPARISON_PORTRAITS_DIFFER = 150,
    PORTRAIT_COMPARISON_NO_SERVICE_REPLY = 151,
    PORTRAIT_COMPARISON_SERVICE_ERROR = 152,
    PORTRAIT_COMPARISON_NOT_ENOUGH_IMAGES = 153,
    PORTRAIT_COMPARISON_NO_LIVE_PHOTO = 154,
    PORTRAIT_COMPARISON_NO_SERVICE_LICENSE = 155,
    PORTRAIT_COMPARISON_NO_PORTRAIT_DETECTED = 156,
    MOBILE_IMAGES_UNSUITABLE_LIGHT_CONDITIONS = 160,
    MOBILE_IMAGES_WHITE_UV_NO_DIFFERENCE = 161,
    FINGERPRINTS_COMPARISON_MISMATCH = 170,
    HOLO_PHOTO_FACE_NOT_DETECTED = 180,
    HOLO_PHOTO_FACE_COMPARISON_FAILED = 181,
    HOLO_PHOTO_GLARE_IN_CENTER_ABSENT = 182,
    HOLO_PHOTO_HOLO_ELEMENT_SHAPE_ERROR = 183,
    HOLO_PHOTO_ALGORITHMS_STEPS_ERROR = 184,
    HOLO_PHOTO_HOLO_AREAS_NOT_LOADED = 185,
    HOLO_PHOTO_FINISHED_BY_TIMEOUT = 186,
    HOLO_PHOTO_DOCUMENT_OUTSIDE_FRAME = 187,
    LIVENESS_DEPTH_CHECK_FAILED = 190,
    MRZ_QUALITY_WRONG_SYMBOL_POSITION = 200,
    MRZ_QUALITY_WRONG_BACKGROUND = 201,
    MRZ_QUALITY_WRONG_MRZ_WIDTH = 202,
    MRZ_QUALITY_WRONG_MRZ_HEIGHT = 203,
    MRZ_QUALITY_WRONG_LINE_POSITION = 204,
    MRZ_QUALITY_WRONG_FONT_TYPE = 205,
    OCR_QUALITY_TEXT_POSITION = 220,
    OCR_QUALITY_INVALID_FONT = 221,
    OCR_QUALITY_INVALID_BACKGROUND = 222,
    LASINK_INVALID_LINES_FREQUENCY = 230,
    DOC_LIVENESS_DOCUMENT_NOT_LIVE = 238,
    DOC_LIVENESS_BLACK_AND_WHITE_COPY_DETECTED = 239,
    DOC_LIVENESS_ELECTRONIC_DEVICE_DETECTED = 240,
    DOC_LIVENESS_INVALID_BARCODE_BACKGROUND = 241,
    CHD_ICAO_IDB_BASE32_ERROR = 243,
    CHD_ICAO_IDB_ZIPPED_ERROR = 244,
    CHD_ICAO_IDB_MESSAGE_ZONE_EMPTY = 245,
    CHD_ICAO_IDB_SIGNATURE_MUST_BE_PRESENT = 246,
    CHD_ICAO_IDB_SIGNATURE_MUST_NOT_BE_PRESENT = 247,
    CHD_ICAO_IDB_CERTIFICATE_MUST_NOT_BE_PRESENT = 248,
    CHD_INCORRECT_OBJECT_COLOR = 250
}



