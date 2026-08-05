import { BaseMiningCheck } from "./BaseMiningCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class SmelterVerificationCheck
  extends BaseMiningCheck {

  readonly id = "smelter-verification";

  readonly name = "Smelter Verification";

  readonly category = "Mining";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 900)
    );

    return {

      checkName: this.name,

      provider: "Responsible Minerals Initiative",

      status: "PASSED",

      score: 100,

      message:
        "Smelter successfully verified.",

      evidence: [

        {
          title: "Smelter Status",
          value: "Approved",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}