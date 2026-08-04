import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export interface VerificationCheck {

  name: string;

  execute(
    verification: VerificationCase
  ): Promise<CheckResult>;

}