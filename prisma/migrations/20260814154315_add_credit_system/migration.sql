-- CreateTable
CREATE TABLE "CreditWallet" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CreditWallet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CreditTransaction" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "walletId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "balanceBefore" INTEGER NOT NULL,
    "balanceAfter" INTEGER NOT NULL,
    "description" TEXT,
    "reference" TEXT,
    "verificationId" TEXT,
    "verificationCheckId" TEXT,
    "createdByUserId" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CreditTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationPricing" (
    "id" TEXT NOT NULL,
    "checkKey" TEXT NOT NULL,
    "checkName" TEXT NOT NULL,
    "category" TEXT,
    "creditCost" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationPricing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationUsage" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "verificationId" TEXT NOT NULL,
    "verificationCheckId" TEXT NOT NULL,
    "pricingId" TEXT NOT NULL,
    "creditsConsumed" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VerificationUsage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CreditWallet_companyId_key" ON "CreditWallet"("companyId");

-- CreateIndex
CREATE INDEX "CreditWallet_companyId_idx" ON "CreditWallet"("companyId");

-- CreateIndex
CREATE INDEX "CreditTransaction_companyId_idx" ON "CreditTransaction"("companyId");

-- CreateIndex
CREATE INDEX "CreditTransaction_walletId_idx" ON "CreditTransaction"("walletId");

-- CreateIndex
CREATE INDEX "CreditTransaction_type_idx" ON "CreditTransaction"("type");

-- CreateIndex
CREATE INDEX "CreditTransaction_verificationId_idx" ON "CreditTransaction"("verificationId");

-- CreateIndex
CREATE INDEX "CreditTransaction_verificationCheckId_idx" ON "CreditTransaction"("verificationCheckId");

-- CreateIndex
CREATE INDEX "CreditTransaction_createdAt_idx" ON "CreditTransaction"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationPricing_checkKey_key" ON "VerificationPricing"("checkKey");

-- CreateIndex
CREATE INDEX "VerificationPricing_active_idx" ON "VerificationPricing"("active");

-- CreateIndex
CREATE INDEX "VerificationPricing_category_idx" ON "VerificationPricing"("category");

-- CreateIndex
CREATE INDEX "VerificationUsage_companyId_idx" ON "VerificationUsage"("companyId");

-- CreateIndex
CREATE INDEX "VerificationUsage_verificationId_idx" ON "VerificationUsage"("verificationId");

-- CreateIndex
CREATE INDEX "VerificationUsage_pricingId_idx" ON "VerificationUsage"("pricingId");

-- CreateIndex
CREATE INDEX "VerificationUsage_createdAt_idx" ON "VerificationUsage"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationUsage_verificationCheckId_key" ON "VerificationUsage"("verificationCheckId");

-- AddForeignKey
ALTER TABLE "CreditWallet" ADD CONSTRAINT "CreditWallet_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditTransaction" ADD CONSTRAINT "CreditTransaction_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditTransaction" ADD CONSTRAINT "CreditTransaction_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "CreditWallet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditTransaction" ADD CONSTRAINT "CreditTransaction_verificationId_fkey" FOREIGN KEY ("verificationId") REFERENCES "VerificationCase"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditTransaction" ADD CONSTRAINT "CreditTransaction_verificationCheckId_fkey" FOREIGN KEY ("verificationCheckId") REFERENCES "VerificationCheck"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditTransaction" ADD CONSTRAINT "CreditTransaction_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerificationUsage" ADD CONSTRAINT "VerificationUsage_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerificationUsage" ADD CONSTRAINT "VerificationUsage_verificationId_fkey" FOREIGN KEY ("verificationId") REFERENCES "VerificationCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerificationUsage" ADD CONSTRAINT "VerificationUsage_verificationCheckId_fkey" FOREIGN KEY ("verificationCheckId") REFERENCES "VerificationCheck"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerificationUsage" ADD CONSTRAINT "VerificationUsage_pricingId_fkey" FOREIGN KEY ("pricingId") REFERENCES "VerificationPricing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
