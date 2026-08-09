import { VerificationCase } from "@/types/verification";
import { VerificationResult } from "@/types/verification";
import { VerificationModuleResult } from "./modules/VerificationModuleResult";
import { moduleRegistry } from "./registry/ModuleRegistry";

export class VerificationPipeline {
  async execute(
    verification: VerificationCase
  ): Promise<VerificationModuleResult[]> {
    const moduleResults: VerificationModuleResult[] = [];

    const modules =
      moduleRegistry.getModulesForVerification(
        verification
      );

    for (const module of modules) {
      const startedAt = new Date();

      const checkResults =
        await module.execute(verification);

      const results: VerificationResult[] =
        checkResults.map((result, index) => ({
          checkId: index,

          checkName: result.checkName,

          status:
            result.status === "PASSED"
              ? "Passed"
              : result.status === "FAILED"
                ? "Failed"
                : "Review",

          score: result.score,

          message: result.message,
        }));

      moduleResults.push({
        moduleId: module.metadata.id,

        moduleName: module.metadata.name,

        startedAt,

        completedAt: new Date(),

        successful: checkResults.every(
          (result) => result.status === "PASSED"
        ),

        results,
      });
    }

    return moduleResults;
  }
}