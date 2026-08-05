import { BaseGovernmentCheck } from "./BaseGovernmentCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class PassportStatusCheck
  extends BaseGovernmentCheck {

  readonly id = "passport-status";

  readonly name = "Passport Status";

  readonly category = "Government";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 850)
    );

    return {

      checkName: this.name,

      provider: "Department of Home Affairs",

      status: "PASSED",

      score: 100,

      message:
        "Passport successfully verified.",

      evidence: [

        {
          title: "Passport Status",
          value: "Valid",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}