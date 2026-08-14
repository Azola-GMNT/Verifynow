import { NextResponse } from "next/server";
import { pricingService } from "@/services/pricing";

export async function GET() {
  try {
    const pricing =
      await pricingService.getActivePricing();

    return NextResponse.json(pricing);
  } catch (error) {
    console.error(
      "Billing pricing error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to retrieve verification pricing.",
      },
      {
        status: 500,
      }
    );
  }
}