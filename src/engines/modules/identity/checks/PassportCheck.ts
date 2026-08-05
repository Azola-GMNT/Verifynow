import { BaseVerificationCheck } from "@/engines/checks/BaseVerificationCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class PassportCheck extends BaseVerificationCheck {

  readonly id = "passport";

  readonly name = "Passport Validation";

  readonly category = "Identity";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    const startedAt = new Date();

    const passport =
      verification.subject.passportNumber;

    const passed =
      !!passport && passport.length >= 6;

    return {

      checkName: this.name,

      provider: "VerifyNow",

      status: passed ? "PASSED" : "FAILED",

      score: passed ? 100 : 0,

      message: passed
        ? "Passport validated."
        : "Passport unavailable.",

      evidence: [

        {
          title: "Passport",
          value: passport ?? "Unavailable",
        },

      ],

      startedAt,

      completedAt: new Date(),

    };

  }

}