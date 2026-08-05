import { BaseVerificationModule } from "../BaseVerificationModule";

import { BankAccountCheck } from "./checks/BankAccountCheck";
import { AccountOwnershipCheck } from "./checks/AccountOwnershipCheck";
import { CreditScoreCheck } from "./checks/CreditScoreCheck";
import { CreditHistoryCheck } from "./checks/CreditHistoryCheck";
import { DebtReviewCheck } from "./checks/DebtReviewCheck";
import { JudgementCheck } from "./checks/JudgementCheck";
import { IncomeVerificationCheck } from "./checks/IncomeVerificationCheck";
import { AffordabilityCheck } from "./checks/AffordabilityCheck";
import { BankStatementCheck } from "./checks/BankStatementCheck";
import { FraudScoreCheck } from "./checks/FraudScoreCheck";
import { BankruptcyCheck } from "./checks/BankruptcyCheck";

export class FinancialModule
  extends BaseVerificationModule {

  readonly metadata = {

    id: "financial",

    name: "Financial Verification",

    description:
      "Financial due diligence and affordability checks.",

    version: "1.0.0",

    category: "Financial",

  };

  protected readonly checks = [

    new BankAccountCheck(),

    new AccountOwnershipCheck(),

    new CreditScoreCheck(),

    new CreditHistoryCheck(),

    new DebtReviewCheck(),

    new JudgementCheck(),

    new IncomeVerificationCheck(),

    new AffordabilityCheck(),

    new BankStatementCheck(),

    new FraudScoreCheck(),

    new BankruptcyCheck(),

  ];

}