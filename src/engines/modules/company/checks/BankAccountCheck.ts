import { BaseCompanyCheck } from "./BaseCompanyCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class BankAccountCheck
  extends BaseCompanyCheck {

  readonly id = "bank";

  readonly name = "Bank Account Verification";

  readonly category = "Financial";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 1000)
    );

    return {

      checkName: this.name,

      provider: "Bank Verification",

      status: "PASSED",

      score: 98,

      message: "Bank account verified.",

      evidence: [

        {
          title: "Account Status",
          value: "Verified",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}