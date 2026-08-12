import { prisma } from "@/lib/prisma/client";

export class OnboardingService {
  async initialiseUser(authUser: {
    id: string;
    email?: string;
    email_confirmed_at?: string | null;
    user_metadata?: any;
  }) {
    console.log("ONBOARDING: initialiseUser STARTED", authUser);

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

    console.log("ONBOARDING: EXISTING USER:", existingUser);

    if (existingUser) {
      console.log("ONBOARDING: USER ALREADY EXISTS");
      return existingUser;
    }

    console.log("ONBOARDING: CREATING COMPANY");

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

    console.log("ONBOARDING: COMPANY CREATED:", company);

    console.log("ONBOARDING: CREATING APPLICATION USER");

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
        emailVerified: !!authUser.email_confirmed_at,
      },
    });

    console.log(
      "ONBOARDING: APPLICATION USER CREATED:",
      user
    );

    console.log("ONBOARDING: CREATING PREFERENCES");

    await prisma.userPreferences.create({
      data: {
        userId: user.id,
      },
    });

    console.log("ONBOARDING: PREFERENCES CREATED");

    console.log(
      "ONBOARDING: CREATING SECURITY SETTINGS"
    );

    await prisma.securitySettings.create({
      data: {
        userId: user.id,
      },
    });

    console.log(
      "ONBOARDING: SECURITY SETTINGS CREATED"
    );

    console.log(
      "ONBOARDING: CREATING NOTIFICATION SETTINGS"
    );

    await prisma.notificationSettings.create({
      data: {
        userId: user.id,
      },
    });

    console.log(
      "ONBOARDING: NOTIFICATION SETTINGS CREATED"
    );

    console.log("ONBOARDING: COMPLETE");

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