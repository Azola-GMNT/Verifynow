import { BasePropertyCheck } from "./BasePropertyCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class PropertyOwnershipCheck
  extends BasePropertyCheck {

  readonly id = "property-ownership";

  readonly name = "Property Ownership";

  readonly category = "Property";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    const startedAt = new Date();

    await new Promise(resolve => setTimeout(resolve, 900));

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "Deeds Office",

      status: "PASSED",

      score: 100,

      message: "Property ownership verified.",

      evidence: [

        {
          title: "Title Deed",
          value: "Verified",
        },

      ],

      startedAt,

      completedAt: new Date(),

    };

  }

}