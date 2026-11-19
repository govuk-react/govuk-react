import { expect, test, type Page } from '@playwright/test';

// Holds back React, but not the element, which the page's own script defines, as with an island
// that hydrates late (client:idle).
async function holdReact(page: Page) {
  let release = () => {};
  const gate = new Promise<void>((resolve) => {
    release = resolve;
  });
  await page.route(/\/_astro\/(Tabs\w*|Controlled\w*|client)\.[^/]*\.js$/, async (route) => {
    await gate;
    await route.continue();
  });
  return () => release();
}

test('uncontrolled: a tab picked once upgraded, before hydration, is reported', async ({ page }) => {
  const release = await holdReact(page);
  await page.goto('/test/hydrated', { waitUntil: 'commit' });
  const tab = page.getByTestId('demo-h').getByRole('tab', { name: 'Settings' });
  await tab.click();
  await expect(tab).toHaveAttribute('aria-selected', 'true');
  release();
  await expect(page.getByTestId('demo-h')).toHaveAttribute('data-hydrated', 'true');
  await expect(tab).toHaveAttribute('aria-selected', 'true');
  await expect(page.getByTestId('last-h')).toHaveText('h-settings');
});

test('controlled "report": a tab picked once upgraded, before hydration, is adopted', async ({ page }) => {
  const release = await holdReact(page);
  await page.goto('/test/controlled', { waitUntil: 'commit' });
  const tab = page.getByTestId('ctrl-cs').getByRole('tab', { name: 'Settings' });
  await expect(tab).toBeVisible();
  await tab.click();
  release();
  await expect(page.getByTestId('ctrl-cs')).toHaveAttribute('data-hydrated', 'true');
  await expect(page.getByTestId('cs-value')).toHaveText('cs-settings');
  await expect(tab).toHaveAttribute('aria-selected', 'true');
});
