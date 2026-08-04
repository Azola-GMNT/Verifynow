import { BaseVerificationCheck } from "../checks/BaseVerificationCheck";
import { IdentityCheck } from "../checks/IdentityCheck";

class CheckRegistry {

  private checks = new Map<
    string,
    BaseVerificationCheck
  >();

  constructor() {

    this.register(
      new IdentityCheck()
    );

  }

  register(
    check: BaseVerificationCheck
  ) {

    this.checks.set(
      check.id,
      check
    );

  }

  get(
    id: string
  ) {

    return this.checks.get(id);

  }

  getAll() {

    return Array.from(
      this.checks.values()
    );

  }

}

export const checkRegistry =
  new CheckRegistry();