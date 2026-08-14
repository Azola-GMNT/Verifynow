import { prisma } from "@/lib/prisma";

class PricingService {
  async getActivePricing() {
    return prisma.verificationPricing.findMany({
      where: {
        active: true,
      },
      orderBy: [
        {
          category: "asc",
        },
        {
          checkName: "asc",
        },
      ],
    });
  }

  async getCreditPackages() {
    return prisma.creditPackage.findMany({
      where: {
        active: true,
      },
      orderBy: {
        sortOrder: "asc",
      },
    });
  }
}

export const pricingService =
  new PricingService();