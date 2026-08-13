import { prisma } from "@/lib/prisma";

interface CreateNotificationInput {
  userId: string;
  title: string;
  message: string;
  type?: string;
  link?: string | null;
}

export class NotificationService {
  async create({
    userId,
    title,
    message,
    type = "system",
    link = null,
  }: CreateNotificationInput) {
    return prisma.notification.create({
      data: {
        userId,
        title,
        message,
        type,
        link,
      },
    });
  }

  async createMany(
    notifications: CreateNotificationInput[]
  ) {
    if (notifications.length === 0) {
      return { count: 0 };
    }

    return prisma.notification.createMany({
      data: notifications.map((notification) => ({
        userId: notification.userId,
        title: notification.title,
        message: notification.message,
        type: notification.type ?? "system",
        link: notification.link ?? null,
      })),
    });
  }

  async markAsRead(
    notificationId: string,
    userId: string
  ) {
    return prisma.notification.updateMany({
      where: {
        id: notificationId,
        userId,
      },
      data: {
        read: true,
      },
    });
  }

  async markAllAsRead(userId: string) {
    return prisma.notification.updateMany({
      where: {
        userId,
        read: false,
      },
      data: {
        read: true,
      },
    });
  }

  async delete(
    notificationId: string,
    userId: string
  ) {
    return prisma.notification.deleteMany({
      where: {
        id: notificationId,
        userId,
      },
    });
  }
}

export const notificationService =
  new NotificationService();