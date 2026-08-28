import { test, expect } from "@playwright/test";
import {
  MOBILE_VIEWPORT,
  enterDemo,
  answerLessonQuiz,
  assertNoHorizontalOverflow,
  advancePedagogyStep,
  navigateToSharedVisionLesson,
} from "./pmp-study-mobile-helpers";

test.describe("PMP Study — Shared Vision mobile E2E", () => {
  test.use({ viewport: MOBILE_VIEWPORT });

  test("PMP Study → People → T01 → stepped LEARN → MASTER @390px", async ({ page }) => {
    test.setTimeout(120_000);

    await enterDemo(page, "en");
    await navigateToSharedVisionLesson(page);
    await assertNoHorizontalOverflow(page);

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

  test("Lesson → ECO Task → Lesson round-trip @390px", async ({ page }) => {
    test.setTimeout(90_000);

    await enterDemo(page, "en");
    await navigateToSharedVisionLesson(page);

    const stepped = page.getByTestId("pedagogy-stepped-learn");
    await expect(stepped).toBeVisible({ timeout: 15_000 });
    await expect(stepped.getByTestId("pedagogy-step-what")).toBeVisible();

    await page.getByTestId("back-to-eco-task-link").click();
    await expect(page).toHaveURL(/\/pmp-study\/PEOPLE\/PEOPLE-T01/, { timeout: 15_000 });
    await expect(page.getByTestId("pmp-study-task")).toBeVisible();
    await expect(page.getByTestId("task-lesson-shared-vision")).toBeVisible();
    await assertNoHorizontalOverflow(page);

    await page.getByTestId("open-lesson-shared-vision").click();
    await expect(page.getByTestId("lesson-page")).toBeVisible({ timeout: 20_000 });
    await page.waitForLoadState("networkidle");
    await expect(page.getByTestId("back-to-eco-task-link")).toBeVisible();
    await expect(page.getByTestId("pedagogy-stepped-learn")).toBeVisible({ timeout: 15_000 });
    await expect(page.getByTestId("pedagogy-stepped-learn").getByTestId("pedagogy-step-what")).toBeVisible();
    await assertNoHorizontalOverflow(page);
  });
});
