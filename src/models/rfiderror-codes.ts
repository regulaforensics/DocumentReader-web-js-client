/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 7.4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Enumeration contains a set of error codes returned by SDK
 * @export
 * @enum {string}
 */
export enum RFIDErrorCodes {
    /**
    * LAYER6: Reading beyond EOF / Unexpected EOF
    */
    RFID_ERROR_LAYER6_FILE_EOF1 = 2147508866,
    /**
    * LAYER6: PWD deactivated
    */
    RFID_ERROR_LAYER6_PWD_DEACTIVATED = 2147508867,
    /**
    * LAYER6: PWD blocked
    */
    RFID_ERROR_LAYER6_PWD_BLOCKED = 2147509184,
    /**
    * LAYER6: PWD suspended
    */
    RFID_ERROR_LAYER6_PWD_SUSPEND = 2147509185,
    /**
    * LAYER6: PWD blocked 2
    */
    RFID_ERROR_LAYER6_PWD_BLOCKED2 = 2147510659,
    /**
    * LAYER6: PWD deactivated 2
    */
    RFID_ERROR_LAYER6_PWD_DEACTIVATED2 = 2147510660,
    /**
    * LAYER6: PWD suspended 2
    */
    RFID_ERROR_LAYER6_PWD_SUSPEND2 = 2147510661,
    /**
    * LAYER6: Incorrect params
    */
    RFID_ERROR_LAYER6_INCORRECT_PARAMS = 2147510912,
    /**
    * LAYER6: File selection failure / file not found
    */
    RFID_ERROR_LAYER6_FILE_NOT_FOUND = 2147510914,
    /**
    * LAYER6: No reference data
    */
    RFID_ERROR_LAYER6_NO_REFERENCE_DATA = 2147510920,
    /**
    * LAYER6: Reading beyond EOF / Unexpected EOF
    */
    RFID_ERROR_LAYER6_FILE_EOF2 = 2147511040,
    /**
    * RFID: No chip is detected
    */
    RFID_ERROR_NO_CHIP_DETECTED = 2147549185,
    /**
    * RFID: Unavailable
    */
    RFID_ERROR_NOT_AVAILABLE = 2147549186,
    /**
    * RFID: Invalid parameter in ExecuteCommand() call found
    */
    RFID_ERROR_INVALID_PARAMETER = 2147549188,
    /**
    * RFID: Device is uninitialized
    */
    RFID_ERROR_NOT_INITIALIZED = 2147549189,
    /**
    * RFID: Out of memory
    */
    RFID_ERROR_NOT_ENOUGH_MEMORY = 2147549190,
    /**
    * RFID: Invalid directory
    */
    RFID_ERROR_INVALID_DIRECTORY = 2147549192,
    /**
    * RFID: Unknown command
    */
    RFID_ERROR_UNKNOWN_COMMAND = 2147549193,
    /**
    * RFID File: IO Error
    */
    RFID_ERROR_FILE_IO_ERROR = 2147549194,
    /**
    * RFID: RFID is busy
    */
    RFID_ERROR_BUSY = 2147549195,
    /**
    * RFID: The firmware needs to be updated to a newer version
    */
    RFID_ERROR_OLD_FIRMWARE = 2147549196,
    /**
    * PCSC: Failed
    */
    RFID_ERROR_PCSC_FAILED = 2147614720,
    /**
    * PCSC: The reader is unavailable
    */
    RFID_ERROR_PCSC_READER_NOT_AVAILABLE = 2147614721,
    /**
    * PCSC: The card cannot be connected
    */
    RFID_ERROR_PCSC_CANT_CONNECT_CARD = 2147614722,
    /**
    * PCSC: The card is not connected
    */
    RFID_ERROR_PCSC_CARD_IS_NOT_CONNECTED = 2147614723,
    /**
    * PCSC: Operation is cancelled
    */
    RFID_ERROR_PCSC_OPERATION_CANCELLED = 2147614724,
    /**
    * PCSC: The card is busy
    */
    RFID_ERROR_PCSC_CARD_IS_BUSY = 2147614725,
    /**
    * PCSC: Failed Smart Card
    */
    RFID_ERROR_PCSC_FAILED_SCARD = 2147614726,
    /**
    * PCSC: ExtLe Failed
    */
    RFID_ERROR_PCSC_EXT_LE_FAILED = 2147614736,
    /**
    * LAYER6: PWD failed
    */
    RFID_ERROR_LAYER6_PWD_FAILED = 2148557760,
    /**
    * RFID: Not performed
    */
    RFID_ERROR_NOT_PERFORMED = 2197815296,
    /**
    * RFID: Session is closed
    */
    RFID_ERROR_SESSION_IS_CLOSED = 2197815297,
    /**
    * RFID: Unsupported terminal operation
    */
    RFID_ERROR_SESSION_TERMINAL_UNSUPPORTED_OPERATION = 2197815298,
    /**
    * RFID: Terminal type unknown
    */
    RFID_ERROR_SESSION_TERMINAL_TYPE_UNKNOWN = 2197815312,
    /**
    * RFID: Terminal type bad certificate
    */
    RFID_ERROR_SESSION_TERMINAL_TYPE_BAD_CERTIFICATE = 2197815313,
    /**
    * RFID: Terminal type not set
    */
    RFID_ERROR_SESSION_TERMINAL_TYPE_NOT_SET = 2197815314,
    /**
    * RFID: Unknown procedure type
    */
    RFID_ERROR_SESSION_PROCEDURE_TYPE_UNKNOWN = 2197815315,
    /**
    * RFID: Unsupported procedure type
    */
    RFID_ERROR_Session_Procedure_Type_Unsupported = 2197815316,
    /**
    * RFID: Procedure type not set
    */
    RFID_ERROR_SESSION_PROCEDURE_TYPE_NOT_SET = 2197815317,
    /**
    * RFID: Access key unknown type
    */
    RFID_ERROR_SESSION_ACCESS_KEY_UNKNOWN_TYPE = 2197815318,
    /**
    * RFID: Access key unsupported SM type
    */
    RFID_ERROR_SESSION_ACCESS_KEY_UNSUPPORTED_SM_TYPE = 2197815319,
    /**
    * RFID: Access key incorrect SM type
    */
    RFID_ERROR_SESSION_ACCESS_KEY_INCORRECT_SM_TYPE = 2197815320,
    /**
    * RFID: Access key restricted
    */
    RFID_ERROR_SESSION_ACCESS_KEY_RESTRICTED = 2197815321,
    /**
    * RFID: Access key incorrect data
    */
    RFID_ERROR_SESSION_ACCESS_KEY_INCORRECT_DATA = 2197815322,
    /**
    * RFID: Access key not set
    */
    RFID_ERROR_SESSION_ACCESS_KEY_NOT_SET = 2197815323,
    /**
    * RFID: PWD management not authorized
    */
    RFID_ERROR_SESSION_PWD_MANAGEMENT_NOT_AUTHORIZED = 2197815324,
    /**
    * RFID: Access control unknown type
    */
    RFID_ERROR_SESSION_ACCESS_CONTROL_UNKNOWN_TYPE = 2197815328,
    /**
    * RFID: SM required
    */
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_SM = 2197815329,
    /**
    * RFID: PACE required
    */
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_PACE = 2197815330,
    /**
    * RFID: CA keys required
    */
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_CA_KEYS = 2197815331,
    /**
    * RFID: TA required
    */
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_TA = 2197815332,
    /**
    * RFID: CA required
    */
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_CA = 2197815333,
    /**
    * RFID: Incorrect option CA
    */
    RFID_ERROR_SESSION_ACCESS_CONTROL_INCORRECT_OPTION_CA = 2197815334,
    /**
    * RFID: CA failed
    */
    RFID_ERROR_SESSION_ACCESS_CONTROL_CA_FAILED = 2197815335,
    /**
    * RFID: TA failed
    */
    RFID_ERROR_SESSION_ACCESS_CONTROL_TA_FAILED = 2197815336,
    /**
    * RFID: AA failed
    */
    RFID_ERROR_SESSION_ACCESS_CONTROL_AA_FAILED = 2197815337,
    /**
    * RFID: RI failed
    */
    RFID_ERROR_SESSION_ACCESS_CONTROL_RI_FAILED = 2197815338,
    /**
    * RFID: SO signature check failed
    */
    RFID_ERROR_SESSION_PA_SIGNATURE_CHECK_FAILED = 2197815344,
    /**
    * RFID: Hash check failed
    */
    RFID_ERROR_SESSION_PA_HASH_CHECK_FAILED = 2197815345,
    /**
    * RFID: Invalid aux data - date of expiry
    */
    RFID_ERROR_SESSION_INVALID_AUX_DATA_DATE_OF_EXPIRY = 2197815360,
    /**
    * RFID: Invalid aux data - date of birth
    */
    RFID_ERROR_SESSION_INVALID_AUX_DATA_DATE_OF_BIRTH = 2197815361,
    /**
    * RFID: Invalid aux data - community ID
    */
    RFID_ERROR_SESSION_INVALID_AUX_DATA_COMMUNITY_ID = 2197815362,
    /**
    * RFID: eSign requires app selection
    */
    RFID_ERROR_SESSION_E_SIGN_REQUIRES_APP_SELECTION = 2197815376,
    /**
    * RFID: eSign PIN not set
    */
    RFID_ERROR_SESSION_E_SIGN_PIN_NOT_SET = 2197815377,
    /**
    * RFID: eSign PIN not verified
    */
    RFID_ERROR_SESSION_E_SIGN_PIN_NOT_VERIFIED = 2197815378,
    /**
    * RFID: Incorrect data
    */
    RFID_ERROR_SESSION_INCORRECT_DATA = 2197815392,
    /**
    * RFID file: Insufficient data
    */
    RFID_ERROR_SESSION_FILE_NOT_ENOUGH_DATA = 2197880832,
    /**
    * RFID file: Incorrect data
    */
    RFID_ERROR_SESSION_FILE_INCORRECT_DATA = 2197946368,
    /**
    * RFID file: Unexpected data
    */
    RFID_ERROR_SESSION_FILE_UNEXPECTED_DATA = 2198011904,
    /**
    * RFID file: Contains unexpected data
    */
    RFID_ERROR_SESSION_FILE_CONTENTS_UNEXPECTED_DATA = 2198077440,
    /**
    * RFID file: Wrong tag
    */
    RFID_ERROR_SESSION_FILE_WRONG_TAG = 2198142976,
    /**
    * RFID file: Cannot use data
    */
    RFID_ERROR_SESSION_FILE_CANT_USE_DATA = 2198208512,
    /**
    * RFID file: Cannot read data
    */
    RFID_ERROR_SESSION_FILE_CANT_READ_DATA = 2198274048,
    /**
    * RFID file: Access denied
    */
    RFID_ERROR_SESSION_FILE_ACCESS_DENIED = 2198339584,
    /**
    * RFID: Layer 34 - No error
    */
    RFID_ERROR_LAYER34_NO_ERROR = 2214592512,
    /**
    * RFID: Layer 34 - Timeout
    */
    RFID_ERROR_LAYER34_TIME_OUT = 2214658048,
    /**
    * RFID: Layer 34 - Collision
    */
    RFID_ERROR_LAYER34_COLLISION = 2214723584,
    /**
    * RFID: Layer 34 - CRC
    */
    RFID_ERROR_LAYER34_CRC = 2214789120,
    /**
    * RFID: Layer 34 - Data integrity
    */
    RFID_ERROR_LAYER34_DATA_INTEGRITY = 2214854656,
    /**
    * RFID: Layer 34 - Data length
    */
    RFID_ERROR_LAYER34_DATA_LENGTH = 2214920192,
    /**
    * RFID: Layer 34 - RFU
    */
    RFID_ERROR_Layer34_RFU = 2214985728,
    /**
    * RFID: Layer 34 - Too many collision
    */
    RFID_ERROR_LAYER34_COLLISION_TOO_MANY = 2215051264,
    /**
    * RFID: Layer 34 - Protocol B
    */
    RFID_ERROR_LAYER34_PROTOCOL_B = 2215116800,
    /**
    * RFID: Layer 34 - Data contents
    */
    RFID_ERROR_LAYER34_DATA_CONTENTS = 2215182336,
    /**
    * RFID: Layer 34 - Protocol
    */
    RFID_ERROR_LAYER34_PROTOCOL = 2215247872,
    /**
    * RFID: Layer 34 - Globa timeout
    */
    RFID_ERROR_LAYER34_GLOBAL_TIME_OUT = 2215313408,
    /**
    * RFID: Layer 34 - MIFARE auth
    */
    RFID_ERROR_LAYER34_MIFARE_AUTH = 2215378944,
    /**
    * RFID: Layer 34 - SAM error
    */
    RFID_ERROR_LAYER34_SAM_ERROR = 2215444480,
    /**
    * RFID: Layer 34 - SAM collision
    */
    RFID_ERROR_LAYER34_SAM_COLLISION = 2215510016,
    /**
    * RFID: Layer 34 - SAM acknowledge
    */
    RFID_ERROR_LAYER34_SAM_ACKNOWLEDGE = 2215575552,
    /**
    * LAYER6: Secure Messaging was not activated
    */
    RFID_ERROR_LAYER6_SECURITY_MANAGER = 2248146944,
    /**
    * LAYER6: ISO7816_A_03 Application selection failure
    */
    RFID_ERROR_LAYER6_APP_SELECTION_FAILURE = 2248146945,
    /**
    * LAYER6: ISO7816_B_01 Mutual authentication MAC failure
    */
    RFID_ERROR_LAYER6_MUTUAL_AUTH_MAC_FAIL = 2248147200,
    /**
    * LAYER6: ISO7816_B_02 Mutual authentication encryption failure
    */
    RFID_ERROR_LAYER6_MUTUAL_AUTH_ENC_FAIL = 2248147201,
    /**
    * LAYER6: ISO7816_B_03 Mutual authentication failure
    */
    RFID_ERROR_LAYER6_MUTUAL_AUTH_FAILURE = 2248147202,
    /**
    * LAYER6: ISO7816_B_03 Mutual authentication failure data
    */
    RFID_ERROR_LAYER6_MUTUAL_AUTH_FAILURE_DATA = 2248147203,
    /**
    * LAYER6: SM failure – MAC missing
    */
    RFID_ERROR_LAYER6_SM_DO_8E_MISSING = 2248147456,
    /**
    * LAYER6: SM failure – cryptogram missing
    */
    RFID_ERROR_LAYER6_SM_DO_87_MISSING = 2248147457,
    /**
    * LAYER6: SM failure – secured status bytes missing
    */
    RFID_ERROR_LAYER6_SM_DO_99_MISSING = 2248147458,
    /**
    * LAYER6: SM failure – incorrect MAC
    */
    RFID_ERROR_LAYER6_SM_MAC_INCORRECT = 2248147459,
    /**
    * LAYER6: SM failure – incorrect cryptogram
    */
    RFID_ERROR_LAYER6_SM_DO_87_INCORRECT = 2248147460,
    /**
    * LAYER6: Not TLV response data
    */
    RFID_ERROR_LAYER6_NON_TLV_RESPONSE_DATA = 2248147712,
    /**
    * LAYER6: Wrong data length (APDU_INS_GET_CHALLENGE)
    */
    RFID_ERROR_LAYER6_WRONG_RND_ICC_LENGTH = 2248147713,
    /**
    * LAYER6: APDU_INS_INTERNAL_AUTHENTICATE failure
    */
    RFID_ERROR_LAYER6_INT_AUTH_FAILURE = 2248147714,
    /**
    * LAYER6: MSE:Set KAT failure
    */
    RFID_ERROR_LAYER6_MSE_SET_KAT_FAILURE = 2248147715,
    /**
    * LAYER6: MSE:Set DST failure
    */
    RFID_ERROR_LAYER6_MSE_SET_DST_FAILURE = 2248147716,
    /**
    * LAYER6: PSO CERTIFICATE failure
    */
    RFID_ERROR_LAYER6_PSO_CERTIFICATE_FAILURE = 2248147717,
    /**
    * LAYER6: MSE:Set AT failure
    */
    RFID_ERROR_LAYER6_MSE_SET_AT_FAILURE = 2248147718,
    /**
    * LAYER6: GET CHALLENGE failure
    */
    RFID_ERROR_LAYER6_GET_CHALLENGE_FAILURE = 2248147719,
    /**
    * LAYER6: APDU_INS_EXTERNAL_AUTHENTICATE (external authentication) failure
    */
    RFID_ERROR_LAYER6_EXT_AUTH_FAILURE = 2248147720,
    /**
    * LAYER6: General Authenticity Failure
    */
    RFID_ERROR_LAYER6_GENERAL_AUTH_FAILURE = 2248147721,
    /**
    * RFID: Failed
    */
    RFID_ERROR_FAILED = 4294967295,
    /**
    * RFID: No error
    */
    RFID_ERROR_NO_ERROR = 1,
    /**
    * RFID: The requested operation is already performed
    */
    RFID_ERROR_ALREADY_DONE = 2
}

