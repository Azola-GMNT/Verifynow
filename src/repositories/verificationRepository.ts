import { VerificationCase } from "@/types/verification";
import { verificationRepository as localRepository } from "./verificationRepository.local";

class VerificationRepository {
  createVerification(
    verification: VerificationCase
  ) {
    return localRepository.createVerification(
      verification
    );
  }

  updateVerification(
    verificationId: string,
    updates: Partial<VerificationCase>
  ) {
    return localRepository.updateVerification(
      verificationId,
      updates
    );
  }

  deleteVerification(
    verificationId: string
  ) {
    return localRepository.deleteVerification(
      verificationId
    );
  }

  getVerification(
    verificationId: string
  ) {
    return localRepository.getVerification(
      verificationId
    );
  }

  getAllVerifications() {
    return localRepository.getAllVerifications();
  }

  clear() {
    return localRepository.clear();
  }
}

export const verificationRepository =
  new VerificationRepository();