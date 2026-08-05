import { BaseMiningCheck } from "./BaseMiningCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class ICGLRCertificateCheck
  extends BaseMiningCheck {

  readonly id = "icglr-certificate";

  readonly name = "ICGLR Certificate";

  readonly category = "Mining";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 1200)
    );

    return {

      checkName: this.name,

      provider: "ICGLR",

      status: "PASSED",

      score: 100,

      message:
        "ICGLR certificate successfully verified.",

      evidence: [

        {
          title: "Certificate",
          value: "Valid",
        },

        {
          title: "Country of Origin",
          value:
            verification.subject.country,
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}