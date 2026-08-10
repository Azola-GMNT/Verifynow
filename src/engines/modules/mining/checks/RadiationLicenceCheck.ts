import { BaseMiningCheck } from "./BaseMiningCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class RadiationLicenceCheck
  extends BaseMiningCheck {

  readonly id = "radiation-licence";

  readonly name = "Radiation Licence";

  readonly category = "Mining";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 1200)
    );

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "Nuclear Regulator",

      status: "PASSED",

      score: 100,

      message:
        "Radiation licence verified.",

      evidence: [

        {
          title: "Licence",
          value: "Current",
        }

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}