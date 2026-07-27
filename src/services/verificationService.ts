import { verificationStore } from "@/store/verificationStore";
import { VerificationCase } from "@/types/verification";

export function createVerificationCase(
  verification: VerificationCase
): VerificationCase {
  return verificationStore.create(verification);
}

export function updateVerificationCase(
  verificationId: string,
  updates: Partial<VerificationCase>
): VerificationCase | null {
  return verificationStore.update(
    verificationId,
    updates
  );
}

export function deleteVerificationCase(
  verificationId: string
): boolean {
  return verificationStore.remove(verificationId);
}

export function getVerificationCase(
  verificationId: string
): VerificationCase | undefined {
  return verificationStore.getById(
    verificationId
  );
}

export function getAllVerificationCases(): VerificationCase[] {
  return verificationStore.getAll();
}

export function removeVerificationCase(
  verificationId: string
): boolean {
  return verificationStore.remove(
    verificationId
  );
}

export function verificationExists(
  verificationId: string
): boolean {
  return verificationStore.exists(
    verificationId
  );
}

export function clearVerificationCases(): void {
  verificationStore.clear();
}

export function getVerificationCount(): number {
  return verificationStore.count();
}