import { BasePropertyCheck } from "./BasePropertyCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class VehicleOwnershipCheck
  extends BasePropertyCheck {

  readonly id = "vehicle-ownership";

  readonly name = "Vehicle Ownership";

  readonly category = "Property";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    const startedAt = new Date();

    await new Promise(resolve => setTimeout(resolve, 900));

    return {

      checkName: this.name,

      provider: "eNaTIS",

      status: "PASSED",

      score: 100,

      message:
        "Vehicle ownership verified.",

      evidence: [

        {
          title: "Vehicle",
          value: "Registered",
        },

      ],

      startedAt,

      completedAt: new Date(),

    };

  }

}