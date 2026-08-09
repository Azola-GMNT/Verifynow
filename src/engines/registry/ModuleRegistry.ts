import { BaseVerificationModule } from "../modules/BaseVerificationModule";

import { IdentityModule } from "../modules/identity/IdentityModule";
import { CompanyModule } from "../modules/company/CompanyModule";
import { CriminalModule } from "../modules/criminal/CriminalModule";

import { EmploymentModule } from "../modules/employment/EmploymentModule";
import { EducationModule } from "../modules/education/EducationModule";

import { FinancialModule } from "../modules/financial/FinancialModule";
import { GovernmentModule } from "../modules/government/GovernmentModule";

import { MiningModule } from "../modules/mining/MiningModule";
import { VerificationCase } from "@/types/verification";

class ModuleRegistry {

  private modules = new Map<
    string,
    BaseVerificationModule
  >();

  constructor() {

    this.register(
      new IdentityModule()
    );

    this.register(
  new CompanyModule()
);

this.register(
  new CriminalModule()
);

this.register(
  new EmploymentModule()
);

this.register(
  new EducationModule()
);

this.register(
  new FinancialModule()
);

this.register(
  new GovernmentModule()
);

this.register(
  new MiningModule()
);

  }

  register(
    module: BaseVerificationModule
  ) {

    this.modules.set(
      module.metadata.id,
      module
    );

  }

  get(
    id: string
  ) {

    return this.modules.get(id);

  }

  getAll() {

    return Array.from(
      this.modules.values()
    );

  }

 getModulesForVerification(
  verification: VerificationCase
) {
  return this.getAll();
}

}

export const moduleRegistry =
  new ModuleRegistry();