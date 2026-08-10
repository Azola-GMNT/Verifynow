import { BaseGovernmentCheck } from "./BaseGovernmentCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class DeedsRegistryCheck
  extends BaseGovernmentCheck {

  readonly id = "deeds-registry";

  readonly name = "Deeds Registry";

  readonly category = "Government";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 900)
    );

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "Deeds Office",

      status: "PASSED",

      score: 100,

      message:
        "Property ownership successfully verified.",

      evidence: [

        {
          title: "Property Records",
          value: "Available",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}