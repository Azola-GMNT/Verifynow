import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { authService } from "@/services/auth.service";
import { creditService } from "@/services/creditService";

export async function GET() {
  try {
    const user = await authService.getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    if (!user.companyId) {
      return NextResponse.json(
        { error: "User is not associated with a company." },
        { status: 400 }
      );
    }

    const companyId = user.companyId;

    const wallet =
      await creditService.getWallet(companyId);

    const [transactions, pricing] =
      await Promise.all([
        prisma.creditTransaction.findMany({
          where: {
            companyId,
          },
          orderBy: {
            createdAt: "desc",
          },
          take: 20,
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
        transactionCount: transactions.length,
      },

      transactions,

      pricing,
    });
  } catch (error) {
    console.error(
      "Billing API error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to load billing information.",
      },
      {
        status: 500,
      }
    );
  }
}