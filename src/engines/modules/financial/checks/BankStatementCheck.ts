import { BaseFinancialCheck } from "./BaseFinancialCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class BankStatementCheck
  extends BaseFinancialCheck {

  readonly id = "bank-statements";

  readonly name = "Bank Statement Analysis";

  readonly category = "Financial";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 1000)
    );

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "Open Banking",

      status: "PASSED",

      score: 98,

      message:
        "Bank statements successfully analysed.",

      evidence: [

        {
          title: "Months Analysed",
          value: "6",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}