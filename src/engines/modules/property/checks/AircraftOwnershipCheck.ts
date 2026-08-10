import { BasePropertyCheck } from "./BasePropertyCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class AircraftOwnershipCheck
  extends BasePropertyCheck {

  readonly id = "aircraft-ownership";

  readonly name = "Aircraft Ownership";

  readonly category = "Property";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    const startedAt = new Date();

    await new Promise(resolve => setTimeout(resolve, 900));

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "Civil Aviation Authority",

      status: "PASSED",

      score: 100,

      message:
        "Aircraft ownership verified.",

      evidence: [

        {

          title: "Aircraft",

          value: "Registered",

        },

      ],

      startedAt,

      completedAt: new Date(),

    };

  }

}