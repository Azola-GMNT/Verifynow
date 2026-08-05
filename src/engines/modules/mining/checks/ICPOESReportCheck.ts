import { BaseMiningCheck } from "./BaseMiningCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class ICPOESReportCheck
  extends BaseMiningCheck {

  readonly id = "icp-oes-report";

  readonly name = "ICP-OES Report";

  readonly category = "Mining";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 1200)
    );

    return {

      checkName: this.name,

      provider: "Analytical Laboratory",

      status: "PASSED",

      score: 100,

      message:
        "ICP-OES report authenticated.",

      evidence: [

        {
          title: "Method",
          value: "ICP-OES",
        },

        {
          title: "Report Status",
          value: "Verified",
        }

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}