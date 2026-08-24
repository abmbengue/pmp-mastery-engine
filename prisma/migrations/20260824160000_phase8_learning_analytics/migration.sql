-- CreateEnum
CREATE TYPE "PmpScenarioType" AS ENUM ('FIRST_ACTION', 'NEXT_ACTION', 'BEST_ACTION', 'PREVENTION', 'ROOT_CAUSE', 'STAKEHOLDER', 'RISK', 'CHANGE', 'CONFLICT', 'AGILE', 'HYBRID', 'GOVERNANCE');

-- CreateEnum
CREATE TYPE "LearningObjective" AS ENUM ('IDENTIFY', 'APPLY', 'ANALYZE', 'DECIDE');

-- CreateEnum
CREATE TYPE "ExamErrorCategory" AS ENUM ('KNOWLEDGE_GAP', 'MISREAD_SCENARIO', 'WRONG_PRIORITY', 'WRONG_ACTION', 'AGILE_MINDSET', 'STAKEHOLDER_ERROR', 'RISK_ERROR', 'PROCESS_ERROR', 'OTHER');

-- CreateEnum
CREATE TYPE "RetryType" AS ENUM ('RETRY_WRONG_QUESTIONS', 'RETRY_WEAK_SKILLS', 'RETRY_WEAK_DOMAIN', 'RETRY_ERROR_TYPE', 'RETRY_MIXED');

-- CreateEnum
CREATE TYPE "ScoreTrend" AS ENUM ('IMPROVING', 'STABLE', 'DECLINING', 'INSUFFICIENT_DATA');

-- AlterTable
ALTER TABLE "ExamResult" ADD COLUMN     "errorBreakdown" JSONB,
ADD COLUMN     "readinessExplanationEn" TEXT,
ADD COLUMN     "readinessExplanationFr" TEXT,
ADD COLUMN     "scoreTrend" "ScoreTrend";

-- AlterTable
ALTER TABLE "ExamSession" ADD COLUMN     "blueprintSeed" TEXT,
ADD COLUMN     "parentSessionId" TEXT,
ADD COLUMN     "retryType" "RetryType";

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "learningObjective" "LearningObjective",
ADD COLUMN     "scenarioType" "PmpScenarioType";

-- CreateTable
CREATE TABLE "ExamError" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "sessionQuestionId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "skillSlug" TEXT,
    "domain" "PmpDomain",
    "category" "ExamErrorCategory" NOT NULL,
    "learnerOverride" "ExamErrorCategory",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExamError_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PracticeTarget" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "targetScorePercent" INTEGER NOT NULL DEFAULT 75,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PracticeTarget_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExamError_sessionQuestionId_key" ON "ExamError"("sessionQuestionId");

-- CreateIndex
CREATE INDEX "ExamError_userId_category_idx" ON "ExamError"("userId", "category");

-- CreateIndex
CREATE INDEX "ExamError_userId_skillSlug_idx" ON "ExamError"("userId", "skillSlug");

-- CreateIndex
CREATE INDEX "ExamError_userId_questionId_idx" ON "ExamError"("userId", "questionId");

-- CreateIndex
CREATE UNIQUE INDEX "PracticeTarget_userId_key" ON "PracticeTarget"("userId");

-- CreateIndex
CREATE INDEX "ExamSession_parentSessionId_idx" ON "ExamSession"("parentSessionId");

-- CreateIndex
CREATE INDEX "Question_examBank_scenarioType_idx" ON "Question"("examBank", "scenarioType");

-- AddForeignKey
ALTER TABLE "ExamSession" ADD CONSTRAINT "ExamSession_parentSessionId_fkey" FOREIGN KEY ("parentSessionId") REFERENCES "ExamSession"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamError" ADD CONSTRAINT "ExamError_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamError" ADD CONSTRAINT "ExamError_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "ExamSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamError" ADD CONSTRAINT "ExamError_sessionQuestionId_fkey" FOREIGN KEY ("sessionQuestionId") REFERENCES "ExamSessionQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamError" ADD CONSTRAINT "ExamError_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PracticeTarget" ADD CONSTRAINT "PracticeTarget_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
