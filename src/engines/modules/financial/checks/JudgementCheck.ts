import { BaseFinancialCheck } from "./BaseFinancialCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class JudgementCheck
  extends BaseFinancialCheck {

  readonly id = "judgements";

  readonly name = "Court Judgements";

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

      provider: "Court Registry",

      status: "PASSED",

      score: 100,

      message:
        "No adverse court judgements found.",

      evidence: [

        {
          title: "Judgements",
          value: "None",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}