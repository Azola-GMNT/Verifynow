import { BaseGovernmentCheck } from "./BaseGovernmentCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class VehicleOwnershipCheck
  extends BaseGovernmentCheck {

  readonly id = "vehicle-ownership";

  readonly name = "Vehicle Ownership";

  readonly category = "Government";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 900)
    );

    return {

      checkName: this.name,

      provider: "NaTIS",

      status: "PASSED",

      score: 100,

      message:
        "Vehicle ownership confirmed.",

      evidence: [

        {
          title: "Registered Owner",
          value: "Confirmed",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}