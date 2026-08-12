import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

import { ReportData } from "./reportDataService";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    color: "#1e293b",
    fontFamily: "Helvetica",
  },

  header: {
    marginBottom: 24,
    paddingBottom: 16,
    borderBottom: "1 solid #e2e8f0",
  },

  brand: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#BF5000",
  },

  title: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: "bold",
  },

  subtitle: {
    marginTop: 4,
    color: "#64748b",
  },

  section: {
    marginTop: 20,
    padding: 16,
    border: "1 solid #e2e8f0",
    borderRadius: 6,
  },

  sectionTitle: {
    marginBottom: 12,
    fontSize: 13,
    fontWeight: "bold",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  field: {
    width: "50%",
    marginBottom: 10,
    paddingRight: 10,
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
    width: "33.33%",
    paddingRight: 10,
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
    marginBottom: 5,
  },

  row: {
    flexDirection: "row",
    marginBottom: 4,
  },

  rowLabel: {
    width: 90,
    color: "#64748b",
  },

  rowValue: {
    flex: 1,
  },

  evidence: {
    marginTop: 8,
    padding: 8,
    backgroundColor: "#f8fafc",
  },

  evidenceTitle: {
    fontWeight: "bold",
    marginBottom: 3,
  },

  footer: {
    position: "absolute",
    bottom: 25,
    left: 40,
    right: 40,
    textAlign: "center",
    fontSize: 8,
    color: "#94a3b8",
  },
});

function Field({
  label,
  value,
}: {
  label: string;
  value?: string | number | null;
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>
        {value === undefined ||
        value === null ||
        value === ""
          ? "--"
          : String(value)}
      </Text>
    </View>
  );
}

export default function PdfReport({
  report,
}: {
  report: ReportData;
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

        <View style={styles.header}>
          <Text style={styles.brand}>
            VerifyNow
          </Text>

          <Text style={styles.title}>
            Verification Report
          </Text>

          <Text style={styles.subtitle}>
            {report.verificationId}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Verification Summary
          </Text>

          <View style={styles.metrics}>
            <View style={styles.metric}>
              <Text style={styles.label}>
                Confidence
              </Text>

              <Text style={styles.metricValue}>
                {report.assessment.confidenceScore !== null
                  ? `${report.assessment.confidenceScore}%`
                  : "--"}
              </Text>
            </View>

            <View style={styles.metric}>
              <Text style={styles.label}>
                Risk Level
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
            Subject
          </Text>

          <View style={styles.grid}>
            <Field
              label="Type"
              value={report.subject.type}
            />

            <Field
              label="Country"
              value={report.subject.country}
            />

            <Field
              label="Display Name"
              value={report.subject.displayName}
            />

            <Field
              label="Full Name"
              value={report.subject.fullName}
            />

            <Field
              label="Company"
              value={report.subject.companyName}
            />

            <Field
              label="Registration Number"
              value={report.subject.registrationNumber}
            />

            <Field
              label="ID Number"
              value={report.subject.idNumber}
            />

            <Field
              label="Passport Number"
              value={report.subject.passportNumber}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Verification Checks
          </Text>

          {report.checks.length === 0 ? (
            <Text>No verification checks recorded.</Text>
          ) : (
            report.checks.map((check) => (
              <View
                key={check.checkId}
                style={styles.check}
              >
                <Text style={styles.checkName}>
                  {check.checkName}
                </Text>

                <View style={styles.row}>
                  <Text style={styles.rowLabel}>
                    Provider
                  </Text>

                  <Text style={styles.rowValue}>
                    {check.provider}
                  </Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.rowLabel}>
                    Status
                  </Text>

                  <Text style={styles.rowValue}>
                    {check.status}
                  </Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.rowLabel}>
                    Score
                  </Text>

                  <Text style={styles.rowValue}>
                    {check.score}
                  </Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.rowLabel}>
                    Finding
                  </Text>

                  <Text style={styles.rowValue}>
                    {check.message}
                  </Text>
                </View>

                {check.evidence.length > 0 && (
                  <View style={styles.evidence}>
                    <Text style={styles.evidenceTitle}>
                      Evidence
                    </Text>

                    {check.evidence.map(
                      (item, index) => (
                        <View
                          key={`${check.checkId}-evidence-${index}`}
                          style={styles.row}
                        >
                          <Text style={styles.rowLabel}>
                            {item.title}
                          </Text>

                          <Text style={styles.rowValue}>
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

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Providers
          </Text>

          {report.providers.length === 0 ? (
            <Text>No provider information recorded.</Text>
          ) : (
            report.providers.map((provider, index) => (
              <View
                key={`${provider.providerName}-${index}`}
                style={styles.check}
              >
                <Text style={styles.checkName}>
                  {provider.providerName}
                </Text>

                <View style={styles.row}>
                  <Text style={styles.rowLabel}>
                    Status
                  </Text>

                  <Text style={styles.rowValue}>
                    {provider.status}
                  </Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.rowLabel}>
                    Confidence
                  </Text>

                  <Text style={styles.rowValue}>
                    {provider.confidence}
                  </Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.rowLabel}>
                    Response Time
                  </Text>

                  <Text style={styles.rowValue}>
                    {provider.responseTime} ms
                  </Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.rowLabel}>
                    Findings
                  </Text>

                  <Text style={styles.rowValue}>
                    {provider.findings}
                  </Text>
                </View>
              </View>
            ))
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Timeline
          </Text>

          <Field
            label="Created"
            value={report.timeline.createdAt}
          />

          <Field
            label="Started"
            value={report.timeline.startedAt}
          />

          <Field
            label="Completed"
            value={report.timeline.completedAt}
          />

          <Field
            label="Duration"
            value={
              report.timeline.durationSeconds !==
              undefined
                ? `${report.timeline.durationSeconds} seconds`
                : undefined
            }
          />
        </View>

        {report.notes && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Notes
            </Text>

            <Text>{report.notes}</Text>
          </View>
        )}

        <Text style={styles.footer}>
          VerifyNow — Verification Report
        </Text>

      </Page>
    </Document>
  );
}