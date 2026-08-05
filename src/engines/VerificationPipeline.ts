import { VerificationCase } from "@/types/verification";

import { VerificationModuleResult } from "./modules/VerificationModuleResult";

import { moduleRegistry } from "./registry/ModuleRegistry";

export class VerificationPipeline {

  async execute(
    verification: VerificationCase
  ): Promise<VerificationModuleResult[]> {

    const moduleResults:
      VerificationModuleResult[] = [];

    const modules =
    moduleRegistry.getModulesForVerification(
        verification
    );

    for (const module of modules) {

      const startedAt =
        new Date();

      const results =
        await module.execute(
          verification
        );

      moduleResults.push({

        moduleId:
          module.metadata.id,

        moduleName:
          module.metadata.name,

        startedAt,

        completedAt:
          new Date(),

        successful:
          results.every(
            r => r.status === "PASSED"
          ),

        results,

      });

    }

    return moduleResults;

  }

}