import { expect, test, type Page } from '@playwright/test';

// Holds back every script until release(), so a test can follow a tab's link before the element
// upgrades and React hydrates, then let them load.
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

test('uncontrolled: a link followed before hydration is reported', async ({ page }) => {
  const release = await holdScripts(page);
  await page.goto('/test/hydrated', { waitUntil: 'commit' });
  await page.getByTestId('demo-h').getByRole('link', { name: 'Settings' }).click();
  await expect(page).toHaveURL(/#h-settings$/);
  release();
  await expect(page.getByTestId('demo-h')).toHaveAttribute('data-hydrated', 'true');
  await expect(page.getByTestId('demo-h').getByRole('tab', { name: 'Settings' })).toHaveAttribute(
    'aria-selected',
    'true'
  );
  await expect(page.getByTestId('last-h')).toHaveText('h-settings');
});

test('uncontrolled: a URL hash on load is reported', async ({ page }) => {
  await page.goto('/test/hydrated#h-documents');
  await expect(page.getByTestId('demo-h')).toHaveAttribute('data-hydrated', 'true');
  await expect(page.getByTestId('demo-h').getByRole('tab', { name: 'Documents' })).toHaveAttribute(
    'aria-selected',
    'true'
  );
  await expect(page.getByTestId('last-h')).toHaveText('h-documents');
});

test('controlled: a link followed before hydration is reported and adopted', async ({ page }) => {
  const release = await holdScripts(page);
  await page.goto('/test/controlled', { waitUntil: 'commit' });
  await page.getByTestId('ctrl-cv').getByRole('link', { name: 'Settings' }).click();
  await expect(page).toHaveURL(/#cv-settings$/);
  release();
  await expect(page.getByTestId('ctrl-cv')).toHaveAttribute('data-hydrated', 'true');
  await expect(page.getByTestId('cv-value')).toHaveText('cv-settings');
  await expect(page.getByTestId('cv-changes')).toHaveText('1');
  await expect(page.getByTestId('ctrl-cv').getByRole('tab', { name: 'Settings' })).toHaveAttribute(
    'aria-selected',
    'true'
  );
});

test('controlled: a link followed before hydration that the app does not adopt is reported, then undone', async ({
  page,
}) => {
  const release = await holdScripts(page);
  await page.goto('/test/controlled', { waitUntil: 'commit' });
  await page.getByTestId('ctrl-ck').getByRole('link', { name: 'Settings' }).click();
  await expect(page).toHaveURL(/#ck-settings$/);
  release();
  await expect(page.getByTestId('ctrl-ck')).toHaveAttribute('data-hydrated', 'true');
  await expect(page.getByTestId('ck-changes')).toHaveText('1');
  await expect(page.getByTestId('ctrl-ck').getByRole('tab', { name: 'Account' })).toHaveAttribute(
    'aria-selected',
    'true'
  );
  await expect(page.locator('#ck-account > input')).toBeChecked();
});
