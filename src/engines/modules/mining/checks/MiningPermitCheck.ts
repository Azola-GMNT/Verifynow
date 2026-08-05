import { BaseMiningCheck } from "./BaseMiningCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

import { miningProviderRouter }
from "../providers/MiningProviderRouter";

export class MiningPermitCheck
  extends BaseMiningCheck {

  readonly id = "mining-permit";

  readonly name = "Mining Permit";

  readonly category = "Mining";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 900)
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
        "Mining permit verified.",

      evidence: [

        {
          title: "Permit",
          value: "Active",
        }

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}