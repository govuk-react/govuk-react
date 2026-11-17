import { expect, test } from '@playwright/test';

// Runs against a development React build (playwright.hydration.config.ts), which logs mismatches.
// Each page, with a control to use once hydrated.
const pages = [
  { path: '/test/hydrated', role: 'tab', name: 'Settings' },
  { path: '/test/controlled', role: 'tab', name: 'Settings' },
  { path: '/test/composition', role: 'tab', name: 'Settings' },
  { path: '/test/nested', role: 'tab', name: 'Settings' },
  { path: '/test/islands', role: 'tab', name: 'Account' },
  { path: '/test/password', role: 'button', name: 'Show password' },
] as const;

for (const { path, role, name } of pages) {
  test(`no hydration warnings or errors on ${path}`, async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error' || message.type() === 'warning') errors.push(message.text());
    });
    page.on('pageerror', (error) => errors.push(String(error)));
    await page.goto(path);
    await page.waitForLoadState('networkidle');
    await page.getByRole(role, { name }).last().click();
    expect(errors).toEqual([]);
  });
}
