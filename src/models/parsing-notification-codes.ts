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
    ntfLDS_ASN_Certificate_IncorrectVersion = -1879048191,
    ntfLDS_ASN_Certificate_NonMatchingSignatureAlgorithm = -1879048190,
    ntfLDS_ASN_Certificate_IncorrectTimeCoding = -1879048189,
    ntfLDS_ASN_Certificate_IncorrectUseOfGeneralizedTime = -1879048188,
    ntfLDS_ASN_Certificate_EmptyIssuer = -1879048187,
    ntfLDS_ASN_Certificate_EmptySubject = -1879048186,
    ntfLDS_ASN_Certificate_UnsupportedCriticalExtension = -1879048184,
    ntfLDS_ASN_Certificate_ForcedDefaultCSCARole = -1879048178,
    ntfLDS_ASN_Certificate_ForcedDefaultDSRole = -1879048177,
    ntfLDS_ASN_Certificate_IncorrectIssuerSubjectDS = -1879048176,
    ntfLDS_ASN_Certificate_DuplicatingExtensions = -1879048169,
    ntfLDS_ICAO_Certificate_Version_Missed = -1879047680,
    ntfLDS_ICAO_Certificate_Version_Incorrect = -1879047679,
    ntfLDS_ICAO_Certificate_Issuer_Country_Missed = -1879047678,
    ntfLDS_ICAO_Certificate_Issuer_CommonName_Missed = -1879047677,
    ntfLDS_ICAO_Certificate_Issuer_CountryNonCompliant = -1879047676,
    ntfLDS_ICAO_Certificate_Subject_Country_Missed = -1879047675,
    ntfLDS_ICAO_Certificate_Subject_CommonName_Missed = -1879047674,
    ntfLDS_ICAO_Certificate_Subject_CountryNonCompliant = -1879047673,
    ntfLDS_ICAO_Certificate_UsingNonCompliantData = -1879047672,
    ntfLDS_ICAO_Certificate_UnsupportedSignatureAlgorithm = -1879047671,
    ntfLDS_ICAO_Certificate_UnsupportedPublicKeyAlgorithm = -1879047670,
    ntfLDS_ICAO_Certificate_MissedExtensions = -1879047669,
    ntfLDS_ICAO_Certificate_Validity = -1879047668,
    ntfLDS_ICAO_Certificate_Ext_UsingNonCompliantData = -1879047667,
    ntfLDS_ICAO_Certificate_Ext_KeyUsage_Missed = -1879047666,
    ntfLDS_ICAO_Certificate_Ext_KeyUsage_NotCritical = -1879047665,
    ntfLDS_ICAO_Certificate_Ext_KeyUsage_IncorrectData = -1879047664,
    ntfLDS_ICAO_Certificate_Ext_BasicC_Missed = -1879047663,
    ntfLDS_ICAO_Certificate_Ext_BasicC_IncorrectUsage1 = -1879047662,
    ntfLDS_ICAO_Certificate_Ext_BasicC_IncorrectUsage2 = -1879047661,
    ntfLDS_ICAO_Certificate_Ext_BasicC_NotCritical = -1879047660,
    ntfLDS_ICAO_Certificate_Ext_BasicC_IncorrectData = -1879047659,
    ntfLDS_ICAO_Certificate_Ext_BasicC_PathLenC_Missed = -1879047658,
    ntfLDS_ICAO_Certificate_Ext_BasicC_PathLenC_Incorrect = -1879047657,
    ntfLDS_ICAO_Certificate_Ext_ExtKeyUsage_NotCritical = -1879047656,
    ntfLDS_ICAO_Certificate_Ext_ExtKeyUsage_IncorrectUsage = -1879047655,
    ntfLDS_ICAO_Certificate_Ext_ExtKeyUsage_IncorrectData = -1879047654,
    ntfLDS_ICAO_Certificate_Ext_AuthKeyID_Missed = -1879047653,
    ntfLDS_ICAO_Certificate_Ext_AuthKeyID_IncorrectData = -1879047652,
    ntfLDS_ICAO_Certificate_Ext_AuthKeyID_KeyID_Missed = -1879047651,
    ntfLDS_ICAO_Certificate_Ext_SubjectKeyID_Missed = -1879047650,
    ntfLDS_ICAO_Certificate_Ext_SubjectKeyID_IncorrectData = -1879047649,
    ntfLDS_ICAO_Certificate_Ext_PrivateKeyUP_Missed = -1879047648,
    ntfLDS_ICAO_Certificate_Ext_PrivateKeyUP_IncorrectData = -1879047647,
    ntfLDS_ICAO_Certificate_Ext_PrivateKeyUP_Empty = -1879047646,
    ntfLDS_ICAO_Certificate_Ext_SubjectAltName_Missed = -1879047645,
    ntfLDS_ICAO_Certificate_Ext_SubjectAltName_IncorrectData = -1879047644,
    ntfLDS_ICAO_Certificate_Ext_SubjectAltName_Empty = -1879047643,
    ntfLDS_ICAO_Certificate_Ext_SubjectAltName_NonCompliant = -1879047642,
    ntfLDS_ICAO_Certificate_Ext_SubjectAltName_Critical = -1879047640,
    ntfLDS_ICAO_Certificate_Ext_SubjectAltName_DN_Empty = -1879047639,
    ntfLDS_ICAO_Certificate_Ext_SubjectAltName_DN_Incorrect = -1879047638,
    ntfLDS_ICAO_Certificate_Ext_SubjectAltName_DN_NonCompliant = -1879047637,
    ntfLDS_ICAO_Certificate_Ext_IssuerAltName_Missed = -1879047636,
    ntfLDS_ICAO_Certificate_Ext_IssuerAltName_IncorrectData = -1879047635,
    ntfLDS_ICAO_Certificate_Ext_IssuerAltName_Empty = -1879047634,
    ntfLDS_ICAO_Certificate_Ext_IssuerAltName_NonCompliant = -1879047633,
    ntfLDS_ICAO_Certificate_Ext_IssuerAltName_Critical = -1879047631,
    ntfLDS_ICAO_Certificate_Ext_IssuerAltName_DN_Empty = -1879047630,
    ntfLDS_ICAO_Certificate_Ext_IssuerAltName_DN_Incorrect = -1879047629,
    ntfLDS_ICAO_Certificate_Ext_IssuerAltName_DN_NonCompliant = -1879047628,
    ntfLDS_ICAO_Certificate_Ext_DocTypeList_Missed = -1879047627,
    ntfLDS_ICAO_Certificate_Ext_DocTypeList_IncorrectData = -1879047626,
    ntfLDS_ICAO_Certificate_Ext_DocTypeList_Version = -1879047625,
    ntfLDS_ICAO_Certificate_Ext_DocTypeList_DocTypes = -1879047624,
    ntfLDS_ICAO_Certificate_Ext_DocTypeList_DocTypes_Empty = -1879047623,
    ntfLDS_ICAO_Certificate_Ext_CertPolicies_IncorrectData = -1879047622,
    ntfLDS_ICAO_Certificate_Ext_CertPolicies_Empty = -1879047621,
    ntfLDS_ICAO_Certificate_Ext_CertPolicies_PolicyID_Missed = -1879047620,
    ntfLDS_ICAO_Certificate_Ext_CRLDistPoint_Missed = -1879047619,
    ntfLDS_ICAO_Certificate_Ext_CRLDistPoint_IncorrectData = -1879047618,
    ntfLDS_ICAO_Certificate_Ext_CRLDistPoint_Empty = -1879047617,
    ntfLDS_ICAO_Certificate_Ext_CRLDistPoint_PointMissed = -1879047616,
    ntfLDS_ICAO_Certificate_SN_NonCompliant = -1879047615,
    ntfLDS_ICAO_Certificate_Issuer_SN_NonCompliant = -1879047614,
    ntfLDS_ICAO_Certificate_Subject_SN_NonCompliant = -1879047613,
    ntfLDS_ICAO_Certificate_Issuer_AttributeNonCompliant = -1879047612,
    ntfLDS_ICAO_Certificate_Subject_AttributeNonCompliant = -1879047611,
    ntfLDS_ICAO_Certificate_IssuerSubject_Country_NonMatching = -1879047610,
    ntfLDS_ICAO_Certificate_Ext_CSCA_AltNames_NonMatching = -1879047609,
    ntfLDS_ICAO_Certificate_Ext_NameChange_IncorrectData = -1879047608,
    ntfLDS_ICAO_Certificate_Ext_NameChange_NonCompliant = -1879047607,
    ntfLDS_ICAO_Certificate_Ext_NameChange_Critical = -1879047606,
    ntfLDS_ICAO_Certificate_Ext_DocTypeList_NonCompliant = -1879047605,
    ntfLDS_ICAO_Certificate_Ext_DocTypeList_Critical = -1879047604,
    ntfLDS_ICAO_Certificate_Ext_Optional_Critical = -1879047603,
    ntfLDS_ICAO_Certificate_Subject_NonCompliant = -1879047602,
    ntfLDS_ICAO_Certificate_Subject_CommonNameNonCompliant = -1879047601,
    ntfLDS_ICAO_COM_LDS_Version_Incorrect = -1879048160,
    ntfLDS_ICAO_COM_LDS_Version_Missing = -1879048159,
    ntfLDS_ICAO_COM_Unicode_Version_Incorrect = -1879048158,
    ntfLDS_ICAO_COM_Unicode_Version_Missing = -1879048157,
    ntfLDS_ICAO_COM_DGPM_Incorrect = -1879048156,
    ntfLDS_ICAO_COM_DGPM_Missing = -1879048155,
    ntfLDS_ICAO_COM_DGPM_Unexpected = -1879048154,
    ntfLDS_ICAO_Application_LDSVersion_Unsupported = -1879048144,
    ntfLDS_ICAO_Application_UnicodeVersion_Unsupported = -1879048143,
    ntfLDS_ICAO_Application_LDSVersion_Inconsistent = -1879048142,
    ntfLDS_ICAO_Application_UnicodeVersion_Inconsistent = -1879048141,
    ntfLDS_ASN_SignedData_OID_Incorrect = -1879047936,
    ntfLDS_ASN_SignedData_Version_Incorrect = -1879047776,
    ntfLDS_ASN_SignedData_ContentOID_Incorrect = -1879047775,
    ntfLDS_ICAO_SignedData_Version_Incorrect = -1879047935,
    ntfLDS_ICAO_SignedData_DigestAlgorithms_Empty = -1879047934,
    ntfLDS_ICAO_SignedData_DigestAlgorithms_Unsupported = -1879047933,
    ntfLDS_ICAO_SignedData_SignerInfos_MultipleEntries = -1879047927,
    ntfLDS_ICAO_SignedData_Certificates_Missed = -1879047760,
    ntfLDS_ICAO_SignedData_Certificates_Empty = -1879047759,
    ntfLDS_ICAO_SignedData_CRLs_IncorrectUsage = -1879047758,
    ntfLDS_ICAO_LDSObject_IncorrectContentOID = -1879047932,
    ntfLDS_ICAO_LDSObject_DGNumber_Incorrect = -1879047931,
    ntfLDS_ICAO_LDSObject_DGHash_Missing = -1879047930,
    ntfLDS_ICAO_LDSObject_DGHash_Extra = -1879047929,
    ntfLDS_ICAO_LDSObject_Version_Incorrect = -1879047928,
    ntfLDS_ICAO_MasterList_Version_Incorrect = -1879047744,
    ntfLDS_ICAO_DeviationList_Version_Incorrect = -1879047736,
    ntfLDS_BSI_DefectList_Version_Incorrect = -1879047728,
    ntfLDS_BSI_BlackList_Version_Incorrect = -1879047720,
    ntfLDS_ASN_SignerInfo_Version_Incorrect = -1879047926,
    ntfLDS_ASN_SignerInfo_SID_IncorrectChoice = -1879047925,
    ntfLDS_ASN_SignerInfo_SID_DigestAlgorithmNotListed = -1879047924,
    ntfLDS_ASN_SignerInfo_MessageDigestAttr_Missing = -1879047923,
    ntfLDS_ASN_SignerInfo_MessageDigestAttr_Data = -1879047922,
    ntfLDS_ASN_SignerInfo_MessageDigestAttr_Value = -1879047921,
    ntfLDS_ASN_SignerInfo_ContentTypeAttr_Missing = -1879047920,
    ntfLDS_ASN_SignerInfo_ContentTypeAttr_Data = -1879047919,
    ntfLDS_ASN_SignerInfo_ContentTypeAttr_Value = -1879047918,
    ntfLDS_ASN_SignerInfo_SigningTimeAttr_Missing = -1879047909,
    ntfLDS_ASN_SignerInfo_SigningTimeAttr_Data = -1879047908,
    ntfLDS_ASN_SignerInfo_SigningTimeAttr_Value = -1879047907,
    ntfLDS_ASN_SignerInfo_ListContentDescriptionAttr_Missing = -1879047906,
    ntfLDS_ASN_SignerInfo_ListContentDescriptionAttr_Data = -1879047905,
    ntfLDS_Auth_SignerInfo_Certificate_Validity = -1879047915,
    ntfLDS_Auth_SignerInfo_Certificate_RootIsNotTrusted = -1879047914,
    ntfLDS_Auth_SignerInfo_Certificate_CantFindCSCA = -1879047913,
    ntfLDS_Auth_SignerInfo_Certificate_Revoked = -1879047912,
    ntfLDS_Auth_SignerInfo_Certificate_SignatureInvalid = -1879047911,
    ntfLDS_UnsupportedImageFormat = -1879047910,
    ntfLDS_MRZ_DocumentType_Unknown = 139272,
    ntfLDS_MRZ_IssuingState_SyntaxError = 139273,
    ntfLDS_MRZ_Name_IsVoid = 139274,
    ntfLDS_MRZ_Number_IncorrectChecksum = 139277,
    ntfLDS_MRZ_Nationality_SyntaxError = 139278,
    ntfLDS_MRZ_DOB_SyntaxError = 139279,
    ntfLDS_MRZ_DOB_Error = 139280,
    ntfLDS_MRZ_DOB_IncorrectChecksum = 139281,
    ntfLDS_MRZ_Sex_Incorrect = 139282,
    ntfLDS_MRZ_DOE_SyntaxError = 139283,
    ntfLDS_MRZ_DOE_Error = 139284,
    ntfLDS_MRZ_DOE_IncorrectChecksum = 139285,
    ntfLDS_MRZ_OptionalData_IncorrectChecksum = 139286,
    ntfLDS_MRZ_IncorrectChecksum = 139287,
    ntfLDS_MRZ_Incorrect = 139288,
    ntfLDS_Biometrics_FormatOwner_Missing = -1878982656,
    ntfLDS_Biometrics_FormatOwner_Incorrect = -1878917120,
    ntfLDS_Biometrics_FormatType_Missing = -1878851584,
    ntfLDS_Biometrics_FormatType_Incorrect = -1878786048,
    ntfLDS_Biometrics_Type_Incorrect = -1878720512,
    ntfLDS_Biometrics_SubType_Missing = -1878654976,
    ntfLDS_Biometrics_SubType_Incorrect = -1878589440,
    ntfLDS_Biometrics_BDB_Image_Missing = -1878523904,
    ntfLDS_Biometrics_BDB_FormatID_Incorrect = -1878458368,
    ntfLDS_Biometrics_BDB_Version_Incorrect = -1878392832,
    ntfLDS_Biometrics_BDB_DataLength_Incorrect = -1878327296,
    ntfLDS_Biometrics_BDB_Data_Gender = -1877999616,
    ntfLDS_Biometrics_BDB_Data_EyeColor = -1877934080,
    ntfLDS_Biometrics_BDB_Data_HairColor = -1877868544,
    ntfLDS_Biometrics_BDB_Data_PoseAngle_Yaw = -1877803008,
    ntfLDS_Biometrics_BDB_Data_PoseAngle_Pitch = -1877737472,
    ntfLDS_Biometrics_BDB_Data_PoseAngle_Roll = -1877671936,
    ntfLDS_Biometrics_BDB_Data_PoseAngleU_Yaw = -1877606400,
    ntfLDS_Biometrics_BDB_Data_PoseAngleU_Pitch = -1877540864,
    ntfLDS_Biometrics_BDB_Data_PoseAngleU_Roll = -1877475328,
    ntfLDS_Biometrics_BDB_Data_FaceImageType = -1877409792,
    ntfLDS_Biometrics_BDB_Data_ImageDataType = -1877344256,
    ntfLDS_SI_PACE_Info_UnsupportedStdParameters = -1862270976,
    ntfLDS_SI_PACE_Info_DeprecatedVersion = -1862270975,
    ntfLDS_SI_PACE_DomainParams_UsingStdRef = -1862270974,
    ntfLDS_SI_PACE_DomainParams_UnsupportedAlgorithm = -1862270973,
    ntfLDS_SI_CA_Info_IncorrectVersion = -1862270972,
    ntfLDS_SI_CA_PublicKey_UnsupportedAlgorithm = -1862270971,
    ntfLDS_SI_CA_DomainParams_UnsupportedAlgorithm = -1862270970,
    ntfLDS_SI_TA_Info_IncorrectVersion = -1862270969,
    ntfLDS_SI_TA_Info_FileIDForVersion2 = -1862270968,
    ntfLDS_SI_eIDSecurity_UnsupportedDigestAlgorithm = -1862270967,
    ntfLDS_SI_RI_Info_IncorrectVersion = -1862270966,
    ntfLDS_SI_RI_DomainParams_UnsupportedAlgorithm = -1862270965,
    ntfLDS_SI_AA_Info_IncorrectVersion = -1862270964,
    ntfLDS_SI_AA_Info_UnsupportedAlgorithm = -1862270963,
    ntfLDS_SI_AA_Info_InconsistentAlgorithmReference = -1862270962,
    ntfLDS_SI_Storage_PACE_Info_NotAvailable = -1862270720,
    ntfLDS_SI_Storage_PACE_Info_NoStdParameters = -1862270719,
    ntfLDS_SI_Storage_PACE_Info_NoMatchingDomainParams = -1862270718,
    ntfLDS_SI_Storage_CA_Info_NotAvailable = -1862270717,
    ntfLDS_SI_Storage_CA_DomainParams_NoRequiredOption = -1862270716,
    ntfLDS_SI_Storage_CA_DomainParams_NotAvailable = -1862270715,
    ntfLDS_SI_Storage_CA_AnonymousInfos = -1862270714,
    ntfLDS_SI_Storage_CA_Info_NoMatchingDomainParams = -1862270713,
    ntfLDS_SI_Storage_CA_Info_NoMatchingPublicKey = -1862270712,
    ntfLDS_SI_Storage_CA_IncorrectInfosQuantity = -1862270711,
    ntfLDS_SI_Storage_TA_Info_NotAvailable = -1862270710,
    ntfLDS_SI_Storage_CardInfoLocator_MultipleEntries = -1862270709,
    ntfLDS_SI_Storage_eIDSecurityInfo_MultipleEntries = -1862270708,
    ntfLDS_SI_Storage_PrivilegedTI_MultipleEntries = -1862270707,
    ntfLDS_SI_Storage_PrivilegedTI_IncorrectUsage = -1862270706,
    ntfLDS_SI_Storage_RI_DomainParams_MultipleEntries = -1862270705,
    ntfLDS_SI_Storage_PACEInfos_NonConsistant = -1862270704,
    ntfLDS_CVCertificate_Profile_IncorrectVersion = -1862270463,
    ntfLDS_CVCertificate_Validity = -1862270462,
    ntfLDS_CVCertificate_NonCVCADomainParameters = -1862270461,
    ntfLDS_CV_Certificate_PrivateKey_IncorrectVersion = -1862270460,
    ntfLDS_TA_PACEStaticBindingUsed = -1862270208,
    ntfLDS_Auth_MLSignerInfo_Certificate_Validity = -1845493483,
    ntfLDS_Auth_MLSignerInfo_Certificate_RootIsNotTrusted = -1845493482,
    ntfLDS_Auth_MLSignerInfo_Certificate_CantFindCSCA = -1845493481,
    ntfLDS_Auth_MLSignerInfo_Certificate_Revoked = -1845493480,
    ntfLDS_Auth_MLSignerInfo_Certificate_SignatureInvalid = -1845493479
}



