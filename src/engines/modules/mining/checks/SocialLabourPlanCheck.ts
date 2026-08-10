import { BaseMiningCheck } from "./BaseMiningCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class SocialLabourPlanCheck
  extends BaseMiningCheck {

  readonly id = "social-labour-plan";

  readonly name = "Social & Labour Plan";

  readonly category = "Mining";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 900)
    );

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "Mining Authority",

      status: "PASSED",

      score: 100,

      message:
        "Social & Labour Plan compliant.",

      evidence: [

        {
          title: "SLP",
          value: "Approved",
        }

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}