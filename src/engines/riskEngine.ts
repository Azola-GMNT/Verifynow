import {
  VerificationResult,
  Recommendation,
  RiskLevel,
} from "@/types/verification";

export interface RiskAssessment {
  confidenceScore: number;
  recommendation: Recommendation;
  riskLevel: RiskLevel;
}

export function calculateRisk(
  results: VerificationResult[]
): RiskAssessment {
  let score = 100;
  let failed = 0;
  let review = 0;

  results.forEach((result) => {
    if (result.status === "FAILED") {
      failed++;
      score -= 20;
    }

    if (result.status === "WARNING") {
      review++;
      score -= 10;
    }
  });

  score = Math.max(score, 0);

  let recommendation: Recommendation = "Proceed";
  let riskLevel: RiskLevel = "Low";

  if (failed >= 2) {
    recommendation = "Reject";
    riskLevel = "High";
  } else if (failed === 1 || review >= 2) {
    recommendation = "Review";
    riskLevel = "Medium";
  }

  return {
    confidenceScore: score,
    recommendation,
    riskLevel,
  };
}