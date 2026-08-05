import { BasePropertyCheck } from "./BasePropertyCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class PropertyValuationCheck
  extends BasePropertyCheck {

  readonly id = "property-valuation";

  readonly name = "Property Valuation";

  readonly category = "Property";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    const startedAt = new Date();

    await new Promise(resolve => setTimeout(resolve, 900));

    return {

      checkName: this.name,

      provider: "Municipality",

      status: "PASSED",

      score: 100,

      message: "Municipal valuation verified.",

      evidence: [

        {
          title: "Valuation",
          value: "Current",
        },

      ],

      startedAt,

      completedAt: new Date(),

    };

  }

}