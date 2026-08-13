import { NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";
import { userRepository } from "@/repositories/user.repository";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: Request,
  context: {
    params: Promise<{
      notificationId: string;
    }>;
  }
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
          error: "Application user not found",
        },
        { status: 404 }
      );
    }

    const { notificationId } =
      await context.params;

    const notification =
      await prisma.notification.findFirst({
        where: {
          id: notificationId,
          userId: applicationUser.id,
        },
      });

    if (!notification) {
      return NextResponse.json(
        {
          error: "Notification not found",
        },
        { status: 404 }
      );
    }

    const updated =
      await prisma.notification.update({
        where: {
          id: notification.id,
        },
        data: {
          read: true,
        },
      });

    return NextResponse.json(updated);
  } catch (error) {
    console.error(
      "MARK NOTIFICATION READ ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to mark notification as read",
      },
      { status: 500 }
    );
  }
}