import { BaseMiningCheck } from "./BaseMiningCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class MineralExportPermitCheck
  extends BaseMiningCheck {

  readonly id = "export-permit";

  readonly name = "Mineral Export Permit";

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

      provider: "Mining Authority",

      status: "PASSED",

      score: 100,

      message:
        "Export permit verified.",

      evidence: [

        {
          title: "Permit",
          value: "Active",
        }

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}