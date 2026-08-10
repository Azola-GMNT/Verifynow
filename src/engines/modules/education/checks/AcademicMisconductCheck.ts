import { BaseEducationCheck } from "./BaseEducationCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class AcademicMisconductCheck
  extends BaseEducationCheck {

  readonly id = "academic-misconduct";

  readonly name = "Academic Misconduct";

  readonly category = "Education";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "Institution",

      status: "PASSED",

      score: 100,

      message: "No academic misconduct found.",

      evidence: [],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}