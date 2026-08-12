import { VerificationCase } from "@/types/verification";

import { verificationRepository } from "@/repositories/verificationRepository";

class VerificationService {
  
  createVerificationCase(
    verification: VerificationCase
  ) {
    return verificationRepository.createVerification(
      verification
    );
  }

  updateVerificationCase(
    verificationId: string,
    updates: Partial<VerificationCase>
  ) {
    return verificationRepository.updateVerification(
      verificationId,
      updates
    );
  }

  deleteVerificationCase(
    verificationId: string
  ) {
    verificationRepository.deleteVerification(
      verificationId
    );
  }

  getAllVerificationCases() {
    return verificationRepository.getAllVerifications();
  }

  getVerificationCase(id: string) {
    return verificationRepository.getVerification(id);
  }

  startVerification(
  verification: VerificationCase
) {
  this.createVerificationCase(verification);

  return this.getVerificationCase(
    verification.verificationId
  );
}
}

export const verificationService =
  new VerificationService();