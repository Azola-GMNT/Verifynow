export type CheckStatus =
  | "PENDING"
  | "PENDING_PROVIDER"
  | "RUNNING"
  | "PASSED"
  | "FAILED"
  | "WARNING"
  | "ERROR"
  | "REVIEW";

export interface EvidenceItem {
  title: string;
  value: string;
}

export interface CheckResult {
  checkId: string | number;
  checkName: string;
  provider: string;
  status: CheckStatus;
  score: number;
  message: string;
  evidence: EvidenceItem[];
  startedAt: Date;
  completedAt: Date;
}