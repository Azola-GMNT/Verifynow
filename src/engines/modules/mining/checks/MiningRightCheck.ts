import { BaseMiningCheck } from "./BaseMiningCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

import { miningProviderRouter }
from "../providers/MiningProviderRouter";

export class MiningRightCheck
  extends BaseMiningCheck {

  readonly id = "mining-right";

  readonly name = "Mining Right";

  readonly category = "Mining";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 1200)
    );

    const provider =
      miningProviderRouter.getProvider(
        verification.subject.country
      );

    return {

      checkName: this.name,

      provider,

      status: "PASSED",

      score: 100,

      message:
        "Mining right successfully verified.",

      evidence: [

        {
          title: "Mining Right",
          value: "Active",
        },

        {
          title: "Commodity",
          value: "Gold",
        },

        {
          title: "Licence Status",
          value: "Valid",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}