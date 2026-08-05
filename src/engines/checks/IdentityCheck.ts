import { BaseVerificationCheck } from "./BaseVerificationCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

import { IdNumberCheck } from "@/engines/modules/identity/checks/IdNumberCheck";
import { PassportCheck } from "@/engines/modules/identity/checks/PassportCheck";
import { FaceMatchCheck } from "@/engines/modules/identity/checks/FaceMatchCheck";
import { BiometricCheck } from "@/engines/modules/identity/checks/BiometricCheck";

export class IdentityCheck extends BaseVerificationCheck {

  readonly id = "identity";

  readonly name = "Identity Verification";

  readonly category = "Identity";

  private checks = [

    new IdNumberCheck(),
    new PassportCheck(),
    new FaceMatchCheck(),
    new BiometricCheck(),
];

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    const results = await Promise.all(
      this.checks.map(check =>
        check.execute(verification)
      )
    );

    const passed =
      results.every(
        result => result.status === "PASSED"
      );

    return {

      checkName: this.name,

      provider: "VerifyNow",

      status: passed ? "PASSED" : "FAILED",

      score: Math.round(
        results.reduce(
          (total, result) => total + result.score,
          0
        ) / results.length
      ),

      message: passed
        ? "Identity verification completed successfully."
        : "Identity verification failed.",

      evidence: results.flatMap(
        result => result.evidence
      ),

      startedAt: results[0].startedAt,

      completedAt: new Date(),

    };

  }

}