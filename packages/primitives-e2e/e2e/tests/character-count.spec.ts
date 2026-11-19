import { expect, test, type Page } from '@playwright/test';

const demo = (page: Page, id: string) => page.getByTestId(`character-count-${id}`);
const field = (page: Page, id: string) => demo(page, id).getByLabel('Message');
const status = (page: Page, id: string) => page.getByTestId(`status-${id}`);
const srStatus = (page: Page, id: string) => page.getByTestId(`sr-status-${id}`);

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('shows the description, keeps maxlength, and shows no count', async ({ page }) => {
    await page.goto('/test/character-count');
    await expect(demo(page, 'upgraded').getByText('You can enter up to 10 characters')).toBeVisible();
    await expect(field(page, 'upgraded')).toHaveAttribute('maxlength', '10');
    await expect(status(page, 'upgraded')).toBeHidden();
  });
});

for (const id of ['upgraded', 'hydrated']) {
  test.describe(id === 'upgraded' ? 'upgraded without React' : 'hydrated', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/test/character-count');
      if (id === 'hydrated') await expect(demo(page, id)).toHaveAttribute('data-hydrated', 'true');
    });

    test('counts as the user types, past the limit', async ({ page }) => {
      const input = field(page, id);
      await expect(input).not.toHaveAttribute('maxlength');
      await expect(input).toHaveAccessibleDescription('You can enter up to 10 characters');
      await expect(status(page, id)).toHaveAttribute('data-below-threshold');
      await input.fill('Hello');
      await expect(status(page, id)).toHaveText('You have 5 characters remaining');
      await expect(status(page, id)).not.toHaveAttribute('data-below-threshold');
      await input.fill('Hello there');
      await expect(status(page, id)).toHaveText('You have 1 character too many');
      await expect(status(page, id)).toHaveAttribute('data-state', 'over');
    });

    test('tells screen readers the count once the user pauses', async ({ page }) => {
      const input = field(page, id);
      await input.focus();
      await input.pressSequentially('Hello');
      await expect(srStatus(page, id)).toHaveText('You have 5 characters remaining');
      await expect(srStatus(page, id)).not.toHaveAttribute('aria-hidden');
    });
  });
}

test('controlled: counts a value the app sets', async ({ page }) => {
  await page.goto('/test/character-count');
  await expect(demo(page, 'controlled')).toHaveAttribute('data-hydrated', 'true');
  await field(page, 'controlled').fill('Hello there');
  await expect(status(page, 'controlled')).toHaveText('You have 1 character too many');
  await demo(page, 'controlled').getByRole('button', { name: 'Clear' }).click();
  await expect(status(page, 'controlled')).toHaveText('You have 10 characters remaining');
});

test('text typed before hydration is counted, and React keeps the element', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  page.on('pageerror', (error) => errors.push(String(error)));
  // Hold back React, but not the element, which the page's own script defines.
  let release = () => {};
  const gate = new Promise<void>((resolve) => {
    release = resolve;
  });
  await page.route(/\/_astro\/(CharacterCountDemo|client)\.[^/]*\.js$/, async (route) => {
    await gate;
    await route.continue();
  });
  await page.goto('/test/character-count', { waitUntil: 'commit' });
  await field(page, 'hydrated').fill('Hello');
  await expect(status(page, 'hydrated')).toHaveText('You have 5 characters remaining');
  // Mark the element, to tell whether hydration replaces it.
  await demo(page, 'hydrated')
    .locator('govuk-react-character-count')
    .evaluate((element) => element.setAttribute('data-before-hydration', ''));
  release();
  await expect(demo(page, 'hydrated')).toHaveAttribute('data-hydrated', 'true');
  await expect(demo(page, 'hydrated').locator('govuk-react-character-count[data-before-hydration]')).toHaveCount(1);
  await expect(field(page, 'hydrated')).toHaveValue('Hello');
  await field(page, 'hydrated').fill('Hello!');
  await expect(status(page, 'hydrated')).toHaveText('You have 4 characters remaining');
  expect(errors).toEqual([]);
});

test('works when rendered only in the browser', async ({ page }) => {
  await page.goto('/test/character-count-client-only');
  await field(page, 'client').fill('Hello');
  await expect(status(page, 'client')).toHaveText('You have 5 characters remaining');
});
