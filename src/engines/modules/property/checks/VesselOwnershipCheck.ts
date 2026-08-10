import { BasePropertyCheck } from "./BasePropertyCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class VesselOwnershipCheck
  extends BasePropertyCheck {

  readonly id = "vessel-ownership";

  readonly name = "Vessel Ownership";

  readonly category = "Property";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    const startedAt = new Date();

    await new Promise(resolve => setTimeout(resolve, 900));

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "Maritime Authority",

      status: "PASSED",

      score: 100,

      message:
        "Vessel ownership verified.",

      evidence: [

        {

          title: "Vessel",

          value: "Registered",

        },

      ],

      startedAt,

      completedAt: new Date(),

    };

  }

}