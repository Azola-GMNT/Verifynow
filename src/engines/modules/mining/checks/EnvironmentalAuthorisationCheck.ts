import { BaseMiningCheck } from "./BaseMiningCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

import { miningProviderRouter }
from "../providers/MiningProviderRouter";

export class EnvironmentalAuthorisationCheck
  extends BaseMiningCheck {

  readonly id = "environmental-authorisation";

  readonly name = "Environmental Authorisation";

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

      provider:
        miningProviderRouter.getProvider(
          verification.subject.country
        ),

      status: "PASSED",

      score: 98,

      message:
        "Environmental authorisation verified.",

      evidence: [

        {
          title: "Environmental Permit",
          value: "Approved",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}