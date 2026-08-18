import { NextResponse } from "next/server";

import { serverAuthService } from "@/services/serverAuth.service";
import { prisma } from "@/lib/prisma";
import {
  generateOzowHash,
  getOzowConfig,
} from "@/lib/ozow";

interface RouteContext {
  params: Promise<{
    purchaseId: string;
  }>;
}

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

    if (!purchaseId) {
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

    const purchase =
      await prisma.creditPurchase.findFirst({
        where: {
          id: purchaseId,
          companyId:
            user.companyId,
        },
        include: {
          package: true,
        },
      });

    if (!purchase) {
      return NextResponse.json(
        {
          error:
            "Credit purchase not found.",
        },
        {
          status: 404,
        }
      );
    }

    if (
      purchase.status !==
      "PENDING"
    ) {
      return NextResponse.json(
        {
          error:
            `This purchase cannot be paid because its status is ${purchase.status}.`,
        },
        {
          status: 400,
        }
      );
    }

    if (
      !purchase.paymentReference
    ) {
      return NextResponse.json(
        {
          error:
            "Purchase payment reference is missing.",
        },
        {
          status: 400,
        }
      );
    }

    const config =
      getOzowConfig();

    const amount =
      Number(purchase.amount).toFixed(
        2
      );

    const transactionReference =
      purchase.paymentReference;

    const countryCode = "ZA";
    const currencyCode = "ZAR";

    const cancelUrl =
      `${config.appUrl}/billing?payment=cancelled&purchaseId=${encodeURIComponent(
        purchase.id
      )}`;

    const errorUrl =
      `${config.appUrl}/billing?payment=error&purchaseId=${encodeURIComponent(
        purchase.id
      )}`;

    const successUrl =
      `${config.appUrl}/billing?payment=success&purchaseId=${encodeURIComponent(
        purchase.id
      )}`;

    const notifyUrl =
      `${config.appUrl}/api/payments/ozow/notify`;

    /*
     * Ozow's request hash must be generated
     * from the request fields in the documented
     * order, followed by the private key.
     */
    const hashCheck =
      generateOzowHash([
        config.siteCode,
        countryCode,
        currencyCode,
        amount,
        transactionReference,
        "",
        "",
        "",
        "",
        "",
        user.email,
        cancelUrl,
        errorUrl,
        successUrl,
        notifyUrl,
        true,
      ]);

    /*
     * Store the gateway against the purchase
     * before sending the customer to Ozow.
     */
    await prisma.creditPurchase.update({
      where: {
        id: purchase.id,
      },
      data: {
        paymentGateway:
          "OZOW",
        metadata: {
          ...(purchase.metadata &&
          typeof purchase.metadata ===
            "object" &&
          !Array.isArray(
            purchase.metadata
          )
            ? purchase.metadata
            : {}),
          ozow: {
            siteCode:
              config.siteCode,
            transactionReference,
            initiatedAt:
              new Date().toISOString(),
          },
        },
      },
    });

    /*
     * Return the values required by the
     * frontend to submit the customer to Ozow.
     */
    return NextResponse.json({
      success: true,

      paymentUrl:
        config.paymentUrl,

      fields: {
        SiteCode:
          config.siteCode,

        CountryCode:
          countryCode,

        CurrencyCode:
          currencyCode,

        Amount:
          amount,

        TransactionReference:
          transactionReference,

        BankReference:
          `VerifyNow ${purchase.credits} Credits`,

        Customer:
          user.email,

        CancelUrl:
          cancelUrl,

        ErrorUrl:
          errorUrl,

        SuccessUrl:
          successUrl,

        NotifyUrl:
          notifyUrl,

        IsTest: true,

        HashCheck:
          hashCheck,
      },
    });
  } catch (error) {
    console.error(
      "Ozow payment initiation error:",
      error
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to initiate Ozow payment.",
      },
      {
        status: 500,
      }
    );
  }
}