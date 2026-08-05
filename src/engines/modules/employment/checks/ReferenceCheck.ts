import { BaseEmploymentCheck } from "./BaseEmploymentCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class ReferenceCheck
  extends BaseEmploymentCheck {

  readonly id = "reference-check";

  readonly name = "Reference Check";

  readonly category = "Employment";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 850)
    );

    return {

      checkName: this.name,

      provider: "Reference Verification",

      status: "PASSED",

      score: 98,

      message:
        "Professional references successfully verified.",

      evidence: [

        {
          title: "References Contacted",
          value: "2",
        },

        {
          title: "Outcome",
          value: "Positive",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}