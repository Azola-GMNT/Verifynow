export interface VerificationResult {

  checkId: number;

  checkName: string;

  status: "Passed" | "Failed" | "Review";

  message: string;

}