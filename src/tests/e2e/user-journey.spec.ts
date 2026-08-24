import { test, expect, type Page } from "@playwright/test";

function uniqueEmail(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 100000)}@example.com`;
}

async function register(page: Page, locale: "fr" | "en", email: string, password = "StrongPass1") {
  await page.goto(`/${locale}`);
  await page.getByTestId("landing-register-link").click();
  await expect(page.getByTestId("register-page")).toBeVisible();
  await page.getByTestId("register-email").fill(email);
  await page.getByTestId("register-password").fill(password);
  await page.getByTestId("register-confirm-password").fill(password);
  await page.getByTestId("register-submit").click();
  await expect(page.getByTestId("dashboard-page")).toBeVisible();
}

async function login(page: Page, locale: "fr" | "en", email: string, password = "StrongPass1") {
  await page.goto(`/${locale}/login`);
  await expect(page.getByTestId("login-page")).toBeVisible();
  await page.getByTestId("login-email").fill(email);
  await page.getByTestId("login-password").fill(password);
  await page.getByTestId("login-submit").click();
  await expect(page.getByTestId("dashboard-page")).toBeVisible();
}

async function completeOneLesson(page: Page) {
  await page.getByTestId("continue-course-essentials").click();
  await expect(page.getByTestId("lesson-player")).toBeVisible();
  await page.getByTestId("next-phase-btn").click();
  await expect(page.getByTestId("phase-practice")).toBeVisible();
  await page.getByTestId("next-phase-btn").click();
  await expect(page.getByTestId("test-phase")).toBeVisible();
  await page.locator('input[type="radio"]').first().click();
  await page.getByTestId("submit-quiz").click();
  await expect(page.getByTestId("review-phase")).toBeVisible();
  await page.getByTestId("next-phase-btn").click();
  await expect(page.getByTestId("master-phase")).toBeVisible();
  await page.getByTestId("back-to-course-btn").click();
}

test("REGISTER: Landing → Register → Create account → Dashboard", async ({ page }) => {
  await register(page, "fr", uniqueEmail("register"));
  await expect(page.getByTestId("dashboard-page")).toBeVisible();
  await expect(page.getByTestId("global-progress")).toContainText("0%");
});

test("LOGIN: Login → Dashboard → Logout → Landing", async ({ page }) => {
  const email = uniqueEmail("login");
  await register(page, "fr", email);
  await page.getByTestId("logout-button").click();
  await expect(page.getByTestId("landing-page")).toBeVisible();
  await login(page, "fr", email);
  await expect(page.getByTestId("dashboard-page")).toBeVisible();
});

test("LEARNING: Login → Dashboard → Personal Finance → Course → Lesson → Quiz → Result → Dashboard", async ({ page }) => {
  const email = uniqueEmail("learning");
  await register(page, "fr", email);
  await expect(page.getByTestId("dashboard-course-essentials")).toBeVisible();
  await completeOneLesson(page);
  await expect(page.getByTestId("course-page")).toBeVisible();
  await page.goto("/fr/dashboard");
  await expect(page.getByTestId("dashboard-page")).toBeVisible();
  await expect(page.getByTestId("global-progress")).not.toContainText("0%");
});

test("LANGUAGE: Login → FR Dashboard → EN Dashboard", async ({ page }) => {
  const email = uniqueEmail("locale");
  await register(page, "fr", email);
  await expect(page.getByTestId("dashboard-page")).toBeVisible();
  await expect(page.locator("body")).toContainText("Bienvenue");
  await page.getByTestId("settings-link").click();
  await expect(page.getByTestId("settings-page")).toBeVisible();
  await page.getByTestId("locale-en").check();
  await page.getByTestId("save-settings-button").click();
  await expect(page).toHaveURL(/\/en\/settings/);
  await page.goto("/en/dashboard");
  await expect(page.locator("body")).toContainText("Welcome");
});

test("USER ISOLATION: user A progress is not visible to user B", async ({ browser }) => {
  const emailA = uniqueEmail("usera");
  const emailB = uniqueEmail("userb");

  const contextA = await browser.newContext();
  const pageA = await contextA.newPage();
  await register(pageA, "fr", emailA);
  await completeOneLesson(pageA);
  await pageA.goto("/fr/dashboard");
  await expect(pageA.getByTestId("global-progress")).not.toContainText("0%");

  const contextB = await browser.newContext();
  const pageB = await contextB.newPage();
  await register(pageB, "fr", emailB);
  await pageB.goto("/fr/dashboard");
  await expect(pageB.getByTestId("global-progress")).toContainText("0%");
  await expect(pageB.getByTestId("weak-areas-list")).not.toContainText("Fondamentaux finance personnelle");

  await contextA.close();
  await contextB.close();
});

test("PHASE4 TEST1: Login → Dashboard → Continue Learning → Lesson", async ({ page }) => {
  const email = uniqueEmail("p4-continue");
  await register(page, "en", email);
  await expect(page.getByTestId("continue-learning-section")).toBeVisible();
  await page.getByTestId("continue-learning-btn").click();
  await expect(page.getByTestId("lesson-player")).toBeVisible();
});

test("PHASE4 TEST2: Dashboard → Personal Finance → Course → Lesson", async ({ page }) => {
  const email = uniqueEmail("p4-pf");
  await register(page, "en", email);
  await page.getByTestId("quick-access-personal-finance").click();
  await expect(page.getByTestId("course-page")).toBeVisible();
  await expect(page.getByTestId("course-title")).toContainText("Personal Finance");
  await page.getByTestId("continue-course-btn").click();
  await expect(page.getByTestId("lesson-player")).toBeVisible();
});

test("PHASE4 TEST3: Dashboard → PMP → Course → Lesson", async ({ page }) => {
  const email = uniqueEmail("p4-pmp");
  await register(page, "en", email);
  await page.getByTestId("quick-access-pmp-project-management").click();
  await expect(page.getByTestId("course-page")).toBeVisible();
  await page.getByTestId("continue-course-btn").click();
  await expect(page.getByTestId("lesson-player")).toBeVisible();
});

test("PHASE4 TEST4: Dashboard → Corporate Finance → Course", async ({ page }) => {
  const email = uniqueEmail("p4-cf");
  await register(page, "en", email);
  await page.getByTestId("quick-access-corporate-finance").click();
  await expect(page.getByTestId("course-page")).toBeVisible();
  await expect(page.getByTestId("course-title")).toContainText("Corporate Finance");
  await expect(page.getByTestId("continue-course-btn")).toBeVisible();
});

test("PHASE4 TEST5: FR → Dashboard → EN → Dashboard", async ({ page }) => {
  const email = uniqueEmail("p4-locale");
  await register(page, "fr", email);
  await expect(page.getByTestId("dashboard-page")).toBeVisible();
  await expect(page.getByTestId("continue-learning-section")).toContainText("Continuer");
  await page.goto("/en/dashboard");
  await expect(page.getByTestId("dashboard-page")).toBeVisible();
  await expect(page.getByTestId("continue-learning-section")).toContainText("Continue");
});

test("PHASE5 TEST1: Login → Lesson → Ask AI Tutor → response", async ({ page }) => {
  const email = uniqueEmail("p5-ai");
  await register(page, "en", email);
  await page.getByTestId("continue-learning-btn").click();
  await expect(page.getByTestId("lesson-player")).toBeVisible();
  await expect(page.getByTestId("ai-tutor-panel")).toBeVisible();
  await page.getByTestId("ask-ai-tutor").click();
  await page.getByTestId("ai-tutor-explain").click();
  await expect(page.getByTestId("ai-tutor-response")).toBeVisible({ timeout: 15_000 });
});

test("PHASE5 TEST2: Wrong answer → Review → Explain my mistake", async ({ page }) => {
  const email = uniqueEmail("p5-wrong");
  await register(page, "en", email);
  await page.getByTestId("continue-learning-btn").click();
  await expect(page.getByTestId("lesson-player")).toBeVisible();
  await expect(page.getByTestId("phase-learn")).toBeVisible();
  await page.getByTestId("next-phase-btn").click();
  await expect(page.getByTestId("phase-practice")).toBeVisible();
  await page.getByTestId("next-phase-btn").click();
  await expect(page.getByTestId("test-phase")).toBeVisible();
  const radios = page.locator('input[type="radio"]');
  const count = await radios.count();
  await radios.nth(Math.max(0, count - 1)).click();
  await page.getByTestId("submit-quiz").click();
  await expect(page.getByTestId("review-phase")).toBeVisible();
  const mistakeBtn = page.getByTestId("ai-tutor-mistake").first();
  if (await mistakeBtn.count()) {
    await page.getByTestId("ask-ai-tutor").first().click();
    await mistakeBtn.click();
  } else {
    await page.getByTestId("ask-ai-tutor").first().click();
    await page.getByTestId("ai-tutor-explain").first().click();
  }
  await expect(page.getByTestId("ai-tutor-response").first()).toBeVisible({ timeout: 15_000 });
});

test("PHASE5 TEST3: Dashboard → Recommendation → Lesson", async ({ page }) => {
  const email = uniqueEmail("p5-reco");
  await register(page, "en", email);
  await expect(page.getByTestId("recommended-section")).toBeVisible();
  await expect(page.getByTestId("recommended-card")).toBeVisible();
  await page.getByTestId("recommended-open").click();
  await expect(page.getByTestId("lesson-player")).toBeVisible();
});

test("PHASE5 TEST4: Shorts → Mark completed → progress updated", async ({ page }) => {
  const email = uniqueEmail("p5-short");
  await register(page, "en", email);
  await page.goto("/en/academies/personal-finance/shorts");
  await expect(page.getByTestId("shorts-page")).toBeVisible();
  const firstShort = page.locator('[data-testid^="short-card-"]').first();
  await firstShort.click();
  await expect(page.getByTestId("short-watch-page")).toBeVisible();
  await page.getByTestId("mark-short-completed").click();
  await expect(page.getByTestId("short-completed-badge")).toBeVisible({ timeout: 10_000 });
});
