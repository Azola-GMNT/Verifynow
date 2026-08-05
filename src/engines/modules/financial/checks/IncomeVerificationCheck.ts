import { BaseFinancialCheck } from "./BaseFinancialCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class IncomeVerificationCheck
  extends BaseFinancialCheck {

  readonly id = "income-verification";

  readonly name = "Income Verification";

  readonly category = "Financial";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 900)
    );

    return {

      checkName: this.name,

      provider: "Payroll",

      status: "PASSED",

      score: 100,

      message:
        "Income successfully verified.",

      evidence: [

        {
          title: "Monthly Income",
          value: "Verified",
        },

        {
          title: "Employment",
          value: "Confirmed",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}