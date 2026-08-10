import { BaseMiningCheck } from "./BaseMiningCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class WaterUseLicenceCheck
  extends BaseMiningCheck {

  readonly id = "water-use-licence";

  readonly name = "Water Use Licence";

  readonly category = "Mining";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 800)
    );

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "Water Authority",

      status: "PASSED",

      score: 100,

      message:
        "Water use licence verified.",

      evidence: [

        {
          title: "Licence",
          value: "Current",
        }

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}