export class RecommendationEngine {

  generate(
    riskScore: number
  ) {

    if (riskScore >= 90)
      return "Approve";

    if (riskScore >= 70)
      return "Review";

    return "Reject";

  }

}