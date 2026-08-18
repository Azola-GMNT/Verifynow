import crypto from "crypto";

const OZOW_SITE_CODE = process.env.OZOW_SITE_CODE;
const OZOW_PRIVATE_KEY = process.env.OZOW_PRIVATE_KEY;
const OZOW_API_KEY = process.env.OZOW_API_KEY;

const OZOW_BASE_URL =
  process.env.OZOW_BASE_URL ||
  "https://api.ozow.com";

const OZOW_PAYMENT_URL =
  process.env.OZOW_PAYMENT_URL ||
  "https://pay.ozow.com";

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ||
  "http://localhost:3000";

export function getOzowConfig() {
  if (!OZOW_SITE_CODE) {
    throw new Error("OZOW_SITE_CODE is not configured.");
  }

  if (!OZOW_PRIVATE_KEY) {
    throw new Error("OZOW_PRIVATE_KEY is not configured.");
  }

  if (!OZOW_API_KEY) {
    throw new Error("OZOW_API_KEY is not configured.");
  }

  return {
    siteCode: OZOW_SITE_CODE,
    privateKey: OZOW_PRIVATE_KEY,
    apiKey: OZOW_API_KEY,
    baseUrl: OZOW_BASE_URL,
    paymentUrl: OZOW_PAYMENT_URL,
    appUrl: APP_URL,
  };
}

/**
 * Generate the SHA-512 hash required by Ozow.
 *
 * Ozow requires the relevant request fields to be
 * concatenated in the documented order, followed
 * by the merchant private key, converted to lowercase,
 * and hashed with SHA-512.
 */
export function generateOzowHash(
  values: Array<string | number | boolean | null | undefined>
): string {
  const config = getOzowConfig();

  const concatenated =
    values
      .map((value) => {
        if (
          value === null ||
          value === undefined
        ) {
          return "";
        }

        return String(value);
      })
      .join("") +
    config.privateKey;

  return crypto
    .createHash("sha512")
    .update(concatenated.toLowerCase(), "utf8")
    .digest("hex");
}

/**
 * Constant-time comparison of two hashes.
 */
export function safeCompare(
  a: string,
  b: string
): boolean {
  const aBuffer =
    Buffer.from(a.toLowerCase(), "utf8");

  const bBuffer =
    Buffer.from(b.toLowerCase(), "utf8");

  if (
    aBuffer.length !==
    bBuffer.length
  ) {
    return false;
  }

  return crypto.timingSafeEqual(
    aBuffer,
    bBuffer
  );
}