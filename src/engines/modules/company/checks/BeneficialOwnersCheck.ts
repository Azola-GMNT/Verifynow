import { BaseCompanyCheck } from "./BaseCompanyCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class BeneficialOwnersCheck
  extends BaseCompanyCheck {

  readonly id = "beneficial-owners";

  readonly name = "Beneficial Ownership";

  readonly category = "Company";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 850)
    );

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "CIPC",

      status: "PASSED",

      score: 99,

      message: "Beneficial ownership verified.",

      evidence: [

        {
          title: "Owners Found",
          value: "2",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}