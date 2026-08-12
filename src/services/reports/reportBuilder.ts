import { VerificationCase } from "@/types/verification";

export interface VerificationReportData {
  verificationId: string;
  generatedAt: string;

  subject: {
    type: string;
    displayName: string;
    country: string;
    id?: string;
    registrationNumber?: string;
    idNumber?: string;
    passportNumber?: string;
  };

  assessment: {
    confidenceScore: number | null;
    riskLevel: string;
    recommendation: string;
  };

  status: string;

  timeline: {
    createdAt: string;
    startedAt?: string;
    completedAt?: string;
    durationSeconds?: number;
  };

  checks: {
    checkId: string;
    checkName: string;
    provider: string;
    status: string;
    score: number;
    message: string;
    evidence: {
      title: string;
      value: string;
    }[];
  }[];

  providers: {
    providerName: string;
    status: string;
    confidence: number;
    responseTime: number;
    findings: string;
  }[];

  notes?: string;
}

export function buildVerificationReport(
  verification: VerificationCase
): VerificationReportData {
  return {
    verificationId:
      verification.verificationId,

    generatedAt:
      new Date().toISOString(),

    subject: {
      type:
        verification.subject.subjectType,

      displayName:
        verification.subject.displayName ||
        "--",

      country:
        verification.subject.country,

      id:
        verification.subject.id,

      registrationNumber:
        verification.subject.registrationNumber,

      idNumber:
        verification.subject.idNumber,

      passportNumber:
        verification.subject.passportNumber,
    },

    assessment: {
      confidenceScore:
        verification.risk.confidenceScore ?? null,

      riskLevel:
        verification.risk.riskLevel,

      recommendation:
        verification.risk.recommendation ?? "--",
    },

    status:
      verification.status,

    timeline:
      verification.timeline,

    checks:
      verification.results.map(
        (result) => ({
          checkId:
            String(result.checkId),

          checkName:
            result.checkName,

          provider:
            result.provider,

          status:
            result.status,

          score:
            result.score,

          message:
            result.message,

          evidence:
            result.evidence.map(
              (item) => ({
                title: item.title,
                value: item.value,
              })
            ),
        })
      ),

    providers:
      verification.providers,

    notes:
      verification.notes,
  };
}