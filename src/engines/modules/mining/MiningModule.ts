import { BaseVerificationModule } from "../BaseVerificationModule";

import { MiningRightCheck } from "./checks/MiningRightCheck";
import { ProspectingRightCheck } from "./checks/ProspectingRightCheck";
import { MiningPermitCheck } from "./checks/MiningPermitCheck";
import { DMRELicenceCheck } from "./checks/DMRELicenceCheck";

import { EnvironmentalAuthorisationCheck } from "./checks/EnvironmentalAuthorisationCheck";
import { WaterUseLicenceCheck } from "./checks/WaterUseLicenceCheck";
import { SocialLabourPlanCheck } from "./checks/SocialLabourPlanCheck";
import { MineHealthSafetyCheck } from "./checks/MineHealthSafetyCheck";

import { MineralExportPermitCheck } from "./checks/MineralExportPermitCheck";
import { RoyaltyComplianceCheck } from "./checks/RoyaltyComplianceCheck";

import { ICGLRCertificateCheck } from "./checks/ICGLRCertificateCheck";
import { OECDDueDiligenceCheck } from "./checks/OECDDueDiligenceCheck";
import { ChainOfCustodyCheck } from "./checks/ChainOfCustodyCheck";

import { RefineryAccreditationCheck } from "./checks/RefineryAccreditationCheck";
import { SmelterVerificationCheck } from "./checks/SmelterVerificationCheck";

import { FireAssayReportCheck } from "./checks/FireAssayReportCheck";
import { ICPOESReportCheck } from "./checks/ICPOESReportCheck";
import { XRFReportCheck } from "./checks/XRFReportCheck";

import { RadiationLicenceCheck } from "./checks/RadiationLicenceCheck";

import { ReserveReportCheck } from "./checks/ReserveReportCheck";
import { MineralOwnershipCheck } from "./checks/MineralOwnershipCheck";
import { MiningCompanyStandingCheck } from "./checks/MiningCompanyStandingCheck";

export class MiningModule
  extends BaseVerificationModule {

  readonly metadata = {

    id: "mining",

    name: "Mining Verification",

    description:
      "Mining rights, compliance, laboratory and mineral trade verification.",

    version: "1.0.0",

    category: "Mining",

  };

  protected readonly checks = [

    new MiningRightCheck(),

    new ProspectingRightCheck(),

    new MiningPermitCheck(),

    new DMRELicenceCheck(),

    new EnvironmentalAuthorisationCheck(),

    new WaterUseLicenceCheck(),

    new SocialLabourPlanCheck(),

    new MineHealthSafetyCheck(),

    new MineralExportPermitCheck(),

    new RoyaltyComplianceCheck(),

    new ICGLRCertificateCheck(),

    new OECDDueDiligenceCheck(),

    new ChainOfCustodyCheck(),

    new RefineryAccreditationCheck(),

    new SmelterVerificationCheck(),

    new FireAssayReportCheck(),

    new ICPOESReportCheck(),

    new XRFReportCheck(),

    new RadiationLicenceCheck(),

    new ReserveReportCheck(),

    new MineralOwnershipCheck(),

    new MiningCompanyStandingCheck(),

  ];

}