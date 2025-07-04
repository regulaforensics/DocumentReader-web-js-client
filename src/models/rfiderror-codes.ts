/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by OpenAPI Generator.
 * Do not edit the file manually.
 */



/**
 * Enumeration contains a set of error codes returned by SDK
 * @export
 * @enum {number}
 */

export enum RFIDErrorCodes {
    /**
    * RFID: No error
    */
    RFID_Error_NoError = 1,
    /**
    * RFID: Already done
    */
    RFID_Error_AlreadyDone = 2,
    /**
    * RFID: Failed
    */
    RFID_Error_Failed = 4294967295,
    /**
    * RFID: No chip detected
    */
    RFID_Error_NoChipDetected = 2147549185,
    /**
    * RFID: Not available
    */
    RFID_Error_NotAvailable = 2147549186,
    /**
    * RFID: Invalid parameter
    */
    RFID_Error_InvalidParameter = 2147549188,
    /**
    * RFID: Not initialized
    */
    RFID_Error_NotInitialized = 2147549189,
    /**
    * RFID: Not enough memory
    */
    RFID_Error_NotEnoughMemory = 2147549190,
    /**
    * RFID: Not enough data
    */
    RFID_Error_NotEnoughData = 2147549191,
    /**
    * RFID: Invalid directory
    */
    RFID_Error_InvalidDirectory = 2147549192,
    /**
    * RFID: Unknown command
    */
    RFID_Error_UnknownCommand = 2147549193,
    /**
    * RFID: File IO error
    */
    RFID_Error_FileIOError = 2147549194,
    /**
    * RFID: Busy
    */
    RFID_Error_Busy = 2147549195,
    /**
    * RFID: Old firmware
    */
    RFID_Error_OldFirmware = 2147549196,
    /**
    * PCSC: Failed
    */
    RFID_Error_PCSC_Failed = 2147614720,
    /**
    * PCSC: Reader not available
    */
    RFID_Error_PCSC_ReaderNotAvailable = 2147614721,
    /**
    * PCSC: Can&#39;t connect card
    */
    RFID_Error_PCSC_CantConnectCard = 2147614722,
    /**
    * PCSC: Card is not connected
    */
    RFID_Error_PCSC_CardIsNotConnected = 2147614723,
    /**
    * PCSC: Operation cancelled
    */
    RFID_Error_PCSC_OperationCancelled = 2147614724,
    /**
    * PCSC: Card is busy
    */
    RFID_Error_PCSC_CardIsBusy = 2147614725,
    /**
    * PCSC: Failed smart card
    */
    RFID_Error_PCSC_FailedSCard = 2147614726,
    /**
    * PCSC: ExtLe failed
    */
    RFID_Error_PCSC_ExtLe_Failed = 2147614736,
    /**
    * Layer 6: Security manager
    */
    RFID_LAYER6_SECURITY_MANAGER = 2248146944,
    /**
    * Layer 6: App selection failure
    */
    RFID_LAYER6_APP_SELECTION_FAILURE = 2248146945,
    /**
    * Layer 6: Mutual auth MAC fail
    */
    RFID_LAYER6_MUTUAL_AUTH_MAC_FAIL = 2248147200,
    /**
    * Layer 6: Mutual auth ENC fail
    */
    RFID_LAYER6_MUTUAL_AUTH_ENC_FAIL = 2248147201,
    /**
    * Layer 6: Mutual auth failure
    */
    RFID_LAYER6_MUTUAL_AUTH_FAILURE = 2248147202,
    /**
    * Layer 6: Mutual auth failure data
    */
    RFID_LAYER6_MUTUAL_AUTH_FAILURE_DATA = 2248147203,
    /**
    * Layer 6: SM DO8E missing
    */
    RFID_LAYER6_SM_DO8E_MISSING = 2248147456,
    /**
    * Layer 6: SM DO87 missing
    */
    RFID_LAYER6_SM_DO87_MISSING = 2248147457,
    /**
    * Layer 6: SM DO99 missing
    */
    RFID_LAYER6_SM_DO99_MISSING = 2248147458,
    /**
    * Layer 6: SM MAC incorrect
    */
    RFID_LAYER6_SM_MAC_INCORRECT = 2248147459,
    /**
    * Layer 6: SM DO87 incorrect
    */
    RFID_LAYER6_SM_DO87_INCORRECT = 2248147460,
    /**
    * Layer 6: NON TLV response data
    */
    RFID_LAYER6_NON_TLV_RESPONSE_DATA = 2248147712,
    /**
    * Layer 6: Wrong RND ICC length
    */
    RFID_LAYER6_WRONG_RND_ICC_LENGTH = 2248147713,
    /**
    * Layer 6: Int auth failure
    */
    RFID_LAYER6_INT_AUTH_FAILURE = 2248147714,
    /**
    * Layer 6: MSE set KAT failure
    */
    RFID_LAYER6_MSE_SET_KAT_FAILURE = 2248147715,
    /**
    * Layer 6: MSE set DST failure
    */
    RFID_LAYER6_MSE_SET_DST_FAILURE = 2248147716,
    /**
    * Layer 6: PSO certificate failure
    */
    RFID_LAYER6_PSO_CERTIFICATE_FAILURE = 2248147717,
    /**
    * Layer 6: MSE set at failure
    */
    RFID_LAYER6_MSE_SET_AT_FAILURE = 2248147718,
    /**
    * Layer 6: Get challenge failure
    */
    RFID_LAYER6_GET_CHALLENGE_FAILURE = 2248147719,
    /**
    * Layer 6: EXT auth failure
    */
    RFID_LAYER6_EXT_AUTH_FAILURE = 2248147720,
    /**
    * Layer 6: GENERAL auth failure
    */
    RFID_LAYER6_GENERAL_AUTH_FAILURE = 2248147721,
    /**
    * Layer 6: File not found
    */
    RFID_LAYER6_FILE_NOT_FOUND = 2147510914,
    /**
    * Layer 6: File EOF1
    */
    RFID_LAYER6_FILE_EOF1 = 2147508866,
    /**
    * Layer 6: File EOF2
    */
    RFID_LAYER6_FILE_EOF2 = 2147511040,
    /**
    * Layer 6: Wrong length
    */
    RFID_LAYER6_WRONG_LENGTH = 2147510016,
    /**
    * Layer 6: Incorrect params
    */
    RFID_LAYER6_INCORRECT_PARAMS = 2147510912,
    /**
    * Layer 6: No reference data
    */
    RFID_LAYER6_NO_REFERENCE_DATA = 2147510920,
    /**
    * Layer 6: PWD suspended
    */
    RFID_LAYER6_PWD_SUSPENDED = 2147509185,
    /**
    * Layer 6: PWD blocked
    */
    RFID_LAYER6_PWD_BLOCKED = 2147509184,
    /**
    * Layer 6: PWD deactivated
    */
    RFID_LAYER6_PWD_DEACTIVATED = 2147508867,
    /**
    * Layer 6: PWD blocked 2
    */
    RFID_LAYER6_PWD_BLOCKED_2 = 2147510659,
    /**
    * Layer 6: PWD deactivated 2
    */
    RFID_LAYER6_PWD_DEACTIVATED_2 = 2147510660,
    /**
    * Layer 6: PWD suspended 2
    */
    RFID_LAYER6_PWD_SUSPENDED_2 = 2147510661,
    /**
    * Layer 6: PWD failed
    */
    RFID_LAYER6_PWD_FAILED = 2148557760,
    /**
    * RFID: NotPerformed
    */
    RFID_Error_NotPerformed = 2197815296,
    /**
    * RFID: Session is closed
    */
    RFID_Error_Session_IsClosed = 2197815297,
    /**
    * Session terminal: Unsupported operation
    */
    RFID_Error_Session_Terminal_UnsupportedOperation = 2197815298,
    /**
    * Session terminal type: Unknown
    */
    RFID_Error_Session_TerminalType_Unknown = 2197815312,
    /**
    * Session terminal type: Bad certificate
    */
    RFID_Error_Session_TerminalType_BadCertificate = 2197815313,
    /**
    * Session terminal type: Not set
    */
    RFID_Error_Session_TerminalType_NotSet = 2197815314,
    /**
    * Session procedure type: Unknown
    */
    RFID_Error_Session_ProcedureType_Unknown = 2197815315,
    /**
    * Session procedure type: Unsupported
    */
    RFID_Error_Session_ProcedureType_Unsupported = 2197815316,
    /**
    * Session procedure type: Not set
    */
    RFID_Error_Session_ProcedureType_NotSet = 2197815317,
    /**
    * Session access key: Unknown type
    */
    RFID_Error_Session_AccessKey_UnknownType = 2197815318,
    /**
    * Session access key: Unsupported SM type
    */
    RFID_Error_Session_AccessKey_UnsupportedSMType = 2197815319,
    /**
    * Session access key: Incorrect SM type
    */
    RFID_Error_Session_AccessKey_IncorrectSMType = 2197815320,
    /**
    * Session access key: Restricted
    */
    RFID_Error_Session_AccessKey_Restricted = 2197815321,
    /**
    * Session access key: Incorrect data
    */
    RFID_Error_Session_AccessKey_IncorrectData = 2197815322,
    /**
    * Session access key: Not set
    */
    RFID_Error_Session_AccessKey_NotSet = 2197815323,
    /**
    * Session pwd management: Not authorized
    */
    RFID_Error_Session_PwdManagement_NotAuthorized = 2197815324,
    /**
    * Session access control: Unknown type
    */
    RFID_Error_Session_AccessControl_UnknownType = 2197815328,
    /**
    * Session access control: Requires SM
    */
    RFID_Error_Session_AccessControl_RequiresSM = 2197815329,
    /**
    * Session access control: Requires PACE
    */
    RFID_Error_Session_AccessControl_RequiresPACE = 2197815330,
    /**
    * Session access control: Requires CA keys
    */
    RFID_Error_Session_AccessControl_RequiresCAKeys = 2197815331,
    /**
    * Session access control: Requires TA
    */
    RFID_Error_Session_AccessControl_RequiresTA = 2197815332,
    /**
    * Session access control: Requires CA
    */
    RFID_Error_Session_AccessControl_RequiresCA = 2197815333,
    /**
    * Session access control: Incorrect option CA
    */
    RFID_Error_Session_AccessControl_IncorrectOptionCA = 2197815334,
    /**
    * Session access control: CA Failed
    */
    RFID_Error_Session_AccessControl_CA_Failed = 2197815335,
    /**
    * Session access control: TA Failed
    */
    RFID_Error_Session_AccessControl_TA_Failed = 2197815336,
    /**
    * Session access control: AA Failed
    */
    RFID_Error_Session_AccessControl_AA_Failed = 2197815337,
    /**
    * Session access control: RI Failed
    */
    RFID_Error_Session_AccessControl_RI_Failed = 2197815338,
    /**
    * Session PA: Signature check failed
    */
    RFID_Error_Session_PA_SignatureCheckFailed = 2197815344,
    /**
    * Session PA: Hash check failed
    */
    RFID_Error_Session_PA_HashCheckFailed = 2197815345,
    /**
    * Session invalid aux data: Date of expiry
    */
    RFID_Error_Session_InvalidAuxData_DateOfExpiry = 2197815360,
    /**
    * Session invalid aux data: Date of birth
    */
    RFID_Error_Session_InvalidAuxData_DateOfBirth = 2197815361,
    /**
    * Session invalid aux data: Community ID
    */
    RFID_Error_Session_InvalidAuxData_CommunityID = 2197815362,
    /**
    * Session eSign: Requires app selection
    */
    RFID_Error_Session_eSign_RequiresAppSelection = 2197815376,
    /**
    * Session eSign: PIN not set
    */
    RFID_Error_Session_eSign_PIN_NotSet = 2197815377,
    /**
    * Session eSign: PIN not verified
    */
    RFID_Error_Session_eSign_PIN_NotVerified = 2197815378,
    /**
    * Session: Incorrect data
    */
    RFID_Error_Session_IncorrectData = 2197815392,
    /**
    * Session file: Not enough data
    */
    RFID_Error_Session_File_NotEnoughData = 2197880832,
    /**
    * Session file: Incorrect data
    */
    RFID_Error_Session_File_IncorrectData = 2197946368,
    /**
    * Session file: Unexpected data
    */
    RFID_Error_Session_File_UnexpectedData = 2198011904,
    /**
    * Session file: Contents unexpected data
    */
    RFID_Error_Session_File_Contents_UnexpectedData = 2198077440,
    /**
    * Session file: Wrong tag
    */
    RFID_Error_Session_File_WrongTag = 2198142976,
    /**
    * Session file: Cant use data
    */
    RFID_Error_Session_File_CantUseData = 2198208512,
    /**
    * Session file: Cant read data
    */
    RFID_Error_Session_File_CantReadData = 2198274048,
    /**
    * Session file: Access denied
    */
    RFID_Error_Session_File_AccessDenied = 2198339584,
    /**
    * Layer 34: No error
    */
    RFID_Error_Layer34_NoError = 2214592512,
    /**
    * Layer 34: Time out
    */
    RFID_Error_Layer34_TimeOut = 2214658048,
    /**
    * Layer 34: Collision
    */
    RFID_Error_Layer34_Collision = 2214723584,
    /**
    * Layer 34: CRC
    */
    RFID_Error_Layer34_CRC = 2214789120,
    /**
    * Layer 34: Data integrity
    */
    RFID_Error_Layer34_DataIntegrity = 2214854656,
    /**
    * Layer 34: Data length
    */
    RFID_Error_Layer34_DataLength = 2214920192,
    /**
    * Layer 34: RFU
    */
    RFID_Error_Layer34_RFU = 2214985728,
    /**
    * Layer 34: Collision too many
    */
    RFID_Error_Layer34_Collision_TooMany = 2215051264,
    /**
    * Layer 34: Protocol B
    */
    RFID_Error_Layer34_ProtocolB = 2215116800,
    /**
    * Layer 34: Data contents
    */
    RFID_Error_Layer34_DataContents = 2215182336,
    /**
    * Layer 34: Protocol
    */
    RFID_Error_Layer34_Protocol = 2215247872,
    /**
    * Layer 34: Global timeOut
    */
    RFID_Error_Layer34_GlobalTimeOut = 2215313408,
    /**
    * Layer 34: MIFARE auth
    */
    RFID_Error_Layer34_MIFARE_Auth = 2215378944,
    /**
    * Layer 34: SAM error
    */
    RFID_Error_Layer34_SAM_Error = 2215444480,
    /**
    * Layer 34: SAM collision
    */
    RFID_Error_Layer34_SAM_Collision = 2215510016,
    /**
    * Layer 34: SAM acknowledge
    */
    RFID_Error_Layer34_SAM_Acknowledge = 2215575552
}



