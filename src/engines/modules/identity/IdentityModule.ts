import { BaseVerificationModule } from "../BaseVerificationModule";

import { IdNumberCheck } from "./checks/IdNumberCheck";
import { PassportCheck } from "./checks/PassportCheck";
import { FaceMatchCheck } from "./checks/FaceMatchCheck";
import { BiometricCheck } from "./checks/BiometricCheck";
import { DHAStatusCheck } from "./checks/DHAStatusCheck";
import { DeceasedRegisterCheck } from "./checks/DeceasedRegisterCheck";
import { CitizenshipCheck } from "./checks/CitizenshipCheck";
import { WatchlistCheck } from "./checks/WatchlistCheck";

export class IdentityModule extends BaseVerificationModule {

  readonly metadata = {

    id: "identity",

    name: "Identity Verification",

    description:
      "Validates an individual's identity.",

    version: "1.0.0",

    category: "Identity",

  };

  protected readonly checks = [

    new IdNumberCheck(),

    new PassportCheck(),

    new FaceMatchCheck(),

    new BiometricCheck(),

    new CitizenshipCheck(),

    new DHAStatusCheck(),

    new WatchlistCheck(),

    new DeceasedRegisterCheck(),

  ];

}