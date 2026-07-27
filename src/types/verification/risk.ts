import {
  Recommendation,
  RiskLevel,
} from "./enums";

export interface VerificationRisk {

  confidenceScore?: number;

  recommendation?: Recommendation;

  riskLevel?: RiskLevel;

}