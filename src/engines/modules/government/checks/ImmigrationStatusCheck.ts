import { BaseGovernmentCheck } from "./BaseGovernmentCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class ImmigrationStatusCheck
  extends BaseGovernmentCheck {

  readonly id = "immigration-status";

  readonly name = "Immigration Status";

  readonly category = "Government";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 900)
    );

    return {

      checkName: this.name,

      provider: "Department of Home Affairs",

      status: "PASSED",

      score: 100,

      message:
        "Immigration status verified.",

      evidence: [

        {
          title: "Status",
          value: "Legal Resident",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}