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

  abstract execute(
    verification: VerificationCase
  ): Promise<CheckResult[]>;

}