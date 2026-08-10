import { BaseGovernmentCheck } from "./BaseGovernmentCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class VotersRollCheck
  extends BaseGovernmentCheck {

  readonly id = "voters-roll";

  readonly name = "Voters Roll";

  readonly category = "Government";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 700)
    );

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "IEC",

      status: "PASSED",

      score: 100,

      message:
        "Voter registration confirmed.",

      evidence: [

        {
          title: "Registration Status",
          value: "Registered",
        },

        {
          title: "Voting District",
          value: "Verified",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}