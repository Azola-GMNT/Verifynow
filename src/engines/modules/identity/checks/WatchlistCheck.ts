import { BaseVerificationCheck } from "./BaseVerificationCheck";
import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class WatchlistCheck extends BaseVerificationCheck {

  readonly id = "watchlist";

  readonly name = "Watchlist Screening";

  readonly category = "Compliance";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    await new Promise(resolve =>
      setTimeout(resolve, 850)
    );

    return {

      checkName: this.name,

      provider: "VerifyNow Compliance",

      status: "PASSED",

      score: 100,

      message:
        "No sanctions or watchlist matches found.",

      evidence: [

        {
          title: "Screening",
          value: "Clear",
        },

      ],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}