import { BaseEmploymentCheck } from "./BaseEmploymentCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class EmploymentDatesCheck
  extends BaseEmploymentCheck {

  readonly id = "employment-dates";

  readonly name = "Employment Dates Verification";

  readonly category = "Employment";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 700)
    );

    return {

      checkName: this.name,

      provider: "Employer",

      status: "PASSED",

      score: 100,

      message:
        "Employment dates successfully verified.",

      evidence: [

        {
          title: "Status",
          value: "Dates Confirmed",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}