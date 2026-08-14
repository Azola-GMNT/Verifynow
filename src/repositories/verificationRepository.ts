import { prisma } from "@/lib/prisma";
import { VerificationCase } from "@/types/verification";

class VerificationRepository {
  /**
   * Convert the Prisma VerificationCase structure
   * into the application's VerificationCase structure.
   */
  private mapToVerificationCase(
    record: any
  ): VerificationCase {
    const selectedChecks =
      (record.checks ?? []).map(
        (check: any) => {
          const parsed =
            Number(check.checkKey);

          return Number.isNaN(parsed)
            ? check.checkKey
            : parsed;
        }
      );

    const completedChecks =
      (record.checks ?? [])
        .filter(
          (check: any) =>
            check.status === "Completed"
        )
        .map(
          (check: any) => {
            const parsed =
              Number(check.checkKey);

            return Number.isNaN(parsed)
              ? check.checkKey
              : parsed;
          }
        );

    const results =
      (record.results ?? []).map(
        (result: any) => ({
          checkId:
            result.verificationCheckId ??
            result.id,

          checkName:
            result.verificationCheck
              ?.checkName ??
            "Verification Check",

          provider:
            result.provider ??
            "Unknown",

          status:
            result.status as any,

          score:
            result.score ?? 0,

          message:
            result.message ?? "",

          evidence:
            Array.isArray(result.evidence)
              ? result.evidence
              : [],

          startedAt:
            result.startedAt ??
            result.createdAt,

          completedAt:
            result.completedAt ??
            result.createdAt,
        })
      );

    const providers =
      (record.providers ?? []).map(
        (provider: any) => ({
          providerName:
            provider.providerName,

          status:
            provider.status === "Completed" ||
            provider.status === "Failed"
              ? provider.status
              : "Failed",

          confidence:
            provider.confidence ?? 0,

          responseTime:
            provider.responseTime ?? 0,

          findings:
            provider.findings ?? "",
        })
      );

    const timelineEvents =
      record.timeline ?? [];

    const createdEvent =
      timelineEvents.find(
        (event: any) =>
          event.eventType === "CREATED"
      );

    const startedEvent =
      timelineEvents.find(
        (event: any) =>
          event.eventType === "STARTED"
      );

    const completedEvent =
      timelineEvents.find(
        (event: any) =>
          event.eventType === "COMPLETED"
      );

    return {
      verificationId:
        record.verificationId,

      subject: {
        subjectType:
          record.subject?.subjectType ===
          "organisation"
            ? "organisation"
            : "individual",

        displayName:
          record.subject?.fullName ??
          record.subject?.companyName ??
          record.subjectName ??
          "--",

        country:
          record.subject?.country ??
          "",

        id:
          record.subject?.id,

        fullName:
          record.subject?.fullName ??
          undefined,

        companyName:
          record.subject?.companyName ??
          undefined,

        registrationNumber:
          record.subject?.registrationNumber ??
          undefined,

        idNumber:
          record.subject?.identifierType ===
          "ID_NUMBER"
            ? record.subject?.identifier ??
              undefined
            : undefined,

        passportNumber:
          record.subject?.identifierType ===
          "PASSPORT"
            ? record.subject?.identifier ??
              undefined
            : undefined,
      },

      selectedChecks,

      completedChecks,

      status:
        record.status as any,

      timeline: {
        createdAt:
          (
            createdEvent?.createdAt ??
            record.createdAt
          ).toISOString(),

        startedAt:
          startedEvent?.createdAt
            ?.toISOString() ??
          record.startedAt?.toISOString(),

        completedAt:
          completedEvent?.createdAt
            ?.toISOString() ??
          record.completedAt?.toISOString(),

        durationSeconds:
          record.durationSeconds ??
          undefined,
      },

      risk: {
        confidenceScore:
          record.riskScore ??
          undefined,

        recommendation:
          record.recommendation ??
          undefined,

        riskLevel:
          record.riskLevel === "Low" ||
          record.riskLevel === "Medium" ||
          record.riskLevel === "High"
            ? record.riskLevel
            : "Unknown",
      },

      providers,

      results,

      createdBy:
        record.createdByUserId ??
        "system",

      reportGenerated:
        (record.reports?.length ?? 0) > 0,

      notes:
        undefined,
    };
  }

  /**
   * Create a verification case.
   */
  async createVerification(
    verification: VerificationCase
  ) {
    const created =
      await prisma.verificationCase.create({
        data: {
          verificationId:
            verification.verificationId,

          subjectType:
            verification.subject.subjectType,

          subjectName:
            verification.subject.displayName,

          subjectIdentifier:
            verification.subject.idNumber ??
            verification.subject.passportNumber ??
            verification.subject
              .registrationNumber ??
            null,

          status:
            verification.status,

          recommendation:
            verification.risk
              .recommendation ?? null,

          riskLevel:
            verification.risk.riskLevel !==
            "Unknown"
              ? verification.risk.riskLevel
              : null,

          riskScore:
            verification.risk
              .confidenceScore ?? null,

          startedAt:
            verification.timeline.startedAt
              ? new Date(
                  verification.timeline
                    .startedAt
                )
              : null,

          completedAt:
            verification.timeline.completedAt
              ? new Date(
                  verification.timeline
                    .completedAt
                )
              : null,

          durationSeconds:
            verification.timeline
              .durationSeconds ?? null,

          subject: {
            create: {
              subjectType:
                verification.subject
                  .subjectType,

              fullName:
                verification.subject
                  .fullName ??
                verification.subject
                  .displayName ??
                null,

              companyName:
                verification.subject
                  .companyName ??
                null,

              registrationNumber:
                verification.subject
                  .registrationNumber ??
                null,

              identifier:
                verification.subject
                  .idNumber ??
                verification.subject
                  .passportNumber ??
                null,

              identifierType:
                verification.subject
                  .idNumber
                  ? "ID_NUMBER"
                  : verification.subject
                      .passportNumber
                    ? "PASSPORT"
                    : verification.subject
                        .registrationNumber
                      ? "REGISTRATION_NUMBER"
                      : null,

              country:
                verification.subject
                  .country,
            },
          },

          checks: {
            create:
              verification.selectedChecks.map(
                (checkId) => ({
                  checkKey:
                    String(checkId),

                  checkName:
                    `Check ${checkId}`,

                  status:
                    verification
                      .completedChecks
                      .includes(checkId)
                      ? "Completed"
                      : "Queued",
                })
              ),
          },

          timeline: {
            create: {
              eventType:
                "CREATED",

              status:
                verification.status,

              message:
                "Verification case created.",
            },
          },
        },

        include: {
          subject: true,
          checks: true,
          results: {
            include: {
              verificationCheck: true,
            },
          },
          providers: true,
          timeline: true,
          reports: true,
        },
      });

    return this.mapToVerificationCase(
      created
    );
  }

  /**
   * Update a verification case.
   */
  async updateVerification(
    verificationId: string,
    updates: Partial<VerificationCase>
  ) {
    const data: any = {};

    if (
      updates.status !== undefined
    ) {
      data.status =
        updates.status;
    }

    if (updates.risk) {
      data.riskLevel =
        updates.risk.riskLevel !==
        "Unknown"
          ? updates.risk.riskLevel
          : null;

      data.riskScore =
        updates.risk
          .confidenceScore ?? null;

      data.recommendation =
        updates.risk
          .recommendation ?? null;
    }

    if (updates.timeline) {
      if (
        updates.timeline.startedAt
      ) {
        data.startedAt =
          new Date(
            updates.timeline
              .startedAt
          );
      }

      if (
        updates.timeline.completedAt
      ) {
        data.completedAt =
          new Date(
            updates.timeline
              .completedAt
          );
      }

      if (
        updates.timeline
          .durationSeconds !==
        undefined
      ) {
        data.durationSeconds =
          updates.timeline
            .durationSeconds;
      }
    }

    const updated =
      await prisma.verificationCase.update(
        {
          where: {
            verificationId,
          },

          data,

          include: {
            subject: true,
            checks: true,
            results: {
              include: {
                verificationCheck: true,
              },
            },
            providers: true,
            timeline: {
              orderBy: {
                createdAt: "asc",
              },
            },
            reports: true,
          },
        }
      );

    if (updates.status) {
      await prisma.verificationTimelineEvent.create(
        {
          data: {
            verificationCaseId:
              updated.id,

            eventType:
              "STATUS_CHANGED",

            status:
              updates.status,

            message:
              `Verification status changed to ${updates.status}.`,
          },
        }
      );
    }

    return this.mapToVerificationCase(
      updated
    );
  }

   /**
   * Delete a verification case.
   */
  async deleteVerification(
    verificationId: string
  ) {
    return prisma.verificationCase.delete({
      where: {
        verificationId,
      },
    });
  }

  /**
   * Get a single verification case.
   *
   * Important:
   * Prisma data is converted into the
   * application's VerificationCase type.
   */
  async getVerification(
    verificationId: string
  ): Promise<VerificationCase | null> {
    const record = await prisma.verificationCase.findUnique({
      where: {
        verificationId,
      },
      include: {
        subject: true,
        checks: true,
        results: {
          include: {
            verificationCheck: true,
          },
        },
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

    if (!record) {
      return null;
    }

    return this.mapToVerificationCase(record);
  }

  /**
   * Get all verification cases.
   */
  async getAllVerifications(): Promise<VerificationCase[]> {
    const records = await prisma.verificationCase.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        subject: true,
        checks: true,
        results: {
          include: {
            verificationCheck: true,
          },
        },
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

    return records.map((record) =>
      this.mapToVerificationCase(record)
    );
  }

  /**
   * Clear all verification cases.
   */
  async clear() {
    await prisma.verificationCase.deleteMany();
  }
}

export const verificationRepository =
  new VerificationRepository();