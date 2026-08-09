export interface VerificationResult {
  checkId: number;

  checkName: string;

  status: "Passed" | "Failed" | "Review";

  score: number;

  message: string;
}