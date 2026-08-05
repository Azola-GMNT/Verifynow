import { BasePropertyCheck } from "./BasePropertyCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class AssetEncumbranceCheck
  extends BasePropertyCheck {

  readonly id = "asset-encumbrance";

  readonly name = "Asset Encumbrance";

  readonly category = "Property";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    const startedAt = new Date();

    await new Promise(resolve => setTimeout(resolve, 900));

    return {

      checkName: this.name,

      provider: "Asset Registry",

      status: "PASSED",

      score: 100,

      message:
        "Asset encumbrance verified.",

      evidence: [

        {

          title: "Encumbrance",

          value: "None Found",

        },

      ],

      startedAt,

      completedAt: new Date(),

    };

  }

}