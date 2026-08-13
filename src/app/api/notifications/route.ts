import { NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";
import { userRepository } from "@/repositories/user.repository";
import { prisma } from "@/lib/prisma";

export async function GET() {
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
        { error: "Application user not found" },
        { status: 404 }
      );
    }

    const notifications =
      await prisma.notification.findMany({
        where: {
          userId: applicationUser.id,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 20,
      });

    const unreadCount =
      await prisma.notification.count({
        where: {
          userId: applicationUser.id,
          read: false,
        },
      });

    return NextResponse.json({
      notifications,
      unreadCount,
    });
  } catch (error) {
    console.error(
      "NOTIFICATIONS API ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to fetch notifications",
      },
      { status: 500 }
    );
  }
}