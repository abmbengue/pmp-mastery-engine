import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import prisma from "@/data/prisma-client";
import type { Prisma } from "@/generated/prisma/client";
import { simulationTypeSchema } from "@/modules/simulation-engine/types";
import { getSimulationCatalogEntry } from "@/modules/simulation-engine/simulation-service";
import { updateConceptMastery } from "@/modules/learning-engine/progress-service";

const bodySchema = z.object({
  simulationType: simulationTypeSchema,
  scenarioId: z.enum(["BASE", "UPSIDE", "DOWNSIDE", "CUSTOM"]).default("CUSTOM"),
  /** Non-sensitive numeric snapshot only — never bank account / identity data */
  resultSnapshot: z
    .record(z.string(), z.union([z.number(), z.string(), z.boolean(), z.null()]))
    .optional(),
});

/**
 * Marks the linked lesson as having completed a simulation (metadata),
 * bumps progress, and gently raises mastery for the linked skill.
 */
export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ error: "malformed_request" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  }

  const entry = getSimulationCatalogEntry(parsed.data.simulationType);
  if (!entry) {
    return NextResponse.json({ error: "unknown_simulation" }, { status: 404 });
  }

  const lesson = await prisma.lesson.findFirst({
    where: {
      slug: entry.lessonSlug,
      module: {
        slug: entry.moduleSlug,
        course: {
          slug: entry.courseSlug,
          academy: { slug: entry.academySlug },
        },
      },
    },
    include: {
      skills: { include: { skill: true } },
    },
  });

  if (!lesson) {
    return NextResponse.json({ error: "lesson_not_found" }, { status: 404 });
  }

  const existing = await prisma.lessonProgress.findUnique({
    where: {
      userId_lessonId: { userId: session.user.id, lessonId: lesson.id },
    },
  });

  const metadata =
    existing?.metadata && typeof existing.metadata === "object"
      ? { ...(existing.metadata as Record<string, unknown>) }
      : {};

  const simulationsCompleted = Array.isArray(metadata.simulationsCompleted)
    ? [...(metadata.simulationsCompleted as string[])]
    : [];
  if (!simulationsCompleted.includes(parsed.data.simulationType)) {
    simulationsCompleted.push(parsed.data.simulationType);
  }

  metadata.simulationsCompleted = simulationsCompleted;
  metadata.lastSimulation = {
    type: parsed.data.simulationType,
    scenarioId: parsed.data.scenarioId,
    completedAt: new Date().toISOString(),
    // Store only aggregate numeric outputs — never personal financial accounts
    resultSnapshot: parsed.data.resultSnapshot ?? null,
  };

  const metadataJson = metadata as Prisma.InputJsonValue;

  await prisma.lessonProgress.upsert({
    where: {
      userId_lessonId: { userId: session.user.id, lessonId: lesson.id },
    },
    create: {
      userId: session.user.id,
      lessonId: lesson.id,
      status: "IN_PROGRESS",
      startedAt: new Date(),
      timeSpentSec: 120,
      metadata: metadataJson,
    },
    update: {
      status: existing?.status === "COMPLETED" ? "COMPLETED" : "IN_PROGRESS",
      timeSpentSec: (existing?.timeSpentSec ?? 0) + 60,
      metadata: metadataJson,
    },
  });

  const skill =
    lesson.skills.find((s) => s.skill.slug === entry.skillSlug)?.skill ??
    lesson.skills[0]?.skill;
  if (skill) {
    const current = await prisma.conceptMastery.findUnique({
      where: { userId_skillId: { userId: session.user.id, skillId: skill.id } },
    });
    const nextLevel =
      current?.level === "MASTERED"
        ? "MASTERED"
        : current?.level === "LEARNING"
          ? "LEARNING"
          : "LEARNING";
    await updateConceptMastery(session.user.id, skill.id, nextLevel);
  }

  return NextResponse.json({
    ok: true,
    lessonId: lesson.id,
    simulationsCompleted,
  });
}
