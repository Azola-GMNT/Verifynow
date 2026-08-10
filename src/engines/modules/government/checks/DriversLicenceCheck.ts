import { BaseGovernmentCheck } from "./BaseGovernmentCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class DriversLicenceCheck
  extends BaseGovernmentCheck {

  readonly id = "drivers-licence";

  readonly name = "Driver's Licence";

  readonly category = "Government";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 800)
    );

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "RTMC",

      status: "PASSED",

      score: 100,

      message:
        "Driver's licence successfully verified.",

      evidence: [

        {
          title: "Licence Status",
          value: "Valid",
        },

        {
          title: "Licence Code",
          value: "Code B",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}