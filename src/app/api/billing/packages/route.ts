import { NextResponse } from "next/server";
import { pricingService } from "@/services/pricing";

export async function GET() {
  try {
    const packages =
      await pricingService.getCreditPackages();

    return NextResponse.json(
      packages.map((item) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        credits: item.credits,
        price: Number(item.price),
        currency: item.currency,
      }))
    );
  } catch (error) {
    console.error(
      "Credit packages error:",
      error
    );

    return NextResponse.json(
      {
        error: "Unable to retrieve credit packages.",
      },
      {
        status: 500,
      }
    );
  }
}