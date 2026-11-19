import { expect, test, type Page } from '@playwright/test';

const demo = (page: Page, id: string) => page.getByTestId(`focus-${id}`);

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('the browser focuses the error summary when the page loads', async ({ page }) => {
    await page.goto('/test/focus-upgraded');
    await expect(demo(page, 'upgraded').getByRole('alert')).toBeFocused();
  });

  test('links go to their targets as usual', async ({ page }) => {
    await page.goto('/test/focus-upgraded');
    await demo(page, 'upgraded').getByRole('link', { name: 'Enter your full name' }).click();
    await expect(page).toHaveURL(/#upgraded-name$/);
  });
});

for (const [id, path] of [
  ['upgraded', '/test/focus-upgraded'],
  ['hydrated', '/test/focus'],
] as const) {
  test.describe(id === 'upgraded' ? 'upgraded without React' : 'hydrated', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(path);
      if (id === 'hydrated') await expect(demo(page, id)).toHaveAttribute('data-hydrated', 'true');
    });

    test('the error summary has focus, and loses its tabindex when focus moves on', async ({ page }) => {
      const summary = demo(page, id).getByRole('alert');
      await expect(summary).toBeFocused();
      await page.keyboard.press('Tab');
      await expect(summary).not.toHaveAttribute('tabindex');
    });

    test('a link to a field focuses it with its label in view', async ({ page }) => {
      await demo(page, id).getByRole('link', { name: 'Enter your full name' }).click();
      await expect(demo(page, id).getByLabel('Full name')).toBeFocused();
      await expect(demo(page, id).getByText('Full name', { exact: true })).toBeInViewport();
    });

    test('the skip link focuses the main content, outlined until focus moves on', async ({ page }) => {
      await demo(page, id).getByRole('link', { name: 'Skip to main content' }).click();
      const main = demo(page, id).getByRole('main');
      await expect(main).toBeFocused();
      await expect(main).toHaveClass('focused');
      await page.keyboard.press('Tab');
      await expect(main).not.toHaveClass('focused');
      await expect(main).not.toHaveAttribute('tabindex');
    });
  });
}

test('hydrated: content React shows later takes focus', async ({ page }) => {
  await page.goto('/test/focus');
  await expect(demo(page, 'hydrated')).toHaveAttribute('data-hydrated', 'true');
  await demo(page, 'hydrated').getByRole('button', { name: 'Save' }).click();
  await expect(demo(page, 'hydrated').getByRole('status')).toBeFocused();
});

test('works when rendered only in the browser', async ({ page }) => {
  await page.goto('/test/focus-client-only');
  await expect(demo(page, 'client').getByRole('alert')).toBeFocused();
  await demo(page, 'client').getByRole('link', { name: 'Enter your full name' }).click();
  await expect(demo(page, 'client').getByLabel('Full name')).toBeFocused();
});

test('hydrated: focus moved before hydration stays where the user moved it', async ({ page }) => {
  // Hold back React, but not the elements, which the page's own script defines.
  let release = () => {};
  const gate = new Promise<void>((resolve) => {
    release = resolve;
  });
  await page.route(/\/_astro\/(FocusDemo|client)\.[^/]*\.js$/, async (route) => {
    await gate;
    await route.continue();
  });
  await page.goto('/test/focus', { waitUntil: 'commit' });
  const summary = demo(page, 'hydrated').getByRole('alert');
  await expect(summary).toBeFocused();
  await demo(page, 'hydrated').getByRole('link', { name: 'Enter your full name' }).click();
  const field = demo(page, 'hydrated').getByLabel('Full name');
  await expect(field).toBeFocused();
  release();
  await expect(demo(page, 'hydrated')).toHaveAttribute('data-hydrated', 'true');
  await expect(field).toBeFocused();
  await expect(summary).not.toHaveAttribute('tabindex');
});
