/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 6.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The enumeration contains possible values of notification codes returned during the RFID chip processing.
 * @export
 * @enum {string}
 */
export enum ParsingNotificationCodes {
    /**
    * ASN certificate: Incorrect version
    */
    ntfLDS_ASN_Certificate_IncorrectVersion = -1879048191,
    /**
    * ASN certificate: Non-matching signature algorithm
    */
    ntfLDS_ASN_Certificate_NonMatchingSignatureAlgorithm = -1879048190,
    /**
    * ASN certificate: Incorrect time coding
    */
    ntfLDS_ASN_Certificate_IncorrectTimeCoding = -1879048189,
    /**
    * ASN certificate: Incorrect use of generalized time
    */
    ntfLDS_ASN_Certificate_IncorrectUseOfGeneralizedTime = -1879048188,
    /**
    * ASN certificate: Empty issuer
    */
    ntfLDS_ASN_Certificate_EmptyIssuer = -1879048187,
    /**
    * ASN certificate: Empty subject
    */
    ntfLDS_ASN_Certificate_EmptySubject = -1879048186,
    /**
    * ASN certificate: Unsupported critical extension
    */
    ntfLDS_ASN_Certificate_UnsupportedCriticalExtension = -1879048184,
    /**
    * ASN certificate: Forced default CSCA role
    */
    ntfLDS_ASN_Certificate_ForcedDefaultCSCARole = -1879048178,
    /**
    * ASN certificate: Forced Default DS role
    */
    ntfLDS_ASN_Certificate_ForcedDefaultDSRole = -1879048177,
    /**
    * ASN certificate: Incorrect issuer subject DS
    */
    ntfLDS_ASN_Certificate_IncorrectIssuerSubjectDS = -1879048176,
    /**
    * ASN certificate: Duplicating extensions
    */
    ntfLDS_ASN_Certificate_DuplicatingExtensions = -1879048169,
    /**
    * ICAO certificate: Version missed
    */
    ntfLDS_ICAO_Certificate_Version_Missed = -1879047680,
    /**
    * ICAO certificate: Version incorrect
    */
    ntfLDS_ICAO_Certificate_Version_Incorrect = -1879047679,
    /**
    * ICAO certificate: Issuer country missed
    */
    ntfLDS_ICAO_Certificate_Issuer_Country_Missed = -1879047678,
    /**
    * ICAO certificate: Issuer common name missed
    */
    ntfLDS_ICAO_Certificate_Issuer_CommonName_Missed = -1879047677,
    /**
    * ICAO certificate: Issuer country non-compliant
    */
    ntfLDS_ICAO_Certificate_Issuer_CountryNonCompliant = -1879047676,
    /**
    * ICAO certificate: Subject country missed
    */
    ntfLDS_ICAO_Certificate_Subject_Country_Missed = -1879047675,
    /**
    * ICAO certificate: Subject common name missed
    */
    ntfLDS_ICAO_Certificate_Subject_CommonName_Missed = -1879047674,
    /**
    * ICAO certificate: Subject country non-compliant
    */
    ntfLDS_ICAO_Certificate_Subject_CountryNonCompliant = -1879047673,
    /**
    * ICAO certificate: Using non-compliant data
    */
    ntfLDS_ICAO_Certificate_UsingNonCompliantData = -1879047672,
    /**
    * ICAO certificate: Unsupported signature algorithm
    */
    ntfLDS_ICAO_Certificate_UnsupportedSignatureAlgorithm = -1879047671,
    /**
    * ICAO certificate: Unsupported public key algorithm
    */
    ntfLDS_ICAO_Certificate_UnsupportedPublicKeyAlgorithm = -1879047670,
    /**
    * ICAO certificate: Missed extensions
    */
    ntfLDS_ICAO_Certificate_MissedExtensions = -1879047669,
    /**
    * ICAO certificate: Validity
    */
    ntfLDS_ICAO_Certificate_Validity = -1879047668,
    /**
    * ICAO certificate extension: Using non-compliant data
    */
    ntfLDS_ICAO_Certificate_Ext_UsingNonCompliantData = -1879047667,
    /**
    * ICAO certificate extension: Key usage missed
    */
    ntfLDS_ICAO_Certificate_Ext_KeyUsage_Missed = -1879047666,
    /**
    * ICAO certificate extension: Key usage not critical
    */
    ntfLDS_ICAO_Certificate_Ext_KeyUsage_NotCritical = -1879047665,
    /**
    * ICAO certificate extension: Key usage incorrect data
    */
    ntfLDS_ICAO_Certificate_Ext_KeyUsage_IncorrectData = -1879047664,
    /**
    * ICAO certificate extension: Basic constraints missed
    */
    ntfLDS_ICAO_Certificate_Ext_BasicC_Missed = -1879047663,
    /**
    * ICAO certificate extension: Basic constraints incorrect usage 1
    */
    ntfLDS_ICAO_Certificate_Ext_BasicC_IncorrectUsage1 = -1879047662,
    /**
    * ICAO certificate extension: Basic constraints incorrect usage 2
    */
    ntfLDS_ICAO_Certificate_Ext_BasicC_IncorrectUsage2 = -1879047661,
    /**
    * ICAO certificate extension: Basic constraints not critical
    */
    ntfLDS_ICAO_Certificate_Ext_BasicC_NotCritical = -1879047660,
    /**
    * ICAO certificate extension: Basic constraints incorrect data
    */
    ntfLDS_ICAO_Certificate_Ext_BasicC_IncorrectData = -1879047659,
    /**
    * ICAO certificate extension: Basic constraints path LenC missed
    */
    ntfLDS_ICAO_Certificate_Ext_BasicC_PathLenC_Missed = -1879047658,
    /**
    * ICAO certificate extension: Basic constraints path LenC incorrect
    */
    ntfLDS_ICAO_Certificate_Ext_BasicC_PathLenC_Incorrect = -1879047657,
    /**
    * ICAO certificate extension: Ext key usage not critical
    */
    ntfLDS_ICAO_Certificate_Ext_ExtKeyUsage_NotCritical = -1879047656,
    /**
    * ICAO certificate extension: Ext key usage incorrect usage
    */
    ntfLDS_ICAO_Certificate_Ext_ExtKeyUsage_IncorrectUsage = -1879047655,
    /**
    * ICAO certificate extension: Ext key usage incorrect data
    */
    ntfLDS_ICAO_Certificate_Ext_ExtKeyUsage_IncorrectData = -1879047654,
    /**
    * ICAO certificate extension Auth key: ID missed
    */
    ntfLDS_ICAO_Certificate_Ext_AuthKeyID_Missed = -1879047653,
    /**
    * ICAO certificate extension Auth key: Incorrect data
    */
    ntfLDS_ICAO_Certificate_Ext_AuthKeyID_IncorrectData = -1879047652,
    /**
    * ICAO certificate extension Auth key: Key ID missed
    */
    ntfLDS_ICAO_Certificate_Ext_AuthKeyID_KeyID_Missed = -1879047651,
    /**
    * ICAO certificate extension: Subject key ID missed
    */
    ntfLDS_ICAO_Certificate_Ext_SubjectKeyID_Missed = -1879047650,
    /**
    * ICAO certificate extension: Subject key ID incorrect data
    */
    ntfLDS_ICAO_Certificate_Ext_SubjectKeyID_IncorrectData = -1879047649,
    /**
    * ICAO certificate extension: Private key UP missed
    */
    ntfLDS_ICAO_Certificate_Ext_PrivateKeyUP_Missed = -1879047648,
    /**
    * ICAO certificate extension: Private key UP incorrect data
    */
    ntfLDS_ICAO_Certificate_Ext_PrivateKeyUP_IncorrectData = -1879047647,
    /**
    * ICAO certificate extension: Private key UP empty
    */
    ntfLDS_ICAO_Certificate_Ext_PrivateKeyUP_Empty = -1879047646,
    /**
    * ICAO certificate extension: Subject alt name missed
    */
    ntfLDS_ICAO_Certificate_Ext_SubjectAltName_Missed = -1879047645,
    /**
    * ICAO certificate extension: Subject alt name incorrect data
    */
    ntfLDS_ICAO_Certificate_Ext_SubjectAltName_IncorrectData = -1879047644,
    /**
    * ICAO certificate extension: Subject alt name empty
    */
    ntfLDS_ICAO_Certificate_Ext_SubjectAltName_Empty = -1879047643,
    /**
    * ICAO certificate extension: Subject alt name non-compliant
    */
    ntfLDS_ICAO_Certificate_Ext_SubjectAltName_NonCompliant = -1879047642,
    /**
    * ICAO certificate extension: Subject alt name critical
    */
    ntfLDS_ICAO_Certificate_Ext_SubjectAltName_Critical = -1879047640,
    /**
    * ICAO certificate extension: Subject alt name DN empty
    */
    ntfLDS_ICAO_Certificate_Ext_SubjectAltName_DN_Empty = -1879047639,
    /**
    * ICAO certificate extension: Subject alt name DN incorrect
    */
    ntfLDS_ICAO_Certificate_Ext_SubjectAltName_DN_Incorrect = -1879047638,
    /**
    * ICAO certificate extension: Subject alt name DN non-compliant
    */
    ntfLDS_ICAO_Certificate_Ext_SubjectAltName_DN_NonCompliant = -1879047637,
    /**
    * ICAO certificate extension: Issuer alt name missed
    */
    ntfLDS_ICAO_Certificate_Ext_IssuerAltName_Missed = -1879047636,
    /**
    * ICAO certificate extension: Issuer alt name incorrect data
    */
    ntfLDS_ICAO_Certificate_Ext_IssuerAltName_IncorrectData = -1879047635,
    /**
    * ICAO certificate extension: Issuer alt name empty
    */
    ntfLDS_ICAO_Certificate_Ext_IssuerAltName_Empty = -1879047634,
    /**
    * ICAO certificate extension: Issuer alt name non-compliant
    */
    ntfLDS_ICAO_Certificate_Ext_IssuerAltName_NonCompliant = -1879047633,
    /**
    * ICAO certificate extension: Issuer alt name critical
    */
    ntfLDS_ICAO_Certificate_Ext_IssuerAltName_Critical = -1879047631,
    /**
    * ICAO certificate extension: Issuer alt name DN empty
    */
    ntfLDS_ICAO_Certificate_Ext_IssuerAltName_DN_Empty = -1879047630,
    /**
    * ICAO certificate extension: Issuer alt name DN incorrect
    */
    ntfLDS_ICAO_Certificate_Ext_IssuerAltName_DN_Incorrect = -1879047629,
    /**
    * ICAO certificate extension: Issuer alt name DN non-compliant
    */
    ntfLDS_ICAO_Certificate_Ext_IssuerAltName_DN_NonCompliant = -1879047628,
    /**
    * ICAO certificate extension Doc type list: Missed
    */
    ntfLDS_ICAO_Certificate_Ext_DocTypeList_Missed = -1879047627,
    /**
    * ICAO certificate extension Doc type list: Incorrect data
    */
    ntfLDS_ICAO_Certificate_Ext_DocTypeList_IncorrectData = -1879047626,
    /**
    * ICAO certificate extension Doc type list: Version
    */
    ntfLDS_ICAO_Certificate_Ext_DocTypeList_Version = -1879047625,
    /**
    * ICAO certificate extension Doc type list: Doc types
    */
    ntfLDS_ICAO_Certificate_Ext_DocTypeList_DocTypes = -1879047624,
    /**
    * ICAO certificate extension Doc type list: Doc types empty
    */
    ntfLDS_ICAO_Certificate_Ext_DocTypeList_DocTypes_Empty = -1879047623,
    /**
    * ICAO certificate extension: Dert policies incorrect data
    */
    ntfLDS_ICAO_Certificate_Ext_CertPolicies_IncorrectData = -1879047622,
    /**
    * ICAO certificate extension: Cert policies empty
    */
    ntfLDS_ICAO_Certificate_Ext_CertPolicies_Empty = -1879047621,
    /**
    * ICAO certificate extension: Cert policies policy ID missed
    */
    ntfLDS_ICAO_Certificate_Ext_CertPolicies_PolicyID_Missed = -1879047620,
    /**
    * ICAO certificate extension: CRL dist point missed
    */
    ntfLDS_ICAO_Certificate_Ext_CRLDistPoint_Missed = -1879047619,
    /**
    * ICAO certificate extension: CRL dist point incorrect data
    */
    ntfLDS_ICAO_Certificate_Ext_CRLDistPoint_IncorrectData = -1879047618,
    /**
    * ICAO certificate extension: CRL dist point empty
    */
    ntfLDS_ICAO_Certificate_Ext_CRLDistPoint_Empty = -1879047617,
    /**
    * ICAO certificate extension: CRL dist point point missed
    */
    ntfLDS_ICAO_Certificate_Ext_CRLDistPoint_PointMissed = -1879047616,
    /**
    * ICAO certificate: SN non-compliant
    */
    ntfLDS_ICAO_Certificate_SN_NonCompliant = -1879047615,
    /**
    * ICAO certificate: Issuer SN non-compliant
    */
    ntfLDS_ICAO_Certificate_Issuer_SN_NonCompliant = -1879047614,
    /**
    * ICAO certificate: Subject SN non-compliant
    */
    ntfLDS_ICAO_Certificate_Subject_SN_NonCompliant = -1879047613,
    /**
    * ICAO certificate: Issuer attribute non-compliant
    */
    ntfLDS_ICAO_Certificate_Issuer_AttributeNonCompliant = -1879047612,
    /**
    * ICAO certificate: Subject attribute non-compliant
    */
    ntfLDS_ICAO_Certificate_Subject_AttributeNonCompliant = -1879047611,
    /**
    * ICAO certificate: Issuer subject country non-matching
    */
    ntfLDS_ICAO_Certificate_IssuerSubject_Country_NonMatching = -1879047610,
    /**
    * ICAO certificate extension: CSCA alt names non-matching
    */
    ntfLDS_ICAO_Certificate_Ext_CSCA_AltNames_NonMatching = -1879047609,
    /**
    * ICAO certificate extension: Name change incorrect data
    */
    ntfLDS_ICAO_Certificate_Ext_NameChange_IncorrectData = -1879047608,
    /**
    * ICAO certificate extension: Name change non-compliant
    */
    ntfLDS_ICAO_Certificate_Ext_NameChange_NonCompliant = -1879047607,
    /**
    * ICAO certificate extension: Name change critical
    */
    ntfLDS_ICAO_Certificate_Ext_NameChange_Critical = -1879047606,
    /**
    * ICAO certificate extension Doc type list: non-compliant
    */
    ntfLDS_ICAO_Certificate_Ext_DocTypeList_NonCompliant = -1879047605,
    /**
    * ICAO certificate extension Doc type list: Critical
    */
    ntfLDS_ICAO_Certificate_Ext_DocTypeList_Critical = -1879047604,
    /**
    * ICAO certificate extension: Optional critical
    */
    ntfLDS_ICAO_Certificate_Ext_Optional_Critical = -1879047603,
    /**
    * ICAO certificate: Subject non-compliant
    */
    ntfLDS_ICAO_Certificate_Subject_NonCompliant = -1879047602,
    /**
    * ICAO certificate: Subject common name non-compliant
    */
    ntfLDS_ICAO_Certificate_Subject_CommonNameNonCompliant = -1879047601,
    /**
    * ICAO COM: LDS version incorrect
    */
    ntfLDS_ICAO_COM_LDS_Version_Incorrect = -1879048160,
    /**
    * ICAO COM: LDS version missing
    */
    ntfLDS_ICAO_COM_LDS_Version_Missing = -1879048159,
    /**
    * ICAO COM: Unicode version incorrect
    */
    ntfLDS_ICAO_COM_Unicode_Version_Incorrect = -1879048158,
    /**
    * ICAO COM: Unicode version missing
    */
    ntfLDS_ICAO_COM_Unicode_Version_Missing = -1879048157,
    /**
    * ICAO COM: DGPM incorrect
    */
    ntfLDS_ICAO_COM_DGPM_Incorrect = -1879048156,
    /**
    * ICAO COM: DGPM missing
    */
    ntfLDS_ICAO_COM_DGPM_Missing = -1879048155,
    /**
    * ICAO COM: DGPM unexpected
    */
    ntfLDS_ICAO_COM_DGPM_Unexpected = -1879048154,
    /**
    * ICAO application: LDS version unsupported
    */
    ntfLDS_ICAO_Application_LDSVersion_Unsupported = -1879048144,
    /**
    * ICAO application: Unicode version unsupported
    */
    ntfLDS_ICAO_Application_UnicodeVersion_Unsupported = -1879048143,
    /**
    * ICAO application: LDS version inconsistent
    */
    ntfLDS_ICAO_Application_LDSVersion_Inconsistent = -1879048142,
    /**
    * ICAO application: Unicode version inconsistent
    */
    ntfLDS_ICAO_Application_UnicodeVersion_Inconsistent = -1879048141,
    /**
    * ASN signed data: OID incorrect
    */
    ntfLDS_ASN_SignedData_OID_Incorrect = -1879047936,
    /**
    * ASN signed data: Version incorrect
    */
    ntfLDS_ASN_SignedData_Version_Incorrect = -1879047776,
    /**
    * ASN signed data: Content OID incorrect
    */
    ntfLDS_ASN_SignedData_ContentOID_Incorrect = -1879047775,
    /**
    * ICAO signed data: Version incorrect
    */
    ntfLDS_ICAO_SignedData_Version_Incorrect = -1879047935,
    /**
    * ICAO signed data: Digest algorithms empty
    */
    ntfLDS_ICAO_SignedData_DigestAlgorithms_Empty = -1879047934,
    /**
    * ICAO signed data: Digest algorithms unsupported
    */
    ntfLDS_ICAO_SignedData_DigestAlgorithms_Unsupported = -1879047933,
    /**
    * ICAO signed data: Signer infos multiple entries
    */
    ntfLDS_ICAO_SignedData_SignerInfos_MultipleEntries = -1879047927,
    /**
    * ICAO signed data: Certificates missed
    */
    ntfLDS_ICAO_SignedData_Certificates_Missed = -1879047760,
    /**
    * ICAO signed data: Certificates empty
    */
    ntfLDS_ICAO_SignedData_Certificates_Empty = -1879047759,
    /**
    * ICAO signed data: CRLs incorrect usage
    */
    ntfLDS_ICAO_SignedData_CRLs_IncorrectUsage = -1879047758,
    /**
    * ICAO LDS object: Incorrect content OID
    */
    ntfLDS_ICAO_LDSObject_IncorrectContentOID = -1879047932,
    /**
    * ICAO LDS object: DG number incorrect
    */
    ntfLDS_ICAO_LDSObject_DGNumber_Incorrect = -1879047931,
    /**
    * ICAO LDS object: DG hash missing
    */
    ntfLDS_ICAO_LDSObject_DGHash_Missing = -1879047930,
    /**
    * ICAO LDS object: DG hash extra
    */
    ntfLDS_ICAO_LDSObject_DGHash_Extra = -1879047929,
    /**
    * ICAO LDS object: Version incorrect
    */
    ntfLDS_ICAO_LDSObject_Version_Incorrect = -1879047928,
    /**
    * ICAO master list: Version incorrect
    */
    ntfLDS_ICAO_MasterList_Version_Incorrect = -1879047744,
    /**
    * ICAO Deviation list: Version incorrect
    */
    ntfLDS_ICAO_DeviationList_Version_Incorrect = -1879047736,
    /**
    * BSI: Defect  list version incorrect
    */
    ntfLDS_BSI_DefectList_Version_Incorrect = -1879047728,
    /**
    * BSI: Black list version incorrect
    */
    ntfLDS_BSI_BlackList_Version_Incorrect = -1879047720,
    /**
    * ASN signer info: Version incorrect
    */
    ntfLDS_ASN_SignerInfo_Version_Incorrect = -1879047926,
    /**
    * ASN signer info: SID incorrect choice
    */
    ntfLDS_ASN_SignerInfo_SID_IncorrectChoice = -1879047925,
    /**
    * ASN signer info: SID digest algorithm not listed
    */
    ntfLDS_ASN_SignerInfo_SID_DigestAlgorithmNotListed = -1879047924,
    /**
    * ASN signer info: Message digest attr missing
    */
    ntfLDS_ASN_SignerInfo_MessageDigestAttr_Missing = -1879047923,
    /**
    * ASN signer info: Message digest attr data
    */
    ntfLDS_ASN_SignerInfo_MessageDigestAttr_Data = -1879047922,
    /**
    * ASN signer info: Message digest attr value
    */
    ntfLDS_ASN_SignerInfo_MessageDigestAttr_Value = -1879047921,
    /**
    * ASN signer info: Content type attr missing
    */
    ntfLDS_ASN_SignerInfo_ContentTypeAttr_Missing = -1879047920,
    /**
    * ASN signer info: Content type attr data
    */
    ntfLDS_ASN_SignerInfo_ContentTypeAttr_Data = -1879047919,
    /**
    * ASN signer info: Content type attr value
    */
    ntfLDS_ASN_SignerInfo_ContentTypeAttr_Value = -1879047918,
    /**
    * ASN signer info: Signing time attr missing
    */
    ntfLDS_ASN_SignerInfo_SigningTimeAttr_Missing = -1879047909,
    /**
    * ASN signer info: Signing time attr data
    */
    ntfLDS_ASN_SignerInfo_SigningTimeAttr_Data = -1879047908,
    /**
    * ASN signer info: Signing time attr value
    */
    ntfLDS_ASN_SignerInfo_SigningTimeAttr_Value = -1879047907,
    /**
    * ASN signer info: List content description attr missing
    */
    ntfLDS_ASN_SignerInfo_ListContentDescriptionAttr_Missing = -1879047906,
    /**
    * ASN signer info: List content description attr data
    */
    ntfLDS_ASN_SignerInfo_ListContentDescriptionAttr_Data = -1879047905,
    /**
    * Auth signer info: Certificate validity
    */
    ntfLDS_Auth_SignerInfo_Certificate_Validity = -1879047915,
    /**
    * Auth signer info: Certificate root is not trusted
    */
    ntfLDS_Auth_SignerInfo_Certificate_RootIsNotTrusted = -1879047914,
    /**
    * Auth signer info: Certificate cannot find CSCA
    */
    ntfLDS_Auth_SignerInfo_Certificate_CantFindCSCA = -1879047913,
    /**
    * Auth signer info: Certificate revoked
    */
    ntfLDS_Auth_SignerInfo_Certificate_Revoked = -1879047912,
    /**
    * Auth signer info: Certificate signature invalid
    */
    ntfLDS_Auth_SignerInfo_Certificate_SignatureInvalid = -1879047911,
    /**
    * Notification: Unsupported image format
    */
    ntfLDS_UnsupportedImageFormat = -1879047910,
    /**
    * MRZ: Document type unknown
    */
    ntfLDS_MRZ_DocumentType_Unknown = 139272,
    /**
    * MRZ: Issuing state syntax error
    */
    ntfLDS_MRZ_IssuingState_SyntaxError = 139273,
    /**
    * MRZ: Name is void
    */
    ntfLDS_MRZ_Name_IsVoid = 139274,
    /**
    * MRZ: Number incorrect checksum
    */
    ntfLDS_MRZ_Number_IncorrectChecksum = 139277,
    /**
    * MRZ: Nationality syntax error
    */
    ntfLDS_MRZ_Nationality_SyntaxError = 139278,
    /**
    * MRZ: DOB syntax error
    */
    ntfLDS_MRZ_DOB_SyntaxError = 139279,
    /**
    * MRZ: DOB error
    */
    ntfLDS_MRZ_DOB_Error = 139280,
    /**
    * MRZ: DOB incorrect checksum
    */
    ntfLDS_MRZ_DOB_IncorrectChecksum = 139281,
    /**
    * MRZ: Sex incorrect
    */
    ntfLDS_MRZ_Sex_Incorrect = 139282,
    /**
    * MRZ: DOE syntax error
    */
    ntfLDS_MRZ_DOE_SyntaxError = 139283,
    /**
    * MRZ: DOE error
    */
    ntfLDS_MRZ_DOE_Error = 139284,
    /**
    * MRZ: DOE incorrect checksum
    */
    ntfLDS_MRZ_DOE_IncorrectChecksum = 139285,
    /**
    * MRZ: Optional data incorrect checksum
    */
    ntfLDS_MRZ_OptionalData_IncorrectChecksum = 139286,
    /**
    * MRZ: Incorrect checksum
    */
    ntfLDS_MRZ_IncorrectChecksum = 139287,
    /**
    * MRZ: Incorrect
    */
    ntfLDS_MRZ_Incorrect = 139288,
    /**
    * Biometrics: Format owner missing
    */
    ntfLDS_Biometrics_FormatOwner_Missing = -1878982656,
    /**
    * Biometrics: Format owner incorrect
    */
    ntfLDS_Biometrics_FormatOwner_Incorrect = -1878917120,
    /**
    * Biometrics: Format type missing
    */
    ntfLDS_Biometrics_FormatType_Missing = -1878851584,
    /**
    * Biometrics: Format type incorrect
    */
    ntfLDS_Biometrics_FormatType_Incorrect = -1878786048,
    /**
    * Biometrics: Type incorrect
    */
    ntfLDS_Biometrics_Type_Incorrect = -1878720512,
    /**
    * Biometrics: Subtype missing
    */
    ntfLDS_Biometrics_SubType_Missing = -1878654976,
    /**
    * Biometrics: Subtype incorrect
    */
    ntfLDS_Biometrics_SubType_Incorrect = -1878589440,
    /**
    * Biometrics: BDB image missing
    */
    ntfLDS_Biometrics_BDB_Image_Missing = -1878523904,
    /**
    * Biometrics: BDB format ID incorrect
    */
    ntfLDS_Biometrics_BDB_FormatID_Incorrect = -1878458368,
    /**
    * Biometrics: BDB version incorrect
    */
    ntfLDS_Biometrics_BDB_Version_Incorrect = -1878392832,
    /**
    * Biometrics: BDB data length incorrect
    */
    ntfLDS_Biometrics_BDB_DataLength_Incorrect = -1878327296,
    /**
    * Biometrics: BDB Data Gender
    */
    ntfLDS_Biometrics_BDB_Data_Gender = -1877999616,
    /**
    * Biometrics: BDB Data Eye Color
    */
    ntfLDS_Biometrics_BDB_Data_EyeColor = -1877934080,
    /**
    * Biometrics: BDB Data Hair Color
    */
    ntfLDS_Biometrics_BDB_Data_HairColor = -1877868544,
    /**
    * Biometrics: BDB Data Pose Angle Yaw
    */
    ntfLDS_Biometrics_BDB_Data_PoseAngle_Yaw = -1877803008,
    /**
    * Biometrics: BDB Data Pose Angle Pitch
    */
    ntfLDS_Biometrics_BDB_Data_PoseAngle_Pitch = -1877737472,
    /**
    * Biometrics: BDB Data Pose Angle Roll
    */
    ntfLDS_Biometrics_BDB_Data_PoseAngle_Roll = -1877671936,
    /**
    * Biometrics: BDB Data Pose Angle U Yaw
    */
    ntfLDS_Biometrics_BDB_Data_PoseAngleU_Yaw = -1877606400,
    /**
    * Biometrics: BDB Data Pose Angle U Pitch
    */
    ntfLDS_Biometrics_BDB_Data_PoseAngleU_Pitch = -1877540864,
    /**
    * Biometrics: BDB Data Pose Angle U Roll
    */
    ntfLDS_Biometrics_BDB_Data_PoseAngleU_Roll = -1877475328,
    /**
    * Biometrics: BDB Data Face Image Type
    */
    ntfLDS_Biometrics_BDB_Data_FaceImageType = -1877409792,
    /**
    * Biometrics: BDB Data Image Data Type
    */
    ntfLDS_Biometrics_BDB_Data_ImageDataType = -1877344256,
    /**
    * SI: PACE Info Unsupported Std Parameters
    */
    ntfLDS_SI_PACE_Info_UnsupportedStdParameters = -1862270976,
    /**
    * SI: PACE Info Deprecated Version
    */
    ntfLDS_SI_PACE_Info_DeprecatedVersion = -1862270975,
    /**
    * SI: PACE Domain Params Using Std Ref
    */
    ntfLDS_SI_PACE_DomainParams_UsingStdRef = -1862270974,
    /**
    * SI: PACE Domain Params Unsupported Algorithm
    */
    ntfLDS_SI_PACE_DomainParams_UnsupportedAlgorithm = -1862270973,
    /**
    * SI: CA Info Incorrect Version
    */
    ntfLDS_SI_CA_Info_IncorrectVersion = -1862270972,
    /**
    * SI: CA PublicKey Unsupported Algorithm
    */
    ntfLDS_SI_CA_PublicKey_UnsupportedAlgorithm = -1862270971,
    /**
    * SI: CA Domain Params Unsupported Algorithm
    */
    ntfLDS_SI_CA_DomainParams_UnsupportedAlgorithm = -1862270970,
    /**
    * SI: TA Info Incorrect Version
    */
    ntfLDS_SI_TA_Info_IncorrectVersion = -1862270969,
    /**
    * SI: TA Info File ID For Version 2
    */
    ntfLDS_SI_TA_Info_FileIDForVersion2 = -1862270968,
    /**
    * SI: eID Security Unsupported Digest Algorithm
    */
    ntfLDS_SI_eIDSecurity_UnsupportedDigestAlgorithm = -1862270967,
    /**
    * SI: RI info incorrect version
    */
    ntfLDS_SI_RI_Info_IncorrectVersion = -1862270966,
    /**
    * SI: RI domain params unsupported algorithm
    */
    ntfLDS_SI_RI_DomainParams_UnsupportedAlgorithm = -1862270965,
    /**
    * SI: AA info incorrect version
    */
    ntfLDS_SI_AA_Info_IncorrectVersion = -1862270964,
    /**
    * SI: AA info unsupported algorithm
    */
    ntfLDS_SI_AA_Info_UnsupportedAlgorithm = -1862270963,
    /**
    * SI: AA info inconsistent algorithm reference
    */
    ntfLDS_SI_AA_Info_InconsistentAlgorithmReference = -1862270962,
    /**
    * SI: PACE Info Not Available
    */
    ntfLDS_SI_Storage_PACE_Info_NotAvailable = -1862270720,
    /**
    * SI: PACE Info No Std Parameters
    */
    ntfLDS_SI_Storage_PACE_Info_NoStdParameters = -1862270719,
    /**
    * SI: PACE Info No Matching Domain Params
    */
    ntfLDS_SI_Storage_PACE_Info_NoMatchingDomainParams = -1862270718,
    /**
    * SI: CA Info Not Available
    */
    ntfLDS_SI_Storage_CA_Info_NotAvailable = -1862270717,
    /**
    * SI: CA Domain Params No Required Option
    */
    ntfLDS_SI_Storage_CA_DomainParams_NoRequiredOption = -1862270716,
    /**
    * SI: CA Domain Params Not Available
    */
    ntfLDS_SI_Storage_CA_DomainParams_NotAvailable = -1862270715,
    /**
    * SI: CA Anonymous Infos
    */
    ntfLDS_SI_Storage_CA_AnonymousInfos = -1862270714,
    /**
    * SI: CA Info No Matching Domain Params
    */
    ntfLDS_SI_Storage_CA_Info_NoMatchingDomainParams = -1862270713,
    /**
    * SI: CA Info No Matching Public Key
    */
    ntfLDS_SI_Storage_CA_Info_NoMatchingPublicKey = -1862270712,
    /**
    * SI: CA Incorrect Infos Quantity
    */
    ntfLDS_SI_Storage_CA_IncorrectInfosQuantity = -1862270711,
    /**
    * SI: TA Info Not Available
    */
    ntfLDS_SI_Storage_TA_Info_NotAvailable = -1862270710,
    /**
    * SI: Card Info Locator Multiple Entries
    */
    ntfLDS_SI_Storage_CardInfoLocator_MultipleEntries = -1862270709,
    /**
    * SI: eID Security Info Multiple Entries
    */
    ntfLDS_SI_Storage_eIDSecurityInfo_MultipleEntries = -1862270708,
    /**
    * SI: Privileged TI Multiple Entries
    */
    ntfLDS_SI_Storage_PrivilegedTI_MultipleEntries = -1862270707,
    /**
    * SI: Privileged TI Incorrect Usage
    */
    ntfLDS_SI_Storage_PrivilegedTI_IncorrectUsage = -1862270706,
    /**
    * SI: RI domain params multiple entries
    */
    ntfLDS_SI_Storage_RI_DomainParams_MultipleEntries = -1862270705,
    /**
    * SI: Storage PACE Info Non Consistant
    */
    ntfLDS_SI_Storage_PACEInfos_NonConsistant = -1862270704,
    /**
    * CV Certificate: Profile incorrect version
    */
    ntfLDS_CVCertificate_Profile_IncorrectVersion = -1862270463,
    /**
    * CV Certificate: Validity
    */
    ntfLDS_CVCertificate_Validity = -1862270462,
    /**
    * CV Certificate: Non CVCA domain parameters
    */
    ntfLDS_CVCertificate_NonCVCADomainParameters = -1862270461,
    /**
    * CV Certificate: Private key incorrect version
    */
    ntfLDS_CV_Certificate_PrivateKey_IncorrectVersion = -1862270460,
    /**
    * TA: PACE static binding used
    */
    ntfLDS_TA_PACEStaticBindingUsed = -1862270208,
    /**
    * Auth ML signer info: Certificate validity
    */
    ntfLDS_Auth_MLSignerInfo_Certificate_Validity = -1845493483,
    /**
    * Auth ML signer info: Certificate root is not trusted
    */
    ntfLDS_Auth_MLSignerInfo_Certificate_RootIsNotTrusted = -1845493482,
    /**
    * Auth ML signer info: Certificate cannot find CSCA
    */
    ntfLDS_Auth_MLSignerInfo_Certificate_CantFindCSCA = -1845493481,
    /**
    * Auth ML signer info: Certificate revoked
    */
    ntfLDS_Auth_MLSignerInfo_Certificate_Revoked = -1845493480,
    /**
    * Auth ML signer info: Certificate signature invalid
    */
    ntfLDS_Auth_MLSignerInfo_Certificate_SignatureInvalid = -1845493479
}



