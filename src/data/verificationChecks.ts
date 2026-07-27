export interface VerificationCheck {
  
  id: number;

  code: string;

  name: string;

  description: string;

  group:
    | "Identity"
    | "Biometrics"
    | "Compliance"
    | "Background"
    | "Financial"
    | "Corporate"
    | "Mining";

  category:
    | "Identity"
    | "Biometrics"
    | "Compliance"
    | "Background"
    | "Financial"
    | "Company"
    | "Mining & Trade";

  subjectType: "individual" | "organisation";

  estimatedDurationSeconds: number;

  countries: string[];

  requires: number[];

  internalCost: number;
}

const verificationChecks: VerificationCheck[] = [
  // ==========================
  // INDIVIDUAL
  // ==========================

  {
    id: 1,
    code: "ID_VERIFY",
    name: "Identity Verification",
    description: "Verify an individual's identity using trusted identity records.",
    group: "Identity",
    category: "Identity",
    estimatedDurationSeconds: 5,
    subjectType: "individual",
    countries: ["ALL"],
    requires: [],
    internalCost: 0,
  },

  {
    id: 2,
    code: "FACE_MATCH",
    name: "Biometric Face Match",
    description: "Compare a live selfie against an identity document.",
    group: "Biometrics",
    category: "Biometrics",
    estimatedDurationSeconds: 8,
    subjectType: "individual",
    countries: ["ALL"],
    requires: [1],
    internalCost: 0,
  },

  {
    id: 3,
    code: "LIVENESS",
    name: "Liveness Detection",
    description: "Confirm the individual is physically present.",
    group: "Biometrics",
    category: "Biometrics",
    estimatedDurationSeconds: 4,
    subjectType: "individual",
    countries: ["ALL"],
    requires: [1],
    internalCost: 0,
  },

  {
  id: 4,
  code: "DOCUMENT_VERIFY",
  name: "Document Verification",
  description: "Validate identity documents.",
  group: "Identity",
  category: "Identity",
  estimatedDurationSeconds: 10,
  subjectType: "individual",
  countries: ["ALL"],
  requires: [1],
  internalCost: 0,
},

{
  id: 5,
  code: "AGE_VERIFY",
  name: "Age Verification",
  description: "Confirm the individual's age.",
  group: "Identity",
  category: "Identity",
  estimatedDurationSeconds: 5,
  subjectType: "individual",
  countries: ["ALL"],
  requires: [1],
  internalCost: 0,
},

{
  id: 6,
  code: "PHONE_VERIFY",
  name: "Phone Number Verification",
  description: "Verify ownership of a mobile number.",
  group: "Identity",
  category: "Identity",
  estimatedDurationSeconds: 5,
  subjectType: "individual",
  countries: ["ALL"],
  requires: [],
  internalCost: 0,
},

{
  id: 7,
  code: "EMAIL_VERIFY",
  name: "Email Verification",
  description: "Validate email ownership.",
  group: "Identity",
  category: "Identity",
  estimatedDurationSeconds: 5,
  subjectType: "individual",
  countries: ["ALL"],
  requires: [],
  internalCost: 0,
},

  {
  id: 8,
  code: "ADDRESS_VERIFY",
  name: "Address Verification",
  description: "Verify residential address.",
  group: "Identity",
  category: "Identity",
  estimatedDurationSeconds: 15,
  subjectType: "individual",
  countries: ["ZA"],
  requires: [1],
  internalCost: 0,
},

{
  id: 9,
  code: "DECEASED_CHECK",
  name: "Deceased Status Check",
  description: "Determine whether the individual is deceased.",
  group: "Identity",
  category: "Identity",
  estimatedDurationSeconds: 3,
  subjectType: "individual",
  countries: ["ZA"],
  requires: [1],
  internalCost: 0,
},

{
  id: 10,
  code: "CITIZENSHIP_VERIFY",
  name: "Citizenship / Residency",
  description: "Verify citizenship or residency status.",
  group: "Identity",
  category: "Identity",
  estimatedDurationSeconds: 6,
  subjectType: "individual",
  countries: ["ZA"],
  requires: [1],
  internalCost: 0,
},

{
  id: 11,
  code: "SANCTIONS_SCREEN",
  name: "Sanctions Screening",
  description: "Screen against international sanctions databases.",
  group: "Compliance",
  category: "Compliance",
  estimatedDurationSeconds: 4,
  subjectType: "individual",
  countries: ["ALL"],
  requires: [1],
  internalCost: 0,
},

{
  id: 12,
  code: "PEP_SCREEN",
  name: "PEP Screening",
  description: "Screen against Politically Exposed Persons databases.",
  group: "Compliance",
  category: "Compliance",
  estimatedDurationSeconds: 4,
  subjectType: "individual",
  countries: ["ALL"],
  requires: [1],
  internalCost: 0,
},

  {
  id: 13,
  code: "WATCHLIST_SCREEN",
  name: "Watchlist Screening",
  description: "Screen against global watchlists.",
  group: "Compliance",
  category: "Compliance",
  estimatedDurationSeconds: 4,
  subjectType: "individual",
  countries: ["ALL"],
  requires: [1],
  internalCost: 0,
},

{
  id: 14,
  code: "AML_SCREEN",
  name: "AML Screening",
  description: "Anti-Money Laundering screening.",
  group: "Compliance",
  category: "Compliance",
  estimatedDurationSeconds: 4,
  subjectType: "individual",
  countries: ["ALL"],
  requires: [1],
  internalCost: 0,
},

{
  id: 15,
  code: "EMPLOYMENT_VERIFY",
  name: "Employment Verification",
  description: "Verify previous employment.",
  group: "Background",
  category: "Background",
  estimatedDurationSeconds: 20,
  subjectType: "individual",
  countries: ["ZA"],
  requires: [1],
  internalCost: 0,
},

{
  id: 16,
  code: "QUALIFICATION_VERIFY",
  name: "Qualification Verification",
  description: "Verify academic qualifications.",
  group: "Background",
  category: "Background",
  estimatedDurationSeconds: 45,
  subjectType: "individual",
  countries: ["ZA"],
  requires: [1],
  internalCost: 0,
},

{
  id: 17,
  code: "CRIMINAL_RECORD_CHECK",
  name: "Criminal Record Check",
  description: "Search criminal history where available.",
  group: "Background",
  category: "Background",
  estimatedDurationSeconds: 30,
  subjectType: "individual",
  countries: ["ZA"],
  requires: [1],
  internalCost: 0,
},

{
  id: 18,
  code: "CREDIT_BUREAU_CHECK",
  name: "Credit Bureau Check",
  description: "Retrieve credit bureau information.",
  group: "Financial",
  category: "Financial",
  estimatedDurationSeconds: 40,
  subjectType: "individual",
  countries: ["ZA"],
  requires: [1],
  internalCost: 0,
},

  {
  id: 19,
  code: "REFERENCE_CHECK",
  name: "Reference Checks",
  description: "Verify professional references.",
  group: "Background",
  category: "Background",
  estimatedDurationSeconds: 35,
  subjectType: "individual",
  countries: ["ZA"],
  requires: [1],
  internalCost: 0,
},

{
  id: 20,
  code: "PROFESSIONAL_MEMBERSHIP_VERIFY",
  name: "Professional Membership Verification",
  description: "Verify professional registrations.",
  group: "Background",
  category: "Background",
  estimatedDurationSeconds: 25,
  subjectType: "individual",
  countries: ["ZA"],
  requires: [1],
  internalCost: 0,
},

{
  id: 21,
  code: "DRIVERS_LICENSE_VERIFY",
  name: "Driver's Licence Verification",
  description: "Verify driver's licence information.",
  group: "Identity",
  category: "Identity",
  estimatedDurationSeconds: 12,
  subjectType: "individual",
  countries: ["ZA"],
  requires: [1],
  internalCost: 0,
},

// ==========================
// ORGANISATIONS
// ==========================

{
  id: 101,
  code: "COMPANY_REGISTRATION_VERIFY",
  name: "Company Registration Verification",
  description: "Verify company registration details.",
  group: "Corporate",
  category: "Company",
  estimatedDurationSeconds: 5,
  subjectType: "organisation",
  countries: ["ZA"],
  requires: [],
  internalCost: 0,
},

{
  id: 102,
  code: "DIRECTOR_VERIFY",
  name: "Director Verification",
  description: "Verify company directors.",
  group: "Corporate",
  category: "Company",
  estimatedDurationSeconds: 8,
  subjectType: "organisation",
  countries: ["ZA"],
  requires: [101],
  internalCost: 0,
},

{
  id: 103,
  code: "SHAREHOLDER_INFORMATION",
  name: "Shareholder Information",
  description: "Retrieve shareholder information.",
  group: "Corporate",
  category: "Company",
  estimatedDurationSeconds: 10,
  subjectType: "organisation",
  countries: ["ZA"],
  requires: [101],
  internalCost: 0,
},

  {
  id: 104,
  code: "COMPANY_STATUS",
  name: "Company Status",
  description: "Verify whether the company is active or deregistered.",
  group: "Corporate",
  category: "Company",
  subjectType: "organisation",
  estimatedDurationSeconds: 3,
  countries: ["ZA"],
  requires: [101],
  internalCost: 0,
},

{
  id: 105,
  code: "VAT_VERIFICATION",
  name: "VAT Registration Verification",
  description: "Verify VAT registration.",
  group: "Corporate",
  category: "Company",
  subjectType: "organisation",
  estimatedDurationSeconds: 8,
  countries: ["ZA"],
  requires: [101],
  internalCost: 0,
},

{
  id: 106,
  code: "TAX_COMPLIANCE",
  name: "Tax Compliance",
  description: "Verify tax compliance.",
  group: "Corporate",
  category: "Company",
  subjectType: "organisation",
  estimatedDurationSeconds: 15,
  countries: ["ZA"],
  requires: [101],
  internalCost: 0,
},

{
  id: 107,
  code: "BANK_ACCOUNT_VERIFY",
  name: "Bank Account Verification",
  description: "Verify company bank account.",
  group: "Financial",
  category: "Financial",
  subjectType: "organisation",
  estimatedDurationSeconds: 10,
  countries: ["ZA"],
  requires: [101],
  internalCost: 0,
},

{
  id: 108,
  code: "BUSINESS_ADDRESS",
  name: "Business Address Verification",
  description: "Verify registered business address.",
  group: "Corporate",
  category: "Company",
  subjectType: "organisation",
  estimatedDurationSeconds: 15,
  countries: ["ZA"],
  requires: [101],
  internalCost: 0,
},

  {
  id: 109,
  code: "BUSINESS_CREDIT_REPORT",
  name: "Business Credit Report",
  description: "Retrieve company credit report.",
  group: "Financial",
  category: "Financial",
  subjectType: "organisation",
  estimatedDurationSeconds: 40,
  countries: ["ZA"],
  requires: [101],
  internalCost: 0,
},

{
  id: 110,
  code: "FINANCIAL_RISK_REPORT",
  name: "Financial Risk Report",
  description: "Assess company financial risk.",
  group: "Financial",
  category: "Financial",
  subjectType: "organisation",
  estimatedDurationSeconds: 60,
  countries: ["ZA"],
  requires: [109],
  internalCost: 0,
},

{
  id: 111,
  code: "LITIGATION_JUDGMENTS",
  name: "Litigation & Judgments",
  description: "Search company litigation and court judgments.",
  group: "Corporate",
  category: "Company",
  subjectType: "organisation",
  estimatedDurationSeconds: 45,
  countries: ["ZA"],
  requires: [101],
  internalCost: 0,
},

{
  id: 112,
  code: "COMPANY_COMPLIANCE",
  name: "Company Compliance Checks",
  description: "Verify company compliance.",
  group: "Corporate",
  category: "Company",
  subjectType: "organisation",
  estimatedDurationSeconds: 20,
  countries: ["ZA"],
  requires: [101],
  internalCost: 0,
},

{
  id: 113,
  code: "DIRECTOR_RISK_ASSESSMENT",
  name: "Director Risk Assessment",
  description: "Assess director risk profile.",
  group: "Corporate",
  category: "Company",
  subjectType: "organisation",
  estimatedDurationSeconds: 30,
  countries: ["ZA"],
  requires: [102],
  internalCost: 0,
},

{
  id: 114,
  code: "UBO_VERIFICATION",
  name: "Beneficial Ownership (UBO)",
  description: "Identify the Ultimate Beneficial Owners.",
  group: "Corporate",
  category: "Company",
  subjectType: "organisation",
  estimatedDurationSeconds: 20,
  countries: ["ZA"],
  requires: [101],
  internalCost: 0,
},

  // ==========================
  // MINING & TRADE
  // ==========================

  {
  id: 201,
  code: "MINING_LICENCE_VERIFICATION",
  name: "Mining Licence Verification",
  description: "Verify mining licences.",
  group: "Mining",
  category: "Mining & Trade",
  subjectType: "organisation",
  estimatedDurationSeconds: 20,
  countries: ["ZA"],
  requires: [101],
  internalCost: 0,
},

{
  id: 202,
  code: "EXPORT_PERMIT_VERIFICATION",
  name: "Export Permit Verification",
  description: "Verify export permits.",
  group: "Mining",
  category: "Mining & Trade",
  subjectType: "organisation",
  estimatedDurationSeconds: 20,
  countries: ["ZA"],
  requires: [101, 201],
  internalCost: 0,
},

{
  id: 203,
  code: "MINERAL_RIGHTS_VERIFICATION",
  name: "Mineral Rights Verification",
  description: "Verify mineral rights.",
  group: "Mining",
  category: "Mining & Trade",
  subjectType: "organisation",
  estimatedDurationSeconds: 20,
  countries: ["ZA"],
  requires: [101, 201],
  internalCost: 0,
}

];

export default verificationChecks;