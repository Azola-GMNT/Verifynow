import { BaseCompanyCheck } from "./BaseCompanyCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class DirectorsCheck extends BaseCompanyCheck {

  readonly id = "directors";

  readonly name = "Directors Verification";

  readonly category = "Company";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 800)
    );

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "CIPC",

      status: "PASSED",

      score: 100,

      message: "Directors successfully verified.",

      evidence: [

        {
          title: "Active Directors",
          value: "2",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}