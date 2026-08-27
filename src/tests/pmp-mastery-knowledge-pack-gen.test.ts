import { describe, it } from "vitest";
import { writeFileSync, mkdirSync } from "fs";
import { buildKnowledgePack, knowledgePackJson } from "@/modules/mastery-engine/knowledge-pack";
import { buildCoverageMatrix } from "@/modules/mastery-engine/coverage-matrix";
import { PMP_EXAM_BANK } from "../../prisma/seed/pmp-exam-bank-data";
import { PMP_QUESTION_MASTERY_METADATA } from "../../prisma/seed/pmp-question-mastery-metadata";

describe("generate knowledge pack files", () => {
  it("writes knowledge/ exports once", () => {
    mkdirSync("knowledge", { recursive: true });
    writeFileSync("knowledge/PMP_MASTER_KNOWLEDGE_PACK.json", knowledgePackJson());
    const pack = buildKnowledgePack();
    const cov = buildCoverageMatrix(PMP_EXAM_BANK);
    const unverified = PMP_QUESTION_MASTERY_METADATA.filter(
      (m) => m.mappingStatus !== "VERIFIED"
    ).length;
    writeFileSync(
      "knowledge/PMP_MASTER_KNOWLEDGE_PACK.md",
      [
        "# PMP Master Knowledge Pack (Phase B / B.1)",
        "",
        `**Version:** ${pack.version}`,
        `**Generated:** ${pack.generatedAt}`,
        "",
        "> PLA proprietary mastery layer. **Not** official PMI certification content.",
        "",
        "## Source governance (B.1)",
        "",
        "- Primary ECO July 2026: **26 tasks** (People 8 / Process 10 / Business 8).",
        "- Previous pack v1.0 incorrectly listed 24 tasks and omitted PEOPLE-T07 / PEOPLE-T08.",
        "- Authoritative corrected source: `knowledge/PMP_MASTER_KNOWLEDGE_PACK.source.md`.",
        "- This JSON/MD export is generated from `src/modules/mastery-engine/` (already 26-task).",
        "",
        "## Counts",
        "",
        `| ECO tasks | ${pack.counts.ecoTasks} |`,
        `| People | 8 |`,
        `| Process | 10 |`,
        `| Business | 8 |`,
        `| PMBOK PDs | ${pack.counts.pmbokDomains} |`,
        `| Concepts | ${pack.counts.concepts} |`,
        `| Skills | ${pack.counts.skills} |`,
        `| Misconceptions | ${pack.counts.misconceptions} |`,
        "",
        `ECO gaps: ${cov.gaps.ecoTaskIds.join(", ") || "none"}`,
        `Partial/unverified mappings: ${unverified}/200`,
      ].join("\n")
    );
    writeFileSync(
      "knowledge/CURSOR_IMPORT_PMP_MASTER_KNOWLEDGE.md",
      [
        "# Cursor import — PMP Master Knowledge Pack",
        "",
        "1. Prefer `knowledge/PMP_MASTER_KNOWLEDGE_PACK.source.md` (v1.1, 26 ECO tasks)",
        "2. Runtime module: `src/modules/mastery-engine/`",
        "3. Generated pack: `knowledge/PMP_MASTER_KNOWLEDGE_PACK.json`",
        "4. Exam metadata: `prisma/seed/pmp-question-mastery-metadata.ts`",
        "5. `DERIVED_PEDAGOGICAL` is not official PMI",
        "6. Do **not** regress to 24 tasks — PEOPLE-T07 and PEOPLE-T08 are official ECO",
        "7. Re-verify when full PMBOK/instructor sources are imported",
      ].join("\n")
    );
  });
});
