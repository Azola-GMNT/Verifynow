import { BaseFinancialCheck } from "./BaseFinancialCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class CreditScoreCheck
  extends BaseFinancialCheck {

  readonly id = "credit-score";

  readonly name = "Credit Score";

  readonly category = "Financial";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 900)
    );

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "Experian",

      status: "PASSED",

      score: 82,

      message:
        "Credit score successfully retrieved.",

      evidence: [

        {
          title: "Credit Score",
          value: "720",
        },

        {
          title: "Risk Band",
          value: "Low Risk",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}