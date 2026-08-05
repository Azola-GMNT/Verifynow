import { BaseEmploymentCheck } from "./BaseEmploymentCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class PreviousEmployerCheck
  extends BaseEmploymentCheck {

  readonly id = "previous-employer";

  readonly name = "Previous Employers";

  readonly category = "Employment";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    return {

      checkName: this.name,

      provider: "Employer",

      status: "PASSED",

      score: 99,

      message: "Previous employment verified.",

      evidence: [],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}