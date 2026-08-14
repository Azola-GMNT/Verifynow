import { NextResponse } from "next/server";

import { authService } from "@/services/auth.service";
import { creditPurchaseService } from "@/services/creditPurchaseService";

/**
 * Create a new pending credit purchase.
 *
 * POST /api/billing/purchases
 */
export async function POST(request: Request) {
  try {
    const user = await authService.getCurrentUser();

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
          error: "User is not associated with a company.",
        },
        {
          status: 400,
        }
      );
    }

    const body = await request.json();

    const packageId = body?.packageId;

    if (
      typeof packageId !== "string" ||
      packageId.length === 0
    ) {
      return NextResponse.json(
        {
          error: "A valid credit package is required.",
        },
        {
          status: 400,
        }
      );
    }

    const purchase =
      await creditPurchaseService.createPurchase({
        companyId: user.companyId,
        userId: user.id,
        packageId,
      });

    return NextResponse.json(
      {
        purchase: {
          id: purchase.id,
          reference: purchase.paymentReference,
          status: purchase.status,
          credits: purchase.credits,
          amount: Number(purchase.amount),
          currency: purchase.currency,
          package: purchase.package
            ? {
                id: purchase.package.id,
                name: purchase.package.name,
                description:
                  purchase.package.description,
              }
            : null,
          createdAt: purchase.createdAt,
        },
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(
      "Credit purchase creation error:",
      error
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to create credit purchase.",
      },
      {
        status: 500,
      }
    );
  }
}

/**
 * Get the company's credit purchase history.
 *
 * GET /api/billing/purchases
 */
export async function GET() {
  try {
    const user = await authService.getCurrentUser();

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
          error: "User is not associated with a company.",
        },
        {
          status: 400,
        }
      );
    }

    const purchases =
      await creditPurchaseService.getPurchases(
        user.companyId
      );

    return NextResponse.json({
      purchases: purchases.map((purchase) => ({
        id: purchase.id,
        reference: purchase.paymentReference,
        status: purchase.status,
        credits: purchase.credits,
        amount: Number(purchase.amount),
        currency: purchase.currency,
        package: purchase.package
          ? {
              id: purchase.package.id,
              name: purchase.package.name,
              description:
                purchase.package.description,
            }
          : null,
        createdAt: purchase.createdAt,
      })),
    });
  } catch (error) {
    console.error(
      "Billing purchases GET error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to retrieve credit purchases.",
      },
      {
        status: 500,
      }
    );
  }
}