import { VerificationCase } from "@/types/verification";

export class IdentityProviderRouter {

  async validateId(
    verification: VerificationCase
  ) {

    console.log(
      "Validate ID:",
      verification.subject.idNumber
    );

    return true;

  }

  async validatePassport(
    verification: VerificationCase
  ) {

    console.log(
      "Validate Passport:",
      verification.subject.passportNumber
    );

    return true;

  }

}