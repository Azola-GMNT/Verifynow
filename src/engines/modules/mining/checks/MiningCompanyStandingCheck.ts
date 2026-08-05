import { BaseMiningCheck } from "./BaseMiningCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class MiningCompanyStandingCheck
  extends BaseMiningCheck {

  readonly id = "mining-company-standing";

  readonly name = "Mining Company Standing";

  readonly category = "Mining";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 1000)
    );

    return {

      checkName: this.name,

      provider: "Mining Authority",

      status: "PASSED",

      score: 99,

      message:
        "Mining company is in good standing.",

      evidence: [

        {
          title: "Company Status",
          value: "Active",
        },

        {
          title: "Compliance",
          value: "Good Standing",
        }

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}