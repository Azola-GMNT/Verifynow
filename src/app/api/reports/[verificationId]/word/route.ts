import { NextRequest } from "next/server";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from "docx";

import { verificationRepository } from "@/repositories/verificationRepository";
import { buildVerificationReport } from "@/services/reports/reportBuilder";

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      verificationId: string;
    }>;
  }
) {
  try {
    const { verificationId } = await params;

    const verification =
      verificationRepository.getVerification(
        verificationId
      );

    if (!verification) {
      return new Response(
        "Verification not found",
        {
          status: 404,
        }
      );
    }

    const report =
      buildVerificationReport(
        verification
      );

    const children: Paragraph[] = [];

    // Title
    children.push(
      new Paragraph({
        text: "VerifyNow Verification Report",
        heading: HeadingLevel.TITLE,
      })
    );

    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `Verification ID: ${report.verificationId}`,
            bold: true,
          }),
        ],
      })
    );

    children.push(
      new Paragraph(
        `Generated: ${new Date(
          report.generatedAt
        ).toLocaleString()}`
      )
    );

    // Subject
    children.push(
      new Paragraph({
        text: "Subject",
        heading: HeadingLevel.HEADING_1,
      })
    );

    children.push(
      new Paragraph(
        `Type: ${report.subject.type}`
      )
    );

    children.push(
      new Paragraph(
        `Display Name: ${report.subject.displayName}`
      )
    );

    children.push(
      new Paragraph(
        `Country: ${report.subject.country}`
      )
    );

    if (
      report.subject.registrationNumber
    ) {
      children.push(
        new Paragraph(
          `Registration Number: ${report.subject.registrationNumber}`
        )
      );
    }

    if (report.subject.idNumber) {
      children.push(
        new Paragraph(
          `ID Number: ${report.subject.idNumber}`
        )
      );
    }

    if (
      report.subject.passportNumber
    ) {
      children.push(
        new Paragraph(
          `Passport Number: ${report.subject.passportNumber}`
        )
      );
    }

    // Assessment
    children.push(
      new Paragraph({
        text: "Overall Assessment",
        heading: HeadingLevel.HEADING_1,
      })
    );

    children.push(
      new Paragraph(
        `Confidence Score: ${
          report.assessment
            .confidenceScore !== null
            ? `${report.assessment.confidenceScore}%`
            : "--"
        }`
      )
    );

    children.push(
      new Paragraph(
        `Risk Level: ${report.assessment.riskLevel}`
      )
    );

    children.push(
      new Paragraph(
        `Recommendation: ${report.assessment.recommendation}`
      )
    );

    children.push(
      new Paragraph(
        `Status: ${report.status}`
      )
    );

    // Timeline
    children.push(
      new Paragraph({
        text: "Timeline",
        heading: HeadingLevel.HEADING_1,
      })
    );

    children.push(
      new Paragraph(
        `Created: ${report.timeline.createdAt}`
      )
    );

    if (report.timeline.startedAt) {
      children.push(
        new Paragraph(
          `Started: ${report.timeline.startedAt}`
        )
      );
    }

    if (report.timeline.completedAt) {
      children.push(
        new Paragraph(
          `Completed: ${report.timeline.completedAt}`
        )
      );
    }

    if (
      report.timeline.durationSeconds !==
      undefined
    ) {
      children.push(
        new Paragraph(
          `Duration: ${report.timeline.durationSeconds} seconds`
        )
      );
    }

    // Verification checks
    children.push(
      new Paragraph({
        text: "Verification Checks",
        heading: HeadingLevel.HEADING_1,
      })
    );

    if (report.checks.length === 0) {
      children.push(
        new Paragraph(
          "No verification check results available."
        )
      );
    }

    for (const check of report.checks) {
      children.push(
        new Paragraph({
          text: check.checkName,
          heading:
            HeadingLevel.HEADING_2,
        })
      );

      children.push(
        new Paragraph(
          `Provider: ${check.provider}`
        )
      );

      children.push(
        new Paragraph(
          `Status: ${check.status}`
        )
      );

      children.push(
        new Paragraph(
          `Score: ${check.score}`
        )
      );

      children.push(
        new Paragraph(
          check.message
        )
      );

      if (check.evidence.length > 0) {
        children.push(
          new Paragraph({
            text: "Evidence",
            heading:
              HeadingLevel.HEADING_3,
          })
        );

        const evidenceTable =
          new Table({
            width: {
              size: 100,
              type: WidthType.PERCENTAGE,
            },

            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Field",
                            bold: true,
                          }),
                        ],
                      }),
                    ],
                  }),

                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: "Value",
                            bold: true,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),

              ...check.evidence.map(
                (item) =>
                  new TableRow({
                    children: [
                      new TableCell({
                        children: [
                          new Paragraph(
                            item.title
                          ),
                        ],
                      }),

                      new TableCell({
                        children: [
                          new Paragraph(
                            item.value
                          ),
                        ],
                      }),
                    ],
                  })
              ),
            ],
          });

        // Tables cannot be stored in Paragraph[]
        // so we handle them separately below.
      }
    }

    // Providers
    children.push(
      new Paragraph({
        text: "Providers",
        heading: HeadingLevel.HEADING_1,
      })
    );

    for (const provider of report.providers) {
      children.push(
        new Paragraph({
          text: provider.providerName,
          heading:
            HeadingLevel.HEADING_2,
        })
      );

      children.push(
        new Paragraph(
          `Status: ${provider.status}`
        )
      );

      children.push(
        new Paragraph(
          `Confidence: ${provider.confidence}`
        )
      );

      children.push(
        new Paragraph(
          `Response Time: ${provider.responseTime} ms`
        )
      );

      children.push(
        new Paragraph(
          `Findings: ${provider.findings}`
        )
      );
    }

    // Notes
    if (report.notes) {
      children.push(
        new Paragraph({
          text: "Notes",
          heading: HeadingLevel.HEADING_1,
        })
      );

      children.push(
        new Paragraph(report.notes)
      );
    }

    // Footer
    children.push(
      new Paragraph({
        text: "VerifyNow — Verification Report",
      })
    );

    children.push(
      new Paragraph(
        "This report contains verification information generated by the VerifyNow platform."
      )
    );

    const document =
      new Document({
        sections: [
          {
            properties: {},
            children,
          },
        ],
      });

    const buffer =
      await Packer.toBuffer(document);

    return new Response(new Uint8Array(buffer), {
  status: 200,

      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",

        "Content-Disposition":
          `attachment; filename="VerifyNow-${verificationId}.docx"`,

        "Content-Length":
          buffer.length.toString(),
      },
    });
  } catch (error) {
    console.error(
      "Word report generation failed:",
      error
    );

    return new Response(
      "Unable to generate Word report",
      {
        status: 500,
      }
    );
  }
}