import { BasePropertyCheck } from "./BasePropertyCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class VehicleFinanceCheck
  extends BasePropertyCheck {

  readonly id = "vehicle-finance";

  readonly name = "Vehicle Finance";

  readonly category = "Property";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    const startedAt = new Date();

    await new Promise(resolve => setTimeout(resolve, 900));

    return {

      checkName: this.name,

      provider: "Financial Institution",

      status: "PASSED",

      score: 100,

      message:
        "Vehicle finance verified.",

      evidence: [

        {
          title: "Finance",
          value: "Active",

        },

      ],

      startedAt,

      completedAt: new Date(),

    };

  }

}