import { expect, test, type Page } from '@playwright/test';

const demo = (page: Page, id: string) => page.getByTestId(`choices-${id}`);
const choice = (page: Page, id: string, label: string) => demo(page, id).getByLabel(label, { exact: true });
const reveal = (page: Page, id: string, method: string) => demo(page, id).getByText(`${method} details`);

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('shows every reveal, and "None" is an ordinary checkbox', async ({ page }) => {
    await page.goto('/test/choices');
    await expect(reveal(page, 'upgraded', 'Email')).toBeVisible();
    await choice(page, 'upgraded', 'France').check();
    await choice(page, 'upgraded', 'None').check();
    await expect(choice(page, 'upgraded', 'France')).toBeChecked();
  });
});

for (const id of ['upgraded', 'hydrated']) {
  test.describe(id === 'upgraded' ? 'upgraded without React' : 'hydrated', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/test/choices');
      if (id === 'hydrated') await expect(demo(page, id)).toHaveAttribute('data-hydrated', 'true');
    });

    test('reveals content only while its radio is checked', async ({ page }) => {
      const email = choice(page, id, 'Email');
      await expect(reveal(page, id, 'Email')).toBeHidden();
      await expect(email).toHaveAttribute('aria-expanded', 'false');
      await email.check();
      await expect(reveal(page, id, 'Email')).toBeVisible();
      await expect(email).toHaveAttribute('aria-expanded', 'true');
      // The arrow keys move to the next radio, which checks it.
      await page.keyboard.press('ArrowDown');
      await expect(choice(page, id, 'Phone')).toBeChecked();
      await expect(reveal(page, id, 'Email')).toBeHidden();
      await expect(reveal(page, id, 'Phone')).toBeVisible();
    });

    test('"None" unchecks the countries, and a country unchecks "None"', async ({ page }) => {
      await choice(page, id, 'France').check();
      await choice(page, id, 'None').check();
      await expect(choice(page, id, 'France')).not.toBeChecked();
      await choice(page, id, 'Spain').check();
      await expect(choice(page, id, 'None')).not.toBeChecked();
    });
  });
}

test('controlled: React hears about the checkboxes "None" unchecks', async ({ page }) => {
  await page.goto('/test/choices');
  await expect(demo(page, 'controlled')).toHaveAttribute('data-hydrated', 'true');
  await choice(page, 'controlled', 'France').check();
  await choice(page, 'controlled', 'Spain').check();
  await choice(page, 'controlled', 'None').check();
  await expect(demo(page, 'controlled').locator('output')).toHaveText('None');
  await expect(choice(page, 'controlled', 'France')).not.toBeChecked();
});

test('a choice made before hydration is kept, and logs no errors', async ({ page }) => {
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
  await page.route(/\/_astro\/(ChoicesDemo|client)\.[^/]*\.js$/, async (route) => {
    await gate;
    await route.continue();
  });
  await page.goto('/test/choices', { waitUntil: 'commit' });
  await choice(page, 'hydrated', 'Email').check();
  await expect(reveal(page, 'hydrated', 'Email')).toBeVisible();
  await demo(page, 'hydrated')
    .locator('govuk-react-choices')
    .first()
    .evaluate((element) => element.setAttribute('data-before-hydration', ''));
  release();
  await expect(demo(page, 'hydrated')).toHaveAttribute('data-hydrated', 'true');
  await expect(demo(page, 'hydrated').locator('govuk-react-choices[data-before-hydration]')).toHaveCount(1);
  await expect(reveal(page, 'hydrated', 'Email')).toBeVisible();
  await expect(reveal(page, 'hydrated', 'Phone')).toBeHidden();
  expect(errors).toEqual([]);
});

test('works when rendered only in the browser', async ({ page }) => {
  await page.goto('/test/choices-client-only');
  await expect(reveal(page, 'client', 'Email')).toBeHidden();
  await choice(page, 'client', 'Email').check();
  await expect(reveal(page, 'client', 'Email')).toBeVisible();
});
