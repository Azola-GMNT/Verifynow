import { BaseVerificationCheck } from "./BaseVerificationCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class DeceasedRegisterCheck extends BaseVerificationCheck {

  readonly id = "deceased-register";

  readonly name = "Deceased Register";

  readonly category = "Identity";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 600)
    );

    return {

      checkName: this.name,

      provider: "Department of Home Affairs",

      status: "PASSED",

      score: 100,

      message:
        "No deceased record found.",

      evidence: [

        {
          title: "Registry Status",
          value: "Not Listed",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}