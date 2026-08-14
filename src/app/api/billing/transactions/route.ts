import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    /*
     * TODO:
     * Replace temporary company lookup with the
     * authenticated user's company.
     */
    const company = await prisma.company.findFirst({
      orderBy: {
        createdAt: "asc",
      },
    });

    if (!company) {
      return NextResponse.json(
        {
          error: "Company not found.",
        },
        {
          status: 404,
        }
      );
    }

    const transactions =
      await prisma.creditTransaction.findMany({
        where: {
          companyId: company.id,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 50,
      });

    return NextResponse.json({
      transactions,
    });
  } catch (error) {
    console.error(
      "Billing transactions error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to retrieve credit transactions.",
      },
      {
        status: 500,
      }
    );
  }
}