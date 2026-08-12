import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

import { buildVerificationReport } from "@/services/reports/reportBuilder";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    color: "#1e293b",
  },

  header: {
    marginBottom: 24,
    paddingBottom: 16,
    borderBottom: "1 solid #e2e8f0",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 10,
    color: "#64748b",
    marginBottom: 3,
  },

  section: {
    marginBottom: 20,
    padding: 14,
    border: "1 solid #e2e8f0",
    borderRadius: 6,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 12,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  field: {
    width: "50%",
    marginBottom: 10,
  },

  label: {
    fontSize: 8,
    color: "#64748b",
    marginBottom: 3,
  },

  value: {
    fontSize: 10,
    fontWeight: "bold",
  },

  metrics: {
    flexDirection: "row",
  },

  metric: {
    flex: 1,
    padding: 10,
    marginRight: 8,
    backgroundColor: "#f8fafc",
    borderRadius: 5,
  },

  metricValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
  },

  check: {
    marginBottom: 14,
    paddingBottom: 12,
    borderBottom: "1 solid #e2e8f0",
  },

  checkName: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 4,
  },

  checkMeta: {
    fontSize: 8,
    color: "#64748b",
    marginBottom: 5,
  },

  message: {
    fontSize: 9,
    marginBottom: 6,
  },

  evidence: {
    marginTop: 5,
    paddingLeft: 8,
  },

  evidenceItem: {
    marginBottom: 4,
  },

  evidenceTitle: {
    fontSize: 8,
    color: "#64748b",
  },

  evidenceValue: {
    fontSize: 9,
  },

  footer: {
    marginTop: 20,
    paddingTop: 10,
    borderTop: "1 solid #e2e8f0",
    fontSize: 8,
    color: "#64748b",
  },
});

type Report = ReturnType<
  typeof buildVerificationReport
>;

export default function VerificationReportPdf({
  report,
}: {
  report: Report;
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

        <View style={styles.header}>
          <Text style={styles.title}>
            Verification Report
          </Text>

          <Text style={styles.subtitle}>
            Verification ID: {report.verificationId}
          </Text>

          <Text style={styles.subtitle}>
            Generated:{" "}
            {new Date(
              report.generatedAt
            ).toLocaleString()}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Subject
          </Text>

          <View style={styles.grid}>

            <View style={styles.field}>
              <Text style={styles.label}>
                Type
              </Text>

              <Text style={styles.value}>
                {report.subject.type}
              </Text>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>
                Country
              </Text>

              <Text style={styles.value}>
                {report.subject.country}
              </Text>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>
                Display Name
              </Text>

              <Text style={styles.value}>
                {report.subject.displayName}
              </Text>
            </View>

            {report.subject.registrationNumber && (
              <View style={styles.field}>
                <Text style={styles.label}>
                  Registration Number
                </Text>

                <Text style={styles.value}>
                  {
                    report.subject
                      .registrationNumber
                  }
                </Text>
              </View>
            )}

            {report.subject.idNumber && (
              <View style={styles.field}>
                <Text style={styles.label}>
                  ID Number
                </Text>

                <Text style={styles.value}>
                  {report.subject.idNumber}
                </Text>
              </View>
            )}

            {report.subject.passportNumber && (
              <View style={styles.field}>
                <Text style={styles.label}>
                  Passport Number
                </Text>

                <Text style={styles.value}>
                  {report.subject.passportNumber}
                </Text>
              </View>
            )}

          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Overall Assessment
          </Text>

          <View style={styles.metrics}>

            <View style={styles.metric}>
              <Text style={styles.label}>
                Confidence
              </Text>

              <Text style={styles.metricValue}>
                {report.assessment.confidenceScore !==
                null
                  ? `${report.assessment.confidenceScore}%`
                  : "--"}
              </Text>
            </View>

            <View style={styles.metric}>
              <Text style={styles.label}>
                Risk
              </Text>

              <Text style={styles.metricValue}>
                {report.assessment.riskLevel}
              </Text>
            </View>

            <View style={styles.metric}>
              <Text style={styles.label}>
                Recommendation
              </Text>

              <Text style={styles.metricValue}>
                {report.assessment.recommendation}
              </Text>
            </View>

          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Verification Checks
          </Text>

          {report.checks.length === 0 ? (
            <Text>
              No verification check results
              available.
            </Text>
          ) : (
            report.checks.map((check, index) => (
              <View
                key={`${check.checkId}-${index}`}
                style={styles.check}
              >
                <Text style={styles.checkName}>
                  {check.checkName}
                </Text>

                <Text style={styles.checkMeta}>
                  Provider: {check.provider}{" "}
                  | Status: {check.status}{" "}
                  | Score: {check.score}
                </Text>

                <Text style={styles.message}>
                  {check.message}
                </Text>

                {check.evidence.length > 0 && (
                  <View style={styles.evidence}>
                    {check.evidence.map(
                      (item, evidenceIndex) => (
                        <View
                          key={`${item.title}-${evidenceIndex}`}
                          style={styles.evidenceItem}
                        >
                          <Text
                            style={
                              styles.evidenceTitle
                            }
                          >
                            {item.title}
                          </Text>

                          <Text
                            style={
                              styles.evidenceValue
                            }
                          >
                            {item.value}
                          </Text>
                        </View>
                      )
                    )}
                  </View>
                )}
              </View>
            ))
          )}
        </View>

        {report.notes && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Notes
            </Text>

            <Text>
              {report.notes}
            </Text>
          </View>
        )}

        <View style={styles.footer}>
          <Text>
            VerifyNow — Verification Report
          </Text>

          <Text>
            This report contains verification
            information generated by the
            VerifyNow platform.
          </Text>
        </View>

      </Page>
    </Document>
  );
}