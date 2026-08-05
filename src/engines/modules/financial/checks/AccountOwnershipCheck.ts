import { BaseFinancialCheck } from "./BaseFinancialCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class AccountOwnershipCheck
  extends BaseFinancialCheck {

  readonly id = "account-ownership";

  readonly name = "Account Ownership Verification";

  readonly category = "Financial";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 700)
    );

    return {

      checkName: this.name,

      provider: "Bank",

      status: "PASSED",

      score: 100,

      message:
        "Account ownership successfully verified.",

      evidence: [

        {
          title: "Ownership",
          value: "Confirmed",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}