import { expect, test } from '@playwright/test';

// Tabs in a panel of other tabs.
test.beforeEach(async ({ page }) => {
  await page.goto('/test/nested');
  await expect(page.getByTestId('nested-tabs')).toHaveAttribute('data-hydrated', 'true');
});

test('the inner tabs switch without affecting the outer tabs', async ({ page }) => {
  const inner = page.getByTestId('inner');
  await expect(inner.getByRole('tab', { name: 'Profile' })).toHaveAttribute('aria-selected', 'true');
  await inner.getByRole('tab', { name: 'Email' }).click();
  await expect(inner.getByRole('tab', { name: 'Email' })).toHaveAttribute('aria-selected', 'true');
  await expect(page.getByRole('tab', { name: 'Account' })).toHaveAttribute('aria-selected', 'true');
  await expect(inner).toBeVisible();
});

test('the inner tabs hide with their outer panel', async ({ page }) => {
  await expect(page.getByTestId('inner').getByRole('tab')).toHaveCount(2);
  await page.getByRole('tab', { name: 'Settings' }).click();
  await expect(page.getByTestId('inner')).toBeHidden();
});

test('the inner and outer tabs use their own radio groups', async ({ page }) => {
  const names = await page
    .getByTestId('nested-tabs')
    .locator('input[type=radio]')
    .evaluateAll((radios) => [...new Set(radios.map((radio) => radio.getAttribute('name')))]);
  expect(names).toHaveLength(2);
});

test('arrow keys in the inner tabs move only the inner tabs', async ({ page }) => {
  const inner = page.getByTestId('inner');
  await inner.getByRole('tab', { name: 'Profile' }).focus();
  await page.keyboard.press('ArrowRight');
  await expect(inner.getByRole('tab', { name: 'Email' })).toBeFocused();
  await expect(inner.getByRole('tab', { name: 'Email' })).toHaveAttribute('aria-selected', 'true');
  await expect(page.getByRole('tab', { name: 'Account' })).toHaveAttribute('aria-selected', 'true');
  await expect(inner).toBeVisible();
});
