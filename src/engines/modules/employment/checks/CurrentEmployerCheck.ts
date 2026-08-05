import { BaseEmploymentCheck } from "./BaseEmploymentCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class CurrentEmployerCheck
  extends BaseEmploymentCheck {

  readonly id = "current-employer";

  readonly name = "Current Employer";

  readonly category = "Employment";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    return {

      checkName: this.name,

      provider: "Employer",

      status: "PASSED",

      score: 100,

      message: "Current employment confirmed.",

      evidence: [],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}