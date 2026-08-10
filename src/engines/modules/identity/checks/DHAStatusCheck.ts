import { BaseVerificationCheck } from "@/engines/checks/BaseVerificationCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class DHAStatusCheck extends BaseVerificationCheck {

  readonly id = "dha-status";

  readonly name = "Home Affairs Status";

  readonly category = "Identity";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 700)
    );

    return {

      checkName: this.name,

      provider: "Department of Home Affairs",

      status: "PASSED",

      score: 100,

      message:
        "Citizen record located and active.",

      evidence: [

        {
          title: "Citizenship",
          value: "South African",
        },

        {
          title: "Status",
          value: "Active",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}
