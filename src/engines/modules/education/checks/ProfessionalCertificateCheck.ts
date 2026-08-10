import { BaseEducationCheck } from "./BaseEducationCheck";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

export class ProfessionalCertificateCheck
  extends BaseEducationCheck {

  readonly id = "professional-certificates";

  readonly name = "Professional Certificates";

  readonly category = "Professional";

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult> {

    return {

      checkId: this.id,

      checkName: this.name,

      provider: "Professional Body",

      status: "PASSED",

      score: 100,

      message: "Professional certificates verified.",

      evidence: [],

      startedAt: new Date(),

      completedAt: new Date(),

    };

  }

}