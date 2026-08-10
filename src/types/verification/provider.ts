export interface ProviderResult {
  providerName: string;
  status: "Completed" | "Failed";
  confidence: number;
  responseTime: number;
  findings: string;
}