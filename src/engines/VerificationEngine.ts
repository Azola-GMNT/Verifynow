import { VerificationCase } from "@/types/verification";

import { VerificationPipeline } from "./VerificationPipeline";

export class VerificationEngine {

  private pipeline =
    new VerificationPipeline();

  async run(
    verification: VerificationCase
  ) {

    return this.pipeline.execute(
      verification
    );

  }

}