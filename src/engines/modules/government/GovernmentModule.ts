import { BaseVerificationModule } from "../BaseVerificationModule";

import { NationalIDCheck } from "./checks/NationalIDCheck";
import { PassportStatusCheck } from "./checks/PassportStatusCheck";
import { BirthRegisterCheck } from "./checks/BirthRegisterCheck";
import { DeathRegisterCheck } from "./checks/DeathRegisterCheck";
import { MarriageRegisterCheck } from "./checks/MarriageRegisterCheck";
import { CitizenshipCheck } from "./checks/CitizenshipCheck";
import { TaxComplianceCheck } from "./checks/TaxComplianceCheck";
import { CompanyRegistryCheck } from "./checks/CompanyRegistryCheck";
import { DriversLicenceCheck } from "./checks/DriversLicenceCheck";
import { VehicleOwnershipCheck } from "./checks/VehicleOwnershipCheck";
import { ProfessionalLicenceCheck } from "./checks/ProfessionalLicenceCheck";
import { DeedsRegistryCheck } from "./checks/DeedsRegistryCheck";
import { UIFCheck } from "./checks/UIFCheck";
import { COIDCheck } from "./checks/COIDCheck";
import { VotersRollCheck } from "./checks/VotersRollCheck";
import { ImmigrationStatusCheck } from "./checks/ImmigrationStatusCheck";

export class GovernmentModule
  extends BaseVerificationModule {

  readonly metadata = {

    id: "government",

    name: "Government Verification",

    description:
      "Government records and public registry verification.",

    version: "1.0.0",

    category: "Government",

  };

  protected readonly checks = [

    new NationalIDCheck(),

    new PassportStatusCheck(),

    new BirthRegisterCheck(),

    new DeathRegisterCheck(),

    new MarriageRegisterCheck(),

    new CitizenshipCheck(),

    new TaxComplianceCheck(),

    new CompanyRegistryCheck(),

    new DriversLicenceCheck(),

    new VehicleOwnershipCheck(),

    new ProfessionalLicenceCheck(),

    new DeedsRegistryCheck(),

    new UIFCheck(),

    new COIDCheck(),

    new VotersRollCheck(),

    new ImmigrationStatusCheck(),

  ];

}