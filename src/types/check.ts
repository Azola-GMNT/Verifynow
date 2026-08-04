export type CheckStatus =
  | "PENDING"
  | "RUNNING"
  | "PASSED"
  | "FAILED"
  | "WARNING"
  | "ERROR";

export interface EvidenceItem {
  title: string;
  value: string;
}

export interface CheckResult {
  checkName: string;

  provider: string;

  status: CheckStatus;

  score: number;

  message: string;

  evidence: EvidenceItem[];

  startedAt: Date;

  completedAt: Date;
}