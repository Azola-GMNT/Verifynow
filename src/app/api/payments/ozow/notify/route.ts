import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import {
  generateOzowHash,
  getOzowConfig,
  safeCompare,
} from "@/lib/ozow";

interface OzowNotification {
  SiteCode?: string;
  TransactionId?: string;
  TransactionReference?: string;
  Amount?: string;
  Status?: string;

  Optional1?: string;
  Optional2?: string;
  Optional3?: string;
  Optional4?: string;
  Optional5?: string;

  CurrencyCode?: string;
  IsTest?: string | boolean;
  StatusMessage?: string;

  Hash?: string;
}

function getValue(
  value: string | null
): string {
  return value ?? "";
}

function parseBoolean(
  value: string | boolean | undefined
): boolean {
  if (typeof value === "boolean") {
    return value;
  }

  return String(value ?? "")
    .toLowerCase()
    === "true";
}

/**
 * Ozow sends notification responses as
 * application/x-www-form-urlencoded.
 *
 * We also accept JSON to make local testing
 * easier.
 */
async function parseNotification(
  request: Request
): Promise<OzowNotification> {
  const contentType =
    request.headers.get(
      "content-type"
    ) ?? "";

  if (
    contentType
      .toLowerCase()
      .includes(
        "application/json"
      )
  ) {
    return (await request.json()) as OzowNotification;
  }

  const form =
    await request.formData();

  return {
    SiteCode:
      String(
        form.get("SiteCode") ?? ""
      ),

    TransactionId:
      String(
        form.get("TransactionId") ?? ""
      ),

    TransactionReference:
      String(
        form.get(
          "TransactionReference"
        ) ?? ""
      ),

    Amount:
      String(
        form.get("Amount") ?? ""
      ),

    Status:
      String(
        form.get("Status") ?? ""
      ),

    Optional1:
      String(
        form.get("Optional1") ?? ""
      ),

    Optional2:
      String(
        form.get("Optional2") ?? ""
      ),

    Optional3:
      String(
        form.get("Optional3") ?? ""
      ),

    Optional4:
      String(
        form.get("Optional4") ?? ""
      ),

    Optional5:
      String(
        form.get("Optional5") ?? ""
      ),

    CurrencyCode:
      String(
        form.get("CurrencyCode") ?? ""
      ),

    IsTest:
      String(
        form.get("IsTest") ?? ""
      ),

    StatusMessage:
      String(
        form.get("StatusMessage") ?? ""
      ),

    Hash:
      String(
        form.get("Hash") ?? ""
      ),
  };
}

/**
 * Verify the Ozow notification response hash.
 *
 * Ozow response hash order:
 *
 * SiteCode
 * TransactionId
 * TransactionReference
 * Amount
 * Status
 * Optional1
 * Optional2
 * Optional3
 * Optional4
 * Optional5
 * CurrencyCode
 * IsTest
 * StatusMessage
 * PrivateKey
 */
function verifyNotificationHash(
  notification: OzowNotification
): boolean {
  if (!notification.Hash) {
    return false;
  }

  const generatedHash =
    generateOzowHash([
      getValue(
        notification.SiteCode ?? null
      ),

      getValue(
        notification.TransactionId ??
          null
      ),

      getValue(
        notification.TransactionReference ??
          null
      ),

      getValue(
        notification.Amount ?? null
      ),

      getValue(
        notification.Status ?? null
      ),

      getValue(
        notification.Optional1 ?? null
      ),

      getValue(
        notification.Optional2 ?? null
      ),

      getValue(
        notification.Optional3 ?? null
      ),

      getValue(
        notification.Optional4 ?? null
      ),

      getValue(
        notification.Optional5 ?? null
      ),

      getValue(
        notification.CurrencyCode ??
          null
      ),

      parseBoolean(
        notification.IsTest
      ),

      getValue(
        notification.StatusMessage ??
          null
      ),
    ]);

  return safeCompare(
    generatedHash,
    notification.Hash
  );
}

/**
 * Verify the transaction directly with
 * Ozow's API.
 *
 * This provides an additional protection
 * against spoofed notification requests.
 */
async function verifyOzowTransaction(
  notification: OzowNotification
) {
  const config =
    getOzowConfig();

  if (
    !notification.TransactionId
  ) {
    throw new Error(
      "Ozow TransactionId is missing."
    );
  }

  const url =
    new URL(
      "/GetTransaction",
      config.baseUrl
    );

  url.searchParams.set(
    "siteCode",
    config.siteCode
  );

  url.searchParams.set(
    "transactionId",
    notification.TransactionId
  );

  const response =
    await fetch(url.toString(), {
      method: "GET",

      headers: {
        ApiKey:
          config.apiKey,

        Accept:
          "application/json",
      },

      cache: "no-store",
    });

  if (!response.ok) {
    const text =
      await response.text();

    throw new Error(
      `Ozow transaction verification failed with HTTP ${response.status}: ${text}`
    );
  }

  const data =
    await response.json();

  /*
   * Ozow returns a transaction object
   * from this endpoint. Be tolerant of
   * an array response as well.
   */
  const transaction =
    Array.isArray(data)
      ? data[0]
      : data;

  if (!transaction) {
    throw new Error(
      "Ozow transaction verification returned no transaction."
    );
  }

  return transaction;
}

export async function POST(
  request: Request
) {
  try {
    const notification =
      await parseNotification(
        request
      );

    console.log(
      "Ozow notification received:",
      {
        SiteCode:
          notification.SiteCode,

        TransactionId:
          notification.TransactionId,

        TransactionReference:
          notification.TransactionReference,

        Amount:
          notification.Amount,

        Status:
          notification.Status,

        CurrencyCode:
          notification.CurrencyCode,

        IsTest:
          notification.IsTest,
      }
    );

    const config =
      getOzowConfig();

    /*
     * ------------------------------------------------
     * 1. Validate required notification fields
     * ------------------------------------------------
     */

    if (
      !notification.SiteCode ||
      !notification.TransactionId ||
      !notification.TransactionReference ||
      !notification.Amount ||
      !notification.Status ||
      !notification.CurrencyCode ||
      !notification.Hash
    ) {
      return NextResponse.json(
        {
          error:
            "Invalid Ozow notification.",
        },
        {
          status: 400,
        }
      );
    }

    /*
     * ------------------------------------------------
     * 2. Verify SiteCode
     * ------------------------------------------------
     */

    if (
      notification.SiteCode !==
      config.siteCode
    ) {
      console.error(
        "Ozow notification SiteCode mismatch."
      );

      return NextResponse.json(
        {
          error:
            "Invalid SiteCode.",
        },
        {
          status: 400,
        }
      );
    }

    /*
     * ------------------------------------------------
     * 3. Verify notification hash
     * ------------------------------------------------
     */

    if (
      !verifyNotificationHash(
        notification
      )
    ) {
      console.error(
        "Ozow notification hash verification failed."
      );

      return NextResponse.json(
        {
          error:
            "Invalid Ozow notification hash.",
        },
        {
          status: 400,
        }
      );
    }

    /*
     * ------------------------------------------------
     * 4. Find the VerifyNow purchase
     * ------------------------------------------------
     */

    const purchase =
      await prisma.creditPurchase.findFirst({
        where: {
          paymentReference:
            notification.TransactionReference,
        },

        include: {
          package: true,
        },
      });

    if (!purchase) {
      console.error(
        "Ozow notification purchase not found:",
        notification.TransactionReference
      );

      return NextResponse.json(
        {
          error:
            "Purchase not found.",
        },
        {
          status: 404,
        }
      );
    }

    /*
     * ------------------------------------------------
     * 5. Verify purchase amount
     * ------------------------------------------------
     */

    const expectedAmount =
      Number(
        purchase.amount
      ).toFixed(2);

    const receivedAmount =
      Number(
        notification.Amount
      ).toFixed(2);

    if (
      expectedAmount !==
      receivedAmount
    ) {
      console.error(
        "Ozow amount mismatch:",
        {
          purchaseId:
            purchase.id,

          expectedAmount,

          receivedAmount,
        }
      );

      return NextResponse.json(
        {
          error:
            "Payment amount does not match purchase amount.",
        },
        {
          status: 400,
        }
      );
    }

    /*
     * ------------------------------------------------
     * 6. Verify currency
     * ------------------------------------------------
     */

    if (
      purchase.currency !==
      notification.CurrencyCode
    ) {
      console.error(
        "Ozow currency mismatch:",
        {
          purchaseCurrency:
            purchase.currency,

          notificationCurrency:
            notification.CurrencyCode,
        }
      );

      return NextResponse.json(
        {
          error:
            "Payment currency does not match purchase currency.",
        },
        {
          status: 400,
        }
      );
    }

    /*
     * ------------------------------------------------
     * 7. If notification says Complete,
     *    independently verify with Ozow API.
     * ------------------------------------------------
     */

    let verifiedTransaction:
      | Record<string, unknown>
      | null = null;

    if (
      notification.Status ===
      "Complete"
    ) {
      verifiedTransaction =
        await verifyOzowTransaction(
          notification
        );

        if (!verifiedTransaction) {
  console.error(
    "Ozow verification returned no transaction."
  );

  return NextResponse.json(
    {
      error:
        "Unable to verify the Ozow transaction.",
    },
    {
      status: 502,
    }
  );
}

      const verifiedReference =
        String(
          verifiedTransaction
            .TransactionReference ??
            ""
        );

      const verifiedAmount =
        Number(
          verifiedTransaction
            .Amount
        ).toFixed(2);

      const verifiedCurrency =
        String(
          verifiedTransaction
            .CurrencyCode ??
            ""
        );

      const verifiedStatus =
        String(
          verifiedTransaction
            .Status ??
            ""
        );

      if (
        verifiedReference !==
        purchase.paymentReference
      ) {
        throw new Error(
          "Ozow API transaction reference does not match purchase."
        );
      }

      if (
        verifiedAmount !==
        expectedAmount
      ) {
        throw new Error(
          "Ozow API transaction amount does not match purchase."
        );
      }

      if (
        verifiedCurrency !==
        purchase.currency
      ) {
        throw new Error(
          "Ozow API transaction currency does not match purchase."
        );
      }

      if (
        verifiedStatus !==
        "Complete"
      ) {
        throw new Error(
          `Ozow API reports transaction status as ${verifiedStatus}.`
        );
      }
    }

    /*
     * ------------------------------------------------
     * 8. Handle unsuccessful payments
     * ------------------------------------------------
     */

    if (
      notification.Status ===
      "Cancelled" ||
      notification.Status ===
      "Error"
    ) {
      const newStatus =
        notification.Status ===
        "Cancelled"
          ? "CANCELLED"
          : "FAILED";

      await prisma.creditPurchase.update({
        where: {
          id: purchase.id,
        },

        data: {
          status: newStatus,

          paymentGateway:
            "OZOW",

          gatewayReference:
            notification.TransactionId,

          metadata: {
            ...(purchase.metadata &&
            typeof purchase.metadata ===
              "object" &&
            !Array.isArray(
              purchase.metadata
            )
              ? purchase.metadata
              : {}),

            ozowNotification: {
              receivedAt:
                new Date().toISOString(),

              transactionId:
                notification.TransactionId,

              status:
                notification.Status,

              statusMessage:
                notification.StatusMessage ??
                null,
            },
          },
        },
      });

      return NextResponse.json({
        success: true,

        status: newStatus,
      });
    }

    /*
     * ------------------------------------------------
     * 9. Only Complete payments allocate credits
     * ------------------------------------------------
     */

    if (
      notification.Status !==
      "Complete"
    ) {
      console.log(
        `Ozow notification received with unhandled status: ${notification.Status}`
      );

      return NextResponse.json({
        success: true,

        status:
          notification.Status,
      });
    }

    /*
     * ------------------------------------------------
     * 10. Allocate credits
     * ------------------------------------------------
     */

    const result =
      await (
        await import(
          "@/services/creditPurchaseService"
        )
      ).creditPurchaseService.confirmPurchase(
        {
          purchaseId:
            purchase.id,

          companyId:
            purchase.companyId,

          paymentGateway:
            "OZOW",

          gatewayReference:
            notification.TransactionId,

          metadata: {
            ozow: {
              transactionId:
                notification.TransactionId,

              transactionReference:
                notification.TransactionReference,

              amount:
                notification.Amount,

              status:
                notification.Status,

              currency:
                notification.CurrencyCode,

              isTest:
                parseBoolean(
                  notification.IsTest
                ),

              statusMessage:
                notification.StatusMessage ??
                null,

              verifiedWithApi:
                true,

              notifiedAt:
                new Date().toISOString(),
            },

            ozowTransaction:
              verifiedTransaction,
          },
        }
      );

    console.log(
      "Ozow purchase confirmed:",
      {
        purchaseId:
          purchase.id,

        transactionId:
          notification.TransactionId,

        credits:
          purchase.credits,

        alreadyConfirmed:
          result.alreadyConfirmed,
      }
    );

    /*
     * Ozow only needs a successful HTTP
     * response after we have processed
     * the notification.
     */
    return NextResponse.json({
      success: true,

      purchaseId:
        purchase.id,

      status:
        "COMPLETED",

      alreadyConfirmed:
        result.alreadyConfirmed,
    });
  } catch (error) {
    console.error(
      "Ozow notification processing error:",
      error
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to process Ozow notification.",
      },
      {
        status: 500,
      }
    );
  }
}