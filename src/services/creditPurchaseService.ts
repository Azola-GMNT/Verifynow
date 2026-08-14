import { prisma } from "@/lib/prisma";

class CreditPurchaseService {
  /**
   * Create a new pending credit purchase.
   *
   * This creates the purchase record only.
   *
   * IMPORTANT:
   * Credits are NOT added to the company's wallet here.
   * Credits must only be allocated after payment has
   * been successfully confirmed.
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

    /**
     * Generate an internal purchase reference.
     *
     * This is our own reference and is separate from
     * any future payment-provider transaction reference.
     */
    const paymentReference =
      `PUR-${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase()}`;

    /**
     * Create the purchase using a snapshot of the
     * package's current pricing.
     *
     * This ensures that if the package price or credit
     * allocation changes later, an existing purchase
     * retains the original values.
     */
    const purchase =
      await prisma.creditPurchase.create({
        data: {
          companyId: params.companyId,

          userId:
            params.userId ?? null,

          packageId:
            creditPackage.id,

          credits:
            creditPackage.credits,

          amount:
            creditPackage.price,

          currency:
            creditPackage.currency,

          status:
            "PENDING",

          paymentGateway:
            null,

          paymentReference,

          metadata: {
            packageName:
              creditPackage.name,
          },
        },

        include: {
          package: true,
        },
      });

    return purchase;
  }

  /**
   * Get one purchase belonging to a specific company.
   *
   * The companyId restriction is important so a user cannot
   * retrieve another company's purchase by knowing its ID.
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
   * Get all credit purchases belonging to a company.
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
}

export const creditPurchaseService =
  new CreditPurchaseService();