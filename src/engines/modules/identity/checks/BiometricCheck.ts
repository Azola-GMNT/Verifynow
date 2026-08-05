import { BaseVerificationCheck } from "@/engines/checks/BaseVerificationCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class BiometricCheck extends BaseVerificationCheck {

  readonly id = "biometric";

  readonly name = "Biometric Verification";

  readonly category = "Identity";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    const startedAt = new Date();

    return {

      checkName: this.name,

      provider: "VerifyNow",

      status: "PENDING_PROVIDER",

      score: 0,

      message:
        "Biometric provider not connected yet.",

      evidence: [],

      startedAt,

      completedAt: new Date(),

    };

  }

}