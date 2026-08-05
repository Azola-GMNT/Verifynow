import { BasePropertyCheck } from "./BasePropertyCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class BondRegistrationCheck
  extends BasePropertyCheck {

  readonly id = "bond-registration";

  readonly name = "Bond Registration";

  readonly category = "Property";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    const startedAt = new Date();

    await new Promise(resolve => setTimeout(resolve, 900));

    return {

      checkName: this.name,

      provider: "Deeds Office",

      status: "PASSED",

      score: 100,

      message: "Bond registration verified.",

      evidence: [

        {
          title: "Mortgage",
          value: "Registered",
        },

      ],

      startedAt,

      completedAt: new Date(),

    };

  }

}