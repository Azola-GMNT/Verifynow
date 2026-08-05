import { BaseVerificationCheck } from "@/engines/checks/BaseVerificationCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class IdNumberCheck extends BaseVerificationCheck {

  readonly id = "identity-id";

  readonly name = "ID Number Validation";

  readonly category = "Identity";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    const startedAt = new Date();

    const idNumber =
      verification.subject.idNumber;

    const passed =
      !!idNumber &&
      idNumber.length === 13;

    return {

      checkName: this.name,

      provider: "VerifyNow",

      status: passed
        ? "PASSED"
        : "FAILED",

      score: passed
        ? 100
        : 0,

      message: passed
        ? "ID Number format is valid."
        : "Invalid South African ID Number.",

      evidence: [

        {
          title: "ID Number",
          value: idNumber ?? "Unavailable",
        }

      ],

      startedAt,

      completedAt: new Date(),

    };

  }

}