import { NextResponse } from "next/server";

import { serverAuthService } from "@/services/serverAuth.service";
import {
  creditPurchaseService,
} from "@/services/creditPurchaseService";

interface RouteContext {
  params: Promise<{
    purchaseId: string;
  }>;
}

/**
 * Confirm a successful credit purchase.
 *
 * POST
 * /api/billing/purchases/[purchaseId]/confirm
 *
 * IMPORTANT:
 * This is currently a temporary confirmation
 * endpoint.
 *
 * In production, payment confirmation should
 * ultimately come from a verified payment
 * gateway webhook.
 */
export async function POST(
  request: Request,
  context: RouteContext
) {
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

    const {
      purchaseId,
    } = await context.params;

    if (
      !purchaseId ||
      typeof purchaseId !== "string"
    ) {
      return NextResponse.json(
        {
          error:
            "A valid purchase ID is required.",
        },
        {
          status: 400,
        }
      );
    }

    let body: {
      paymentGateway?: string;
      gatewayReference?: string;
      metadata?: unknown;
    } = {};

    try {
      body =
        await request.json();
    } catch {
      /*
       * Empty request bodies are allowed
       * for the temporary confirmation flow.
       */
    }

    const result =
      await creditPurchaseService.confirmPurchase({
        purchaseId,

        companyId:
          user.companyId,

        paymentGateway:
          body.paymentGateway,

        gatewayReference:
          body.gatewayReference,

        metadata:
          body.metadata,
      });

    return NextResponse.json({
      success: true,

      alreadyConfirmed:
        result.alreadyConfirmed,

      purchase: {
        id:
          result.purchase.id,

        reference:
          result.purchase
            .paymentReference,

        status:
          result.purchase.status,

        credits:
          result.purchase.credits,

        amount:
          Number(
            result.purchase.amount
          ),

        currency:
          result.purchase.currency,

        paidAt:
          result.purchase.paidAt,

        package:
          result.purchase.package
            ? {
                id:
                  result.purchase
                    .package.id,

                name:
                  result.purchase
                    .package.name,
              }
            : null,
      },

      wallet: result.wallet
        ? {
            id:
              result.wallet.id,

            balance:
              result.wallet.balance,
          }
        : null,

      transaction:
        result.transaction
          ? {
              id:
                result.transaction.id,

              amount:
                result.transaction.amount,

              balanceBefore:
                result.transaction
                  .balanceBefore,

              balanceAfter:
                result.transaction
                  .balanceAfter,

              type:
                result.transaction.type,

              reference:
                result.transaction.reference,
            }
          : null,

      metadata:
        result.metadata ?? null,
    });
  } catch (error) {
    console.error(
      "Billing purchase confirmation error:",
      error
    );

    const message =
      error instanceof Error
        ? error.message
        : "Unable to confirm credit purchase.";

    return NextResponse.json(
      {
        error: message,
      },
      {
        status: 500,
      }
    );
  }
}