import { expect, test, type Page } from '@playwright/test';

const demo = (page: Page, id: string) => page.getByTestId(`accordion-${id}`);
const trigger = (page: Page, id: string, heading: string) =>
  demo(page, id).getByRole('button', { name: new RegExp(`^${heading}`) });
const content = (page: Page, id: string, heading: string) => demo(page, id).getByText(`${heading} content`);

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('shows every section under a plain heading, with no buttons', async ({ page }) => {
    await page.goto('/test/accordion');
    await expect(demo(page, 'upgraded').getByRole('button')).toHaveCount(0);
    await expect(demo(page, 'upgraded').getByRole('heading', { name: 'Writing well for the web' })).toBeVisible();
    await expect(content(page, 'upgraded', 'Writing well for the web')).toBeVisible();
    await expect(content(page, 'upgraded', 'Writing well for specialists')).toBeVisible();
  });
});

for (const id of ['upgraded', 'hydrated']) {
  test.describe(id === 'upgraded' ? 'upgraded without React' : 'hydrated', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/test/accordion');
      if (id === 'hydrated') await expect(demo(page, id)).toHaveAttribute('data-hydrated', 'true');
    });

    test('each heading is a button that shows and hides its section', async ({ page }) => {
      const button = trigger(page, id, 'Writing well for the web');
      await expect(demo(page, id).getByRole('heading', { name: /Writing well for the web/ })).toHaveCount(1);
      await expect(button).toHaveAttribute('aria-expanded', 'false');
      await expect(button).toHaveAccessibleName('Writing well for the web , An introduction , Show this section');
      await expect(content(page, id, 'Writing well for the web')).toBeHidden();
      await expect(content(page, id, 'Writing well for specialists')).toBeVisible();
      await button.click();
      await expect(button).toHaveAttribute('aria-expanded', 'true');
      await expect(content(page, id, 'Writing well for the web')).toBeVisible();
    });

    test('"show all" opens every section, then hides them all', async ({ page }) => {
      await demo(page, id).getByRole('button', { name: 'Show all sections' }).click();
      await expect(content(page, id, 'Writing well for the web')).toBeVisible();
      await demo(page, id).getByRole('button', { name: 'Hide all sections' }).click();
      await expect(content(page, id, 'Writing well for specialists')).toBeHidden();
    });

    test('a find-in-page match opens its section', async ({ page }) => {
      const hidden = content(page, id, 'Writing well for the web');
      await expect(hidden).toHaveAttribute('hidden', 'until-found');
      await hidden.dispatchEvent('beforematch');
      await expect(hidden).toBeVisible();
      await expect(trigger(page, id, 'Writing well for the web')).toHaveAttribute('aria-expanded', 'true');
    });
  });
}

test('hydrated: reports the open sections', async ({ page }) => {
  await page.goto('/test/accordion');
  await expect(demo(page, 'hydrated')).toHaveAttribute('data-hydrated', 'true');
  await trigger(page, 'hydrated', 'Writing well for the web').click();
  await expect(page.getByTestId('last-hydrated')).toHaveText('web specialists');
});

test('controlled: the app can close every section', async ({ page }) => {
  await page.goto('/test/accordion');
  await expect(demo(page, 'controlled')).toHaveAttribute('data-hydrated', 'true');
  await trigger(page, 'controlled', 'Writing well for the web').click();
  await expect(content(page, 'controlled', 'Writing well for the web')).toBeVisible();
  await demo(page, 'controlled').getByRole('button', { name: 'Close every section' }).click();
  await expect(content(page, 'controlled', 'Writing well for the web')).toBeHidden();
});

test('controlled: a section opened before hydration stays open, and is reported', async ({ page }) => {
  // Hold back React, but not the element, which the page's own script defines.
  let release = () => {};
  const gate = new Promise<void>((resolve) => {
    release = resolve;
  });
  await page.route(/\/_astro\/(AccordionDemo|client)\.[^/]*\.js$/, async (route) => {
    await gate;
    await route.continue();
  });
  await page.goto('/test/accordion', { waitUntil: 'commit' });
  await trigger(page, 'controlled', 'Writing well for the web').click();
  await expect(content(page, 'controlled', 'Writing well for the web')).toBeVisible();
  release();
  await expect(demo(page, 'controlled')).toHaveAttribute('data-hydrated', 'true');
  await expect(page.getByTestId('last-controlled')).toHaveText('web');
  await expect(content(page, 'controlled', 'Writing well for the web')).toBeVisible();
});

test('works when rendered only in the browser', async ({ page }) => {
  await page.goto('/test/accordion-client-only');
  await trigger(page, 'client', 'Writing well for the web').click();
  await expect(content(page, 'client', 'Writing well for the web')).toBeVisible();
});
