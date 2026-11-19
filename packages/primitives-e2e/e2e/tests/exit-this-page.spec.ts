import { expect, test, type Page } from '@playwright/test';

const demo = (page: Page, id: string) => page.getByTestId(`exit-${id}`);
const button = (page: Page, id: string) => demo(page, id).getByRole('link', { name: 'Exit this page now' });

/** Presses Shift on its own, as a user would. */
const shift = (page: Page) => page.keyboard.press('Shift');

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('the button is a link to the safe page', async ({ page }) => {
    await page.goto('/test/exit-this-page');
    await button(page, 'hydrated').click();
    await expect(page).toHaveURL(/\/\?exited$/);
  });
});

for (const [id, path] of [
  ['upgraded', '/test/exit-this-page-upgraded'],
  ['hydrated', '/test/exit-this-page'],
  ['client', '/test/exit-this-page-client-only'],
] as const) {
  test.describe(
    { upgraded: 'upgraded without React', hydrated: 'hydrated', client: 'rendered only in the browser' }[id],
    () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(path);
        if (id !== 'upgraded') await expect(demo(page, id)).toHaveAttribute('data-hydrated', 'true');
        else await expect(page.locator('govuk-react-exit-this-page')).toHaveAttribute('data-upgraded', '');
      });

      test('pressing Shift 3 times hides the page and goes to the safe page', async ({ page }) => {
        await shift(page);
        await expect(demo(page, id).getByRole('status')).toHaveText('Shift, press 2 more times to exit.');
        await expect(demo(page, id).locator('[data-exit-this-page-light]').first()).toHaveClass('on');
        await shift(page);
        await expect(demo(page, id).getByRole('status')).toHaveText('Shift, press 1 more time to exit.');
        await shift(page);
        await expect(page).toHaveURL(/\/\?exited$/);
      });

      test('Shift with another key doesn’t count', async ({ page }) => {
        await shift(page);
        await page.keyboard.press('Shift+A');
        await expect(demo(page, id).getByRole('status')).toHaveText('Exit this page expired.');
        await expect(demo(page, id).locator('[data-exit-this-page-indicator]')).not.toHaveAttribute('data-visible');
      });

      test('the skip link exits, hiding the page behind an overlay first', async ({ page }) => {
        // The page can't be inspected once it starts to leave, so it reports what it shows.
        await page.evaluate(() => {
          new MutationObserver(() => {
            const overlay = document.querySelector('[role=alert]');
            const exitButton = document.querySelector('[data-exit-this-page-button]');
            if (!overlay?.textContent || !exitButton) return;
            console.log(`exiting: ${overlay.textContent}, button ${exitButton.checkVisibility() ? 'shown' : 'hidden'}`);
          }).observe(document.body, { childList: true, subtree: true, characterData: true });
        });
        const exiting = page.waitForEvent('console', (message) => message.text().startsWith('exiting'));
        await demo(page, id).getByRole('link', { name: 'Exit this page', exact: true }).click();
        expect((await exiting).text()).toBe('exiting: Loading., button hidden');
        await expect(page).toHaveURL(/\/\?exited$/);
      });
    }
  );
}

test('coming back to the page shows it again', async ({ page }) => {
  await page.goto('/test/exit-this-page');
  await expect(demo(page, 'hydrated')).toHaveAttribute('data-hydrated', 'true');
  await button(page, 'hydrated').click();
  await expect(page).toHaveURL(/\/\?exited$/);
  await page.goBack();
  await expect(button(page, 'hydrated')).toBeVisible();
  await expect(page.getByRole('alert')).toHaveCount(0);
});

test('Shift presses before hydration still count', async ({ page }) => {
  // Hold back React, but not the element, which the page's own script defines.
  let release = () => {};
  const gate = new Promise<void>((resolve) => {
    release = resolve;
  });
  await page.route(/\/_astro\/(ExitThisPageDemo|client)\.[^/]*\.js$/, async (route) => {
    await gate;
    await route.continue();
  });
  await page.goto('/test/exit-this-page', { waitUntil: 'commit' });
  await expect(page.locator('govuk-react-exit-this-page')).toHaveAttribute('data-upgraded', '');
  await shift(page);
  await shift(page);
  release();
  await expect(demo(page, 'hydrated')).toHaveAttribute('data-hydrated', 'true');
  await expect(demo(page, 'hydrated').getByRole('status')).toHaveText('Shift, press 1 more time to exit.');
  await shift(page);
  await expect(page).toHaveURL(/\/\?exited$/);
});
