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
        "# PMP Master Knowledge Pack (Phase B)",
        "",
        `**Version:** ${pack.version}`,
        `**Generated:** ${pack.generatedAt}`,
        "",
        "> PLA proprietary mastery layer. **Not** official PMI certification content.",
        "",
        "## Counts",
        "",
        `| ECO tasks | ${pack.counts.ecoTasks} |`,
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
        "1. Read `knowledge/PMP_MASTER_KNOWLEDGE_PACK.json`",
        "2. Runtime module: `src/modules/mastery-engine/`",
        "3. Exam metadata: `prisma/seed/pmp-question-mastery-metadata.ts`",
        "4. `DERIVED_PEDAGOGICAL` is not official PMI",
        "5. Re-verify when full PMBOK/instructor sources are imported",
      ].join("\n")
    );
  });
});
