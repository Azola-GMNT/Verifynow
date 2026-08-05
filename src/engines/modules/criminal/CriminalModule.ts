import { BaseVerificationModule } from "../BaseVerificationModule";

import { CriminalRecordCheck } from "./checks/CriminalRecordCheck";
import { SAPSCaseCheck } from "./checks/SAPSCaseCheck";
import { CourtRecordsCheck } from "./checks/CourtRecordsCheck";
import { FraudDatabaseCheck } from "./checks/FraudDatabaseCheck";
import { PEPCheck } from "./checks/PEPCheck";
import { SanctionsCheck } from "./checks/SanctionsCheck";
import { InterpolCheck } from "./checks/InterpolCheck";
import { WantedPersonsCheck } from "./checks/WantedPersonsCheck";

export class CriminalModule extends BaseVerificationModule {

  readonly metadata = {

    id: "criminal",

    name: "Criminal Verification",

    description:
      "Criminal, AML and law enforcement screening.",

    version: "1.0.0",

    category: "Compliance",

  };

  protected readonly checks = [

    new CriminalRecordCheck(),

    new SAPSCaseCheck(),

    new CourtRecordsCheck(),

    new FraudDatabaseCheck(),

    new PEPCheck(),

    new SanctionsCheck(),

    new InterpolCheck(),

    new WantedPersonsCheck(),

  ];

}