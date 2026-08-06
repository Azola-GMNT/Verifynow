import { Provider } from "./types";

import { identityProviders } from "./identity";
import { employmentProviders } from "./employment";
import { educationProviders } from "./education";
import { criminalProviders } from "./criminal";
import { businessProviders } from "./business";
import { financialProviders } from "./financial";
import { propertyProviders } from "./property";
import { miningProviders } from "./mining";
import { internationalProviders } from "./international";


export const providers: Provider[] = [

  ...identityProviders,

  ...employmentProviders,

  ...educationProviders,

  ...criminalProviders,

  ...businessProviders,

  ...financialProviders,

  ...propertyProviders,

  ...miningProviders,

  ...internationalProviders,

];