import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/test/controlled');
  // Controlled behaviour needs React: wait for hydration, not just the upgrade.
  for (const id of ['cv', 'ck']) {
    await expect(page.getByTestId(`ctrl-${id}`)).toHaveAttribute('data-hydrated', 'true');
  }
});

test('the selected tab follows the controlled value', async ({ page }) => {
  await expect(page.getByTestId('ctrl-cv').getByRole('tab', { name: 'Account' })).toHaveAttribute(
    'aria-selected',
    'true'
  );
});

test('changing the value switches tab without calling onValueChange', async ({ page }) => {
  await page.getByTestId('cv-ext').click();
  await expect(page.getByTestId('ctrl-cv').getByRole('tab', { name: 'Settings' })).toHaveAttribute(
    'aria-selected',
    'true'
  );
  await expect(page.getByTestId('cv-value')).toHaveText('cv-settings');
  await expect(page.getByTestId('cv-changes')).toHaveText('0');
});

test('a user’s choice is reported through onValueChange', async ({ page }) => {
  await page.getByTestId('ctrl-cv').getByRole('tab', { name: 'Documents' }).click();
  await expect(page.getByTestId('cv-value')).toHaveText('cv-documents');
  await expect(page.getByTestId('cv-changes')).toHaveText('1');
  await expect(page.getByTestId('ctrl-cv').getByRole('tab', { name: 'Documents' })).toHaveAttribute(
    'aria-selected',
    'true'
  );
});

test('after the value changes, choosing the earlier tab is reported', async ({ page }) => {
  await page.getByTestId('cv-ext').click();
  await page.getByTestId('ctrl-cv').getByRole('tab', { name: 'Account' }).click();
  await expect(page.getByTestId('cv-value')).toHaveText('cv-account');
  await expect(page.getByTestId('cv-changes')).toHaveText('1');
});

test('when the value is kept, the tab stays and each choice is reported', async ({ page }) => {
  const demo = page.getByTestId('ctrl-ck');
  await demo.getByRole('tab', { name: 'Documents' }).click();
  await demo.getByRole('tab', { name: 'Documents' }).click();
  await expect(page.getByTestId('ck-changes')).toHaveText('2');
  await expect(demo.getByRole('tab', { name: 'Account' })).toHaveAttribute('aria-selected', 'true');
  await expect(demo.getByText('Account panel')).toBeVisible();
  await expect(page.locator('#ck-account > input')).toBeChecked();
});
