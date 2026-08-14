/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `CreditPackage` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "CreditPurchase" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "userId" TEXT,
    "packageId" TEXT NOT NULL,
    "credits" INTEGER NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'ZAR',
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "paymentGateway" TEXT,
    "paymentReference" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "paidAt" TIMESTAMP(3),

    CONSTRAINT "CreditPurchase_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CreditPurchase_companyId_idx" ON "CreditPurchase"("companyId");

-- CreateIndex
CREATE INDEX "CreditPurchase_userId_idx" ON "CreditPurchase"("userId");

-- CreateIndex
CREATE INDEX "CreditPurchase_packageId_idx" ON "CreditPurchase"("packageId");

-- CreateIndex
CREATE INDEX "CreditPurchase_status_idx" ON "CreditPurchase"("status");

-- CreateIndex
CREATE INDEX "CreditPurchase_createdAt_idx" ON "CreditPurchase"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "CreditPurchase_paymentGateway_paymentReference_key" ON "CreditPurchase"("paymentGateway", "paymentReference");

-- CreateIndex
CREATE UNIQUE INDEX "CreditPackage_name_key" ON "CreditPackage"("name");

-- AddForeignKey
ALTER TABLE "CreditPurchase" ADD CONSTRAINT "CreditPurchase_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditPurchase" ADD CONSTRAINT "CreditPurchase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditPurchase" ADD CONSTRAINT "CreditPurchase_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "CreditPackage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
