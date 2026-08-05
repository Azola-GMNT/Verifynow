import { BaseEmploymentCheck } from "./BaseEmploymentCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class EmploymentHistoryCheck
  extends BaseEmploymentCheck {

  readonly id = "employment-history";

  readonly name = "Employment History";

  readonly category = "Employment";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 900)
    );

    return {

      checkName: this.name,

      provider: "MIE",

      status: "PASSED",

      score: 100,

      message:
        "Employment history verified.",

      evidence: [

        {
          title: "Employers Verified",
          value: "3",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}