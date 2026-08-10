import { BaseMiningCheck } from "./BaseMiningCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class MineralOwnershipCheck
  extends BaseMiningCheck {

  readonly id = "mineral-ownership";

  readonly name = "Mineral Ownership";

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
        "Mineral ownership confirmed.",

      evidence: [

        {
          title: "Ownership",
          value: "Verified",
        }

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}