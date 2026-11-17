import { expect, test } from '@playwright/test';

// Two instances in one React tree, with no `name`.
test.beforeEach(async ({ page }) => {
  await page.goto('/test/composition');
  await expect(page.getByTestId('demo-m2')).toHaveAttribute('data-hydrated', 'true');
});

test('each instance gets its own radio group from useId', async ({ page }) => {
  const names = await page
    .locator('govuk-react-tabs input[type=radio]')
    .evaluateAll((radios) => [...new Set(radios.map((radio) => radio.getAttribute('name')))]);
  expect(names).toHaveLength(2);
});

test('the instances work independently', async ({ page }) => {
  await page.getByTestId('demo-m1').getByRole('tab', { name: 'Settings' }).click();
  await expect(page.getByTestId('demo-m1').getByRole('tab', { name: 'Settings' })).toHaveAttribute(
    'aria-selected',
    'true'
  );
  await expect(page.getByTestId('demo-m2').getByRole('tab', { name: 'Account' })).toHaveAttribute(
    'aria-selected',
    'true'
  );
  await expect(page.getByTestId('last-m2')).toHaveText('');
});
