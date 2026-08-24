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
