import { BaseCriminalCheck } from "./BaseCriminalCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class CourtRecordsCheck
  extends BaseCriminalCheck {

  readonly id = "court-records";

  readonly name = "Court Records";

  readonly category = "Judicial";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 800)
    );

    return {

      checkName: this.name,

      provider: "Justice Department",

      status: "PASSED",

      score: 99,

      message:
        "No court judgments found.",

      evidence: [],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}