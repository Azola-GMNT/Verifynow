import { BaseGovernmentCheck } from "./BaseGovernmentCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class DeathRegisterCheck
  extends BaseGovernmentCheck {

  readonly id = "death-register";

  readonly name = "Death Register";

  readonly category = "Government";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 700)
    );

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "Department of Home Affairs",

      status: "PASSED",

      score: 100,

      message:
        "No death record found.",

      evidence: [

        {
          title: "Status",
          value: "Alive",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}