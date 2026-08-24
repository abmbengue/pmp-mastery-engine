-- AlterTable
ALTER TABLE "ConceptMastery" ADD COLUMN IF NOT EXISTS "nextReviewAt" TIMESTAMP(3);

-- CreateIndex
CREATE INDEX IF NOT EXISTS "ConceptMastery_userId_nextReviewAt_idx" ON "ConceptMastery"("userId", "nextReviewAt");
