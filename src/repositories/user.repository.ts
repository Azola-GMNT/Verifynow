import { prisma } from "@/lib/prisma/client";

export class UserRepository {
  async getById(id: string) {
    return prisma.user.findUnique({
      where: { id },
      include: {
        company: true,
        preferences: true,
        security: true,
        notifications: true,
      },
    });
  }

  async getByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
      include: {
        company: true,
      },
    });
  }

  async getByAuthId(authId: string) {
    return prisma.user.findUnique({
      where: { authId },
      include: {
        company: true,
        preferences: true,
        security: true,
        notifications: true,
      },
    });
  }

  async create(data: any) {
    return prisma.user.create({
      data,
    });
  }

  async update(id: string, data: any) {
    return prisma.user.update({
      where: { id },
      data,
    });
  }
}

export const userRepository = new UserRepository();