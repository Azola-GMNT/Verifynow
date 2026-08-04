import { BaseVerificationModule } from "../BaseVerificationModule";

import { VerificationCase } from "@/types/verification";

import { CheckResult } from "@/types/check";

import { IdentityCheck } from "@/engines/checks/IdentityCheck";

export class IdentityModule
  extends BaseVerificationModule {

  readonly metadata = {

    id: "identity",

    name: "Identity Verification",

    description:
      "Validates an individual's identity.",

    version: "1.0.0",

    category: "Identity",

  };

  private checks = [

    new IdentityCheck(),

  ];

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult[]> {

    const results: CheckResult[] = [];

    for (const check of this.checks) {

      results.push(
        await check.execute(
          verification
        )
      );

    }

    return results;

  }

}