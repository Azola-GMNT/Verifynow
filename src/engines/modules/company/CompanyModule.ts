import { BaseVerificationModule } from "../BaseVerificationModule";

import { CompanyRegistrationCheck } from "./checks/CompanyRegistrationCheck";
import { DirectorsCheck } from "./checks/DirectorsCheck";
import { BeneficialOwnersCheck } from "./checks/BeneficialOwnersCheck";
import { VATCheck } from "./checks/VATCheck";
import { TaxComplianceCheck } from "./checks/TaxComplianceCheck";
import { BankAccountCheck } from "./checks/BankAccountCheck";
import { BEECheck } from "./checks/BEECheck";

export class CompanyModule
  extends BaseVerificationModule {

  readonly metadata = {

    id: "company",

    name: "Company Verification",

    description:
      "Company due diligence.",

    version: "1.0.0",

    category: "Company",

  };

  protected readonly checks = [

    new CompanyRegistrationCheck(),

    new DirectorsCheck(),

    new BeneficialOwnersCheck(),

    new VATCheck(),

    new TaxComplianceCheck(),

    new BankAccountCheck(),

    new BEECheck(),

  ];

}