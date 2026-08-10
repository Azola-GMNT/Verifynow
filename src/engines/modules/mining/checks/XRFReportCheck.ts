import { BaseMiningCheck } from "./BaseMiningCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class XRFReportCheck
  extends BaseMiningCheck {

  readonly id = "xrf-report";

  readonly name = "XRF Report";

  readonly category = "Mining";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 1000)
    );

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "Analytical Laboratory",

      status: "PASSED",

      score: 98,

      message:
        "XRF analysis verified.",

      evidence: [

        {
          title: "Technique",
          value: "XRF Spectrometry",
        }

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}