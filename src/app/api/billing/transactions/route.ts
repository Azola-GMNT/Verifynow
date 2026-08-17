import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { serverAuthService } from "@/services/serverAuth.service";

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

    const transactions =
      await prisma.creditTransaction.findMany({
        where: {
          companyId:
            user.companyId,
        },

        orderBy: {
          createdAt: "desc",
        },

        take: 50,
      });

    return NextResponse.json({
      transactions:
        transactions.map(
          (transaction) => ({
            id:
              transaction.id,

            companyId:
              transaction.companyId,

            walletId:
              transaction.walletId,

            type:
              transaction.type,

            amount:
              Number(transaction.amount),

            balanceBefore:
              transaction.balanceBefore,

            balanceAfter:
              transaction.balanceAfter,

            description:
              transaction.description,

            reference:
              transaction.reference,

            verificationId:
              transaction.verificationId,

            verificationCheckId:
              transaction.verificationCheckId,

            createdByUserId:
              transaction.createdByUserId,

            metadata:
              transaction.metadata,

            createdAt:
              transaction.createdAt,
          })
        ),
    });
  } catch (error) {
    console.error(
      "Billing transactions error:",
      error
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to retrieve credit transactions.",
      },
      {
        status: 500,
      }
    );
  }
}