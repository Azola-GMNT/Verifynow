import {
  VerificationCase,
} from "@/types/verification";

import { VerificationStatus } from "@/types/verification/enums";
const STORAGE_KEY = "verifynow_verifications";

class VerificationRepository {
  private verificationCases = new Map<
    string,
    VerificationCase
  >();

  constructor() {
    this.load();
  }

  private load() {
    if (typeof window === "undefined") return;

    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) return;

    try {
      const items: VerificationCase[] = JSON.parse(raw);

      this.verificationCases.clear();

      items.forEach((item) => {
        this.verificationCases.set(
          item.verificationId,
          item
        );
      });
    } catch (err) {
      console.error(
        "Failed to load verification repository",
        err
      );
    }
  }

  private save() {
    if (typeof window === "undefined") return;

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(this.getAllVerifications())
    );
  }

  createVerification(
    verification: VerificationCase
  ) {
    this.verificationCases.set(
      verification.verificationId,
      verification
    );

    this.save();

    return verification;
  }

  updateVerification(
    verificationId: string,
    updates: Partial<VerificationCase>
  ) {
    const existing =
      this.verificationCases.get(verificationId);

    if (!existing) return null;

    const updated: VerificationCase = {
      ...existing,
      ...updates,
    };

    this.verificationCases.set(
      verificationId,
      updated
    );

    this.save();

    return updated;
  }

  updateStatus(
    verificationId: string,
    status: VerificationStatus
  ) {
    return this.updateVerification(
      verificationId,
      { status }
    );
  }

  getVerification(
    verificationId: string
  ) {
    return this.verificationCases.get(
      verificationId
    );
  }

  getAllVerifications() {
    return Array.from(
      this.verificationCases.values()
    ).reverse();
  }

  deleteVerification(
    verificationId: string
  ) {
    this.verificationCases.delete(
      verificationId
    );

    this.save();
  }

  clear() {
    this.verificationCases.clear();

    this.save();
  }
}

export const verificationRepository =
  new VerificationRepository();                