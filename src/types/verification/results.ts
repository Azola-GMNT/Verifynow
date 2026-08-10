export interface VerificationResult {
  checkId: number;
  checkName: string;
  provider: string;
  status: string;
  score: number;
  message: string;
  evidence: {
    title: string;
    value: string;
  }[];
  startedAt: Date;
  completedAt: Date;
}