import { BaseCompanyCheck } from "./BaseCompanyCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class VATCheck extends BaseCompanyCheck {

  readonly id = "vat";

  readonly name = "VAT Registration";

  readonly category = "Tax";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 700)
    );

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "SARS",

      status: "PASSED",

      score: 100,

      message: "VAT registration is active.",

      evidence: [

        {
          title: "VAT Status",
          value: "Registered",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}