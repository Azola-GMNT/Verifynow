import { BaseVerificationCheck } from "@/engines/checks/BaseVerificationCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class FaceMatchCheck extends BaseVerificationCheck {

  readonly id = "face-match";

  readonly name = "Face Match";

  readonly category = "Identity";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    const startedAt = new Date();

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "VerifyNow",

      status: "PENDING_PROVIDER",

      score: 0,

      message:
        "Face Match provider not connected yet.",

      evidence: [],

      startedAt,

      completedAt: new Date(),

    };

  }

}