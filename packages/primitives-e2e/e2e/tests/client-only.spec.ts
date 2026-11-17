import { expect, test } from '@playwright/test';

// Rendered only in the browser, as in a client-side app, with no define script.
test.beforeEach(async ({ page }) => {
  await page.goto('/test/client-only');
  await expect(page.getByTestId('demo-c').getByRole('tablist')).toBeVisible();
});

test('the React parts define and upgrade the element', async ({ page }) => {
  const demo = page.getByTestId('demo-c');
  await expect(demo.getByRole('tab')).toHaveCount(3);
  await expect(demo.getByRole('tabpanel')).toHaveCount(1);
  await expect(demo.getByRole('tab', { name: 'Account' })).toHaveAttribute('aria-selected', 'true');
  await expect(demo.getByRole('tab', { name: 'Account' })).toHaveAttribute('tabindex', '0');
  await expect(demo.getByRole('tab', { name: 'Documents' })).toHaveAttribute('tabindex', '-1');
});

test('arrow keys, Home and End move along the tablist', async ({ page }) => {
  const demo = page.getByTestId('demo-c');
  await demo.getByRole('tab', { name: 'Account' }).focus();
  await page.keyboard.press('ArrowRight');
  await expect(demo.getByRole('tab', { name: 'Documents' })).toBeFocused();
  await page.keyboard.press('ArrowDown');
  await expect(demo.getByRole('tab', { name: 'Documents' })).toBeFocused();
  await page.keyboard.press('End');
  await expect(demo.getByRole('tab', { name: 'Settings' })).toBeFocused();
  await page.keyboard.press('Home');
  await expect(demo.getByRole('tab', { name: 'Account' })).toBeFocused();
});

test('onValueChange is called for a choice, not on mount', async ({ page }) => {
  await expect(page.getByTestId('last-c')).toHaveText('');
  await page.getByTestId('demo-c').getByRole('tab', { name: 'Documents' }).click();
  await expect(page.getByTestId('last-c')).toHaveText('c-documents');
});

test.describe('controlled', () => {
  test('the selected tab follows the value', async ({ page }) => {
    await expect(page.getByTestId('ctrl-cc').getByRole('tab', { name: 'Account' })).toHaveAttribute(
      'aria-selected',
      'true'
    );
  });

  test('changing the value switches tab without calling onValueChange', async ({ page }) => {
    await page.getByTestId('cc-ext').click();
    await expect(page.getByTestId('ctrl-cc').getByRole('tab', { name: 'Settings' })).toHaveAttribute(
      'aria-selected',
      'true'
    );
    await expect(page.getByTestId('cc-changes')).toHaveText('0');
  });

  test('a user’s choice is reported', async ({ page }) => {
    await page.getByTestId('ctrl-cc').getByRole('tab', { name: 'Documents' }).click();
    await expect(page.getByTestId('cc-value')).toHaveText('cc-documents');
    await expect(page.getByTestId('cc-changes')).toHaveText('1');
  });
});
