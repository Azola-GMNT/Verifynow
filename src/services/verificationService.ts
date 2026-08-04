import { VerificationCase } from "@/types/verification";
import { VerificationEngine } from "@/engines/VerificationEngine";
import { verificationRepository } from "@/repositories/verificationRepository";

class VerificationService {
  private engine = new VerificationEngine();

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

  async startVerification(
    verification: VerificationCase
  ) {
    this.createVerificationCase(verification);

    const results =
      await this.engine.run(verification);

    this.updateVerificationCase(
      verification.verificationId,
      {
        status: "Completed",
        results,
      }
    );

    return this.getVerificationCase(
      verification.verificationId
    );
  }
}

export const verificationService =
  new VerificationService();