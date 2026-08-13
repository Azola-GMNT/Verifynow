import { NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";
import { userRepository } from "@/repositories/user.repository";
import { prisma } from "@/lib/prisma";

export async function POST(
  request: Request
) {
  try {
    const supabase = await createClient();

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    const applicationUser =
      await userRepository.getByAuthId(user.id);

    if (!applicationUser) {
      return NextResponse.json(
        {
          error:
            "Application user not found",
        },
        { status: 404 }
      );
    }

    const body = await request.json();

    const {
      title,
      message,
      type = "verification",
      link = null,
    } = body;

    if (!title || !message) {
      return NextResponse.json(
        {
          error:
            "Title and message are required",
        },
        { status: 400 }
      );
    }

    const notification =
      await prisma.notification.create({
        data: {
          userId: applicationUser.id,
          title,
          message,
          type,
          link,
        },
      });

    return NextResponse.json(
      notification,
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "CREATE NOTIFICATION API ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to create notification",
      },
      { status: 500 }
    );
  }
}