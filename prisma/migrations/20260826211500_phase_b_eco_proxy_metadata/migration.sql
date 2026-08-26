-- Phase B: PLA ECO-proxy mastery metadata on exam questions (no stem changes)
ALTER TABLE "Question" ADD COLUMN IF NOT EXISTS "ecoTaskCode" TEXT;
ALTER TABLE "Question" ADD COLUMN IF NOT EXISTS "conceptSlug" TEXT;

CREATE INDEX IF NOT EXISTS "Question_examBank_ecoTaskCode_idx" ON "Question"("examBank", "ecoTaskCode");
CREATE INDEX IF NOT EXISTS "Question_conceptSlug_idx" ON "Question"("conceptSlug");
