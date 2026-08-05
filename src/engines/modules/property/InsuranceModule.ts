import { BaseVerificationModule } from "../BaseVerificationModule";

import { VerificationCase } from "@/types/verification";
import { CheckResult } from "@/types/check";

import { PolicyVerificationCheck } from "./checks/PolicyVerificationCheck";
import { PolicyStatusCheck } from "./checks/PolicyStatusCheck";
import { PremiumPaymentCheck } from "./checks/PremiumPaymentCheck";
import { ClaimsHistoryCheck } from "./checks/ClaimsHistoryCheck";
import { FraudIndicatorCheck } from "./checks/FraudIndicatorCheck";
import { VehicleInsuranceCheck } from "./checks/VehicleInsuranceCheck";
import { PropertyInsuranceCheck } from "./checks/PropertyInsuranceCheck";
import { LifePolicyCheck } from "./checks/LifePolicyCheck";
import { BeneficiaryCheck } from "./checks/BeneficiaryCheck";
import { InsuranceLicenceCheck } from "./checks/InsuranceLicenceCheck";

export class InsuranceModule
  extends BaseVerificationModule {

  readonly metadata = {

    id: "insurance",

    name: "Insurance Verification",

    description:
      "Insurance policy and claims verification.",

    version: "1.0.0",

    category: "Insurance",

  };

  private checks = [

    new PolicyVerificationCheck(),

    new PolicyStatusCheck(),

    new PremiumPaymentCheck(),

    new ClaimsHistoryCheck(),

    new FraudIndicatorCheck(),

    new VehicleInsuranceCheck(),

    new PropertyInsuranceCheck(),

    new LifePolicyCheck(),

    new BeneficiaryCheck(),

    new InsuranceLicenceCheck(),

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