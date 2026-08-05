import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export abstract class BaseEducationCheck {

  abstract readonly id: string;

  abstract readonly name: string;

  abstract readonly category: string;

  abstract execute(
    verification: VerificationCase
  ): Promise<CheckResult>;

}