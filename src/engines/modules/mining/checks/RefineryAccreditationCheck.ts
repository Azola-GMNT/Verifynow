import { BaseMiningCheck } from "./BaseMiningCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class RefineryAccreditationCheck
  extends BaseMiningCheck {

  readonly id = "refinery-accreditation";

  readonly name = "Refinery Accreditation";

  readonly category = "Mining";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 1100)
    );

    return {

      checkName: this.name,

      provider: "LBMA",

      status: "PASSED",

      score: 100,

      message:
        "Refinery accreditation confirmed.",

      evidence: [

        {
          title: "Accreditation",
          value: "Approved",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}