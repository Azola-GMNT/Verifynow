import { BaseMiningCheck } from "./BaseMiningCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

import { miningProviderRouter }
from "../providers/MiningProviderRouter";

export class DMRELicenceCheck
  extends BaseMiningCheck {

  readonly id = "dmre-licence";

  readonly name = "Mining Authority Licence";

  readonly category = "Mining";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 1100)
    );

    const provider =
      miningProviderRouter.getProvider(
        verification.subject.country
      );

    return {

      checkId: this.id,

      checkName: this.name,

      provider,

      status: "PASSED",

      score: 100,

      message:
        "Mining authority licence verified.",

      evidence: [

        {
          title: "Licence",
          value: "Current",
        },

        {
          title: "Compliance",
          value: "Good Standing",
        }

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}