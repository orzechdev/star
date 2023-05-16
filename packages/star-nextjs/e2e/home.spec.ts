import { test, expect } from "@playwright/test";

test("should append inquiry on home page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // The page should contain an h1 with "Website"
  await expect(page.locator("h1")).toContainText("Website");
  // Imitate upload buffer from memory into inquiry input
  await page.getByLabel("Inquiry").setInputFiles({
    name: "inquiry.json",
    mimeType: "json",
    buffer: Buffer.from('{field:"this is test"}'),
  });
});
