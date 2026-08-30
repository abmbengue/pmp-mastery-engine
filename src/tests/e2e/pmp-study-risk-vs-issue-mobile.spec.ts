import { test, expect } from "@playwright/test";
import {
  MOBILE_VIEWPORT,
  enterDemo,
  answerLessonQuiz,
  assertNoHorizontalOverflow,
  advancePedagogyStep,
  navigateToRiskVsIssueLesson,
} from "./pmp-study-mobile-helpers";

test.describe("PMP Study — risk-vs-issue mobile E2E (no MINI CASE)", () => {
  test.use({ viewport: MOBILE_VIEWPORT });

  test("BUSINESS-T05 → stepped LEARN without mini-case → MASTER @390px", async ({ page }) => {
    test.setTimeout(120_000);

    await enterDemo(page, "en");
    await navigateToRiskVsIssueLesson(page);
    await assertNoHorizontalOverflow(page);

    await expect(page.getByTestId("back-to-eco-task-link")).toBeVisible();
    await expect(page.getByTestId("lesson-player")).toBeVisible();
    await expect(page.getByTestId("phase-learn")).toBeVisible();

    const stepped = page.getByTestId("pedagogy-stepped-learn");
    await expect(stepped).toBeVisible({ timeout: 15_000 });
    await expect(stepped.getByTestId("pedagogy-step-mini-case")).toHaveCount(0);

    await advancePedagogyStep(stepped, "pedagogy-step-what", "Step 1 / 6", "Step 2 / 6");
    await advancePedagogyStep(stepped, "pedagogy-step-why", "Step 2 / 6", "Step 3 / 6");
    await advancePedagogyStep(stepped, "pedagogy-step-recognize", "Step 3 / 6", "Step 4 / 6");
    await advancePedagogyStep(stepped, "pedagogy-step-decide", "Step 4 / 6", "Step 5 / 6");
    await advancePedagogyStep(stepped, "pedagogy-step-distinctions", "Step 5 / 6", "Step 6 / 6");

    await expect(stepped.getByTestId("pedagogy-step-mini-case")).toHaveCount(0);
    await expect(stepped.getByTestId("pedagogy-step-takeaway")).toBeVisible();
    await expect(stepped.getByTestId("pedagogy-step-progress")).toContainText("Step 6 / 6");
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
