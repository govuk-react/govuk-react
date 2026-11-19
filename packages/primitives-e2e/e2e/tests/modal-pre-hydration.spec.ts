import { expect, test, type Page } from '@playwright/test';

// Holds back React, but not the element, which the page's own script defines.
async function holdReact(page: Page) {
  let release = () => {};
  const gate = new Promise<void>((resolve) => {
    release = resolve;
  });
  await page.route(/\/_astro\/(ModalDemo|ControlledModal|client)\.[^/]*\.js$/, async (route) => {
    await gate;
    await route.continue();
  });
  return () => release();
}

test('uncontrolled: a modal opened before hydration stays open, and is reported', async ({ page }) => {
  const release = await holdReact(page);
  await page.goto('/test/modal', { waitUntil: 'commit' });
  await page.getByTestId('modal-hydrated').getByRole('button', { name: 'Delete account' }).click();
  const dialog = page.getByTestId('modal-hydrated').getByRole('dialog');
  await expect(dialog).toBeVisible();
  release();
  await expect(page.getByTestId('modal-hydrated')).toHaveAttribute('data-hydrated', 'true');
  await expect(dialog).toBeVisible();
  expect(await dialog.evaluate((element) => element.matches(':modal'))).toBe(true);
  await expect(page.getByTestId('last-hydrated')).toHaveText('true');
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
  await expect(page.getByTestId('last-hydrated')).toHaveText('false');
});

test('controlled: a modal opened before hydration is reported, so the app can keep it open', async ({ page }) => {
  const release = await holdReact(page);
  await page.goto('/test/modal', { waitUntil: 'commit' });
  await page.getByTestId('controlled').getByRole('button', { name: 'Open', exact: true }).click();
  const dialog = page.getByRole('dialog', { name: 'Controlled' });
  await expect(dialog).toBeVisible();
  release();
  await expect(page.getByTestId('controlled')).toHaveAttribute('data-hydrated', 'true');
  await expect(page.getByTestId('controlled-open')).toHaveText('true');
  await expect(dialog).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
  await expect(page.getByTestId('controlled-open')).toHaveText('false');
});
