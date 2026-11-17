import { expect, test } from '@playwright/test';

// React islands over the upgraded element.
test.beforeEach(async ({ page }) => {
  await page.goto('/test/hydrated');
  await expect(page.getByTestId('demo-h')).toHaveAttribute('data-hydrated', 'true');
});

test('does not call onValueChange on mount', async ({ page }) => {
  await expect(page.getByTestId('last-h')).toHaveText('');
  await expect(page.getByTestId('last-l')).toHaveText('');
});

test('calls onValueChange when the user chooses a tab', async ({ page }) => {
  await page.getByTestId('demo-h').getByRole('tab', { name: 'Documents' }).click();
  await expect(page.getByTestId('last-h')).toHaveText('h-documents');
});

test('calls onValueChange for a keyboard choice', async ({ page }) => {
  await page.getByTestId('demo-h').getByRole('tab', { name: 'Account' }).focus();
  await page.keyboard.press('ArrowRight');
  await expect(page.getByTestId('last-h')).toHaveText('h-documents');
});

test('calls onValueChange with links, and the hash follows', async ({ page }) => {
  await page.getByTestId('demo-l').getByRole('tab', { name: 'Settings' }).click();
  await expect(page.getByTestId('last-l')).toHaveText('l-settings');
  await expect(page).toHaveURL(/#l-settings$/);
});

test('a vertical tablist moves with Up and Down, and ignores Left and Right', async ({ page }) => {
  const demo = page.getByTestId('demo-v');
  await expect(demo.getByRole('tablist')).toHaveAttribute('aria-orientation', 'vertical');
  const account = demo.getByRole('tab', { name: 'Account' });
  await account.focus();
  await page.keyboard.press('ArrowLeft');
  await expect(account).toBeFocused();
  await page.keyboard.press('ArrowDown');
  await expect(demo.getByRole('tab', { name: 'Documents' })).toBeFocused();
});

test('instances are independent', async ({ page }) => {
  await page.getByTestId('demo-h').getByRole('tab', { name: 'Settings' }).click();
  await expect(page.getByTestId('demo-h').getByRole('tab', { name: 'Settings' })).toHaveAttribute(
    'aria-selected',
    'true'
  );
  await expect(page.getByTestId('demo-v').getByRole('tab', { name: 'Account' })).toHaveAttribute(
    'aria-selected',
    'true'
  );
  await expect(page.getByTestId('last-v')).toHaveText('');
});

test('logs no errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  page.on('pageerror', (error) => errors.push(String(error)));
  await page.goto('/test/hydrated');
  await expect(page.getByTestId('demo-h')).toHaveAttribute('data-hydrated', 'true');
  await page.getByTestId('demo-h').getByRole('tab', { name: 'Documents' }).click();
  expect(errors).toEqual([]);
});
