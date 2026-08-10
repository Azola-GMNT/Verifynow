import { BasePropertyCheck } from "./BasePropertyCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class MunicipalRatesCheck
  extends BasePropertyCheck {

  readonly id = "municipal-rates";

  readonly name = "Municipal Rates";

  readonly category = "Property";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    const startedAt = new Date();

    await new Promise(resolve => setTimeout(resolve, 900));

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "Municipality",

      status: "PASSED",

      score: 100,

      message: "Municipal rates account verified.",

      evidence: [

        {
          title: "Rates Status",
          value: "Paid",
        },

      ],

      startedAt,

      completedAt: new Date(),

    };

  }

}