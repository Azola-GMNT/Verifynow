import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const CREDIT_VALUE_ZAR = 8.5;

async function main() {
  const packages = [
    {
      name: "Starter",
      description:
        "For organisations starting with verification.",
      credits: 100,
      price: 100 * CREDIT_VALUE_ZAR,
      currency: "ZAR",
      sortOrder: 1,
    },
    {
      name: "Growth",
      description:
        "For organisations with regular verification requirements.",
      credits: 500,
      price: 500 * CREDIT_VALUE_ZAR,
      currency: "ZAR",
      sortOrder: 2,
    },
    {
      name: "Professional",
      description:
        "For organisations running verification at scale.",
      credits: 1000,
      price: 1000 * CREDIT_VALUE_ZAR,
      currency: "ZAR",
      sortOrder: 3,
    },
     ];

  for (const item of packages) {
    await prisma.creditPackage.upsert({
      where: {
        name: item.name,
      },

      update: {
        description: item.description,
        credits: item.credits,
        price: item.price,
        currency: item.currency,
        sortOrder: item.sortOrder,
        active: true,
      },

      create: {
        ...item,
        active: true,
      },
    });
  }

  console.log(
    `Credit packages seeded successfully. Credit value: R${CREDIT_VALUE_ZAR.toFixed(2)}`
  );

  for (const item of packages) {
    console.log(
      `${item.name}: ${item.credits} credits = ${item.currency} ${item.price.toFixed(2)}`
    );
  }
}

main()
  .catch((error) => {
    console.error("Database seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });