import { BaseGovernmentCheck } from "./BaseGovernmentCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class ProfessionalLicenceCheck
  extends BaseGovernmentCheck {

  readonly id = "professional-licence";

  readonly name = "Professional Licence";

  readonly category = "Government";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 700)
    );

    return {

      checkName: this.name,

      provider: "Professional Council",

      status: "PASSED",

      score: 100,

      message:
        "Professional registration verified.",

      evidence: [

        {
          title: "Registration",
          value: "Active",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}