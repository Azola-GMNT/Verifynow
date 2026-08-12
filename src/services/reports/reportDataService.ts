import { VerificationCase } from "@/types/verification";

export interface ReportData {
  verificationId: string;

  generatedAt: string;

  status: string;

  subject: {
    type: string;
    displayName: string;
    country: string;
    id?: string;
    fullName?: string;
    companyName?: string;
    registrationNumber?: string;
    idNumber?: string;
    passportNumber?: string;
  };

  assessment: {
    confidenceScore: number | null;
    riskLevel: string;
    recommendation: string;
  };

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
    startedAt: string;
    completedAt: string;
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

export function buildReportData(
  verification: VerificationCase
): ReportData {
  return {
    verificationId:
      verification.verificationId,

    generatedAt:
      new Date().toISOString(),

    status:
      String(verification.status),

    subject: {
      type:
        verification.subject.subjectType,

      displayName:
        verification.subject.displayName,

      country:
        verification.subject.country,

      id:
        verification.subject.id,

      fullName:
        verification.subject.fullName,

      companyName:
        verification.subject.companyName,

      registrationNumber:
        verification.subject.registrationNumber,

      idNumber:
        verification.subject.idNumber,

      passportNumber:
        verification.subject.passportNumber,
    },

    assessment: {
      confidenceScore:
        verification.risk.confidenceScore ??
        null,

      riskLevel:
        verification.risk.riskLevel,

      recommendation:
        verification.risk.recommendation ??
        "Not available",
    },

    timeline: {
      createdAt:
        verification.timeline.createdAt,

      startedAt:
        verification.timeline.startedAt,

      completedAt:
        verification.timeline.completedAt,

      durationSeconds:
        verification.timeline.durationSeconds,
    },

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

          startedAt:
            result.startedAt.toISOString(),

          completedAt:
            result.completedAt.toISOString(),
        })
      ),

    providers:
      verification.providers.map(
        (provider) => ({
          providerName:
            provider.providerName,

          status:
            provider.status,

          confidence:
            provider.confidence,

          responseTime:
            provider.responseTime,

          findings:
            provider.findings,
        })
      ),

    notes:
      verification.notes,
  };
}