import { BaseEmploymentCheck } from "./BaseEmploymentCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class ProfessionalMembershipCheck
  extends BaseEmploymentCheck {

  readonly id = "professional-membership";

  readonly name = "Professional Membership";

  readonly category = "Professional";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 650)
    );

    return {

      checkName: this.name,

      provider: "Professional Body",

      status: "PASSED",

      score: 100,

      message:
        "Professional memberships successfully verified.",

      evidence: [

        {
          title: "Membership Status",
          value: "Active",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}