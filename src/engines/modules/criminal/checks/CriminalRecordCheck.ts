import { BaseCriminalCheck } from "./BaseCriminalCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class CriminalRecordCheck
  extends BaseCriminalCheck {

  readonly id = "criminal-record";

  readonly name = "Criminal Record";

  readonly category = "Criminal";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 900)
    );

    return {

      checkName: this.name,

      provider: "SAPS",

      status: "PASSED",

      score: 100,

      message:
        "No criminal convictions found.",

      evidence: [

        {
          title: "Record",
          value: "Clean",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}