import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { creditService } from "@/services/creditService";

export async function GET() {
  try {
    /*
     * TODO:
     * Replace this temporary company lookup with the
     * authenticated user's company once the billing
     * authentication context is wired in.
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

    const wallet =
      await creditService.getWallet(
        company.id
      );

    return NextResponse.json({
      balance: wallet.balance,
      companyId: company.id,
    });
  } catch (error) {
    console.error(
      "Billing balance error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to retrieve credit balance.",
      },
      {
        status: 500,
      }
    );
  }
}