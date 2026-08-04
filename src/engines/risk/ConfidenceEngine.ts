import { CheckResult } from "@/types/check";

export class ConfidenceEngine {

  calculate(
    results: CheckResult[]
  ) {

    if (results.length === 0)
      return 0;

    const total =
      results.reduce(
        (sum, r) => sum + r.score,
        0
      );

    return Math.round(
      total / results.length
    );

  }

}