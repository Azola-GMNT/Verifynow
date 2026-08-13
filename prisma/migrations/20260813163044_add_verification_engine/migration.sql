-- CreateTable
CREATE TABLE "VerificationCase" (
    "id" TEXT NOT NULL,
    "verificationId" TEXT NOT NULL,
    "companyId" TEXT,
    "createdByUserId" TEXT,
    "subjectType" TEXT NOT NULL,
    "subjectName" TEXT,
    "subjectIdentifier" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Draft',
    "recommendation" TEXT,
    "riskLevel" TEXT,
    "riskScore" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "durationSeconds" DOUBLE PRECISION,

    CONSTRAINT "VerificationCase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationSubject" (
    "id" TEXT NOT NULL,
    "verificationCaseId" TEXT NOT NULL,
    "subjectType" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "fullName" TEXT,
    "identifier" TEXT,
    "identifierType" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "nationality" TEXT,
    "country" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "companyName" TEXT,
    "registrationNumber" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationSubject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationCheck" (
    "id" TEXT NOT NULL,
    "verificationCaseId" TEXT NOT NULL,
    "checkKey" TEXT NOT NULL,
    "checkName" TEXT NOT NULL,
    "category" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Queued',
    "provider" TEXT,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationCheck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationResult" (
    "id" TEXT NOT NULL,
    "verificationCaseId" TEXT NOT NULL,
    "verificationCheckId" TEXT,
    "provider" TEXT,
    "status" TEXT NOT NULL,
    "score" DOUBLE PRECISION,
    "message" TEXT,
    "evidence" JSONB,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VerificationResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationProviderResult" (
    "id" TEXT NOT NULL,
    "verificationCaseId" TEXT NOT NULL,
    "providerName" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "confidence" DOUBLE PRECISION,
    "responseTime" DOUBLE PRECISION,
    "findings" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationProviderResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationTimelineEvent" (
    "id" TEXT NOT NULL,
    "verificationCaseId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "status" TEXT,
    "message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VerificationTimelineEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationReport" (
    "id" TEXT NOT NULL,
    "verificationCaseId" TEXT NOT NULL,
    "reportType" TEXT NOT NULL,
    "fileUrl" TEXT,
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VerificationReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationAuditLog" (
    "id" TEXT NOT NULL,
    "verificationCaseId" TEXT NOT NULL,
    "userId" TEXT,
    "action" TEXT NOT NULL,
    "details" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VerificationAuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VerificationCase_verificationId_key" ON "VerificationCase"("verificationId");

-- CreateIndex
CREATE INDEX "VerificationCase_companyId_idx" ON "VerificationCase"("companyId");

-- CreateIndex
CREATE INDEX "VerificationCase_createdByUserId_idx" ON "VerificationCase"("createdByUserId");

-- CreateIndex
CREATE INDEX "VerificationCase_status_idx" ON "VerificationCase"("status");

-- CreateIndex
CREATE INDEX "VerificationCase_createdAt_idx" ON "VerificationCase"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationSubject_verificationCaseId_key" ON "VerificationSubject"("verificationCaseId");

-- CreateIndex
CREATE INDEX "VerificationSubject_identifier_idx" ON "VerificationSubject"("identifier");

-- CreateIndex
CREATE INDEX "VerificationSubject_subjectType_idx" ON "VerificationSubject"("subjectType");

-- CreateIndex
CREATE INDEX "VerificationCheck_verificationCaseId_idx" ON "VerificationCheck"("verificationCaseId");

-- CreateIndex
CREATE INDEX "VerificationCheck_status_idx" ON "VerificationCheck"("status");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationCheck_verificationCaseId_checkKey_key" ON "VerificationCheck"("verificationCaseId", "checkKey");

-- CreateIndex
CREATE INDEX "VerificationResult_verificationCaseId_idx" ON "VerificationResult"("verificationCaseId");

-- CreateIndex
CREATE INDEX "VerificationResult_verificationCheckId_idx" ON "VerificationResult"("verificationCheckId");

-- CreateIndex
CREATE INDEX "VerificationResult_status_idx" ON "VerificationResult"("status");

-- CreateIndex
CREATE INDEX "VerificationProviderResult_verificationCaseId_idx" ON "VerificationProviderResult"("verificationCaseId");

-- CreateIndex
CREATE INDEX "VerificationProviderResult_providerName_idx" ON "VerificationProviderResult"("providerName");

-- CreateIndex
CREATE INDEX "VerificationTimelineEvent_verificationCaseId_idx" ON "VerificationTimelineEvent"("verificationCaseId");

-- CreateIndex
CREATE INDEX "VerificationTimelineEvent_createdAt_idx" ON "VerificationTimelineEvent"("createdAt");

-- CreateIndex
CREATE INDEX "VerificationReport_verificationCaseId_idx" ON "VerificationReport"("verificationCaseId");

-- CreateIndex
CREATE INDEX "VerificationAuditLog_verificationCaseId_idx" ON "VerificationAuditLog"("verificationCaseId");

-- CreateIndex
CREATE INDEX "VerificationAuditLog_userId_idx" ON "VerificationAuditLog"("userId");

-- CreateIndex
CREATE INDEX "VerificationAuditLog_createdAt_idx" ON "VerificationAuditLog"("createdAt");

-- AddForeignKey
ALTER TABLE "VerificationCase" ADD CONSTRAINT "VerificationCase_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerificationCase" ADD CONSTRAINT "VerificationCase_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerificationSubject" ADD CONSTRAINT "VerificationSubject_verificationCaseId_fkey" FOREIGN KEY ("verificationCaseId") REFERENCES "VerificationCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerificationCheck" ADD CONSTRAINT "VerificationCheck_verificationCaseId_fkey" FOREIGN KEY ("verificationCaseId") REFERENCES "VerificationCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerificationResult" ADD CONSTRAINT "VerificationResult_verificationCaseId_fkey" FOREIGN KEY ("verificationCaseId") REFERENCES "VerificationCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerificationResult" ADD CONSTRAINT "VerificationResult_verificationCheckId_fkey" FOREIGN KEY ("verificationCheckId") REFERENCES "VerificationCheck"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerificationProviderResult" ADD CONSTRAINT "VerificationProviderResult_verificationCaseId_fkey" FOREIGN KEY ("verificationCaseId") REFERENCES "VerificationCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerificationTimelineEvent" ADD CONSTRAINT "VerificationTimelineEvent_verificationCaseId_fkey" FOREIGN KEY ("verificationCaseId") REFERENCES "VerificationCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerificationReport" ADD CONSTRAINT "VerificationReport_verificationCaseId_fkey" FOREIGN KEY ("verificationCaseId") REFERENCES "VerificationCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerificationAuditLog" ADD CONSTRAINT "VerificationAuditLog_verificationCaseId_fkey" FOREIGN KEY ("verificationCaseId") REFERENCES "VerificationCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;
