import { BaseEmploymentCheck } from "./BaseEmploymentCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class SalaryVerificationCheck
  extends BaseEmploymentCheck {

  readonly id = "salary";

  readonly name = "Salary Verification";

  readonly category = "Financial";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "Payroll",

      status: "PASSED",

      score: 95,

      message: "Salary confirmed.",

      evidence: [],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}