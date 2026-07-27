export enum VerificationStatus {
  Queued = "Queued",
  Running = "Running",
  Completed = "Completed",
  Failed = "Failed",
  Archived = "Archived",
}

export enum SubjectType {
  Individual = "individual",
  Organisation = "organisation",
}

export enum Recommendation {
  Proceed = "Proceed",
  Review = "Review",
  Reject = "Reject",
}

export enum RiskLevel {
  Low = "Low",
  Medium = "Medium",
  High = "High",
  Unknown = "Unknown",
}