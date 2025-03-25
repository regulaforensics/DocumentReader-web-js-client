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
 * Possible values for document types
 * @export
 * @enum {number}
 */

export enum DocumentType {
    /**
    * Not defined
    */
    NOT_DEFINED = 0,
    /**
    * Passport
    */
    PASSPORT = 11,
    /**
    * Identity card
    */
    IDENTITY_CARD = 12,
    /**
    * Diplomatic passport
    */
    DIPLOMATIC_PASSPORT = 13,
    /**
    * Service passport
    */
    SERVICE_PASSPORT = 14,
    /**
    * Seamans identity document
    */
    SEAMANS_IDENTITY_DOCUMENT = 15,
    /**
    * Identity card for residence
    */
    IDENTITY_CARD_FOR_RESIDENCE = 16,
    /**
    * Travel document
    */
    TRAVEL_DOCUMENT = 17,
    /**
    * National identity card
    */
    NATIONAL_IDENTITY_CARD = 20,
    /**
    * Social identity card
    */
    SOCIAL_IDENTITY_CARD = 21,
    /**
    * Alien&#39;s identity card
    */
    ALIENS_IDENTITY_CARD = 22,
    /**
    * Privileged identity card
    */
    PRIVILEGED_IDENTITY_CARD = 23,
    /**
    * Residence permit identity card
    */
    RESIDENCE_PERMIT_IDENTITY_CARD = 24,
    /**
    * Origin card
    */
    ORIGIN_CARD = 25,
    /**
    * Emergency passport
    */
    EMERGENCY_PASSPORT = 26,
    /**
    * Alien&#39;s passport
    */
    ALIENS_PASSPORT = 27,
    /**
    * Alternative identity card
    */
    ALTERNATIVE_IDENTITY_CARD = 28,
    /**
    * Visa ID2
    */
    VISA_ID2 = 29,
    /**
    * Visa ID3
    */
    VISA_ID3 = 30,
    /**
    * Authorization card
    */
    AUTHORIZATION_CARD = 32,
    /**
    * Beginner permit
    */
    BEGINNER_PERMIT = 33,
    /**
    * Border crossing card
    */
    BORDER_CROSSING_CARD = 34,
    /**
    * Chauffeur license
    */
    CHAUFFEUR_LICENSE = 35,
    /**
    * Chauffeur license under 18
    */
    CHAUFFEUR_LICENSE_UNDER_18 = 36,
    /**
    * Chauffeur license under 21
    */
    CHAUFFEUR_LICENSE_UNDER_21 = 37,
    /**
    * Commercial driving license
    */
    COMMERCIAL_DRIVING_LICENSE = 38,
    /**
    * Commercial driving license instructional permit
    */
    COMMERCIAL_DRIVING_LICENSE_INSTRUCTIONAL_PERMIT = 39,
    /**
    * Commercial driving license under 18
    */
    COMMERCIAL_DRIVING_LICENSE_UNDER_18 = 40,
    /**
    * Commercial driving license under 21
    */
    COMMERCIAL_DRIVING_LICENSE_UNDER_21 = 41,
    /**
    * Commercial instruction permit
    */
    COMMERCIAL_INSTRUCTION_PERMIT = 42,
    /**
    * Commercial new permit
    */
    COMMERCIAL_NEW_PERMIT = 43,
    /**
    * Concealed carry license
    */
    CONCEALED_CARRY_LICENSE = 44,
    /**
    * Concealed firearm permit
    */
    CONCEALED_FIREARM_PERMIT = 45,
    /**
    * Conditional driving license
    */
    CONDITIONAL_DRIVING_LICENSE = 46,
    /**
    * Department of veterans affairs identity card
    */
    DEPARTMENT_OF_VETERANS_AFFAIRS_IDENTITY_CARD = 47,
    /**
    * Diplomatic driving license
    */
    DIPLOMATIC_DRIVING_LICENSE = 48,
    /**
    * Driving license
    */
    DRIVING_LICENSE = 49,
    /**
    * Driving license instructional permit
    */
    DRIVING_LICENSE_INSTRUCTIONAL_PERMIT = 50,
    /**
    * Driving license instructional permit under 18
    */
    DRIVING_LICENSE_INSTRUCTIONAL_PERMIT_UNDER_18 = 51,
    /**
    * Driving license instructional permit under 21
    */
    DRIVING_LICENSE_INSTRUCTIONAL_PERMIT_UNDER_21 = 52,
    /**
    * Driving license learners permit
    */
    DRIVING_LICENSE_LEARNERS_PERMIT = 53,
    /**
    * Driving license learners permit under 18
    */
    DRIVING_LICENSE_LEARNERS_PERMIT_UNDER_18 = 54,
    /**
    * Driving license learners permit under 21
    */
    DRIVING_LICENSE_LEARNERS_PERMIT_UNDER_21 = 55,
    /**
    * Driving license novice
    */
    DRIVING_LICENSE_NOVICE = 56,
    /**
    * Driving license novice under 18
    */
    DRIVING_LICENSE_NOVICE_UNDER_18 = 57,
    /**
    * Driving license novice under 21
    */
    DRIVING_LICENSE_NOVICE_UNDER_21 = 58,
    /**
    * Driving license registered offender
    */
    DRIVING_LICENSE_REGISTERED_OFFENDER = 59,
    /**
    * Driving license restricted under 18
    */
    DRIVING_LICENSE_RESTRICTED_UNDER_18 = 60,
    /**
    * Driving license restricted under 21
    */
    DRIVING_LICENSE_RESTRICTED_UNDER_21 = 61,
    /**
    * Driving license temporary visitor
    */
    DRIVING_LICENSE_TEMPORARY_VISITOR = 62,
    /**
    * Driving license temporary visitor under 18
    */
    DRIVING_LICENSE_TEMPORARY_VISITOR_UNDER_18 = 63,
    /**
    * Driving license temporary visitor under 21
    */
    DRIVING_LICENSE_TEMPORARY_VISITOR_UNDER_21 = 64,
    /**
    * Driving license under 18
    */
    DRIVING_LICENSE_UNDER_18 = 65,
    /**
    * Driving license under 21
    */
    DRIVING_LICENSE_UNDER_21 = 66,
    /**
    * Employment driving permit
    */
    EMPLOYMENT_DRIVING_PERMIT = 67,
    /**
    * Enhanced chauffeur license
    */
    ENHANCED_CHAUFFEUR_LICENSE = 68,
    /**
    * Enhanced chauffeur license under 18
    */
    ENHANCED_CHAUFFEUR_LICENSE_UNDER_18 = 69,
    /**
    * Enhanced chauffeur license under 21
    */
    ENHANCED_CHAUFFEUR_LICENSE_UNDER_21 = 70,
    /**
    * Enhanced commercial driving license
    */
    ENHANCED_COMMERCIAL_DRIVING_LICENSE = 71,
    /**
    * Enhanced driving license
    */
    ENHANCED_DRIVING_LICENSE = 72,
    /**
    * Enhanced driving license under 18
    */
    ENHANCED_DRIVING_LICENSE_UNDER_18 = 73,
    /**
    * Enhanced driving license under 21
    */
    ENHANCED_DRIVING_LICENSE_UNDER_21 = 74,
    /**
    * Enhanced identity card
    */
    ENHANCED_IDENTITY_CARD = 75,
    /**
    * Enhanced identity card under 18
    */
    ENHANCED_IDENTITY_CARD_UNDER_18 = 76,
    /**
    * Enhanced identity card under 21
    */
    ENHANCED_IDENTITY_CARD_UNDER_21 = 77,
    /**
    * Enhanced operators license
    */
    ENHANCED_OPERATORS_LICENSE = 78,
    /**
    * Firearms permit
    */
    FIREARMS_PERMIT = 79,
    /**
    * Full provisional license
    */
    FULL_PROVISIONAL_LICENSE = 80,
    /**
    * Full provisional license under 18
    */
    FULL_PROVISIONAL_LICENSE_UNDER_18 = 81,
    /**
    * Full provisional license under 21
    */
    FULL_PROVISIONAL_LICENSE_UNDER_21 = 82,
    /**
    * Geneva conventions identity card
    */
    GENEVA_CONVENTIONS_IDENTITY_CARD = 83,
    /**
    * Graduated driving license under 18
    */
    GRADUATED_DRIVING_LICENSE_UNDER_18 = 84,
    /**
    * Graduated driving license under 21
    */
    GRADUATED_DRIVING_LICENSE_UNDER_21 = 85,
    /**
    * Graduated instruction permit under 18
    */
    GRADUATED_INSTRUCTION_PERMIT_UNDER_18 = 86,
    /**
    * Graduated instruction permit under 21
    */
    GRADUATED_INSTRUCTION_PERMIT_UNDER_21 = 87,
    /**
    * Graduated license under 18
    */
    GRADUATED_LICENSE_UNDER_18 = 88,
    /**
    * Graduated license under 21
    */
    GRADUATED_LICENSE_UNDER_21 = 89,
    /**
    * Handgun carry permit
    */
    HANDGUN_CARRY_PERMIT = 90,
    /**
    * Identity and privilege card
    */
    IDENTITY_AND_PRIVILEGE_CARD = 91,
    /**
    * Identity card mobility impaired
    */
    IDENTITY_CARD_MOBILITY_IMPAIRED = 92,
    /**
    * Identity card registered offender
    */
    IDENTITY_CARD_REGISTERED_OFFENDER = 93,
    /**
    * Identity card temporary visitor
    */
    IDENTITY_CARD_TEMPORARY_VISITOR = 94,
    /**
    * Identity card temporary visitor under 18
    */
    IDENTITY_CARD_TEMPORARY_VISITOR_UNDER_18 = 95,
    /**
    * Identity card temporary visitor under 21
    */
    IDENTITY_CARD_TEMPORARY_VISITOR_UNDER_21 = 96,
    /**
    * Identity card under 18
    */
    IDENTITY_CARD_UNDER_18 = 97,
    /**
    * Identity card under 21
    */
    IDENTITY_CARD_UNDER_21 = 98,
    /**
    * Other
    */
    OTHER = 99,
    /**
    * Ignition interlock permit
    */
    IGNITION_INTERLOCK_PERMIT = 100,
    /**
    * Immigrant visa
    */
    IMMIGRANT_VISA = 101,
    /**
    * Instruction permit
    */
    INSTRUCTION_PERMIT = 102,
    /**
    * Instruction permit under 18
    */
    INSTRUCTION_PERMIT_UNDER_18 = 103,
    /**
    * Instruction permit under 21
    */
    INSTRUCTION_PERMIT_UNDER_21 = 104,
    /**
    * Interim driving license
    */
    INTERIM_DRIVING_LICENSE = 105,
    /**
    * Interim identity card
    */
    INTERIM_IDENTITY_CARD = 106,
    /**
    * Intermediate driving license
    */
    INTERMEDIATE_DRIVING_LICENSE = 107,
    /**
    * Intermediate driving license under 18
    */
    INTERMEDIATE_DRIVING_LICENSE_UNDER_18 = 108,
    /**
    * Intermediate driving license under 21
    */
    INTERMEDIATE_DRIVING_LICENSE_UNDER_21 = 109,
    /**
    * Junior driving license
    */
    JUNIOR_DRIVING_LICENSE = 110,
    /**
    * Learner instructional permit
    */
    LEARNER_INSTRUCTIONAL_PERMIT = 111,
    /**
    * Learner license
    */
    LEARNER_LICENSE = 112,
    /**
    * Learner license under 18
    */
    LEARNER_LICENSE_UNDER_18 = 113,
    /**
    * Learner license under 21
    */
    LEARNER_LICENSE_UNDER_21 = 114,
    /**
    * Learner permit
    */
    LEARNER_PERMIT = 115,
    /**
    * Learner permit under 18
    */
    LEARNER_PERMIT_UNDER_18 = 116,
    /**
    * Learner permit under 21
    */
    LEARNER_PERMIT_UNDER_21 = 117,
    /**
    * Limited license
    */
    LIMITED_LICENSE = 118,
    /**
    * Limited permit
    */
    LIMITED_PERMIT = 119,
    /**
    * Limited term driving license
    */
    LIMITED_TERM_DRIVING_LICENSE = 120,
    /**
    * Limited term identity card
    */
    LIMITED_TERM_IDENTITY_CARD = 121,
    /**
    * Liquor identity card
    */
    LIQUOR_IDENTITY_CARD = 122,
    /**
    * New permit
    */
    NEW_PERMIT = 123,
    /**
    * New permit under 18
    */
    NEW_PERMIT_UNDER_18 = 124,
    /**
    * New permit under 21
    */
    NEW_PERMIT_UNDER_21 = 125,
    /**
    * Non-US citizen driving license
    */
    NON_US_CITIZEN_DRIVING_LICENSE = 126,
    /**
    * Occupational driving license
    */
    OCCUPATIONAL_DRIVING_LICENSE = 127,
    /**
    * Oneida tribe of indians identity card
    */
    ONEIDA_TRIBE_OF_INDIANS_IDENTITY_CARD = 128,
    /**
    * Operator license
    */
    OPERATOR_LICENSE = 129,
    /**
    * Operator license under 18
    */
    OPERATOR_LICENSE_UNDER_18 = 130,
    /**
    * Operator license under 21
    */
    OPERATOR_LICENSE_UNDER_21 = 131,
    /**
    * Permanent driving license
    */
    PERMANENT_DRIVING_LICENSE = 132,
    /**
    * Permit to re-enter
    */
    PERMIT_TO_REENTER = 133,
    /**
    * Probationary auto license
    */
    PROBATIONARY_AUTO_LICENSE = 134,
    /**
    * Probationary driving license under 18
    */
    PROBATIONARY_DRIVING_LICENSE_UNDER_18 = 135,
    /**
    * Probationary driving license under 21
    */
    PROBATIONARY_DRIVING_LICENSE_UNDER_21 = 136,
    /**
    * Probationary vehicle sales person license
    */
    PROBATIONARY_VEHICLE_SALES_PERSON_LICENSE = 137,
    /**
    * Provisional driving license
    */
    PROVISIONAL_DRIVING_LICENSE = 138,
    /**
    * Provisional driving license under 18
    */
    PROVISIONAL_DRIVING_LICENSE_UNDER_18 = 139,
    /**
    * Provisional driving license under 21
    */
    PROVISIONAL_DRIVING_LICENSE_UNDER_21 = 140,
    /**
    * Provisional license
    */
    PROVISIONAL_LICENSE = 141,
    /**
    * Provisional license under 18
    */
    PROVISIONAL_LICENSE_UNDER_18 = 142,
    /**
    * Provisional license under 21
    */
    PROVISIONAL_LICENSE_UNDER_21 = 143,
    /**
    * Public passenger chauffeur license
    */
    PUBLIC_PASSENGER_CHAUFFEUR_LICENSE = 144,
    /**
    * Racing and gaming comission card
    */
    RACING_AND_GAMING_COMISSION_CARD = 145,
    /**
    * Refugee travel document
    */
    REFUGEE_TRAVEL_DOCUMENT = 146,
    /**
    * Renewal permit
    */
    RENEWAL_PERMIT = 147,
    /**
    * Restricted commercial driver license
    */
    RESTRICTED_COMMERCIAL_DRIVER_LICENSE = 148,
    /**
    * Restricted driver license
    */
    RESTRICTED_DRIVER_LICENSE = 149,
    /**
    * Restricted permit
    */
    RESTRICTED_PERMIT = 150,
    /**
    * Seasonal permit
    */
    SEASONAL_PERMIT = 151,
    /**
    * Seasonal resident identity card
    */
    SEASONAL_RESIDENT_IDENTITY_CARD = 152,
    /**
    * Seasonal citizen identity card
    */
    SEASONAL_CITIZEN_IDENTITY_CARD = 153,
    /**
    * Sex offender
    */
    SEX_OFFENDER = 154,
    /**
    * Social security card
    */
    SOCIAL_SECURITY_CARD = 155,
    /**
    * Temporary driving license
    */
    TEMPORARY_DRIVING_LICENSE = 156,
    /**
    * Temporary driving license under 18
    */
    TEMPORARY_DRIVING_LICENSE_UNDER_18 = 157,
    /**
    * Temporary driving license under 21
    */
    TEMPORARY_DRIVING_LICENSE_UNDER_21 = 158,
    /**
    * Temporary identity card
    */
    TEMPORARY_IDENTITY_CARD = 159,
    /**
    * Temporary instruction permit identity card
    */
    TEMPORARY_INSTRUCTION_PERMIT_IDENTITY_CARD = 160,
    /**
    * Temporary instruction permit identity card under 18
    */
    TEMPORARY_INSTRUCTION_PERMIT_IDENTITY_CARD_UNDER_18 = 161,
    /**
    * Temporary instruction permit identity card under 21
    */
    TEMPORARY_INSTRUCTION_PERMIT_IDENTITY_CARD_UNDER_21 = 162,
    /**
    * Temporary visitor driving license
    */
    TEMPORARY_VISITOR_DRIVING_LICENSE = 163,
    /**
    * Temporary visitor driving license under 18
    */
    TEMPORARY_VISITOR_DRIVING_LICENSE_UNDER_18 = 164,
    /**
    * Temporary visitor driving license under 21
    */
    TEMPORARY_VISITOR_DRIVING_LICENSE_UNDER_21 = 165,
    /**
    * Uniformed services identity card
    */
    UNIFORMED_SERVICES_IDENTITY_CARD = 166,
    /**
    * Vehicle sales person license
    */
    VEHICLE_SALES_PERSON_LICENSE = 167,
    /**
    * Worker identification credential
    */
    WORKER_IDENTIFICATION_CREDENTIAL = 168,
    /**
    * Commercial driving license novice
    */
    COMMERCIAL_DRIVING_LICENSE_NOVICE = 169,
    /**
    * Commercial driving license novice under 18
    */
    COMMERCIAL_DRIVING_LICENSE_NOVICE_UNDER_18 = 170,
    /**
    * Commercial driving license novice under 21
    */
    COMMERCIAL_DRIVING_LICENSE_NOVICE_UNDER_21 = 171,
    /**
    * Passport card
    */
    PASSPORT_CARD = 172,
    /**
    * Passport resident card
    */
    PASSPORT_RESIDENT_CARD = 173,
    /**
    * Personal identification verification
    */
    PERSONAL_IDENTIFICATION_VERIFICATION = 174,
    /**
    * Temporary operator license
    */
    TEMPORARY_OPERATOR_LICENSE = 175,
    /**
    * Driving license under 19
    */
    DRIVING_LICENSE_UNDER_19 = 176,
    /**
    * Identity card under 19
    */
    IDENTITY_CARD_UNDER_19 = 177,
    /**
    * Visa
    */
    VISA = 178,
    /**
    * Temporary passport
    */
    TEMPORARY_PASSPORT = 179,
    /**
    * Voting card
    */
    VOTING_CARD = 180,
    /**
    * Health card
    */
    HEALTH_CARD = 181,
    /**
    * Certificate of citizenship
    */
    CERTIFICATE_OF_CITIZENSHIP = 182,
    /**
    * Address card
    */
    ADDRESS_CARD = 183,
    /**
    * Airport immigration card
    */
    AIRPORT_IMMIGRATION_CARD = 184,
    /**
    * Alien registration card
    */
    ALIEN_REGISTRATION_CARD = 185,
    /**
    * APEH card
    */
    APEH_CARD = 186,
    /**
    * Coupon to driving license
    */
    COUPON_TO_DRIVING_LICENSE = 187,
    /**
    * Crew member certificate
    */
    CREW_MEMBER_CERTIFICATE = 188,
    /**
    * Document for return
    */
    DOCUMENT_FOR_RETURN = 189,
    /**
    * E-card
    */
    E_CARD = 190,
    /**
    * Employment card
    */
    EMPLOYMENT_CARD = 191,
    /**
    * HKSAR immigration form
    */
    HKSAR_IMMIGRATION_FORM = 192,
    /**
    * Immigrant card
    */
    IMMIGRANT_CARD = 193,
    /**
    * Labour card
    */
    LABOUR_CARD = 194,
    /**
    * Laissez passer
    */
    LAISSEZ_PASSER = 195,
    /**
    * Lawyer identity certificate
    */
    LAWYER_IDENTITY_CERTIFICATE = 196,
    /**
    * License card
    */
    LICENSE_CARD = 197,
    /**
    * Passport stateless
    */
    PASSPORT_STATELESS = 198,
    /**
    * Passport child
    */
    PASSPORT_CHILD = 199,
    /**
    * Passport consular
    */
    PASSPORT_CONSULAR = 200,
    /**
    * Passport diplomatic service
    */
    PASSPORT_DIPLOMATIC_SERVICE = 201,
    /**
    * Passport official
    */
    PASSPORT_OFFICIAL = 202,
    /**
    * Passport provisional
    */
    PASSPORT_PROVISIONAL = 203,
    /**
    * Passport special
    */
    PASSPORT_SPECIAL = 204,
    /**
    * Permission to the local border traffic
    */
    PERMISSION_TO_THE_LOCAL_BORDER_TRAFFIC = 205,
    /**
    * Registration certificate
    */
    REGISTRATION_CERTIFICATE = 206,
    /**
    * Sedesol card
    */
    SEDESOL_CARD = 207,
    /**
    * Social card
    */
    SOCIAL_CARD = 208,
    /**
    * TB card
    */
    TB_CARD = 209,
    /**
    * Vehicle passport
    */
    VEHICLE_PASSPORT = 210,
    /**
    * W document
    */
    W_DOCUMENT = 211,
    /**
    * Diplomatic identity card
    */
    DIPLOMATIC_IDENTITY_CARD = 212,
    /**
    * Consular identity card
    */
    CONSULAR_IDENTITY_CARD = 213,
    /**
    * Income tax card
    */
    INCOME_TAX_CARD = 214,
    /**
    * Residence permit
    */
    RESIDENCE_PERMIT = 215,
    /**
    * Document of identity
    */
    DOCUMENT_OF_IDENTITY = 216,
    /**
    * Border crossing permit
    */
    BORDER_CROSSING_PERMIT = 217,
    /**
    * Passport limited validity
    */
    PASSPORT_LIMITED_VALIDITY = 218,
    /**
    * Sim card
    */
    SIM_CARD = 219,
    /**
    * Tax card
    */
    TAX_CARD = 220,
    /**
    * Company card
    */
    COMPANY_CARD = 221,
    /**
    * Domestic passport
    */
    DOMESTIC_PASSPORT = 222,
    /**
    * Identity certificate
    */
    IDENTITY_CERTIFICATE = 223,
    /**
    * Resident id card
    */
    RESIDENT_ID_CARD = 224,
    /**
    * Armed forces identity card
    */
    ARMED_FORCES_IDENTITY_CARD = 225,
    /**
    * Professional card
    */
    PROFESSIONAL_CARD = 226,
    /**
    * Registration stamp
    */
    REGISTRATION_STAMP = 227,
    /**
    * Driver card
    */
    DRIVER_CARD = 228,
    /**
    * Driver training certificate
    */
    DRIVER_TRAINING_CERTIFICATE = 229,
    /**
    * Qualification driving license
    */
    QUALIFICATION_DRIVING_LICENSE = 230,
    /**
    * Membership card
    */
    MEMBERSHIP_CARD = 231,
    /**
    * Public vehicle driver authority card
    */
    PUBLIC_VEHICLE_DRIVER_AUTHORITY_CARD = 232,
    /**
    * Marine license
    */
    MARINE_LICENSE = 233,
    /**
    * Temporary learner license
    */
    TEMPORARY_LEARNER_LICENSE = 234,
    /**
    * Temporary commercial driving license
    */
    TEMPORARY_COMMERCIAL_DRIVING_LICENSE = 235,
    /**
    * Interim instructional permit
    */
    INTERIM_INSTRUCTIONAL_PERMIT = 236,
    /**
    * Certificate of competency
    */
    CERTIFICATE_OF_COMPETENCY = 237,
    /**
    * Certificate of proficiency
    */
    CERTIFICATE_OF_PROFICIENCY = 238,
    /**
    * Trade license
    */
    TRADE_LICENSE = 239,
    /**
    * Passport page
    */
    PASSPORT_PAGE = 240,
    /**
    * Invoice
    */
    INVOICE = 241,
    /**
    * Passenger locator form
    */
    PASSENGER_LOCATOR_FORM = 242
}



