import { VerificationCase } from "@/types/verification";
import { VerificationEngine } from "@/engines/VerificationEngine";
import { verificationRepository } from "@/repositories/verificationRepository";
import { VerificationStatus } from "@/types/verification/enums";

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
    // Create the case first
    this.createVerificationCase(verification);

    // Run the verification engine
    const moduleResults =
      await this.engine.run(verification);

    // Flatten module results into the results
    // expected by VerificationCase
    const results = moduleResults.flatMap(
      (module) => module.results
    );

    // Mark verification as completed
    this.updateVerificationCase(
      verification.verificationId,
      {
        status: VerificationStatus.Completed,
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