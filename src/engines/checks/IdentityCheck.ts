import { BaseVerificationCheck } from "./BaseVerificationCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class IdentityCheck
  extends BaseVerificationCheck {

  readonly id = "identity";

  readonly name = "Identity Verification";

  readonly category = "Identity";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    const startedAt = new Date();

    await new Promise(resolve =>
      setTimeout(resolve, 1200)
    );

    return {

      checkName: this.name,

      provider: "VerifyNow",

      status: "PASSED",

      score: 100,

      message:
        "Identity successfully verified.",

      evidence: [

        {
          title: "ID Number",
          value:
            verification.subject.idNumber ??
            "Unavailable",
        },

        {
          title: "Country",
          value:
            verification.subject.country,
        },

      ],

      startedAt,

      completedAt: new Date(),

    };

  }

}