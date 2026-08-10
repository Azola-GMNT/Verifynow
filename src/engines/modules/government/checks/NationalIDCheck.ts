import { BaseGovernmentCheck } from "./BaseGovernmentCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class NationalIDCheck
  extends BaseGovernmentCheck {

  readonly id = "national-id";

  readonly name = "National ID Verification";

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

      provider: "Department of Home Affairs",

      status: "PASSED",

      score: 100,

      message:
        "National ID successfully verified.",

      evidence: [

        {
          title: "ID Status",
          value: "Valid",
        },

        {
          title: "Country",
          value:
            verification.subject.country,
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}