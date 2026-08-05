import { BaseFinancialCheck } from "./BaseFinancialCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class FraudScoreCheck
  extends BaseFinancialCheck {

  readonly id = "fraud-score";

  readonly name = "Fraud Risk Score";

  readonly category = "Financial";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 750)
    );

    return {

      checkName: this.name,

      provider: "VerifyNow AI",

      status: "PASSED",

      score: 97,

      message:
        "Low fraud risk detected.",

      evidence: [

        {
          title: "Fraud Risk",
          value: "Low",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}