import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export interface VerificationModuleMetadata {
  id: string;
  name: string;
  description: string;
  version: string;
  category: string;
}

export abstract class BaseVerificationModule {

  abstract readonly metadata: VerificationModuleMetadata;

  protected abstract readonly checks: {
    execute(
      verification: VerificationCase
    ): Promise<CheckResult>;
  }[];

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult[]> {

    const results: CheckResult[] = [];

    for (const check of this.checks) {

      results.push(
        await check.execute(verification)
      );

    }

    return results;

  }

}