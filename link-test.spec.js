import { test, expect } from "@playwright/test";

test("Test all frontend interactions", async ({ page }) => {
  await page.goto("https://www.manah.health/"); // Change this to your site's base URL

  // === 1. Test all links (both <a> and React Router <Link>) ===
  const links = await page.$$eval("a, [role='link']", (elements) =>
    elements.map((el) => el.href).filter((href) => href.startsWith("http"))
  );

  for (const link of links) {
    console.log(`Testing link: ${link}`);

    // Check link response status
    const response = await page.request.get(link);
    expect(response.status()).toBe(200);

    // Navigate and test each link interaction
    await page.goto("http://localhost:5173"); // Reset to home
    await page.waitForSelector(`[href='${new URL(link).pathname}']`, {
      timeout: 5000,
    }); // Wait for link to be visible
    await page.click(`[href='${new URL(link).pathname}']`); // Click each link
    await expect(page).toHaveURL(link); // Ensure navigation works
  }

  // === 2. Test all buttons ===
  const buttons = await page.$$("button");
  for (const button of buttons) {
    console.log(`Testing button: ${await button.textContent()}`);
    await button.click(); // Simulate button click
    await page.waitForTimeout(500); // Small delay for UI updates
    // You can add assertions based on button outcomes (like state changes)
  }

  // === 3. Test a sample form ===
  const inputField = await page.$("input[name='email']"); // Adjust selector based on your form
  if (inputField) {
    console.log("Testing form submission with email input");
    await inputField.fill("test@example.com"); // Enter text
    await page.click("button[type='submit']"); // Click submit
    await page.waitForTimeout(500);
    await expect(page.locator(".success-message")).toBeVisible(); // Adjust selector based on success message
  } else {
    console.log("Form input field not found.");
  }

  // === 4. Check if key UI elements are visible ===
  await expect(page.locator("h1")).toBeVisible(); // Check if main heading exists
  await expect(page.locator("nav")).toBeVisible(); // Check if the navbar is visible
  // You can add more checks for other critical UI elements like footers, sidebars, etc.
  console.log("UI elements checked: h1, nav.");
});
