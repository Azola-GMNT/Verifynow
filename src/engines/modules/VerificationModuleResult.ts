import { VerificationResult } from "@/types/verification";

export interface VerificationModuleResult {
  moduleId: string;

  moduleName: string;

  startedAt: Date;

  completedAt: Date;

  successful: boolean;

  results: VerificationResult[];
}