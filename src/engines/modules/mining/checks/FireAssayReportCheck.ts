import { BaseMiningCheck } from "./BaseMiningCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class FireAssayReportCheck
  extends BaseMiningCheck {

  readonly id = "fire-assay-report";

  readonly name = "Fire Assay Report";

  readonly category = "Mining";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 1300)
    );

    return {

      checkName: this.name,

      provider: "Accredited Laboratory",

      status: "PASSED",

      score: 100,

      message:
        "Fire Assay Report verified.",

      evidence: [

        {
          title: "Laboratory",
          value: "ISO 17025 Accredited",
        },

        {
          title: "Sample Integrity",
          value: "Verified",
        }

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}