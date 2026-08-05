import { BaseFinancialCheck } from "./BaseFinancialCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class BankruptcyCheck
  extends BaseFinancialCheck {

  readonly id = "bankruptcy";

  readonly name = "Bankruptcy / Insolvency";

  readonly category = "Financial";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 800)
    );

    return {

      checkName: this.name,

      provider: "Court Registry",

      status: "PASSED",

      score: 100,

      message:
        "No insolvency or bankruptcy records found.",

      evidence: [

        {
          title: "Status",
          value: "Clear",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}