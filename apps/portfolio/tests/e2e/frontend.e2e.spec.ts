import { expect, Page, test } from "@playwright/test";

test.describe("LandingPage", () => {
  let page: Page;

  test.beforeAll(async ({ browser }, testInfo) => {
    const context = await browser.newContext();
    page = await context.newPage();
  });

  test("can go on landing page", async ({ page }) => {
    await page.goto("http://localhost:3000");

    await expect(page).toHaveTitle(/Amar Hazem | Full Stack Engineer/);

    const heading = page.locator("h1").first();

    await expect(heading).toHaveText("Amar Hazem | Full Stack Engineer");
  });
});
