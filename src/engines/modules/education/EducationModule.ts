import { BaseVerificationModule } from "../BaseVerificationModule";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

import { MatricCheck } from "./checks/MatricCheck";
import { UniversityQualificationCheck } from "./checks/UniversityQualificationCheck";
import { CollegeQualificationCheck } from "./checks/CollegeQualificationCheck";
import { SAQACheck } from "./checks/SAQACheck";
import { TranscriptCheck } from "./checks/TranscriptCheck";
import { ProfessionalCertificateCheck } from "./checks/ProfessionalCertificateCheck";
import { AcademicMisconductCheck } from "./checks/AcademicMisconductCheck";
import { NQFLevelCheck } from "./checks/NQFLevelCheck";

export class EducationModule
  extends BaseVerificationModule {

  readonly metadata = {

    id: "education",

    name: "Education Verification",

    description:
      "Educational qualification verification.",

    version: "1.0.0",

    category: "Education",

  };

  protected readonly checks = [

    new MatricCheck(),

    new UniversityQualificationCheck(),

    new CollegeQualificationCheck(),

    new SAQACheck(),

    new TranscriptCheck(),

    new ProfessionalCertificateCheck(),

    new AcademicMisconductCheck(),

    new NQFLevelCheck(),

  ];

  async execute(
    verification: VerificationCase
  ): Promise<CheckResult[]> {

    const results: CheckResult[] = [];

    for (const check of this.checks) {

      results.push(
        await check.execute(
          verification
        )
      );

    }

    return results;

  }

}