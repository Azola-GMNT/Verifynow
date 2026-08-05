import { BaseFinancialCheck } from "./BaseFinancialCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class CreditHistoryCheck
  extends BaseFinancialCheck {

  readonly id = "credit-history";

  readonly name = "Credit History";

  readonly category = "Financial";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 850)
    );

    return {

      checkName: this.name,

      provider: "TransUnion",

      status: "PASSED",

      score: 95,

      message:
        "Credit history successfully verified.",

      evidence: [

        {
          title: "Open Accounts",
          value: "5",
        },

        {
          title: "Defaults",
          value: "0",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}