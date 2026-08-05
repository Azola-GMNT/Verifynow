import { BaseCriminalCheck } from "./BaseCriminalCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class SAPSCaseCheck
  extends BaseCriminalCheck {

  readonly id = "saps-case";

  readonly name = "Open SAPS Cases";

  readonly category = "Criminal";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 700)
    );

    return {

      checkName: this.name,

      provider: "SAPS",

      status: "PASSED",

      score: 100,

      message:
        "No open criminal cases.",

      evidence: [],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}