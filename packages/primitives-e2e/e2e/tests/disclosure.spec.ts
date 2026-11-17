import { expect, test, type Page } from '@playwright/test';

const mobile = { width: 375, height: 700 };
const desktop = { width: 1024, height: 700 };

const demo = (page: Page, id: string) => page.getByTestId(`disclosure-${id}`);
const menu = (page: Page, id: string) => demo(page, id).getByRole('button', { name: 'Menu' });

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false, viewport: mobile });

  test('shows the navigation, with no button', async ({ page }) => {
    await page.goto('/test/disclosure');
    await expect(menu(page, 'upgraded')).toBeHidden();
    await expect(demo(page, 'upgraded').getByRole('link', { name: 'Home' })).toBeVisible();
  });
});

for (const id of ['upgraded', 'hydrated']) {
  test.describe(id === 'upgraded' ? 'upgraded without React' : 'hydrated', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize(mobile);
      await page.goto('/test/disclosure');
      if (id === 'hydrated') await expect(demo(page, id)).toHaveAttribute('data-hydrated', 'true');
    });

    test('below tablet width, the button shows and hides the navigation', async ({ page }) => {
      const button = menu(page, id);
      const home = demo(page, id).getByRole('link', { name: 'Home' });
      await expect(button).toHaveAttribute('aria-expanded', 'false');
      await expect(button).toHaveAttribute('aria-controls', `${id}-menu`);
      await expect(home).toBeHidden();
      await button.click();
      await expect(button).toHaveAttribute('aria-expanded', 'true');
      await expect(home).toBeVisible();
      await button.click();
      await expect(home).toBeHidden();
    });

    test('from tablet width, shows the navigation and hides the button, and restores the menu below it', async ({
      page,
    }) => {
      await menu(page, id).click();
      await page.setViewportSize(desktop);
      await expect(demo(page, id).getByRole('button', { name: 'Menu', includeHidden: true })).toBeHidden();
      await expect(demo(page, id).getByRole('button', { name: 'Menu', includeHidden: true })).toHaveAttribute(
        'aria-hidden',
        'true'
      );
      await expect(demo(page, id).getByRole('link', { name: 'Home' })).toBeVisible();
      await page.setViewportSize(mobile);
      await expect(menu(page, id)).toHaveAttribute('aria-expanded', 'true');
      await expect(demo(page, id).getByRole('link', { name: 'Home' })).toBeVisible();
    });
  });
}

test.describe('hydrated', () => {
  test.use({ viewport: mobile });

  test('reports each change', async ({ page }) => {
    await page.goto('/test/disclosure');
    await expect(demo(page, 'hydrated')).toHaveAttribute('data-hydrated', 'true');
    await menu(page, 'hydrated').click();
    await expect(page.getByTestId('last-hydrated')).toHaveText('true');
    await menu(page, 'hydrated').click();
    await expect(page.getByTestId('last-hydrated')).toHaveText('false');
  });

  test('controlled: the app can close the menu, such as after navigating', async ({ page }) => {
    await page.goto('/test/disclosure');
    await expect(demo(page, 'controlled')).toHaveAttribute('data-hydrated', 'true');
    await menu(page, 'controlled').click();
    await demo(page, 'controlled').getByRole('link', { name: 'Account' }).click();
    await expect(menu(page, 'controlled')).toHaveAttribute('aria-expanded', 'false');
    await expect(demo(page, 'controlled').getByRole('link', { name: 'Account' })).toBeHidden();
  });

  test('controlled: a menu opened before hydration stays open, and is reported', async ({ page }) => {
    // Hold back React, but not the element, which the page's own script defines.
    let release = () => {};
    const gate = new Promise<void>((resolve) => {
      release = resolve;
    });
    await page.route(/\/_astro\/(DisclosureDemo|client)\.[^/]*\.js$/, async (route) => {
      await gate;
      await route.continue();
    });
    await page.goto('/test/disclosure', { waitUntil: 'commit' });
    await menu(page, 'controlled').click();
    await expect(menu(page, 'controlled')).toHaveAttribute('aria-expanded', 'true');
    release();
    await expect(demo(page, 'controlled')).toHaveAttribute('data-hydrated', 'true');
    await expect(page.getByTestId('last-controlled')).toHaveText('true');
    await expect(menu(page, 'controlled')).toHaveAttribute('aria-expanded', 'true');
    await expect(demo(page, 'controlled').getByRole('link', { name: 'Home' })).toBeVisible();
  });
});

test('works when rendered only in the browser', async ({ page }) => {
  await page.setViewportSize(mobile);
  await page.goto('/test/disclosure-client-only');
  await menu(page, 'client').click();
  await expect(demo(page, 'client').getByRole('link', { name: 'Home' })).toBeVisible();
});
