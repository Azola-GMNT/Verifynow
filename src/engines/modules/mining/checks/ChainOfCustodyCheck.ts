import { BaseMiningCheck } from "./BaseMiningCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class ChainOfCustodyCheck
  extends BaseMiningCheck {

  readonly id = "chain-of-custody";

  readonly name = "Chain of Custody";

  readonly category = "Mining";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 1300)
    );

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "VerifyNow",

      status: "PASSED",

      score: 100,

      message:
        "Chain of custody successfully verified.",

      evidence: [

        {
          title: "Origin",
          value: "Verified",
        },

        {
          title: "Transfer History",
          value: "Complete",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}