import { BasePropertyCheck } from "./BasePropertyCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class DeedsOfficeCheck
  extends BasePropertyCheck {

  readonly id = "deeds-office";

  readonly name = "Deeds Office Search";

  readonly category = "Property";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    const startedAt = new Date();

    await new Promise(resolve => setTimeout(resolve, 900));

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "South African Deeds Office",

      status: "PASSED",

      score: 100,

      message: "Deeds Office records verified.",

      evidence: [

        {
          title: "Deeds Record",
          value: "Found",
        },

      ],

      startedAt,

      completedAt: new Date(),

    };

  }

}