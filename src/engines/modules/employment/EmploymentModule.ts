import { BaseVerificationModule } from "../BaseVerificationModule";

import { EmploymentHistoryCheck } from "./checks/EmploymentHistoryCheck";
import { CurrentEmployerCheck } from "./checks/CurrentEmployerCheck";
import { PreviousEmployerCheck } from "./checks/PreviousEmployerCheck";
import { JobTitleCheck } from "./checks/JobTitleCheck";
import { SalaryVerificationCheck } from "./checks/SalaryVerificationCheck";
import { EmploymentDatesCheck } from "./checks/EmploymentDatesCheck";
import { ReferenceCheck } from "./checks/ReferenceCheck";
import { ProfessionalMembershipCheck } from "./checks/ProfessionalMembershipCheck";
import { DisciplinaryRecordCheck } from "./checks/DisciplinaryRecordCheck";

export class EmploymentModule extends BaseVerificationModule {

  readonly metadata = {

    id: "employment",

    name: "Employment Verification",

    description:
      "Employment and career verification.",

    version: "1.0.0",

    category: "Employment",

  };

  protected readonly checks = [

    new EmploymentHistoryCheck(),

    new CurrentEmployerCheck(),

    new PreviousEmployerCheck(),

    new JobTitleCheck(),

    new SalaryVerificationCheck(),

    new EmploymentDatesCheck(),

    new ReferenceCheck(),

    new ProfessionalMembershipCheck(),

    new DisciplinaryRecordCheck(),

  ];

}