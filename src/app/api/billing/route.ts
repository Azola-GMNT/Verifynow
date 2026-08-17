import { NextResponse } from "next/server";

import { serverAuthService } from "@/services/serverAuth.service";
import { prisma } from "@/lib/prisma";
import { creditService } from "@/services/creditService";

export async function GET() {
  try {
    const user =
      await serverAuthService.getCurrentUser();

    if (!user) {
      return NextResponse.json(
        {
          error: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    if (!user.companyId) {
      return NextResponse.json(
        {
          error:
            "User is not associated with a company.",
        },
        {
          status: 400,
        }
      );
    }

    const companyId = user.companyId;

    const wallet =
      await creditService.getWallet(companyId);

    const [
      transactions,
      pricing,
    ] = await Promise.all([
      prisma.creditTransaction.findMany({
        where: {
          companyId,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 50,
      }),

      prisma.verificationPricing.findMany({
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
      }),
    ]);

    const totalPurchased =
      transactions
        .filter(
          (transaction) =>
            transaction.amount > 0
        )
        .reduce(
          (total, transaction) =>
            total + transaction.amount,
          0
        );

    const totalUsed =
      Math.abs(
        transactions
          .filter(
            (transaction) =>
              transaction.amount < 0
          )
          .reduce(
            (total, transaction) =>
              total + transaction.amount,
            0
          )
      );

    return NextResponse.json({
      wallet: {
        id: wallet.id,
        balance: wallet.balance,
      },

      summary: {
        totalPurchased,
        totalUsed,
        transactionCount:
          transactions.length,
      },

      transactions,

      pricing: pricing.map(
        (item) => ({
          id: item.id,
          checkKey: item.checkKey,
          checkName: item.checkName,
          category: item.category,
          creditCost: item.creditCost,
          active: item.active,
          description:
            item.description,
        })
      ),
    });
  } catch (error) {
    console.error(
      "================================="
    );
    console.error(
      "BILLING API ERROR"
    );
    console.error(
      "================================="
    );
    console.error(error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to load billing information.",
      },
      {
        status: 500,
      }
    );
  }
}