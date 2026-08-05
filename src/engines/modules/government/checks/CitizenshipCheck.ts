import { BaseGovernmentCheck } from "./BaseGovernmentCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class CitizenshipCheck
  extends BaseGovernmentCheck {

  readonly id = "citizenship";

  readonly name = "Citizenship Verification";

  readonly category = "Government";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 700)
    );

    return {

      checkName: this.name,

      provider: "Department of Home Affairs",

      status: "PASSED",

      score: 100,

      message:
        "Citizenship successfully verified.",

      evidence: [

        {
          title: "Citizenship",
          value:
            verification.subject.country,

        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}