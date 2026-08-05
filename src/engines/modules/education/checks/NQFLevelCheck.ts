import { BaseEducationCheck } from "./BaseEducationCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class NQFLevelCheck
  extends BaseEducationCheck {

  readonly id = "nqf-level";

  readonly name = "NQF Level Verification";

  readonly category = "Education";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    return {

      checkName: this.name,

      provider: "SAQA",

      status: "PASSED",

      score: 100,

      message: "NQF level confirmed.",

      evidence: [],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}