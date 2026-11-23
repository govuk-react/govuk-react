import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { expect, test, type Page } from '@playwright/test';

const tags = [
  'accordion',
  'autocomplete',
  'auto-focus',
  'character-count',
  'choices',
  'disclosure',
  'exit-this-page',
  'file-upload',
  'focus-links',
  'modal',
  'password-input',
  'tabs',
].map((name) => `govuk-react-${name}`);

const require = createRequire(import.meta.url);
const inlineTabs = readFileSync(require.resolve('@govuk-react/primitives/inline/tabs-element.js'), 'utf8');

/** Collects errors from the page, such as an element being defined twice. */
function errorsOf(page: Page) {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(String(error)));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  return errors;
}

test('the inline scripts define every element before React loads, and the tabs work', async ({ page }) => {
  const errors = errorsOf(page);
  // Hold React back for good.
  await page.route(/\/_astro\/.*\.js$/, () => {});
  await page.goto('/test/inline', { waitUntil: 'domcontentloaded' });
  expect(await page.evaluate((names) => names.filter((name) => !customElements.get(name)), tags)).toEqual([]);
  const tab = page.getByTestId('demo-h').getByRole('tab', { name: 'Settings' });
  await tab.click();
  await expect(tab).toHaveAttribute('aria-selected', 'true');
  expect(errors).toEqual([]);
});

test('inline first: React’s parts pick up from the inline elements, which aren’t defined again', async ({ page }) => {
  const errors = errorsOf(page);
  await page.goto('/test/inline');
  await expect(page.getByTestId('demo-h')).toHaveAttribute('data-hydrated', 'true');
  await page.getByTestId('demo-h').getByRole('tab', { name: 'Settings' }).click();
  await expect(page.getByTestId('last-h')).toHaveText('h-settings');
  expect(errors).toEqual([]);
});

test('React first: an inline script that runs later leaves React’s element alone', async ({ page }) => {
  const errors = errorsOf(page);
  await page.goto('/test/client-only');
  await expect(page.locator('govuk-react-tabs').first()).toHaveAttribute('data-upgraded', '');
  await page.evaluate(() => Reflect.set(window, 'reactTabs', customElements.get('govuk-react-tabs')));
  await page.addScriptTag({ content: inlineTabs });
  expect(await page.evaluate(() => customElements.get('govuk-react-tabs') === Reflect.get(window, 'reactTabs'))).toBe(
    true
  );
  const tab = page.getByTestId('demo-c').getByRole('tab', { name: 'Settings' });
  await tab.click();
  await expect(tab).toHaveAttribute('aria-selected', 'true');
  expect(errors).toEqual([]);
});

test('the inline tabs upgrade while a deferred script holds the page loading', async ({ page }) => {
  await page.route('**/held.js', () => {});
  await page.route('**/test/still-loading', (route) =>
    route.fulfill({
      contentType: 'text/html',
      body: `<!doctype html><html lang="en"><head><title>Still loading</title><script>${inlineTabs}</script><script defer src="/held.js"></script></head><body>
        <govuk-react-tabs>
          <div data-tabs-list><a data-tabs-trigger data-value="a" href="#a">A</a><a data-tabs-trigger data-value="b" href="#b">B</a></div>
          <div data-tabs-content data-value="a" id="a"><input type="radio" name="t" hidden checked>A panel</div>
          <div data-tabs-content data-value="b" id="b"><input type="radio" name="t" hidden>B panel</div>
        </govuk-react-tabs></body></html>`,
    })
  );
  await page.goto('/test/still-loading', { waitUntil: 'commit' });
  await expect(page.getByRole('tab', { name: 'A' })).toHaveAttribute('aria-selected', 'true');
  await expect(page.getByText('B panel')).toBeHidden();
  expect(await page.evaluate(() => document.readyState)).not.toBe('complete');
});
