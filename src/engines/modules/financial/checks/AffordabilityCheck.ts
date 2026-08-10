import { BaseFinancialCheck } from "./BaseFinancialCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class AffordabilityCheck
  extends BaseFinancialCheck {

  readonly id = "affordability";

  readonly name = "Affordability Assessment";

  readonly category = "Financial";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 700)
    );

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "VerifyNow",

      status: "PASSED",

      score: 95,

      message:
        "Affordability assessment completed.",

      evidence: [

        {
          title: "Disposable Income",
          value: "Sufficient",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}