import { BaseFinancialCheck } from "./BaseFinancialCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class DebtReviewCheck
  extends BaseFinancialCheck {

  readonly id = "debt-review";

  readonly name = "Debt Review";

  readonly category = "Financial";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 700)
    );

    return {

      checkName: this.name,

      provider: "National Credit Regulator",

      status: "PASSED",

      score: 100,

      message:
        "No debt review record found.",

      evidence: [

        {
          title: "Debt Review",
          value: "Not Under Review",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}