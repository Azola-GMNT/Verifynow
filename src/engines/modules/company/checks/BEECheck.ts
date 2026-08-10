import { BaseCompanyCheck } from "./BaseCompanyCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class BEECheck extends BaseCompanyCheck {

  readonly id = "bee";

  readonly name = "BEE Verification";

  readonly category = "Compliance";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 850)
    );

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "BEE Registry",

      status: "PASSED",

      score: 95,

      message: "BEE certificate verified.",

      evidence: [

        {
          title: "BEE Level",
          value: "Level 2",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}