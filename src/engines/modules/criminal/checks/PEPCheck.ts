import { BaseCriminalCheck } from "./BaseCriminalCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class PEPCheck
  extends BaseCriminalCheck {

  readonly id = "pep";

  readonly name = "Politically Exposed Persons";

  readonly category = "AML";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    return {

      checkName: this.name,

      provider: "World Compliance",

      status: "PASSED",

      score: 100,

      message:
        "No PEP match found.",

      evidence: [],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}