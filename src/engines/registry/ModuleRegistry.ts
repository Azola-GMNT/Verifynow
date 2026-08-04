import { BaseVerificationModule } from "../modules/BaseVerificationModule";

import { IdentityModule } from "../modules/identity/IdentityModule";

class ModuleRegistry {

  private modules = new Map<
    string,
    BaseVerificationModule
  >();

  constructor() {

    this.register(
      new IdentityModule()
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

}

export const moduleRegistry =
  new ModuleRegistry();