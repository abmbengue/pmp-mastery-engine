-- CreateEnum
CREATE TYPE "ContentDifficulty" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED');

-- AlterTable
ALTER TABLE "Lesson" ADD COLUMN     "difficulty" "ContentDifficulty" NOT NULL DEFAULT 'BEGINNER';

-- AlterTable
ALTER TABLE "Module" ADD COLUMN     "category" TEXT;

-- CreateTable
CREATE TABLE "LessonSkill" (
    "id" TEXT NOT NULL,
    "lessonId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LessonSkill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "LessonSkill_skillId_idx" ON "LessonSkill"("skillId");

-- CreateIndex
CREATE UNIQUE INDEX "LessonSkill_lessonId_skillId_key" ON "LessonSkill"("lessonId", "skillId");

-- AddForeignKey
ALTER TABLE "LessonSkill" ADD CONSTRAINT "LessonSkill_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LessonSkill" ADD CONSTRAINT "LessonSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
