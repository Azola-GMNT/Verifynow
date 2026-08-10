import { VerificationStatus } from "@/types/verification/enums";
import { CheckResult } from "@/types/check";

export type VerificationResult = CheckResult;

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

  /*
   * Module IDs are strings:
   * identity
   * company
   * criminal
   * employment
   * education
   * financial
   * government
   * mining
   * property
   */
  selectedChecks: number[];

  completedChecks: string[];

  status: VerificationStatus;

  timeline: VerificationTimeline;

  risk: VerificationRisk;

  providers: ProviderResult[];

  /*
   * Individual check results produced by
   * the verification modules.
   */
  results: CheckResult[];

  createdBy: string;

  reportGenerated: boolean;

  notes?: string;
}
