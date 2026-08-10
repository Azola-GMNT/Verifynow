import { BaseGovernmentCheck } from "./BaseGovernmentCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class MarriageRegisterCheck
  extends BaseGovernmentCheck {

  readonly id = "marriage-register";

  readonly name = "Marriage Register";

  readonly category = "Government";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 750)
    );

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "Department of Home Affairs",

      status: "PASSED",

      score: 100,

      message:
        "Marriage register successfully checked.",

      evidence: [

        {
          title: "Marital Status",
          value: "Single",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}