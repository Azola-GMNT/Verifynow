import { VerificationStatus } from "./enums";
import { VerificationSubject } from "./subject";
import { VerificationResult } from "./results";
import { ProviderResult } from "./provider";
import { VerificationTimeline } from "./timeline";
import { VerificationRisk } from "./risk";

export interface VerificationCase {
  verificationId: string;

  status: VerificationStatus;

  subject: VerificationSubject;

  selectedChecks: number[];

  completedChecks: number[];

  results: VerificationResult[];

  providers: ProviderResult[];

  timeline: VerificationTimeline;

  risk: VerificationRisk;

  createdBy: string;

  reportGenerated: boolean;

  notes?: string;
}