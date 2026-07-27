import { VerificationCase } from "@/types/verification";

const verifications: VerificationCase[] = [];

export const verificationStore = {
  getAll(): VerificationCase[] {
    return verifications;
  },

  getById(
    verificationId: string
  ): VerificationCase | undefined {
    return verifications.find(
      (v) => v.verificationId === verificationId
    );
  },

  create(
    verification: VerificationCase
  ): VerificationCase {

    verifications.unshift(verification);

    return verification;
  },

  update(
    verificationId: string,
    updates: Partial<VerificationCase>
  ): VerificationCase | null {

    const verification =
      verifications.find(
        (v) => v.verificationId === verificationId
      );

    if (!verification) {

      return null;

    }

    Object.assign(
      verification,
      updates
    );

    return verification;
  },

  exists(
    verificationId: string
  ): boolean {

    return verifications.some(
      (v) =>
        v.verificationId === verificationId
    );
  },

  remove(
    verificationId: string
  ): boolean {

    const index =
      verifications.findIndex(
        (v) =>
          v.verificationId === verificationId
      );

    if (index === -1) {

      return false;

    }

    verifications.splice(index, 1);

    return true;
  },

  clear(): void {

    verifications.length = 0;

  },

  count(): number {

    return verifications.length;

  },
};