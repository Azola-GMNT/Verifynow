import { VerificationStatus } from "./verification/enums";

export type RiskLevel =
  | "Low"
  | "Medium"
  | "High"
  | "Unknown";

export type Recommendation =
  | "Proceed"
  | "Review"
  | "Reject";

export interface VerificationSubject {
  subjectType: "individual" | "organisation";

  displayName: string;

  country: string;

  id?: string;

  fullName?: string;

  companyName?: string;

  registrationNumber?: string;

  idNumber?: string;

  passportNumber?: string;
}

export interface VerificationResult {
  checkId: number;

  checkName: string;

  status: "Passed" | "Failed" | "Review";

  score: number;

  message: string;
}

export interface ProviderResult {
  providerName: string;

  status: "Completed" | "Failed";

  confidence: number;

  responseTime: number;

  findings: string;
}

export interface VerificationTimeline {
  createdAt: string;

  startedAt?: string;

  completedAt?: string;

  durationSeconds?: number;
}

export interface VerificationRisk {
  confidenceScore?: number;

  recommendation?: Recommendation;

  riskLevel: RiskLevel;
}

export interface VerificationCase {
  verificationId: string;

  subject: VerificationSubject;

  selectedChecks: number[];

  completedChecks: number[];

  status: VerificationStatus;

  timeline: VerificationTimeline;

  risk: VerificationRisk;

  providers: ProviderResult[];

  results: VerificationResult[];

  createdBy: string;

  reportGenerated: boolean;

  notes?: string;
}