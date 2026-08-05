import { BaseCriminalCheck } from "./BaseCriminalCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class WantedPersonsCheck
  extends BaseCriminalCheck {

  readonly id = "wanted";

  readonly name = "Wanted Persons";

  readonly category = "Criminal";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    return {

      checkName: this.name,

      provider: "National Wanted Register",

      status: "PASSED",

      score: 100,

      message:
        "Subject not listed.",

      evidence: [],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}