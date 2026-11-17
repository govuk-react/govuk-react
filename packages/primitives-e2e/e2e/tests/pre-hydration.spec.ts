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

test('controlled "ignore": the value wins over a choice made before hydration', async ({ page }) => {
  const release = await holdScripts(page);
  await page.goto('/test/controlled', { waitUntil: 'commit' });
  await page.getByTestId('ctrl-cv').locator('label', { hasText: 'Settings' }).click();
  await expect(page.locator('#cv-cv-settings')).toBeChecked();
  release();
  await expect(page.getByTestId('ctrl-cv')).toHaveAttribute('data-hydrated', 'true');
  await expect(page.getByTestId('ctrl-cv').getByRole('tab', { name: 'Account' })).toHaveAttribute(
    'aria-selected',
    'true'
  );
  await expect(page.getByTestId('cv-value')).toHaveText('cv-account');
  await expect(page.getByTestId('cv-changes')).toHaveText('0');
});

test('controlled "report": a choice made before hydration is reported and adopted', async ({ page }) => {
  const release = await holdScripts(page);
  await page.goto('/test/controlled', { waitUntil: 'commit' });
  await page.getByTestId('ctrl-cs').locator('label', { hasText: 'Settings' }).click();
  await expect(page.locator('#cs-cs-settings')).toBeChecked();
  release();
  await expect(page.getByTestId('ctrl-cs')).toHaveAttribute('data-hydrated', 'true');
  await expect(page.getByTestId('cs-value')).toHaveText('cs-settings');
  await expect(page.getByTestId('ctrl-cs').getByRole('tab', { name: 'Settings' })).toHaveAttribute(
    'aria-selected',
    'true'
  );
});
