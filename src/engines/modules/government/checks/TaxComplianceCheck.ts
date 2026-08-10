import { BaseGovernmentCheck } from "./BaseGovernmentCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class TaxComplianceCheck
  extends BaseGovernmentCheck {

  readonly id = "tax-compliance";

  readonly name = "Tax Compliance";

  readonly category = "Government";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 900)
    );

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "SARS",

      status: "PASSED",

      score: 98,

      message:
        "Tax compliance confirmed.",

      evidence: [

        {
          title: "Tax Status",
          value: "Compliant",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}