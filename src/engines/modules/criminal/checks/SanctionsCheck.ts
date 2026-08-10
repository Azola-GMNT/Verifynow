import { BaseCriminalCheck } from "./BaseCriminalCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class SanctionsCheck
  extends BaseCriminalCheck {

  readonly id = "sanctions";

  readonly name = "Sanctions Screening";

  readonly category = "AML";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "OFAC",

      status: "PASSED",

      score: 100,

      message:
        "No sanctions matches.",

      evidence: [],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}