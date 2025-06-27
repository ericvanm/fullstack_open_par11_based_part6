import { test, expect } from "@playwright/test";

test.describe("Anecdote", () => {
  test("Title, filter and create new are on main page", async ({ page }) => {
    await page.goto("http://localhost:5173/");
    await expect(page.getByText("filter")).toBeVisible();
    await expect(page.getByText("Anecdotes")).toBeVisible();
    await expect(page.getByText("create new")).toBeVisible();
  });
});
