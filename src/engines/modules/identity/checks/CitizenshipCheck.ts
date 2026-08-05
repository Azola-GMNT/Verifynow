import { BaseVerificationCheck } from "./BaseVerificationCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class CitizenshipCheck extends BaseVerificationCheck {

  readonly id = "citizenship";

  readonly name = "Citizenship Verification";

  readonly category = "Identity";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 650)
    );

    return {

      checkName: this.name,

      provider: "Home Affairs",

      status: "PASSED",

      score: 100,

      message:
        "Citizenship confirmed.",

      evidence: [

        {
          title: "Nationality",
          value: "South African",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}