import { test, expect } from "@playwright/test";

test("user journey: Landing → Academy → Course → Lesson → Quiz → Result", async ({
  page,
}) => {
  // Landing
  await page.goto("/fr");
  await expect(page.getByTestId("landing-page")).toBeVisible();
  await expect(page.getByTestId("app-title")).toContainText(
    "Professional Learning Academy"
  );

  // Academies
  await page.getByTestId("start-learning").click();
  await expect(page.getByTestId("academies-page")).toBeVisible();
  await expect(page.getByTestId("academy-personal-finance")).toBeVisible();

  // Course
  await page.getByTestId("academy-link-personal-finance").click();
  await expect(page.getByTestId("course-page")).toBeVisible();
  await expect(page.getByTestId("course-title")).toBeVisible();

  // Lesson
  await page.getByTestId("lesson-link-understanding-income").click();
  await expect(page.getByTestId("lesson-page")).toBeVisible();
  await expect(page.getByTestId("lesson-title")).toBeVisible();

  // Quiz
  await page.getByTestId("start-quiz").click();
  await expect(page.getByTestId("quiz-page")).toBeVisible();
  await expect(page.getByTestId("quiz-prompt")).toBeVisible();

  // Select first option and submit
  const firstOption = page.locator('input[type="radio"]').first();
  await firstOption.click();
  await page.getByTestId("submit-quiz").click();

  // Result
  await expect(page.getByTestId("quiz-result-page")).toBeVisible();
  await expect(page.getByTestId("result-score")).toBeVisible();
});
