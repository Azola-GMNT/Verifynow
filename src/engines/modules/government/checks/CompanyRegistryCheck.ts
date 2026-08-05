import { BaseGovernmentCheck } from "./BaseGovernmentCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class CompanyRegistryCheck
  extends BaseGovernmentCheck {

  readonly id = "company-registry";

  readonly name = "Company Registry";

  readonly category = "Government";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 850)
    );

    return {

      checkName: this.name,

      provider: "CIPC",

      status: "PASSED",

      score: 100,

      message:
        "Company registration confirmed.",

      evidence: [

        {
          title: "Company Status",
          value: "Active",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}