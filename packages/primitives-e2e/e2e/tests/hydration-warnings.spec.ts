import { expect, test } from '@playwright/test';

// Runs against a development React build (playwright.hydration.config.ts), which logs mismatches.
for (const path of ['/test/hydrated', '/test/controlled', '/test/composition', '/test/nested', '/test/islands']) {
  test(`no hydration warnings or errors on ${path}`, async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error' || message.type() === 'warning') errors.push(message.text());
    });
    page.on('pageerror', (error) => errors.push(String(error)));
    await page.goto(path);
    await expect(page.getByRole('tab').first()).toBeVisible();
    await page.waitForLoadState('networkidle');
    await page.getByRole('tab').last().click();
    expect(errors).toEqual([]);
  });
}
