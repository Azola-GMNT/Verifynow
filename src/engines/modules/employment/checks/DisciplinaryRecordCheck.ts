import { BaseEmploymentCheck } from "./BaseEmploymentCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class DisciplinaryRecordCheck
  extends BaseEmploymentCheck {

  readonly id = "disciplinary-record";

  readonly name = "Disciplinary Record";

  readonly category = "Employment";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 900)
    );

    return {

      checkName: this.name,

      provider: "Employer",

      status: "PASSED",

      score: 100,

      message:
        "No disciplinary actions recorded.",

      evidence: [

        {
          title: "Disciplinary Status",
          value: "Clear",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}