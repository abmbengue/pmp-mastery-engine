import { test, expect } from "@playwright/test";

// ─── TEST 1 : Full journey in French ───────────────────────────────────────
test("FR: Landing → Personal Finance → Course → Lesson → Learn → Practice → Test → Review → Master → Next Lesson", async ({
  page,
}) => {
  // Landing
  await page.goto("/fr");
  await expect(page.getByTestId("landing-page")).toBeVisible();

  // Academies
  await page.getByTestId("start-learning").click();
  await expect(page.getByTestId("academies-page")).toBeVisible();
  await expect(page.getByTestId("academy-personal-finance")).toBeVisible();

  // Course
  await page.getByTestId("academy-link-personal-finance").click();
  await expect(page.getByTestId("course-page")).toBeVisible();

  // Lesson
  await page.getByTestId("lesson-link-understanding-income").click();
  await expect(page.getByTestId("lesson-page")).toBeVisible();
  await expect(page.getByTestId("lesson-player")).toBeVisible();
  await expect(page.getByTestId("lesson-title")).toContainText("revenus");

  // LEARN phase
  await expect(page.getByTestId("phase-learn")).toBeVisible();
  await expect(page.getByTestId("text-block")).toBeVisible();
  await expect(page.getByTestId("video-block")).toBeVisible();
  await page.getByTestId("next-phase-btn").click();

  // PRACTICE phase
  await expect(page.getByTestId("phase-practice")).toBeVisible();
  await expect(page.getByTestId("exercise-block")).toBeVisible();
  await expect(page.getByTestId("flashcard-block")).toBeVisible();
  // Interact with flashcard
  await page.getByTestId("flashcard-reveal-btn").click();
  await expect(page.getByTestId("flashcard-hide-btn")).toBeVisible();
  await page.getByTestId("next-phase-btn").click();

  // TEST phase
  await expect(page.getByTestId("test-phase")).toBeVisible();
  await expect(page.getByTestId("quiz-question-prompt")).toBeVisible();
  // Select an answer (pick first option — may be right or wrong)
  const firstOption = page.locator('input[type="radio"]').first();
  await firstOption.click();
  await page.getByTestId("submit-quiz").click();

  // REVIEW phase
  await expect(page.getByTestId("review-phase")).toBeVisible();
  await expect(page.getByTestId("review-score")).toBeVisible();
  await page.getByTestId("next-phase-btn").click();

  // MASTER phase
  await expect(page.getByTestId("master-phase")).toBeVisible();
  await expect(page.getByTestId("mastery-level")).toBeVisible();
  await expect(page.getByTestId("master-score")).toBeVisible();

  // Next Lesson button (if available)
  const nextBtn = page.getByTestId("next-lesson-btn");
  if (await nextBtn.isVisible()) {
    await nextBtn.click();
    await expect(page.getByTestId("lesson-player")).toBeVisible();
  }
});

// ─── TEST 2 : Full journey in English ──────────────────────────────────────
test("EN: Landing → Personal Finance → Course → Lesson → Learn → Practice → Test → Review → Master", async ({
  page,
}) => {
  await page.goto("/en");
  await expect(page.getByTestId("landing-page")).toBeVisible();

  await page.getByTestId("start-learning").click();
  await expect(page.getByTestId("academies-page")).toBeVisible();
  await expect(page.getByTestId("academy-personal-finance")).toBeVisible();

  await page.getByTestId("academy-link-personal-finance").click();
  await expect(page.getByTestId("course-page")).toBeVisible();

  await page.getByTestId("lesson-link-understanding-income").click();
  await expect(page.getByTestId("lesson-player")).toBeVisible();
  // Check EN title
  await expect(page.getByTestId("lesson-title")).toContainText("Income");

  // LEARN
  await expect(page.getByTestId("text-block")).toBeVisible();
  await page.getByTestId("next-phase-btn").click();

  // PRACTICE
  await expect(page.getByTestId("phase-practice")).toBeVisible();
  await page.getByTestId("flashcard-reveal-btn").click();
  await expect(page.getByTestId("flashcard-hide-btn")).toBeVisible();
  await page.getByTestId("next-phase-btn").click();

  // TEST
  await expect(page.getByTestId("test-phase")).toBeVisible();
  const firstOption = page.locator('input[type="radio"]').first();
  await firstOption.click();
  await page.getByTestId("submit-quiz").click();

  // REVIEW
  await expect(page.getByTestId("review-phase")).toBeVisible();
  await page.getByTestId("next-phase-btn").click();

  // MASTER
  await expect(page.getByTestId("master-phase")).toBeVisible();
  await expect(page.getByTestId("mastery-level")).toBeVisible();
});

// ─── TEST 3 : PMP Academy ──────────────────────────────────────────────────
test("PMP: Landing → PMP Academy → Course → Module → Lesson → Full player", async ({
  page,
}) => {
  await page.goto("/fr");
  await page.getByTestId("start-learning").click();
  await expect(page.getByTestId("academy-pmp-project-management")).toBeVisible();

  await page.getByTestId("academy-link-pmp-project-management").click();
  await expect(page.getByTestId("course-page")).toBeVisible();
  await expect(page.getByTestId("course-title")).toBeVisible();

  // Navigate to first PMP lesson
  await page.getByTestId("lesson-link-what-is-project-management").click();
  await expect(page.getByTestId("lesson-player")).toBeVisible();
  await expect(page.getByTestId("lesson-title")).toContainText("projet");

  // LEARN
  await expect(page.getByTestId("text-block")).toBeVisible();
  await page.getByTestId("next-phase-btn").click();

  // PRACTICE
  await expect(page.getByTestId("phase-practice")).toBeVisible();
  await page.getByTestId("next-phase-btn").click();

  // TEST
  await expect(page.getByTestId("test-phase")).toBeVisible();
  const firstOption = page.locator('input[type="radio"]').first();
  await firstOption.click();
  await page.getByTestId("submit-quiz").click();

  // REVIEW
  await expect(page.getByTestId("review-phase")).toBeVisible();
  const score = page.getByTestId("review-score");
  await expect(score).toBeVisible();

  await page.getByTestId("next-phase-btn").click();

  // MASTER
  await expect(page.getByTestId("master-phase")).toBeVisible();
});
