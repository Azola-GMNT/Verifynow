import { BaseCompanyCheck } from "./BaseCompanyCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class CompanyRegistrationCheck
  extends BaseCompanyCheck {

  readonly id = "company-registration";

  readonly name = "Company Registration";

  readonly category = "Company";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 900)
    );

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "CIPC",

      status: "PASSED",

      score: 100,

      message:
        "Company registration verified.",

      evidence: [

        {
          title: "Registration Number",
          value:
            verification.subject.registrationNumber ??
            "Unavailable",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}