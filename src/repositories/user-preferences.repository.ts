import { prisma } from "@/lib/prisma/client";

export class UserPreferencesRepository {
  async getByUserId(userId: string) {
    return prisma.userPreferences.findUnique({
      where: {
        userId,
      },
    });
  }

  async create(userId: string) {
    return prisma.userPreferences.create({
      data: {
        userId,
      },
    });
  }

  async update(userId: string, data: any) {
    return prisma.userPreferences.update({
      where: {
        userId,
      },
      data,
    });
  }
}

export const userPreferencesRepository =
  new UserPreferencesRepository();