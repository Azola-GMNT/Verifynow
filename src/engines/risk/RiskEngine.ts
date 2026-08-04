import { CheckResult } from "@/types/check";

export class RiskEngine {

  calculate(
    results: CheckResult[]
  ) {

    const failed =
      results.filter(
        r => r.status === "FAILED"
      ).length;

    const score =
      Math.max(
        0,
        100 - failed * 20
      );

    let level =
      "Low";

    if (score < 80)
      level = "Medium";

    if (score < 50)
      level = "High";

    return {

      score,

      level,

    };

  }

}