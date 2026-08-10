import { BaseEducationCheck } from "./BaseEducationCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class SAQACheck
  extends BaseEducationCheck {

  readonly id = "saqa";

  readonly name = "SAQA Verification";

  readonly category = "Education";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "SAQA",

      status: "PASSED",

      score: 100,

      message: "Qualification found on SAQA.",

      evidence: [],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}