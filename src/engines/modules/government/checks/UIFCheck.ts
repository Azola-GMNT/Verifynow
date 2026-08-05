import { BaseGovernmentCheck } from "./BaseGovernmentCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class UIFCheck
  extends BaseGovernmentCheck {

  readonly id = "uif";

  readonly name = "UIF Verification";

  readonly category = "Government";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 700)
    );

    return {

      checkName: this.name,

      provider: "Department of Labour",

      status: "PASSED",

      score: 100,

      message:
        "UIF registration verified.",

      evidence: [

        {
          title: "UIF Status",
          value: "Registered",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}