import { BaseGovernmentCheck } from "./BaseGovernmentCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class BirthRegisterCheck
  extends BaseGovernmentCheck {

  readonly id = "birth-register";

  readonly name = "Birth Register";

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
        "Birth record located.",

      evidence: [

        {
          title: "Birth Registration",
          value: "Confirmed",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}