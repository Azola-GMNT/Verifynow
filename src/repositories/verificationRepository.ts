import { prisma } from "@/lib/prisma/client";
import { VerificationCase } from "@/types/verification";

class VerificationRepository {
  async createVerification(
    verification: VerificationCase
  ) {
    const created = await prisma.verificationCase.create({
      data: {
        verificationId: verification.verificationId,
        subjectType: verification.subject.subjectType,
        subjectName: verification.subject.displayName,
        subjectIdentifier:
          verification.subject.idNumber ??
          verification.subject.passportNumber ??
          verification.subject.registrationNumber ??
          null,

        status: verification.status,

        recommendation:
          verification.risk.recommendation ?? null,

        riskLevel:
          verification.risk.riskLevel !== "Unknown"
            ? verification.risk.riskLevel
            : null,

        riskScore:
          verification.risk.confidenceScore ?? null,

        startedAt:
          verification.timeline.startedAt
            ? new Date(verification.timeline.startedAt)
            : null,

        completedAt:
          verification.timeline.completedAt
            ? new Date(verification.timeline.completedAt)
            : null,

        durationSeconds:
          verification.timeline.durationSeconds ?? null,

        subject: {
          create: {
            subjectType:
              verification.subject.subjectType,

            fullName:
              verification.subject.fullName ??
              verification.subject.displayName ??
              null,

            companyName:
              verification.subject.companyName ??
              null,

            registrationNumber:
              verification.subject.registrationNumber ??
              null,

            identifier:
              verification.subject.idNumber ??
              verification.subject.passportNumber ??
              null,

            identifierType:
              verification.subject.idNumber
                ? "ID_NUMBER"
                : verification.subject.passportNumber
                ? "PASSPORT"
                : verification.subject.registrationNumber
                ? "REGISTRATION_NUMBER"
                : null,

            country:
              verification.subject.country,
          },
        },

        checks: {
          create: verification.selectedChecks.map(
            (checkId) => ({
              checkKey: String(checkId),
              checkName: `Check ${checkId}`,
              status: verification.completedChecks.includes(
                checkId
              )
                ? "Completed"
                : "Queued",
            })
          ),
        },

        timeline: {
          create: {
            eventType: "CREATED",
            status: verification.status,
            message:
              "Verification case created.",
          },
        },
      },

      include: {
        subject: true,
        checks: true,
        results: true,
        providers: true,
        timeline: true,
      },
    });

    return created;
  }

  async updateVerification(
    verificationId: string,
    updates: Partial<VerificationCase>
  ) {
    const data: any = {};

    if (updates.status !== undefined) {
      data.status = updates.status;
    }

    if (updates.risk) {
      data.riskLevel =
        updates.risk.riskLevel !== "Unknown"
          ? updates.risk.riskLevel
          : null;

      data.riskScore =
        updates.risk.confidenceScore ?? null;

      data.recommendation =
        updates.risk.recommendation ?? null;
    }

    if (updates.timeline) {
      if (updates.timeline.startedAt) {
        data.startedAt = new Date(
          updates.timeline.startedAt
        );
      }

      if (updates.timeline.completedAt) {
        data.completedAt = new Date(
          updates.timeline.completedAt
        );
      }

      if (
        updates.timeline.durationSeconds !==
        undefined
      ) {
        data.durationSeconds =
          updates.timeline.durationSeconds;
      }
    }

    const updated =
      await prisma.verificationCase.update({
        where: {
          verificationId,
        },
        data,
        include: {
          subject: true,
          checks: true,
          results: true,
          providers: true,
          timeline: true,
        },
      });

    if (updates.status) {
      await prisma.verificationTimelineEvent.create({
        data: {
          verificationCaseId: updated.id,
          eventType: "STATUS_CHANGED",
          status: updates.status,
          message: `Verification status changed to ${updates.status}.`,
        },
      });
    }

    return updated;
  }

  async deleteVerification(
    verificationId: string
  ) {
    return prisma.verificationCase.delete({
      where: {
        verificationId,
      },
    });
  }

  async getVerification(
    verificationId: string
  ) {
    return prisma.verificationCase.findUnique({
      where: {
        verificationId,
      },
      include: {
        subject: true,
        checks: true,
        results: true,
        providers: true,
        timeline: {
          orderBy: {
            createdAt: "asc",
          },
        },
        reports: true,
        auditLogs: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });
  }

  async getAllVerifications() {
    return prisma.verificationCase.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        subject: true,
        checks: true,
        results: true,
        providers: true,
        timeline: true,
        reports: true,
      },
    });
  }

  async clear() {
    await prisma.verificationCase.deleteMany();
  }
}

export const verificationRepository =
  new VerificationRepository();