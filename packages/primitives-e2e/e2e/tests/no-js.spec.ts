import { expect, test } from '@playwright/test';

// No JavaScript: only the server-rendered fallbacks.
test.use({ javaScriptEnabled: false });

test.beforeEach(async ({ page }) => {
  await page.goto('/test/hydrated');
});

test.describe('radios fallback', () => {
  test('shows only the checked radio’s panel, the default', async ({ page }) => {
    const demo = page.getByTestId('demo-h');
    await expect(page.locator('#h-h-account')).toBeChecked();
    await expect(demo.getByText('Make changes to your account.')).toBeVisible();
    await expect(demo.getByText('Access and update your documents.')).toBeHidden();
    await expect(demo.getByText('Edit your profile or update contact information.')).toBeHidden();
  });

  test('choosing a tab switches the panel without changing the URL', async ({ page }) => {
    const url = page.url();
    const demo = page.getByTestId('demo-h');
    await demo.locator('label', { hasText: 'Documents' }).click();
    await expect(demo.getByText('Access and update your documents.')).toBeVisible();
    await expect(demo.getByText('Make changes to your account.')).toBeHidden();
    expect(page.url()).toBe(url);
  });

  test('radios are never submitted with a form (they have no form owner)', async ({ page }) => {
    await expect(page.locator('#h-h-account')).toHaveAttribute('form', 'h-none');
    await expect(page.locator('form#h-none')).toHaveCount(0);
  });

  test('instances use their own radio groups', async ({ page }) => {
    await expect(page.getByTestId('demo-h').locator('input[type=radio]').first()).toHaveAttribute('name', 'h');
    await expect(page.getByTestId('demo-v').locator('input[type=radio]').first()).toHaveAttribute('name', 'v');
  });
});

test.describe('links fallback', () => {
  test('shows every panel, and each tab links to its panel', async ({ page }) => {
    const demo = page.getByTestId('demo-l');
    await expect(demo.getByText('Make changes to your account.')).toBeVisible();
    await expect(demo.getByText('Access and update your documents.')).toBeVisible();
    await expect(demo.getByRole('link', { name: 'Documents' })).toHaveAttribute('href', '#l-documents');
    await expect(page.locator('#l-documents')).toContainText('Access and update your documents.');
  });
});

test('exposes no tablist roles', async ({ page }) => {
  await expect(page.locator('[role="tablist"], [role="tab"], [role="tabpanel"]')).toHaveCount(0);
});
