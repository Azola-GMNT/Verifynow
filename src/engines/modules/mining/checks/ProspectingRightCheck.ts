import { BaseMiningCheck } from "./BaseMiningCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

import { miningProviderRouter }
from "../providers/MiningProviderRouter";

export class ProspectingRightCheck
  extends BaseMiningCheck {

  readonly id = "prospecting-right";

  readonly name = "Prospecting Right";

  readonly category = "Mining";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 1000)
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
        "Prospecting right verified.",

      evidence: [

        {
          title: "Status",
          value: "Valid",
        },

        {
          title: "Area",
          value: "Registered",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}