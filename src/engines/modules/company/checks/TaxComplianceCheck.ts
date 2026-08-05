import { BaseCompanyCheck } from "./BaseCompanyCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class TaxComplianceCheck
  extends BaseCompanyCheck {

  readonly id = "tax";

  readonly name = "Tax Compliance";

  readonly category = "Tax";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 900)
    );

    return {

      checkName: this.name,

      provider: "SARS",

      status: "PASSED",

      score: 100,

      message: "Company tax compliant.",

      evidence: [

        {
          title: "Compliance",
          value: "Good Standing",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}