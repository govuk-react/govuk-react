import { expect, test } from '@playwright/test';

// No JavaScript: only the server-rendered fallback.
test.use({ javaScriptEnabled: false });

test.beforeEach(async ({ page }) => {
  await page.goto('/test/hydrated');
});

test('shows every panel, and each tab links to its panel', async ({ page }) => {
  const demo = page.getByTestId('demo-h');
  await expect(demo.getByText('Make changes to your account.')).toBeVisible();
  await expect(demo.getByText('Access and update your documents.')).toBeVisible();
  await expect(demo.getByRole('link', { name: 'Documents' })).toHaveAttribute('href', '#h-documents');
  await expect(page.locator('#h-documents')).toContainText('Access and update your documents.');
});

test('the selected tab’s radio is checked', async ({ page }) => {
  await expect(page.locator('#h-account > input')).toBeChecked();
});

test('radios are never submitted with a form (they have no form owner)', async ({ page }) => {
  await expect(page.locator('#h-account > input')).toHaveAttribute('form', 'h-none');
  await expect(page.locator('form#h-none')).toHaveCount(0);
});

test('instances use their own radio groups', async ({ page }) => {
  await expect(page.getByTestId('demo-h').locator('input[type=radio]').first()).toHaveAttribute('name', 'h');
  await expect(page.getByTestId('demo-v').locator('input[type=radio]').first()).toHaveAttribute('name', 'v');
});

test('exposes no tablist roles', async ({ page }) => {
  await expect(page.locator('[role="tablist"], [role="tab"], [role="tabpanel"]')).toHaveCount(0);
});
