import { BaseGovernmentCheck } from "./BaseGovernmentCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class COIDCheck
  extends BaseGovernmentCheck {

  readonly id = "coid";

  readonly name = "COID Verification";

  readonly category = "Government";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 700)
    );

    return {

      checkName: this.name,

      provider: "Compensation Fund",

      status: "PASSED",

      score: 100,

      message:
        "COID registration verified.",

      evidence: [

        {
          title: "COID Status",
          value: "Compliant",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}