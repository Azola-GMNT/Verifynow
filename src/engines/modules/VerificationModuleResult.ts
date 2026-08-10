import { CheckResult } from "@/types/check";

export interface VerificationModuleResult {
  moduleId: string;
  moduleName: string;
  startedAt: Date;
  completedAt: Date;
  successful: boolean;
  results: CheckResult[];
}