import { prisma } from "@/lib/prisma";

class CreditService {
  /**
   * Get the company's credit wallet.
   *
   * Creates one automatically if the company
   * does not have a wallet yet.
   */
  async getWallet(companyId: string) {
    return prisma.creditWallet.upsert({
      where: {
        companyId,
      },
      create: {
        companyId,
        balance: 0,
      },
      update: {},
    });
  }

  /**
   * Get the company's current credit balance.
   */
  async getBalance(companyId: string): Promise<number> {
    const wallet = await this.getWallet(companyId);

    return wallet.balance;
  }

  /**
   * Check whether the company has enough credits.
   */
  async hasEnoughCredits(
    companyId: string,
    requiredCredits: number
  ): Promise<boolean> {
    if (requiredCredits < 0) {
      throw new Error(
        "Required credits cannot be negative."
      );
    }

    const balance =
      await this.getBalance(companyId);

    return balance >= requiredCredits;
  }

  /**
   * Add credits to a company's wallet.
   *
   * This creates an auditable credit transaction.
   */
  async addCredits(params: {
    companyId: string;
    amount: number;
    type?: string;
    description?: string;
    reference?: string;
    createdByUserId?: string;
    metadata?: unknown;
  }) {
    if (params.amount <= 0) {
      throw new Error(
        "Credit amount must be greater than zero."
      );
    }

    return prisma.$transaction(
      async (tx) => {
        const wallet =
          await tx.creditWallet.upsert({
            where: {
              companyId:
                params.companyId,
            },
            create: {
              companyId:
                params.companyId,
              balance: 0,
            },
            update: {},
          });

        const balanceBefore =
          wallet.balance;

        const balanceAfter =
          balanceBefore + params.amount;

        const updatedWallet =
          await tx.creditWallet.update({
            where: {
              id: wallet.id,
            },
            data: {
              balance: balanceAfter,
            },
          });

        const transaction =
          await tx.creditTransaction.create({
            data: {
              companyId:
                params.companyId,

              walletId:
                wallet.id,

              type:
                params.type ??
                "PURCHASE",

              amount:
                params.amount,

              balanceBefore,

              balanceAfter,

              description:
                params.description ??
                null,

              reference:
                params.reference ??
                null,

              createdByUserId:
                params.createdByUserId ??
                null,

              metadata:
                params.metadata ??
                undefined,
            },
          });

        return {
          wallet: updatedWallet,
          transaction,
        };
      }
    );
  }

  /**
   * Deduct credits from a company's wallet.
   *
   * This operation is atomic:
   * the balance check and deduction happen
   * inside the same database transaction.
   */
  async deductCredits(params: {
    companyId: string;
    amount: number;
    type?: string;
    description?: string;
    reference?: string;
    verificationId?: string;
    verificationCheckId?: string;
    createdByUserId?: string;
    metadata?: unknown;
  }) {
    if (params.amount <= 0) {
      throw new Error(
        "Credit amount must be greater than zero."
      );
    }

    return prisma.$transaction(
      async (tx) => {
        const wallet =
          await tx.creditWallet.upsert({
            where: {
              companyId:
                params.companyId,
            },
            create: {
              companyId:
                params.companyId,
              balance: 0,
            },
            update: {},
          });

        if (
          wallet.balance <
          params.amount
        ) {
          throw new Error(
            "Insufficient credits."
          );
        }

        const balanceBefore =
          wallet.balance;

        const balanceAfter =
          balanceBefore -
          params.amount;

        const updatedWallet =
          await tx.creditWallet.update({
            where: {
              id: wallet.id,
            },
            data: {
              balance: balanceAfter,
            },
          });

        const transaction =
          await tx.creditTransaction.create({
            data: {
              companyId:
                params.companyId,

              walletId:
                wallet.id,

              type:
                params.type ??
                "USAGE",

              amount:
                -params.amount,

              balanceBefore,

              balanceAfter,

              description:
                params.description ??
                null,

              reference:
                params.reference ??
                null,

              verificationId:
                params.verificationId ??
                null,

              verificationCheckId:
                params.verificationCheckId ??
                null,

              createdByUserId:
                params.createdByUserId ??
                null,

              metadata:
                params.metadata ??
                undefined,
            },
          });

        return {
          wallet: updatedWallet,
          transaction,
        };
      }
    );
  }
}

export const creditService =
  new CreditService();
  