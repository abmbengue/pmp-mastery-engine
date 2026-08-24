import { beforeAll, describe, expect, it } from "vitest";
import prisma from "@/data/prisma-client";
import { listShortsByAcademy } from "@/modules/learning-engine/short-learning-service";
import {
  isShortCompletedForUser,
  markShortCompleted,
} from "@/modules/learning-engine/short-progress-service";

describe("short completion", () => {
  let userId: string;
  let shortId: string;
  let lessonId: string;

  beforeAll(async () => {
    const user = await prisma.user.create({
      data: {
        email: `short-${Date.now()}@example.com`,
        name: "Short User",
        locale: "EN",
      },
    });
    userId = user.id;

    const shorts = await listShortsByAcademy("personal-finance", "en");
    expect(shorts.length).toBeGreaterThan(0);
    shortId = shorts[0].id;

    const item = await prisma.learningItem.findUnique({ where: { id: shortId } });
    expect(item).not.toBeNull();
    lessonId = item!.lessonId;
  });

  it("marks short completed and stores metadata on lesson progress", async () => {
    const result = await markShortCompleted(userId, shortId);
    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.shortsCompleted).toContain(shortId);
    expect(await isShortCompletedForUser(userId, shortId)).toBe(true);

    const progress = await prisma.lessonProgress.findUnique({
      where: { userId_lessonId: { userId, lessonId } },
    });
    expect(progress).not.toBeNull();
    expect(progress!.status).toBe("IN_PROGRESS");
    const metadata = progress!.metadata as { shortsCompleted?: string[] };
    expect(metadata.shortsCompleted).toContain(shortId);
  });

  it("is idempotent when marking the same short twice", async () => {
    await markShortCompleted(userId, shortId);
    const again = await markShortCompleted(userId, shortId);
    expect(again.ok).toBe(true);
    if (!again.ok) return;
    expect(again.shortsCompleted.filter((id) => id === shortId)).toHaveLength(1);
  });
});
