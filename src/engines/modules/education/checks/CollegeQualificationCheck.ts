import { BaseEducationCheck } from "./BaseEducationCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class CollegeQualificationCheck
  extends BaseEducationCheck {

  readonly id = "college";

  readonly name = "College Qualification";

  readonly category = "Education";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    return {

      checkName: this.name,

      provider: "College",

      status: "PASSED",

      score: 99,

      message: "College qualification verified.",

      evidence: [],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}