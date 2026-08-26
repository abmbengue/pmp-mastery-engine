-- Phase B: mastery metadata layer + optional confidence on attempts
ALTER TABLE "QuizAttempt" ADD COLUMN IF NOT EXISTS "confidenceLevel" TEXT;
ALTER TABLE "ExamAnswer" ADD COLUMN IF NOT EXISTS "confidenceLevel" TEXT;

CREATE TABLE IF NOT EXISTS "QuestionMasteryMetadata" (
  "id" TEXT NOT NULL,
  "externalKey" TEXT NOT NULL,
  "questionId" TEXT,
  "ecoDomain" TEXT NOT NULL,
  "ecoTaskId" TEXT NOT NULL,
  "ecoTaskIdsSecondary" JSONB,
  "pmbokPerformanceDomain" TEXT,
  "pmbokPerformanceDomainsSecondary" JSONB,
  "crossCutting" JSONB,
  "primaryConceptId" TEXT NOT NULL,
  "secondaryConceptIds" JSONB,
  "primarySkillId" TEXT,
  "secondarySkillIds" JSONB,
  "cognitiveLevel" TEXT NOT NULL,
  "difficulty" TEXT NOT NULL,
  "approach" TEXT NOT NULL,
  "misconceptionIds" JSONB,
  "mappingStatus" TEXT NOT NULL,
  "mappingConfidence" TEXT NOT NULL,
  "sourceType" TEXT NOT NULL,
  "sourceConfidence" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "QuestionMasteryMetadata_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "QuestionMasteryMetadata_externalKey_key" ON "QuestionMasteryMetadata"("externalKey");
CREATE UNIQUE INDEX IF NOT EXISTS "QuestionMasteryMetadata_questionId_key" ON "QuestionMasteryMetadata"("questionId");
CREATE INDEX IF NOT EXISTS "QuestionMasteryMetadata_ecoTaskId_idx" ON "QuestionMasteryMetadata"("ecoTaskId");
CREATE INDEX IF NOT EXISTS "QuestionMasteryMetadata_primaryConceptId_idx" ON "QuestionMasteryMetadata"("primaryConceptId");
CREATE INDEX IF NOT EXISTS "QuestionMasteryMetadata_mappingStatus_idx" ON "QuestionMasteryMetadata"("mappingStatus");

DO $$ BEGIN
  ALTER TABLE "QuestionMasteryMetadata" ADD CONSTRAINT "QuestionMasteryMetadata_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE SET NULL ON UPDATE CASCADE;
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;
