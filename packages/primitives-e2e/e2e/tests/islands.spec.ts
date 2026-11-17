import { expect, test } from '@playwright/test';

// Parts without a Root, each panel its own island: the element links them, not React context.
test('works without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('/test/islands');
  await expect(page.getByText('Documents panel')).toBeVisible();
  await expect(page.getByText('Account panel')).toBeHidden();
  await page.locator('label', { hasText: 'Account' }).click();
  await expect(page.getByText('Account panel')).toBeVisible();
  await context.close();
});

test('upgrades across the islands', async ({ page }) => {
  await page.goto('/test/islands');
  const tabs = page.getByTestId('islands');
  await expect(tabs.getByRole('tab', { name: 'Documents' })).toHaveAttribute('aria-selected', 'true');
  await tabs.getByRole('tab', { name: 'Account' }).click();
  await expect(tabs.getByRole('tabpanel')).toHaveText('Account panel');
});
