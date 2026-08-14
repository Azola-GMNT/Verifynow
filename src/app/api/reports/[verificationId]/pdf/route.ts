export const runtime = "nodejs";

import { NextResponse } from "next/server";
import {
  pdf,
  type DocumentProps,
} from "@react-pdf/renderer";

import React from "react";

import { verificationService } from "@/services/verificationService";
import { buildVerificationReport } from "@/services/reports/reportBuilder";
import VerificationReportPdf from "@/components/reports/VerificationReportPdf";

export async function GET(
  request: Request,
  context: {
    params: Promise<{
      verificationId: string;
    }>;
  }
) {
  try {
    const { verificationId } = await context.params;

    const verification =
  await verificationService.getVerificationCase(
    verificationId
  );

    if (!verification) {
      return NextResponse.json(
        {
          error: "Verification not found",
        },
        {
          status: 404,
        }
      );
    }

    const report =
      buildVerificationReport(
        verification
      );

    const document =
  React.createElement(
    VerificationReportPdf,
    {
      report,
    }
  ) as unknown as React.ReactElement<DocumentProps>;

    const pdfStream =
      await pdf(document).toBuffer();

    const chunks: Uint8Array[] = [];

    for await (
      const chunk of pdfStream as unknown as AsyncIterable<
        Uint8Array | Buffer
      >
    ) {
      chunks.push(
        chunk instanceof Uint8Array
          ? chunk
          : new Uint8Array(chunk)
      );
    }

    const totalLength = chunks.reduce(
      (total, chunk) =>
        total + chunk.length,
      0
    );

    const pdfBytes =
      new Uint8Array(totalLength);

    let offset = 0;

    for (const chunk of chunks) {
      pdfBytes.set(chunk, offset);
      offset += chunk.length;
    }

    return new Response(
      pdfBytes,
      {
        status: 200,
        headers: {
          "Content-Type":
            "application/pdf",

          "Content-Disposition":
            `attachment; filename="VerifyNow-${verificationId}.pdf"`,

          "Cache-Control":
            "no-store",
        },
      }
    );
  } catch (error) {
    console.error(
      "PDF generation failed:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to generate verification report",
      },
      {
        status: 500,
      }
    );
  }
}