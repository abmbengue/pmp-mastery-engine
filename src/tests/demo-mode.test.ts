import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/auth", () => ({
  auth: vi.fn(),
  signIn: vi.fn(),
  signOut: vi.fn(),
  handlers: { GET: vi.fn(), POST: vi.fn() },
}));

import prisma from "@/data/prisma-client";
import {
  DEMO_USER_EMAIL,
  getDemoPassword,
  isDemoModeEnabled,
  isDemoUserEmail,
  isDemoUserSession,
} from "@/modules/demo/demo-config";
import { getDashboardV2 } from "@/modules/dashboard/dashboard-service";
import { resetDemoUserData } from "@/modules/demo/demo-reset-service";

describe("demo mode configuration", () => {
  const originalDemoMode = process.env.DEMO_MODE;
  const originalDemoPassword = process.env.DEMO_USER_PASSWORD;

  afterEach(() => {
    process.env.DEMO_MODE = originalDemoMode;
    process.env.DEMO_USER_PASSWORD = originalDemoPassword;
  });

  it("DEMO_MODE=false → demo disabled", () => {
    process.env.DEMO_MODE = "false";
    expect(isDemoModeEnabled()).toBe(false);
    expect(getDemoPassword()).toBeNull();
  });

  it("DEMO_MODE unset → demo disabled", () => {
    delete process.env.DEMO_MODE;
    expect(isDemoModeEnabled()).toBe(false);
  });

  it("DEMO_MODE=true with password → demo available", () => {
    process.env.DEMO_MODE = "true";
    process.env.DEMO_USER_PASSWORD = "Demo123!";
    expect(isDemoModeEnabled()).toBe(true);
    expect(getDemoPassword()).toBe("Demo123!");
  });

  it("identifies demo user email and session", () => {
    expect(isDemoUserEmail("demo@pla.local")).toBe(true);
    expect(isDemoUserEmail("other@example.com")).toBe(false);
    expect(
      isDemoUserSession({ user: { email: DEMO_USER_EMAIL, id: "x" } })
    ).toBe(true);
    expect(
      isDemoUserSession({ user: { email: "other@example.com", id: "y" } })
    ).toBe(false);
  });
});

describe("demo user data", () => {
  let demoUserId: string;

  beforeAll(async () => {
    const user = await prisma.user.findUnique({
      where: { email: DEMO_USER_EMAIL },
    });
    if (!user) throw new Error("Demo user missing — run npm run db:seed");
    demoUserId = user.id;
  });

  it("session demo → dashboard shows seeded demo data", async () => {
    const dashboard = await getDashboardV2(demoUserId, "fr");
    expect(dashboard.stats.lessonsCompleted).toBeGreaterThan(0);
    expect(dashboard.stats.globalProgressPercent).toBeGreaterThan(0);
    expect(dashboard.stats.currentStreak).toBeGreaterThan(0);
    expect(dashboard.myLearning.length).toBeGreaterThanOrEqual(3);
    expect(
      dashboard.skills.weak.length +
        dashboard.skills.learning.length +
        dashboard.skills.mastered.length
    ).toBeGreaterThan(0);
  });

  it("FR dashboard labels resolve for demo user", async () => {
    const dashboard = await getDashboardV2(demoUserId, "fr");
    expect(dashboard.continueLearning?.academyTitle.length).toBeGreaterThan(0);
  });

  it("EN dashboard labels resolve for demo user", async () => {
    const dashboard = await getDashboardV2(demoUserId, "en");
    expect(dashboard.continueLearning?.academyTitle.length).toBeGreaterThan(0);
  });

  it("reset demo restores initial pedagogical snapshot", async () => {
    await prisma.lessonProgress.deleteMany({ where: { userId: demoUserId } });
    await resetDemoUserData();

    const dashboard = await getDashboardV2(demoUserId, "en");
    expect(dashboard.stats.lessonsCompleted).toBeGreaterThan(0);
    expect(dashboard.stats.currentStreak).toBe(5);
  });
});

describe("demo reset API authorization", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it("reset demo impossible when DEMO_MODE=false", async () => {
    vi.stubEnv("DEMO_MODE", "false");
    const { auth } = await import("@/auth");
    vi.mocked(auth).mockResolvedValue({
      user: { id: "demo-id", email: DEMO_USER_EMAIL },
      expires: "",
    });
    const { POST } = await import("@/app/api/demo/reset/route");
    const response = await POST();
    expect(response.status).toBe(404);
  });

  it("reset demo forbidden for real user session", async () => {
    vi.stubEnv("DEMO_MODE", "true");
    const { auth } = await import("@/auth");
    vi.mocked(auth).mockResolvedValue({
      user: { id: "real-user", email: "real@example.com" },
      expires: "",
    });
    const { POST } = await import("@/app/api/demo/reset/route");
    const response = await POST();
    expect(response.status).toBe(403);
  });

  it("reset demo allowed for demo user when enabled", async () => {
    vi.stubEnv("DEMO_MODE", "true");
    const demoUser = await prisma.user.findUnique({
      where: { email: DEMO_USER_EMAIL },
    });
    if (!demoUser) throw new Error("Demo user missing");

    const { auth } = await import("@/auth");
    vi.mocked(auth).mockResolvedValue({
      user: { id: demoUser.id, email: DEMO_USER_EMAIL },
      expires: "",
    });
    const { POST } = await import("@/app/api/demo/reset/route");
    const response = await POST();
    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body.ok).toBe(true);
  });
});
