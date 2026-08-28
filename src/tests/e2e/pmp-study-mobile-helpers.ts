import { expect, type Page } from "@playwright/test";

export const MOBILE_VIEWPORT = { width: 390, height: 844 };

export async function enterDemo(page: Page, locale: "fr" | "en" = "en") {
  await page.context().clearCookies();
  await page.goto(`/${locale}`);
  await expect(page.getByTestId("landing-demo-link")).toBeVisible();
  await page.getByTestId("landing-demo-link").click();
  await expect(page).toHaveURL(new RegExp(`/${locale}/dashboard`), { timeout: 15_000 });
  await expect(page.getByTestId("dashboard-page")).toBeVisible({ timeout: 15_000 });
}

export async function answerLessonQuiz(page: Page) {
  const fieldsets = page.locator('[data-testid="test-phase"] fieldset');
  const count = await fieldsets.count();
  for (let i = 0; i < count; i++) {
    const fieldset = fieldsets.nth(i);
    const input = fieldset.locator('input[type="radio"]').first();
    await input.click();
    await fieldset.getByTestId(/confidence-.*-3/).click();
  }
  await page.getByTestId("submit-quiz").click();
}

export async function assertNoHorizontalOverflow(page: Page) {
  const metrics = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
}

export async function advancePedagogyStep(
  stepped: ReturnType<Page["getByTestId"]>,
  stepTestId: string,
  progressLabel: string,
  nextProgressLabel?: string
) {
  await expect(stepped.getByTestId(stepTestId)).toBeVisible({ timeout: 15_000 });
  await expect(stepped.getByTestId("pedagogy-step-progress")).toContainText(progressLabel);
  const continueBtn = stepped.getByTestId("pedagogy-step-continue");
  await expect(continueBtn).toHaveCount(1);
  await continueBtn.scrollIntoViewIfNeeded();
  await continueBtn.click();
  if (nextProgressLabel) {
    await expect(stepped.getByTestId("pedagogy-step-progress")).toContainText(
      nextProgressLabel,
      { timeout: 15_000 }
    );
  }
}

export async function navigateToSharedVisionLesson(page: Page) {
  await page.getByTestId("nav-pmp-study").click();
  await expect(page.getByTestId("pmp-study-hub")).toBeVisible({ timeout: 15_000 });
  await page.getByTestId("pmp-study-domain-PEOPLE").click();
  await expect(page.getByTestId("pmp-study-domain")).toBeVisible();
  await page.getByTestId("pmp-study-task-PEOPLE-T01").click();
  await expect(page.getByTestId("pmp-study-task")).toBeVisible();
  await page.getByTestId("open-lesson-shared-vision").click();
  await expect(page.getByTestId("lesson-page")).toBeVisible({ timeout: 20_000 });
  await page.waitForLoadState("networkidle");
}

export async function navigateToRiskVsIssueLesson(page: Page) {
  await page.getByTestId("nav-pmp-study").click();
  await expect(page.getByTestId("pmp-study-hub")).toBeVisible({ timeout: 15_000 });
  await page.getByTestId("pmp-study-domain-BUSINESS").click();
  await expect(page.getByTestId("pmp-study-domain")).toBeVisible();
  await page.getByTestId("pmp-study-task-BUSINESS-T05").click();
  await expect(page.getByTestId("pmp-study-task")).toBeVisible();
  await expect(page.getByTestId("task-lesson-risk-vs-issue")).toBeVisible();
  await page.getByTestId("open-lesson-risk-vs-issue").click();
  await expect(page.getByTestId("lesson-page")).toBeVisible({ timeout: 20_000 });
  await page.waitForLoadState("networkidle");
}
