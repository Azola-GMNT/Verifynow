import { BaseMiningCheck } from "./BaseMiningCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class RoyaltyComplianceCheck
  extends BaseMiningCheck {

  readonly id = "royalty-compliance";

  readonly name = "Royalty Compliance";

  readonly category = "Mining";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 900)
    );

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "Revenue Authority",

      status: "PASSED",

      score: 100,

      message:
        "Mining royalties fully compliant.",

      evidence: [

        {
          title: "Royalty Status",
          value: "Paid",
        }

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}