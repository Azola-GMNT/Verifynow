import { NextResponse } from "next/server";

import { serverAuthService } from "@/services/serverAuth.service";
import {
  creditPurchaseService,
} from "@/services/creditPurchaseService";

export async function POST(request: Request) {
  try {
    const user =
      await serverAuthService.getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    if (!user.companyId) {
      return NextResponse.json(
        {
          error:
            "User is not associated with a company.",
        },
        { status: 400 }
      );
    }

    const body = await request.json();

    const packageId =
      typeof body?.packageId === "string"
        ? body.packageId
        : null;

    const customCredits =
      Number.isInteger(body?.credits)
        ? body.credits
        : null;

    if (!packageId && customCredits === null) {
      return NextResponse.json(
        {
          error:
            "A credit package or custom credit amount is required.",
        },
        { status: 400 }
      );
    }

    if (packageId && customCredits !== null) {
      return NextResponse.json(
        {
          error:
            "Choose either a credit package or custom credits, not both.",
        },
        { status: 400 }
      );
    }

    const purchase =
      packageId
        ? await creditPurchaseService.createPurchase({
            companyId: user.companyId,
            userId: user.id,
            packageId,
          })
        : await creditPurchaseService.createCustomPurchase({
            companyId: user.companyId,
            userId: user.id,
            credits: customCredits!,
          });

    return NextResponse.json(
      {
        purchase: {
          id: purchase.id,

          reference:
            purchase.paymentReference,

          status:
            purchase.status,

          credits:
            purchase.credits,

          amount:
            Number(purchase.amount),

          currency:
            purchase.currency,

          package:
            purchase.package
              ? {
                  id: purchase.package.id,
                  name: purchase.package.name,
                  description:
                    purchase.package.description,
                }
              : null,

          createdAt:
            purchase.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "Billing purchase POST error:",
      error
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to create credit purchase.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const user =
      await serverAuthService.getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    if (!user.companyId) {
      return NextResponse.json(
        {
          error:
            "User is not associated with a company.",
        },
        { status: 400 }
      );
    }

    const purchases =
      await creditPurchaseService.getPurchases(
        user.companyId
      );

    return NextResponse.json({
      purchases: purchases.map(
        (purchase) => ({
          id: purchase.id,

          reference:
            purchase.paymentReference,

          status:
            purchase.status,

          credits:
            purchase.credits,

          amount:
            Number(purchase.amount),

          currency:
            purchase.currency,

          package:
            purchase.package
              ? {
                  id: purchase.package.id,
                  name: purchase.package.name,
                }
              : null,

          createdAt:
            purchase.createdAt,
        })
      ),
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
      { status: 500 }
    );
  }
}