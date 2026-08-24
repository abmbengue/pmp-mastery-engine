-- CreateEnum
CREATE TYPE "PmpDomain" AS ENUM ('PEOPLE', 'PROCESS', 'BUSINESS_ENVIRONMENT');

-- CreateEnum
CREATE TYPE "PmpDeliveryApproach" AS ENUM ('AGILE', 'HYBRID', 'PREDICTIVE');

-- CreateEnum
CREATE TYPE "ExamDifficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- CreateEnum
CREATE TYPE "ExamType" AS ENUM ('QUICK_PRACTICE', 'DOMAIN_PRACTICE', 'MOCK_EXAM', 'FULL_PMP');

-- CreateEnum
CREATE TYPE "ExamSessionStatus" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED', 'ABANDONED');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "QuestionType" ADD VALUE 'DRAG_DROP';
ALTER TYPE "QuestionType" ADD VALUE 'MATCHING';

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "deliveryApproach" "PmpDeliveryApproach",
ADD COLUMN     "examBank" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "examDifficulty" "ExamDifficulty",
ADD COLUMN     "externalKey" TEXT,
ADD COLUMN     "pmpDomain" "PmpDomain",
ADD COLUMN     "processArea" TEXT,
ADD COLUMN     "scenarioEn" TEXT,
ADD COLUMN     "scenarioFr" TEXT;

-- CreateTable
CREATE TABLE "QuestionSkill" (
    "id" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QuestionSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exam" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "type" "ExamType" NOT NULL,
    "titleFr" TEXT NOT NULL,
    "titleEn" TEXT NOT NULL,
    "descriptionFr" TEXT NOT NULL,
    "descriptionEn" TEXT NOT NULL,
    "questionCount" INTEGER NOT NULL,
    "durationMinutes" INTEGER NOT NULL DEFAULT 0,
    "domainFilter" "PmpDomain",
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Exam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamSession" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "examId" TEXT NOT NULL,
    "status" "ExamSessionStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "currentIndex" INTEGER NOT NULL DEFAULT 0,
    "elapsedSeconds" INTEGER NOT NULL DEFAULT 0,
    "remainingSeconds" INTEGER,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExamSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamSessionQuestion" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    "flagged" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExamSessionQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamAnswer" (
    "id" TEXT NOT NULL,
    "sessionQuestionId" TEXT NOT NULL,
    "selectedOptionIds" JSONB NOT NULL,
    "answeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExamAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamResult" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "rawScore" INTEGER NOT NULL,
    "percentage" DOUBLE PRECISION NOT NULL,
    "correctCount" INTEGER NOT NULL,
    "incorrectCount" INTEGER NOT NULL,
    "unansweredCount" INTEGER NOT NULL,
    "domainBreakdown" JSONB NOT NULL,
    "skillBreakdown" JSONB NOT NULL,
    "deliveryBreakdown" JSONB,
    "readinessLevel" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExamResult_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "QuestionSkill_skillId_idx" ON "QuestionSkill"("skillId");

-- CreateIndex
CREATE UNIQUE INDEX "QuestionSkill_questionId_skillId_key" ON "QuestionSkill"("questionId", "skillId");

-- CreateIndex
CREATE UNIQUE INDEX "Exam_slug_key" ON "Exam"("slug");

-- CreateIndex
CREATE INDEX "ExamSession_userId_status_idx" ON "ExamSession"("userId", "status");

-- CreateIndex
CREATE INDEX "ExamSession_userId_examId_idx" ON "ExamSession"("userId", "examId");

-- CreateIndex
CREATE INDEX "ExamSessionQuestion_questionId_idx" ON "ExamSessionQuestion"("questionId");

-- CreateIndex
CREATE UNIQUE INDEX "ExamSessionQuestion_sessionId_questionId_key" ON "ExamSessionQuestion"("sessionId", "questionId");

-- CreateIndex
CREATE UNIQUE INDEX "ExamSessionQuestion_sessionId_sortOrder_key" ON "ExamSessionQuestion"("sessionId", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "ExamAnswer_sessionQuestionId_key" ON "ExamAnswer"("sessionQuestionId");

-- CreateIndex
CREATE UNIQUE INDEX "ExamResult_sessionId_key" ON "ExamResult"("sessionId");

-- CreateIndex
CREATE UNIQUE INDEX "Question_externalKey_key" ON "Question"("externalKey");

-- CreateIndex
CREATE INDEX "Question_examBank_pmpDomain_idx" ON "Question"("examBank", "pmpDomain");

-- CreateIndex
CREATE INDEX "Question_examBank_deliveryApproach_idx" ON "Question"("examBank", "deliveryApproach");

-- AddForeignKey
ALTER TABLE "QuestionSkill" ADD CONSTRAINT "QuestionSkill_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionSkill" ADD CONSTRAINT "QuestionSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSession" ADD CONSTRAINT "ExamSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSession" ADD CONSTRAINT "ExamSession_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSessionQuestion" ADD CONSTRAINT "ExamSessionQuestion_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "ExamSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSessionQuestion" ADD CONSTRAINT "ExamSessionQuestion_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamAnswer" ADD CONSTRAINT "ExamAnswer_sessionQuestionId_fkey" FOREIGN KEY ("sessionQuestionId") REFERENCES "ExamSessionQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamResult" ADD CONSTRAINT "ExamResult_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "ExamSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;
