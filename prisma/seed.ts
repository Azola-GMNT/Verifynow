import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const packages = [
    {
      name: "Starter",
      description: "For occasional verification requirements.",
      credits: 100,
      price: 250,
      currency: "ZAR",
      sortOrder: 1,
    },
    {
      name: "Business",
      description: "For growing teams running regular checks.",
      credits: 500,
      price: 1000,
      currency: "ZAR",
      sortOrder: 2,
    },
    {
      name: "Professional",
      description: "For organisations with higher verification volumes.",
      credits: 1000,
      price: 1800,
      currency: "ZAR",
      sortOrder: 3,
    },
    {
      name: "Enterprise",
      description: "For high-volume verification operations.",
      credits: 5000,
      price: 7500,
      currency: "ZAR",
      sortOrder: 4,
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
      create: item,
    });
  }

  console.log("Credit packages seeded.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });