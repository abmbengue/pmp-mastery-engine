import { test, expect, type Page } from "@playwright/test";

const MOBILE_VIEWPORT = { width: 390, height: 844 };

async function enterDemo(page: Page, locale: "fr" | "en" = "en") {
  await page.context().clearCookies();
  await page.goto(`/${locale}`);
  await expect(page.getByTestId("landing-demo-link")).toBeVisible();
  await page.getByTestId("landing-demo-link").click();
  await expect(page).toHaveURL(new RegExp(`/${locale}/dashboard`), { timeout: 15_000 });
  await expect(page.getByTestId("dashboard-page")).toBeVisible({ timeout: 15_000 });
}

async function answerLessonQuiz(page: Page) {
  const fieldsets = page.locator('[data-testid="test-phase"] fieldset');
  const count = await fieldsets.count();
  for (let i = 0; i < count; i++) {
    const input = fieldsets.nth(i).locator('input[type="radio"]').first();
    await input.click();
  }
  await page.getByTestId("submit-quiz").click();
}

async function assertNoHorizontalOverflow(page: Page) {
  const metrics = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
}

async function advancePedagogyStep(
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

test.describe("PMP Study — Shared Vision mobile E2E", () => {
  test.use({ viewport: MOBILE_VIEWPORT });

  test("PMP Study → People → T01 → stepped LEARN → MASTER @390px", async ({ page }) => {
    test.setTimeout(120_000);

    await enterDemo(page, "en");

    await page.getByTestId("nav-pmp-study").click();
    await expect(page.getByTestId("pmp-study-hub")).toBeVisible({ timeout: 15_000 });
    await assertNoHorizontalOverflow(page);

    await page.getByTestId("pmp-study-domain-PEOPLE").click();
    await expect(page.getByTestId("pmp-study-domain")).toBeVisible();

    await page.getByTestId("pmp-study-task-PEOPLE-T01").click();
    await expect(page.getByTestId("pmp-study-task")).toBeVisible();
    await expect(page.getByTestId("task-lesson-shared-vision")).toBeVisible();
    await expect(
      page.getByTestId("task-continue-lesson").or(page.getByTestId("task-start-lesson"))
    ).toBeVisible();

    await page.getByTestId("open-lesson-shared-vision").click();
    await expect(page.getByTestId("lesson-page")).toBeVisible({ timeout: 20_000 });
    await page.waitForLoadState("networkidle");
    await expect(page.getByTestId("back-to-eco-task-link")).toBeVisible();
    await expect(page.getByTestId("lesson-player")).toBeVisible();
    await expect(page.getByTestId("phase-learn")).toBeVisible();

    const stepped = page.getByTestId("pedagogy-stepped-learn");
    await expect(stepped).toBeVisible({ timeout: 15_000 });

    await advancePedagogyStep(stepped, "pedagogy-step-what", "Step 1 / 7", "Step 2 / 7");
    await advancePedagogyStep(stepped, "pedagogy-step-why", "Step 2 / 7", "Step 3 / 7");
    await advancePedagogyStep(stepped, "pedagogy-step-recognize", "Step 3 / 7", "Step 4 / 7");
    await advancePedagogyStep(stepped, "pedagogy-step-decide", "Step 4 / 7", "Step 5 / 7");
    await advancePedagogyStep(stepped, "pedagogy-step-distinctions", "Step 5 / 7", "Step 6 / 7");

    await expect(stepped.getByTestId("pedagogy-step-mini-case")).toBeVisible();
    await expect(stepped.getByTestId("pedagogy-step-progress")).toContainText("Step 6 / 7");
    await stepped.getByTestId("mini-case-show-options").click();
    await stepped.getByTestId("mini-case-choice-b").click();
    await expect(stepped.getByTestId("mini-case-rationale")).toBeVisible();
    const miniContinue = stepped.getByTestId("pedagogy-step-continue-after-mini-case");
    await expect(miniContinue).toBeVisible();
    await miniContinue.click();

    await expect(stepped.getByTestId("pedagogy-step-takeaway")).toBeVisible();
    await expect(stepped.getByTestId("pedagogy-step-progress")).toContainText("Step 7 / 7");
    await assertNoHorizontalOverflow(page);

    await expect(page.getByTestId("pedagogy-lesson-body")).toBeVisible();
    await expect(page.getByTestId("text-block")).toBeVisible();

    await page.getByTestId("next-phase-btn").scrollIntoViewIfNeeded();
    await page.getByTestId("next-phase-btn").click();
    await expect(page.getByTestId("phase-practice")).toBeVisible({ timeout: 15_000 });

    await page.getByTestId("next-phase-btn").click();
    await expect(page.getByTestId("test-phase")).toBeVisible({ timeout: 15_000 });
    await answerLessonQuiz(page);
    await expect(page.getByTestId("review-phase")).toBeVisible({ timeout: 20_000 });

    await page.getByTestId("next-phase-btn").click();
    await expect(page.getByTestId("master-phase")).toBeVisible({ timeout: 15_000 });
    await assertNoHorizontalOverflow(page);
  });
});
