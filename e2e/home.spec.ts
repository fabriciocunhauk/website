import { expect, test } from "@playwright/test";

const LINKEDIN_URL = "https://www.linkedin.com/in/fabricio-cunha-uk/";

test.describe("home page", () => {
  test("renders the hero and every section heading", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle("Fabricio Cunha | Frontend Developer");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Craft Something Amazing"
    );
    for (const name of [
      "About Me",
      "My Technical Skills",
      "My Latest GitHub Activity",
      "My Projects",
    ]) {
      await expect(page.getByRole("heading", { level: 2, name })).toBeVisible();
    }
  });

  test("lists every project card, with Invoice Pro first", async ({ page }) => {
    await page.goto("/");

    const projectHeadings = page.locator("#projects h3");
    await expect(projectHeadings).toHaveCount(11);
    await expect(projectHeadings.first()).toHaveText("Invoice Pro PWA");
    await expect(
      page.locator("#projects").getByRole("link", { name: "Live Demo" }).first()
    ).toHaveAttribute("href", "https://invoice-pro.co.uk");
  });

  test("GitHub section settles on repos, an empty state or an error", async ({ page }) => {
    await page.goto("/");

    const section = page.locator("#github-activity");
    await expect(
      section
        .locator("a[href^='https://github.com/']")
        .first()
        .or(section.getByText("No public repositories found."))
        .or(section.getByText(/Failed to load GitHub repositories/))
    ).toBeVisible();
  });

  test("desktop navigation links point at page sections", async ({ page }) => {
    await page.goto("/");

    const nav = page.locator("header nav");
    await expect(nav.getByRole("link", { name: "About" })).toHaveAttribute("href", "#about");
    await expect(nav.getByRole("link", { name: "Projects" })).toHaveAttribute("href", "#projects");
  });

  test("navbar gains a background after scrolling", async ({ page }) => {
    await page.goto("/");

    const header = page.locator("header");
    await expect(header).toHaveClass(/bg-transparent/);
    await page.mouse.wheel(0, 600);
    await expect(header).toHaveClass(/bg-gray-700\/90/);
  });

  test("footer and About link to the canonical LinkedIn profile", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("footer").getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      LINKEDIN_URL
    );
    await expect(
      page.locator("#about").getByRole("link", { name: "Connect on LinkedIn" })
    ).toHaveAttribute("href", LINKEDIN_URL);
  });

  test("JSON-LD describes the person with the canonical links", async ({ page }) => {
    await page.goto("/");

    const raw = await page.locator('script[type="application/ld+json"]').textContent();
    const schema: unknown = JSON.parse(raw ?? "null");
    expect(schema).toMatchObject({
      "@type": "Person",
      name: "Fabricio Cunha",
      sameAs: expect.arrayContaining([LINKEDIN_URL]),
    });
  });
});

test.describe("mobile menu", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("opens and closes via its labelled buttons", async ({ page }) => {
    await page.goto("/");

    const closeButton = page.getByRole("button", { name: "Close menu" });
    await expect(closeButton).toBeHidden();

    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(closeButton).toBeVisible();

    await closeButton.click();
    await expect(closeButton).toBeHidden();
  });
});
