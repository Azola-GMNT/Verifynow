import { BaseEducationCheck } from "./BaseEducationCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class MatricCheck
  extends BaseEducationCheck {

  readonly id = "matric";

  readonly name = "Matric Verification";

  readonly category = "Education";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 700)
    );

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "Department of Education",

      status: "PASSED",

      score: 100,

      message:
        "Matric certificate verified.",

      evidence: [

        {
          title: "Qualification",
          value: "National Senior Certificate",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}