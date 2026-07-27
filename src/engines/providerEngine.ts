import {
  ProviderResult,
  VerificationResult,
} from "@/types/verification";

export interface ProviderResponse {

  providers: ProviderResult[];

  results: VerificationResult[];

}

export function runProviders(
  selectedChecks: number[]
): ProviderResponse {

  const providers: ProviderResult[] = [];

  const results: VerificationResult[] = [];

  selectedChecks.forEach((checkId) => {

    providers.push({

      providerName: `Provider ${checkId}`,

      status: "Completed",

      confidence: 98,

      responseTime: Math.floor(
        Math.random() * 800 + 200
      ),

      findings: "Verification successful",

    });

    results.push({

      checkId,

      checkName: `Verification Check ${checkId}`,

      status: "Passed",

      message: "Verification completed successfully",

    });

  });

  return {

    providers,

    results,

  };

}