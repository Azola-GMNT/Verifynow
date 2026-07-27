export interface ProviderResult {

  providerName: string;

  status: string;

  confidence?: number;

  responseTime?: number;

  findings?: string;

}