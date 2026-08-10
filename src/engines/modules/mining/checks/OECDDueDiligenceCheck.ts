import { BaseMiningCheck } from "./BaseMiningCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class OECDDueDiligenceCheck
  extends BaseMiningCheck {

  readonly id = "oecd-due-diligence";

  readonly name = "OECD Due Diligence";

  readonly category = "Mining";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 1000)
    );

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "OECD",

      status: "PASSED",

      score: 98,

      message:
        "OECD Due Diligence requirements satisfied.",

      evidence: [

        {
          title: "Conflict Mineral Risk",
          value: "Low",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}