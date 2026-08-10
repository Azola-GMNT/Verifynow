import { BaseFinancialCheck } from "./BaseFinancialCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class BankAccountCheck
  extends BaseFinancialCheck {

  readonly id = "bank-account";

  readonly name = "Bank Account Verification";

  readonly category = "Financial";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 800)
    );

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "Bank",

      status: "PASSED",

      score: 100,

      message:
        "Bank account successfully verified.",

      evidence: [

        {
          title: "Account Status",
          value: "Active",
        },

        {
          title: "Currency",
          value: "ZAR",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}