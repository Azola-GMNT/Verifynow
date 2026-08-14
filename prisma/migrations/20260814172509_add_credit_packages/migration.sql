-- CreateTable
CREATE TABLE "CreditPackage" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "credits" INTEGER NOT NULL,
    "price" DECIMAL(12,2) NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'ZAR',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CreditPackage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CreditPackage_active_idx" ON "CreditPackage"("active");

-- CreateIndex
CREATE INDEX "CreditPackage_sortOrder_idx" ON "CreditPackage"("sortOrder");
