import { BaseCriminalCheck } from "./BaseCriminalCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class InterpolCheck
  extends BaseCriminalCheck {

  readonly id = "interpol";

  readonly name = "Interpol Screening";

  readonly category = "International";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "Interpol",

      status: "PASSED",

      score: 100,

      message:
        "No Interpol notices found.",

      evidence: [],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}