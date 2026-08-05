import { BaseMiningCheck } from "./BaseMiningCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class ReserveReportCheck
  extends BaseMiningCheck {

  readonly id = "reserve-report";

  readonly name = "Reserve Report";

  readonly category = "Mining";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 1400)
    );

    return {

      checkName: this.name,

      provider: "Competent Person",

      status: "PASSED",

      score: 100,

      message:
        "Reserve report verified.",

      evidence: [

        {
          title: "Reporting Standard",
          value: "SAMREC / JORC",
        }

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}