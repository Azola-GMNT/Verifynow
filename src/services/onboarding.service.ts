import { prisma } from "@/lib/prisma/client";

export class OnboardingService {
  async initialiseUser(authUser: {
    id: string;
    email?: string;
    user_metadata?: any;
  }) {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        authId: authUser.id,
      },
      include: {
        company: true,
        preferences: true,
        security: true,
        notifications: true,
      },
    });

    if (existingUser) {
      return existingUser;
    }

    // Create Company
    const company = await prisma.company.create({
      data: {
        name:
          authUser.user_metadata?.company_name ??
          "My Company",

        industry:
          authUser.user_metadata?.industry ??
          "Other",

        country:
          authUser.user_metadata?.country ??
          "South Africa",
      },
    });

    // Create User
    const user = await prisma.user.create({
      data: {
        authId: authUser.id,

        email: authUser.email!,

        firstName:
          authUser.user_metadata?.first_name ?? "",

        lastName:
          authUser.user_metadata?.last_name ?? "",

        phone:
          authUser.user_metadata?.phone,

        jobTitle:
          authUser.user_metadata?.job_title,

        companyId: company.id,

        role: "OWNER",

        emailVerified: true,
      },
    });

    // Create Preferences
    await prisma.userPreferences.create({
      data: {
        userId: user.id,
      },
    });

    // Create Security Settings
    await prisma.securitySettings.create({
      data: {
        userId: user.id,
      },
    });

    // Create Notification Settings
    await prisma.notificationSettings.create({
      data: {
        userId: user.id,
      },
    });

    return prisma.user.findUnique({
      where: {
        id: user.id,
      },
      include: {
        company: true,
        preferences: true,
        security: true,
        notifications: true,
      },
    });
  }
}

export const onboardingService =
  new OnboardingService();