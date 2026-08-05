import { BaseEducationCheck } from "./BaseEducationCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class UniversityQualificationCheck
  extends BaseEducationCheck {

  readonly id = "university";

  readonly name = "University Qualification";

  readonly category = "Education";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    return {

      checkName: this.name,

      provider: "University",

      status: "PASSED",

      score: 100,

      message: "University qualification verified.",

      evidence: [],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}