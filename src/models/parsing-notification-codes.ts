/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.   # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 7.4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The enumeration contains possible values of notification codes returned during the RFID chip processing.
 * @export
 * @enum {number}
 */

export enum ParsingNotificationCodes {
    /**
    * ASN certificate: Incorrect version
    */
    ntfLDS_ASN_Certificate_IncorrectVersion = 2415919105,
    /**
    * ASN certificate: Non-matching signature algorithm
    */
    ntfLDS_ASN_Certificate_NonMatchingSignatureAlgorithm = 2415919106,
    /**
    * ASN certificate: Incorrect time coding
    */
    ntfLDS_ASN_Certificate_IncorrectTimeCoding = 2415919107,
    /**
    * ASN certificate: Incorrect use of generalized time
    */
    ntfLDS_ASN_Certificate_IncorrectUseOfGeneralizedTime = 2415919108,
    /**
    * ASN certificate: Empty issuer
    */
    ntfLDS_ASN_Certificate_EmptyIssuer = 2415919109,
    /**
    * ASN certificate: Empty subject
    */
    ntfLDS_ASN_Certificate_EmptySubject = 2415919110,
    /**
    * ASN certificate: Unsupported critical extension
    */
    ntfLDS_ASN_Certificate_UnsupportedCriticalExtension = 2415919112,
    /**
    * ASN certificate: Forced default CSCA role
    */
    ntfLDS_ASN_Certificate_ForcedDefaultCSCARole = 2415919118,
    /**
    * ASN certificate: Forced Default DS role
    */
    ntfLDS_ASN_Certificate_ForcedDefaultDSRole = 2415919119,
    /**
    * ASN certificate: Incorrect issuer subject DS
    */
    ntfLDS_ASN_Certificate_IncorrectIssuerSubjectDS = 2415919120,
    /**
    * ASN certificate: Duplicating extensions
    */
    ntfLDS_ASN_Certificate_DuplicatingExtensions = 2415919127,
    /**
    * ICAO certificate: Version missed
    */
    ntfLDS_ICAO_Certificate_Version_Missed = 2415919616,
    /**
    * ICAO certificate: Version incorrect
    */
    ntfLDS_ICAO_Certificate_Version_Incorrect = 2415919617,
    /**
    * ICAO certificate: Issuer country missed
    */
    ntfLDS_ICAO_Certificate_Issuer_Country_Missed = 2415919618,
    /**
    * ICAO certificate: Issuer common name missed
    */
    ntfLDS_ICAO_Certificate_Issuer_CommonName_Missed = 2415919619,
    /**
    * ICAO certificate: Issuer country non-compliant
    */
    ntfLDS_ICAO_Certificate_Issuer_CountryNonCompliant = 2415919620,
    /**
    * ICAO certificate: Subject country missed
    */
    ntfLDS_ICAO_Certificate_Subject_Country_Missed = 2415919621,
    /**
    * ICAO certificate: Subject common name missed
    */
    ntfLDS_ICAO_Certificate_Subject_CommonName_Missed = 2415919622,
    /**
    * ICAO certificate: Subject country non-compliant
    */
    ntfLDS_ICAO_Certificate_Subject_CountryNonCompliant = 2415919623,
    /**
    * ICAO certificate: Using non-compliant data
    */
    ntfLDS_ICAO_Certificate_UsingNonCompliantData = 2415919624,
    /**
    * ICAO certificate: Unsupported signature algorithm
    */
    ntfLDS_ICAO_Certificate_UnsupportedSignatureAlgorithm = 2415919625,
    /**
    * ICAO certificate: Unsupported public key algorithm
    */
    ntfLDS_ICAO_Certificate_UnsupportedPublicKeyAlgorithm = 2415919626,
    /**
    * ICAO certificate: Missed extensions
    */
    ntfLDS_ICAO_Certificate_MissedExtensions = 2415919627,
    /**
    * ICAO certificate: Validity
    */
    ntfLDS_ICAO_Certificate_Validity = 2415919628,
    /**
    * ICAO certificate extension: Using non-compliant data
    */
    ntfLDS_ICAO_Certificate_Ext_UsingNonCompliantData = 2415919629,
    /**
    * ICAO certificate extension: Key usage missed
    */
    ntfLDS_ICAO_Certificate_Ext_KeyUsage_Missed = 2415919630,
    /**
    * ICAO certificate extension: Key usage not critical
    */
    ntfLDS_ICAO_Certificate_Ext_KeyUsage_NotCritical = 2415919631,
    /**
    * ICAO certificate extension: Key usage incorrect data
    */
    ntfLDS_ICAO_Certificate_Ext_KeyUsage_IncorrectData = 2415919632,
    /**
    * ICAO certificate extension: Basic constraints missed
    */
    ntfLDS_ICAO_Certificate_Ext_BasicC_Missed = 2415919633,
    /**
    * ICAO certificate extension: Basic constraints incorrect usage 1
    */
    ntfLDS_ICAO_Certificate_Ext_BasicC_IncorrectUsage1 = 2415919634,
    /**
    * ICAO certificate extension: Basic constraints incorrect usage 2
    */
    ntfLDS_ICAO_Certificate_Ext_BasicC_IncorrectUsage2 = 2415919635,
    /**
    * ICAO certificate extension: Basic constraints not critical
    */
    ntfLDS_ICAO_Certificate_Ext_BasicC_NotCritical = 2415919636,
    /**
    * ICAO certificate extension: Basic constraints incorrect data
    */
    ntfLDS_ICAO_Certificate_Ext_BasicC_IncorrectData = 2415919637,
    /**
    * ICAO certificate extension: Basic constraints path LenC missed
    */
    ntfLDS_ICAO_Certificate_Ext_BasicC_PathLenC_Missed = 2415919638,
    /**
    * ICAO certificate extension: Basic constraints path LenC incorrect
    */
    ntfLDS_ICAO_Certificate_Ext_BasicC_PathLenC_Incorrect = 2415919639,
    /**
    * ICAO certificate extension: Ext key usage not critical
    */
    ntfLDS_ICAO_Certificate_Ext_ExtKeyUsage_NotCritical = 2415919640,
    /**
    * ICAO certificate extension: Ext key usage incorrect usage
    */
    ntfLDS_ICAO_Certificate_Ext_ExtKeyUsage_IncorrectUsage = 2415919641,
    /**
    * ICAO certificate extension: Ext key usage incorrect data
    */
    ntfLDS_ICAO_Certificate_Ext_ExtKeyUsage_IncorrectData = 2415919642,
    /**
    * ICAO certificate extension Auth key: ID missed
    */
    ntfLDS_ICAO_Certificate_Ext_AuthKeyID_Missed = 2415919643,
    /**
    * ICAO certificate extension Auth key: Incorrect data
    */
    ntfLDS_ICAO_Certificate_Ext_AuthKeyID_IncorrectData = 2415919644,
    /**
    * ICAO certificate extension Auth key: Key ID missed
    */
    ntfLDS_ICAO_Certificate_Ext_AuthKeyID_KeyID_Missed = 2415919645,
    /**
    * ICAO certificate extension: Subject key ID missed
    */
    ntfLDS_ICAO_Certificate_Ext_SubjectKeyID_Missed = 2415919646,
    /**
    * ICAO certificate extension: Subject key ID incorrect data
    */
    ntfLDS_ICAO_Certificate_Ext_SubjectKeyID_IncorrectData = 2415919647,
    /**
    * ICAO certificate extension: Private key UP missed
    */
    ntfLDS_ICAO_Certificate_Ext_PrivateKeyUP_Missed = 2415919648,
    /**
    * ICAO certificate extension: Private key UP incorrect data
    */
    ntfLDS_ICAO_Certificate_Ext_PrivateKeyUP_IncorrectData = 2415919649,
    /**
    * ICAO certificate extension: Private key UP empty
    */
    ntfLDS_ICAO_Certificate_Ext_PrivateKeyUP_Empty = 2415919650,
    /**
    * ICAO certificate extension: Subject alt name missed
    */
    ntfLDS_ICAO_Certificate_Ext_SubjectAltName_Missed = 2415919651,
    /**
    * ICAO certificate extension: Subject alt name incorrect data
    */
    ntfLDS_ICAO_Certificate_Ext_SubjectAltName_IncorrectData = 2415919652,
    /**
    * ICAO certificate extension: Subject alt name empty
    */
    ntfLDS_ICAO_Certificate_Ext_SubjectAltName_Empty = 2415919653,
    /**
    * ICAO certificate extension: Subject alt name non-compliant
    */
    ntfLDS_ICAO_Certificate_Ext_SubjectAltName_NonCompliant = 2415919654,
    /**
    * ICAO certificate extension: Subject alt name critical
    */
    ntfLDS_ICAO_Certificate_Ext_SubjectAltName_Critical = 2415919656,
    /**
    * ICAO certificate extension: Subject alt name DN empty
    */
    ntfLDS_ICAO_Certificate_Ext_SubjectAltName_DN_Empty = 2415919657,
    /**
    * ICAO certificate extension: Subject alt name DN incorrect
    */
    ntfLDS_ICAO_Certificate_Ext_SubjectAltName_DN_Incorrect = 2415919658,
    /**
    * ICAO certificate extension: Subject alt name DN non-compliant
    */
    ntfLDS_ICAO_Certificate_Ext_SubjectAltName_DN_NonCompliant = 2415919659,
    /**
    * ICAO certificate extension: Issuer alt name missed
    */
    ntfLDS_ICAO_Certificate_Ext_IssuerAltName_Missed = 2415919660,
    /**
    * ICAO certificate extension: Issuer alt name incorrect data
    */
    ntfLDS_ICAO_Certificate_Ext_IssuerAltName_IncorrectData = 2415919661,
    /**
    * ICAO certificate extension: Issuer alt name empty
    */
    ntfLDS_ICAO_Certificate_Ext_IssuerAltName_Empty = 2415919662,
    /**
    * ICAO certificate extension: Issuer alt name non-compliant
    */
    ntfLDS_ICAO_Certificate_Ext_IssuerAltName_NonCompliant = 2415919663,
    /**
    * ICAO certificate extension: Issuer alt name critical
    */
    ntfLDS_ICAO_Certificate_Ext_IssuerAltName_Critical = 2415919665,
    /**
    * ICAO certificate extension: Issuer alt name DN empty
    */
    ntfLDS_ICAO_Certificate_Ext_IssuerAltName_DN_Empty = 2415919666,
    /**
    * ICAO certificate extension: Issuer alt name DN incorrect
    */
    ntfLDS_ICAO_Certificate_Ext_IssuerAltName_DN_Incorrect = 2415919667,
    /**
    * ICAO certificate extension: Issuer alt name DN non-compliant
    */
    ntfLDS_ICAO_Certificate_Ext_IssuerAltName_DN_NonCompliant = 2415919668,
    /**
    * ICAO certificate extension Doc type list: Missed
    */
    ntfLDS_ICAO_Certificate_Ext_DocTypeList_Missed = 2415919669,
    /**
    * ICAO certificate extension Doc type list: Incorrect data
    */
    ntfLDS_ICAO_Certificate_Ext_DocTypeList_IncorrectData = 2415919670,
    /**
    * ICAO certificate extension Doc type list: Version
    */
    ntfLDS_ICAO_Certificate_Ext_DocTypeList_Version = 2415919671,
    /**
    * ICAO certificate extension Doc type list: Doc types
    */
    ntfLDS_ICAO_Certificate_Ext_DocTypeList_DocTypes = 2415919672,
    /**
    * ICAO certificate extension Doc type list: Doc types empty
    */
    ntfLDS_ICAO_Certificate_Ext_DocTypeList_DocTypes_Empty = 2415919673,
    /**
    * ICAO certificate extension: Dert policies incorrect data
    */
    ntfLDS_ICAO_Certificate_Ext_CertPolicies_IncorrectData = 2415919674,
    /**
    * ICAO certificate extension: Cert policies empty
    */
    ntfLDS_ICAO_Certificate_Ext_CertPolicies_Empty = 2415919675,
    /**
    * ICAO certificate extension: Cert policies policy ID missed
    */
    ntfLDS_ICAO_Certificate_Ext_CertPolicies_PolicyID_Missed = 2415919676,
    /**
    * ICAO certificate extension: CRL dist point missed
    */
    ntfLDS_ICAO_Certificate_Ext_CRLDistPoint_Missed = 2415919677,
    /**
    * ICAO certificate extension: CRL dist point incorrect data
    */
    ntfLDS_ICAO_Certificate_Ext_CRLDistPoint_IncorrectData = 2415919678,
    /**
    * ICAO certificate extension: CRL dist point empty
    */
    ntfLDS_ICAO_Certificate_Ext_CRLDistPoint_Empty = 2415919679,
    /**
    * ICAO certificate extension: CRL dist point point missed
    */
    ntfLDS_ICAO_Certificate_Ext_CRLDistPoint_PointMissed = 2415919680,
    /**
    * ICAO certificate: SN non-compliant
    */
    ntfLDS_ICAO_Certificate_SN_NonCompliant = 2415919681,
    /**
    * ICAO certificate: Issuer SN non-compliant
    */
    ntfLDS_ICAO_Certificate_Issuer_SN_NonCompliant = 2415919682,
    /**
    * ICAO certificate: Subject SN non-compliant
    */
    ntfLDS_ICAO_Certificate_Subject_SN_NonCompliant = 2415919683,
    /**
    * ICAO certificate: Issuer attribute non-compliant
    */
    ntfLDS_ICAO_Certificate_Issuer_AttributeNonCompliant = 2415919684,
    /**
    * ICAO certificate: Subject attribute non-compliant
    */
    ntfLDS_ICAO_Certificate_Subject_AttributeNonCompliant = 2415919685,
    /**
    * ICAO certificate: Issuer subject country non-matching
    */
    ntfLDS_ICAO_Certificate_IssuerSubject_Country_NonMatching = 2415919686,
    /**
    * ICAO certificate extension: CSCA alt names non-matching
    */
    ntfLDS_ICAO_Certificate_Ext_CSCA_AltNames_NonMatching = 2415919687,
    /**
    * ICAO certificate extension: Name change incorrect data
    */
    ntfLDS_ICAO_Certificate_Ext_NameChange_IncorrectData = 2415919688,
    /**
    * ICAO certificate extension: Name change non-compliant
    */
    ntfLDS_ICAO_Certificate_Ext_NameChange_NonCompliant = 2415919689,
    /**
    * ICAO certificate extension: Name change critical
    */
    ntfLDS_ICAO_Certificate_Ext_NameChange_Critical = 2415919690,
    /**
    * ICAO certificate extension Doc type list: non-compliant
    */
    ntfLDS_ICAO_Certificate_Ext_DocTypeList_NonCompliant = 2415919691,
    /**
    * ICAO certificate extension Doc type list: Critical
    */
    ntfLDS_ICAO_Certificate_Ext_DocTypeList_Critical = 2415919692,
    /**
    * ICAO certificate extension: Optional critical
    */
    ntfLDS_ICAO_Certificate_Ext_Optional_Critical = 2415919693,
    /**
    * ICAO certificate: Subject non-compliant
    */
    ntfLDS_ICAO_Certificate_Subject_NonCompliant = 2415919694,
    /**
    * ICAO certificate: Subject common name non-compliant
    */
    ntfLDS_ICAO_Certificate_Subject_CommonNameNonCompliant = 2415919695,
    /**
    * ICAO COM: LDS version incorrect
    */
    ntfLDS_ICAO_COM_LDS_Version_Incorrect = 2415919136,
    /**
    * ICAO COM: LDS version missing
    */
    ntfLDS_ICAO_COM_LDS_Version_Missing = 2415919137,
    /**
    * ICAO COM: Unicode version incorrect
    */
    ntfLDS_ICAO_COM_Unicode_Version_Incorrect = 2415919138,
    /**
    * ICAO COM: Unicode version missing
    */
    ntfLDS_ICAO_COM_Unicode_Version_Missing = 2415919139,
    /**
    * ICAO COM: DGPM incorrect
    */
    ntfLDS_ICAO_COM_DGPM_Incorrect = 2415919140,
    /**
    * ICAO COM: DGPM missing
    */
    ntfLDS_ICAO_COM_DGPM_Missing = 2415919141,
    /**
    * ICAO COM: DGPM unexpected
    */
    ntfLDS_ICAO_COM_DGPM_Unexpected = 2415919142,
    /**
    * ICAO application: LDS version unsupported
    */
    ntfLDS_ICAO_Application_LDSVersion_Unsupported = 2415919152,
    /**
    * ICAO application: Unicode version unsupported
    */
    ntfLDS_ICAO_Application_UnicodeVersion_Unsupported = 2415919153,
    /**
    * ICAO application: LDS version inconsistent
    */
    ntfLDS_ICAO_Application_LDSVersion_Inconsistent = 2415919154,
    /**
    * ICAO application: Unicode version inconsistent
    */
    ntfLDS_ICAO_Application_UnicodeVersion_Inconsistent = 2415919155,
    /**
    * ASN signed data: OID incorrect
    */
    ntfLDS_ASN_SignedData_OID_Incorrect = 2415919360,
    /**
    * ASN signed data: Version incorrect
    */
    ntfLDS_ASN_SignedData_Version_Incorrect = 2415919520,
    /**
    * ASN signed data: Content OID incorrect
    */
    ntfLDS_ASN_SignedData_ContentOID_Incorrect = 2415919521,
    /**
    * ICAO signed data: Version incorrect
    */
    ntfLDS_ICAO_SignedData_Version_Incorrect = 2415919361,
    /**
    * ICAO signed data: Digest algorithms empty
    */
    ntfLDS_ICAO_SignedData_DigestAlgorithms_Empty = 2415919362,
    /**
    * ICAO signed data: Digest algorithms unsupported
    */
    ntfLDS_ICAO_SignedData_DigestAlgorithms_Unsupported = 2415919363,
    /**
    * ICAO signed data: Signer infos multiple entries
    */
    ntfLDS_ICAO_SignedData_SignerInfos_MultipleEntries = 2415919369,
    /**
    * ICAO signed data: Certificates missed
    */
    ntfLDS_ICAO_SignedData_Certificates_Missed = 2415919536,
    /**
    * ICAO signed data: Certificates empty
    */
    ntfLDS_ICAO_SignedData_Certificates_Empty = 2415919537,
    /**
    * ICAO signed data: CRLs incorrect usage
    */
    ntfLDS_ICAO_SignedData_CRLs_IncorrectUsage = 2415919538,
    /**
    * ICAO LDS object: Incorrect content OID
    */
    ntfLDS_ICAO_LDSObject_IncorrectContentOID = 2415919364,
    /**
    * ICAO LDS object: DG number incorrect
    */
    ntfLDS_ICAO_LDSObject_DGNumber_Incorrect = 2415919365,
    /**
    * ICAO LDS object: DG hash missing
    */
    ntfLDS_ICAO_LDSObject_DGHash_Missing = 2415919366,
    /**
    * ICAO LDS object: DG hash extra
    */
    ntfLDS_ICAO_LDSObject_DGHash_Extra = 2415919367,
    /**
    * ICAO LDS object: Version incorrect
    */
    ntfLDS_ICAO_LDSObject_Version_Incorrect = 2415919368,
    /**
    * ICAO master list: Version incorrect
    */
    ntfLDS_ICAO_MasterList_Version_Incorrect = 2415919552,
    /**
    * ICAO Deviation list: Version incorrect
    */
    ntfLDS_ICAO_DeviationList_Version_Incorrect = 2415919560,
    /**
    * BSI: Defect  list version incorrect
    */
    ntfLDS_BSI_DefectList_Version_Incorrect = 2415919568,
    /**
    * BSI: Black list version incorrect
    */
    ntfLDS_BSI_BlackList_Version_Incorrect = 2415919576,
    /**
    * ASN signer info: Version incorrect
    */
    ntfLDS_ASN_SignerInfo_Version_Incorrect = 2415919370,
    /**
    * ASN signer info: SID incorrect choice
    */
    ntfLDS_ASN_SignerInfo_SID_IncorrectChoice = 2415919371,
    /**
    * ASN signer info: SID digest algorithm not listed
    */
    ntfLDS_ASN_SignerInfo_SID_DigestAlgorithmNotListed = 2415919372,
    /**
    * ASN signer info: Message digest attr missing
    */
    ntfLDS_ASN_SignerInfo_MessageDigestAttr_Missing = 2415919373,
    /**
    * ASN signer info: Message digest attr data
    */
    ntfLDS_ASN_SignerInfo_MessageDigestAttr_Data = 2415919374,
    /**
    * ASN signer info: Message digest attr value
    */
    ntfLDS_ASN_SignerInfo_MessageDigestAttr_Value = 2415919375,
    /**
    * ASN signer info: Content type attr missing
    */
    ntfLDS_ASN_SignerInfo_ContentTypeAttr_Missing = 2415919376,
    /**
    * ASN signer info: Content type attr data
    */
    ntfLDS_ASN_SignerInfo_ContentTypeAttr_Data = 2415919377,
    /**
    * ASN signer info: Content type attr value
    */
    ntfLDS_ASN_SignerInfo_ContentTypeAttr_Value = 2415919378,
    /**
    * ASN signer info: Signing time attr missing
    */
    ntfLDS_ASN_SignerInfo_SigningTimeAttr_Missing = 2415919387,
    /**
    * ASN signer info: Signing time attr data
    */
    ntfLDS_ASN_SignerInfo_SigningTimeAttr_Data = 2415919388,
    /**
    * ASN signer info: Signing time attr value
    */
    ntfLDS_ASN_SignerInfo_SigningTimeAttr_Value = 2415919389,
    /**
    * ASN signer info: List content description attr missing
    */
    ntfLDS_ASN_SignerInfo_ListContentDescriptionAttr_Missing = 2415919390,
    /**
    * ASN signer info: List content description attr data
    */
    ntfLDS_ASN_SignerInfo_ListContentDescriptionAttr_Data = 2415919391,
    /**
    * Auth signer info: Certificate validity
    */
    ntfLDS_Auth_SignerInfo_Certificate_Validity = 2415919381,
    /**
    * Auth signer info: Certificate root is not trusted
    */
    ntfLDS_Auth_SignerInfo_Certificate_RootIsNotTrusted = 2415919382,
    /**
    * Auth signer info: Certificate cannot find CSCA
    */
    ntfLDS_Auth_SignerInfo_Certificate_CantFindCSCA = 2415919383,
    /**
    * Auth signer info: Certificate revoked
    */
    ntfLDS_Auth_SignerInfo_Certificate_Revoked = 2415919384,
    /**
    * Auth signer info: Certificate signature invalid
    */
    ntfLDS_Auth_SignerInfo_Certificate_SignatureInvalid = 2415919385,
    /**
    * Notification: Unsupported image format
    */
    ntfLDS_UnsupportedImageFormat = 2415919386,
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
    ntfLDS_Biometrics_FormatOwner_Missing = 2415984640,
    /**
    * Biometrics: Format owner incorrect
    */
    ntfLDS_Biometrics_FormatOwner_Incorrect = 2416050176,
    /**
    * Biometrics: Format type missing
    */
    ntfLDS_Biometrics_FormatType_Missing = 2416115712,
    /**
    * Biometrics: Format type incorrect
    */
    ntfLDS_Biometrics_FormatType_Incorrect = 2416181248,
    /**
    * Biometrics: Type incorrect
    */
    ntfLDS_Biometrics_Type_Incorrect = 2416246784,
    /**
    * Biometrics: Subtype missing
    */
    ntfLDS_Biometrics_SubType_Missing = 2416312320,
    /**
    * Biometrics: Subtype incorrect
    */
    ntfLDS_Biometrics_SubType_Incorrect = 2416377856,
    /**
    * Biometrics: BDB image missing
    */
    ntfLDS_Biometrics_BDB_Image_Missing = 2416443392,
    /**
    * Biometrics: BDB format ID incorrect
    */
    ntfLDS_Biometrics_BDB_FormatID_Incorrect = 2416508928,
    /**
    * Biometrics: BDB version incorrect
    */
    ntfLDS_Biometrics_BDB_Version_Incorrect = 2416574464,
    /**
    * Biometrics: BDB data length incorrect
    */
    ntfLDS_Biometrics_BDB_DataLength_Incorrect = 2416640000,
    /**
    * Biometrics: BDB Data Gender
    */
    ntfLDS_Biometrics_BDB_Data_Gender = 2416967680,
    /**
    * Biometrics: BDB Data Eye Color
    */
    ntfLDS_Biometrics_BDB_Data_EyeColor = 2417033216,
    /**
    * Biometrics: BDB Data Hair Color
    */
    ntfLDS_Biometrics_BDB_Data_HairColor = 2417098752,
    /**
    * Biometrics: BDB Data Pose Angle Yaw
    */
    ntfLDS_Biometrics_BDB_Data_PoseAngle_Yaw = 2417164288,
    /**
    * Biometrics: BDB Data Pose Angle Pitch
    */
    ntfLDS_Biometrics_BDB_Data_PoseAngle_Pitch = 2417229824,
    /**
    * Biometrics: BDB Data Pose Angle Roll
    */
    ntfLDS_Biometrics_BDB_Data_PoseAngle_Roll = 2417295360,
    /**
    * Biometrics: BDB Data Pose Angle U Yaw
    */
    ntfLDS_Biometrics_BDB_Data_PoseAngleU_Yaw = 2417360896,
    /**
    * Biometrics: BDB Data Pose Angle U Pitch
    */
    ntfLDS_Biometrics_BDB_Data_PoseAngleU_Pitch = 2417426432,
    /**
    * Biometrics: BDB Data Pose Angle U Roll
    */
    ntfLDS_Biometrics_BDB_Data_PoseAngleU_Roll = 2417491968,
    /**
    * Biometrics: BDB Data Face Image Type
    */
    ntfLDS_Biometrics_BDB_Data_FaceImageType = 2417557504,
    /**
    * Biometrics: BDB Data Image Data Type
    */
    ntfLDS_Biometrics_BDB_Data_ImageDataType = 2417623040,
    /**
    * SI: PACE Info Unsupported Std Parameters
    */
    ntfLDS_SI_PACE_Info_UnsupportedStdParameters = 2432696320,
    /**
    * SI: PACE Info Deprecated Version
    */
    ntfLDS_SI_PACE_Info_DeprecatedVersion = 2432696321,
    /**
    * SI: PACE Domain Params Using Std Ref
    */
    ntfLDS_SI_PACE_DomainParams_UsingStdRef = 2432696322,
    /**
    * SI: PACE Domain Params Unsupported Algorithm
    */
    ntfLDS_SI_PACE_DomainParams_UnsupportedAlgorithm = 2432696323,
    /**
    * SI: CA Info Incorrect Version
    */
    ntfLDS_SI_CA_Info_IncorrectVersion = 2432696324,
    /**
    * SI: CA PublicKey Unsupported Algorithm
    */
    ntfLDS_SI_CA_PublicKey_UnsupportedAlgorithm = 2432696325,
    /**
    * SI: CA Domain Params Unsupported Algorithm
    */
    ntfLDS_SI_CA_DomainParams_UnsupportedAlgorithm = 2432696326,
    /**
    * SI: TA Info Incorrect Version
    */
    ntfLDS_SI_TA_Info_IncorrectVersion = 2432696327,
    /**
    * SI: TA Info File ID For Version 2
    */
    ntfLDS_SI_TA_Info_FileIDForVersion2 = 2432696328,
    /**
    * SI: eID Security Unsupported Digest Algorithm
    */
    ntfLDS_SI_eIDSecurity_UnsupportedDigestAlgorithm = 2432696329,
    /**
    * SI: RI info incorrect version
    */
    ntfLDS_SI_RI_Info_IncorrectVersion = 2432696330,
    /**
    * SI: RI domain params unsupported algorithm
    */
    ntfLDS_SI_RI_DomainParams_UnsupportedAlgorithm = 2432696331,
    /**
    * SI: AA info incorrect version
    */
    ntfLDS_SI_AA_Info_IncorrectVersion = 2432696332,
    /**
    * SI: AA info unsupported algorithm
    */
    ntfLDS_SI_AA_Info_UnsupportedAlgorithm = 2432696333,
    /**
    * SI: AA info inconsistent algorithm reference
    */
    ntfLDS_SI_AA_Info_InconsistentAlgorithmReference = 2432696334,
    /**
    * SI: PACE Info Not Available
    */
    ntfLDS_SI_Storage_PACE_Info_NotAvailable = 2432696576,
    /**
    * SI: PACE Info No Std Parameters
    */
    ntfLDS_SI_Storage_PACE_Info_NoStdParameters = 2432696577,
    /**
    * SI: PACE Info No Matching Domain Params
    */
    ntfLDS_SI_Storage_PACE_Info_NoMatchingDomainParams = 2432696578,
    /**
    * SI: CA Info Not Available
    */
    ntfLDS_SI_Storage_CA_Info_NotAvailable = 2432696579,
    /**
    * SI: CA Domain Params No Required Option
    */
    ntfLDS_SI_Storage_CA_DomainParams_NoRequiredOption = 2432696580,
    /**
    * SI: CA Domain Params Not Available
    */
    ntfLDS_SI_Storage_CA_DomainParams_NotAvailable = 2432696581,
    /**
    * SI: CA Anonymous Infos
    */
    ntfLDS_SI_Storage_CA_AnonymousInfos = 2432696582,
    /**
    * SI: CA Info No Matching Domain Params
    */
    ntfLDS_SI_Storage_CA_Info_NoMatchingDomainParams = 2432696583,
    /**
    * SI: CA Info No Matching Public Key
    */
    ntfLDS_SI_Storage_CA_Info_NoMatchingPublicKey = 2432696584,
    /**
    * SI: CA Incorrect Infos Quantity
    */
    ntfLDS_SI_Storage_CA_IncorrectInfosQuantity = 2432696585,
    /**
    * SI: TA Info Not Available
    */
    ntfLDS_SI_Storage_TA_Info_NotAvailable = 2432696586,
    /**
    * SI: Card Info Locator Multiple Entries
    */
    ntfLDS_SI_Storage_CardInfoLocator_MultipleEntries = 2432696587,
    /**
    * SI: eID Security Info Multiple Entries
    */
    ntfLDS_SI_Storage_eIDSecurityInfo_MultipleEntries = 2432696588,
    /**
    * SI: Privileged TI Multiple Entries
    */
    ntfLDS_SI_Storage_PrivilegedTI_MultipleEntries = 2432696589,
    /**
    * SI: Privileged TI Incorrect Usage
    */
    ntfLDS_SI_Storage_PrivilegedTI_IncorrectUsage = 2432696590,
    /**
    * SI: RI domain params multiple entries
    */
    ntfLDS_SI_Storage_RI_DomainParams_MultipleEntries = 2432696591,
    /**
    * SI: Storage PACE Info Non Consistant
    */
    ntfLDS_SI_Storage_PACEInfos_NonConsistant = 2432696592,
    /**
    * CV Certificate: Profile incorrect version
    */
    ntfLDS_CVCertificate_Profile_IncorrectVersion = 2432696833,
    /**
    * CV Certificate: Validity
    */
    ntfLDS_CVCertificate_Validity = 2432696834,
    /**
    * CV Certificate: Non CVCA domain parameters
    */
    ntfLDS_CVCertificate_NonCVCADomainParameters = 2432696835,
    /**
    * CV Certificate: Private key incorrect version
    */
    ntfLDS_CV_Certificate_PrivateKey_IncorrectVersion = 2432696836,
    /**
    * TA: PACE static binding used
    */
    ntfLDS_TA_PACEStaticBindingUsed = 2432697088,
    /**
    * Auth ML signer info: Certificate validity
    */
    ntfLDS_Auth_MLSignerInfo_Certificate_Validity = 2449473813,
    /**
    * Auth ML signer info: Certificate root is not trusted
    */
    ntfLDS_Auth_MLSignerInfo_Certificate_RootIsNotTrusted = 2449473814,
    /**
    * Auth ML signer info: Certificate cannot find CSCA
    */
    ntfLDS_Auth_MLSignerInfo_Certificate_CantFindCSCA = 2449473815,
    /**
    * Auth ML signer info: Certificate revoked
    */
    ntfLDS_Auth_MLSignerInfo_Certificate_Revoked = 2449473816,
    /**
    * Auth ML signer info: Certificate signature invalid
    */
    ntfLDS_Auth_MLSignerInfo_Certificate_SignatureInvalid = 2449473817,
    /**
    * Country Codes from certificate chain don&#39;t match
    */
    ntfLDS_ICAO_Certificate_Chain_Country_NonMatching = 2415919696,
    /**
    * Country Codes from certificate and visual MRZ don&#39;t match
    */
    ntfLDS_ICAO_Certificate_VisualMrz_Country_NonMatching = 2415919697,
    /**
    * Incorrect MRZ, country code doesn&#39;t match codes from Visual MRZ
    */
    ntfLDS_MRZ_CountryCode_VisualMrz_NonMatching = 139289,
    /**
    * Country Codes from certificate and DG1 MRZ don&#39;t match
    */
    ntfLDS_ICAO_Certificate_MRZ_Country_NonMatching = 2415919698
}



