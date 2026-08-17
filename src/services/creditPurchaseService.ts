import { prisma } from "@/lib/prisma";

const CREDIT_VALUE_ZAR = 8.5;
const MIN_CUSTOM_CREDITS = 1;
const MAX_CUSTOM_CREDITS = 1_000_000;

class CreditPurchaseService {
  /**
   * Generate an internal purchase reference.
   */
  private generateReference() {
    return `PUR-${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase()}`;
  }

  /**
   * Create a pending package-based purchase.
   *
   * Credits are NOT allocated here.
   * They are allocated only after confirmation.
   */
  async createPurchase(params: {
    companyId: string;
    userId?: string;
    packageId: string;
  }) {
    const creditPackage =
      await prisma.creditPackage.findFirst({
        where: {
          id: params.packageId,
          active: true,
        },
      });

    if (!creditPackage) {
      throw new Error(
        "Credit package not found or is no longer available."
      );
    }

    const reference =
      this.generateReference();

    return prisma.creditPurchase.create({
      data: {
        companyId: params.companyId,
        userId: params.userId ?? null,

        packageId:
          creditPackage.id,

        credits:
          creditPackage.credits,

        amount:
          creditPackage.price,

        currency:
          creditPackage.currency,

        status: "PENDING",

        paymentGateway: null,

        paymentReference:
          reference,

        metadata: {
          purchaseType: "PACKAGE",
          packageName:
            creditPackage.name,
          creditValue:
            CREDIT_VALUE_ZAR,
        },
      },

      include: {
        package: true,
      },
    });
  }

  /**
   * Create a custom credit purchase.
   *
   * Example:
   *
   * 1 credit  = R8.50
   * 10 credits = R85
   * 50 credits = R425
   * 75 credits = R637.50
   *
   * Custom purchases intentionally have
   * packageId = null.
   */
  async createCustomPurchase(params: {
    companyId: string;
    userId?: string;
    credits: number;
  }) {
    const credits =
      Math.floor(params.credits);

    if (
      !Number.isFinite(credits) ||
      credits < MIN_CUSTOM_CREDITS
    ) {
      throw new Error(
        `Custom purchases require at least ${MIN_CUSTOM_CREDITS} credit.`
      );
    }

    if (
      credits > MAX_CUSTOM_CREDITS
    ) {
      throw new Error(
        "Custom credit purchase exceeds the maximum allowed amount."
      );
    }

    const amount =
      Math.round(
        credits *
          CREDIT_VALUE_ZAR *
          100
      ) / 100;

    const reference =
      this.generateReference();

    return prisma.creditPurchase.create({
      data: {
        companyId:
          params.companyId,

        userId:
          params.userId ?? null,

        packageId: null,

        credits,

        amount,

        currency: "ZAR",

        status: "PENDING",

        paymentGateway: null,

        paymentReference:
          reference,

        metadata: {
          purchaseType: "CUSTOM",
          creditValue:
            CREDIT_VALUE_ZAR,
          credits,
          amount,
        },
      },

      include: {
        package: true,
      },
    });
  }

  /**
   * Retrieve one purchase belonging to
   * a specific company.
   */
  async getPurchase(
    purchaseId: string,
    companyId: string
  ) {
    return prisma.creditPurchase.findFirst({
      where: {
        id: purchaseId,
        companyId,
      },

      include: {
        package: true,
      },
    });
  }

  /**
   * Retrieve all purchases belonging
   * to a company.
   */
  async getPurchases(
    companyId: string
  ) {
    return prisma.creditPurchase.findMany({
      where: {
        companyId,
      },

      include: {
        package: true,
      },

      orderBy: {
        createdAt: "desc",
      },
    });
  }

  /**
   * Confirm a purchase and allocate
   * the credits to the company wallet.
   *
   * This operation is transactional and
   * idempotent.
   */
  async confirmPurchase(params: {
    purchaseId: string;
    companyId: string;
    paymentGateway?: string;
    gatewayReference?: string;
    metadata?: unknown;
  }) {
    return prisma.$transaction(
      async (tx) => {
        const purchase =
          await tx.creditPurchase.findFirst({
            where: {
              id: params.purchaseId,
              companyId:
                params.companyId,
            },

            include: {
              package: true,
            },
          });

        if (!purchase) {
          throw new Error(
            "Credit purchase not found."
          );
        }

        /*
         * If already completed, DO NOT
         * allocate the credits again.
         */
        if (
          purchase.status ===
          "COMPLETED"
        ) {
          const wallet =
            await tx.creditWallet.findUnique({
              where: {
                companyId:
                  params.companyId,
              },
            });

          const transaction =
            await tx.creditTransaction.findFirst({
              where: {
                companyId:
                  params.companyId,

                reference:
                  purchase.paymentReference,
              },

              orderBy: {
                createdAt: "desc",
              },
            });

          return {
            alreadyConfirmed: true,

            purchase,

            wallet,

            transaction,

            metadata:
              purchase.metadata,
          };
        }

        /*
         * Failed/cancelled purchases cannot
         * be confirmed.
         */
        if (
          purchase.status ===
            "FAILED" ||
          purchase.status ===
            "CANCELLED"
        ) {
          throw new Error(
            `Purchase cannot be confirmed because its status is ${purchase.status}.`
          );
        }

        /*
         * Get the company wallet.
         */
        let wallet =
          await tx.creditWallet.findUnique({
            where: {
              companyId:
                params.companyId,
            },
          });

        /*
         * Create wallet if it doesn't
         * exist yet.
         */
        if (!wallet) {
          wallet =
            await tx.creditWallet.create({
              data: {
                companyId:
                  params.companyId,

                balance: 0,
              },
            });
        }

        const balanceBefore =
          wallet.balance;

        const balanceAfter =
          balanceBefore +
          purchase.credits;

        /*
         * Update wallet.
         */
        const updatedWallet =
          await tx.creditWallet.update({
            where: {
              id: wallet.id,
            },

            data: {
              balance:
                balanceAfter,
            },
          });

        /*
         * Combine existing purchase
         * metadata with confirmation
         * metadata.
         */
        const existingMetadata =
          purchase.metadata;

        const purchaseMetadata =
          existingMetadata &&
          typeof existingMetadata ===
            "object" &&
          !Array.isArray(
            existingMetadata
          )
            ? existingMetadata
            : {};

        const confirmationMetadata =
          params.metadata &&
          typeof params.metadata ===
            "object" &&
          !Array.isArray(
            params.metadata
          )
            ? params.metadata
            : {};

        const mergedMetadata = {
          ...purchaseMetadata,
          ...confirmationMetadata,
          purchaseId:
            purchase.id,
          purchaseType:
            purchase.package
              ? "PACKAGE"
              : "CUSTOM",
          creditValue:
            CREDIT_VALUE_ZAR,
        };

        /*
         * Create the credit transaction.
         */
        const transaction =
          await tx.creditTransaction.create({
            data: {
              companyId:
                params.companyId,

              walletId:
                updatedWallet.id,

              type:
                "PURCHASE",

              amount:
                purchase.credits,

              balanceBefore,

              balanceAfter,

              description:
                purchase.package
                  ? `Purchase of ${purchase.credits} credits - ${purchase.package.name}`
                  : `Custom purchase of ${purchase.credits} credits`,

              reference:
                purchase.paymentReference ??
                purchase.id,

              verificationId:
                null,

              verificationCheckId:
                null,

              createdByUserId:
                purchase.userId,

              metadata:
                mergedMetadata,
            },
          });

        /*
         * Mark the purchase as completed.
         */
        const completedPurchase =
          await tx.creditPurchase.update({
            where: {
              id: purchase.id,
            },

            data: {
              status:
                "COMPLETED",

              paymentGateway:
                params.paymentGateway ??
                purchase.paymentGateway,

              gatewayReference:
                params.gatewayReference ??
                purchase.gatewayReference,

              paidAt:
                new Date(),

              metadata:
                mergedMetadata,
            },

            include: {
              package: true,
            },
          });

        return {
          alreadyConfirmed:
            false,

          purchase:
            completedPurchase,

          wallet:
            updatedWallet,

          transaction,

          metadata:
            mergedMetadata,
        };
      }
    );
  }
}

export const creditPurchaseService =
  new CreditPurchaseService();