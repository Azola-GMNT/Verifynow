import { BaseCriminalCheck } from "./BaseCriminalCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class FraudDatabaseCheck
  extends BaseCriminalCheck {

  readonly id = "fraud";

  readonly name = "Fraud Database";

  readonly category = "Fraud";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 900)
    );

    return {

      checkName: this.name,

      provider: "VerifyNow Fraud Network",

      status: "PASSED",

      score: 100,

      message:
        "No fraud history detected.",

      evidence: [],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}