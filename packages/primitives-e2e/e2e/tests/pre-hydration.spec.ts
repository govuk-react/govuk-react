import { expect, test, type Page } from '@playwright/test';

// Holds back every script until release(), so a test can use the no-JS fallback before the
// element upgrades and React hydrates, then let them load.
async function holdScripts(page: Page) {
  let release = () => {};
  const gate = new Promise<void>((resolve) => {
    release = resolve;
  });
  await page.route(
    (url) => url.pathname.startsWith('/_astro/') && url.pathname.endsWith('.js'),
    async (route) => {
      await gate;
      await route.continue();
    }
  );
  return () => release();
}

test('uncontrolled: a choice made before hydration is reported', async ({ page }) => {
  const release = await holdScripts(page);
  await page.goto('/test/hydrated', { waitUntil: 'commit' });
  await page.getByTestId('demo-h').locator('label', { hasText: 'Settings' }).click();
  await expect(page.locator('#h-h-settings')).toBeChecked();
  release();
  await expect(page.getByTestId('demo-h')).toHaveAttribute('data-hydrated', 'true');
  await expect(page.getByTestId('demo-h').getByRole('tab', { name: 'Settings' })).toHaveAttribute(
    'aria-selected',
    'true'
  );
  await expect(page.getByTestId('last-h')).toHaveText('h-settings');
});

test('uncontrolled links: a URL hash on load is reported', async ({ page }) => {
  await page.goto('/test/hydrated#l-documents');
  await expect(page.getByTestId('demo-l')).toHaveAttribute('data-hydrated', 'true');
  await expect(page.getByTestId('demo-l').getByRole('tab', { name: 'Documents' })).toHaveAttribute(
    'aria-selected',
    'true'
  );
  await expect(page.getByTestId('last-l')).toHaveText('l-documents');
});

test('controlled: a choice made before hydration is reported and adopted', async ({ page }) => {
  const release = await holdScripts(page);
  await page.goto('/test/controlled', { waitUntil: 'commit' });
  await page.getByTestId('ctrl-cv').locator('label', { hasText: 'Settings' }).click();
  await expect(page.locator('#cv-cv-settings')).toBeChecked();
  release();
  await expect(page.getByTestId('ctrl-cv')).toHaveAttribute('data-hydrated', 'true');
  await expect(page.getByTestId('cv-value')).toHaveText('cv-settings');
  await expect(page.getByTestId('cv-changes')).toHaveText('1');
  await expect(page.getByTestId('ctrl-cv').getByRole('tab', { name: 'Settings' })).toHaveAttribute(
    'aria-selected',
    'true'
  );
});

test('controlled: a choice made before hydration that the app does not adopt is reported, then undone', async ({
  page,
}) => {
  const release = await holdScripts(page);
  await page.goto('/test/controlled', { waitUntil: 'commit' });
  await page.getByTestId('ctrl-ck').locator('label', { hasText: 'Settings' }).click();
  await expect(page.locator('#ck-ck-settings')).toBeChecked();
  release();
  await expect(page.getByTestId('ctrl-ck')).toHaveAttribute('data-hydrated', 'true');
  await expect(page.getByTestId('ck-changes')).toHaveText('1');
  await expect(page.getByTestId('ctrl-ck').getByRole('tab', { name: 'Account' })).toHaveAttribute(
    'aria-selected',
    'true'
  );
  await expect(page.locator('#ck-ck-account')).toBeChecked();
});
