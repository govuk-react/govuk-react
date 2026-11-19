import { expect, test, type Page } from '@playwright/test';

// Ported from accessible-autocomplete's functional and integration tests.

const demo = (page: Page, id: string) => page.getByTestId(`autocomplete-${id}`);
const input = (page: Page, id: string) => demo(page, id).getByLabel('Country');
const listbox = (page: Page, id: string) => demo(page, id).locator('[data-autocomplete-listbox]');
const option = (page: Page, id: string, name: string) => demo(page, id).getByRole('option', { name, exact: true });
const regions = (page: Page, id: string) =>
  page.getByTestId(`status-${id}`).getByRole('status', { includeHidden: true });

/** The text of both live regions, which accessible-autocomplete updates alternately. */
const statusOf = (page: Page, id: string) => regions(page, id).allTextContents();

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('is a plain input, and the form submits what was typed', async ({ page }) => {
    await page.goto('/test/autocomplete');
    const field = input(page, 'upgraded');
    await expect(field).not.toHaveAttribute('role');
    await expect(field).not.toHaveAttribute('aria-expanded');
    await field.fill('Fra');
    await expect(listbox(page, 'upgraded')).toBeHidden();
    await field.press('Enter');
    await expect(page).toHaveURL(/autocomplete-submitted\?country=Fra$/);
  });
});

for (const id of ['upgraded', 'hydrated']) {
  test.describe(id === 'upgraded' ? 'upgraded without React' : 'hydrated', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/test/autocomplete');
      if (id === 'hydrated') await expect(demo(page, id)).toHaveAttribute('data-hydrated', 'true');
      await expect(input(page, id)).toHaveAttribute('role', 'combobox');
    });

    test('renders a combobox, described by the assistive hint while empty', async ({ page }) => {
      const field = input(page, id);
      const list = listbox(page, id);
      await expect(field).toHaveAttribute('aria-expanded', 'false');
      await expect(field).toHaveAttribute('aria-autocomplete', 'list');
      await expect(field).toHaveAttribute('autocomplete', 'off');
      await expect(field).toHaveAttribute('aria-controls', `${id}-country__listbox`);
      await expect(list).toHaveAttribute('role', 'listbox');
      await expect(list).toHaveAttribute('aria-labelledby', `${id}-country`);
      await expect(field).toHaveAccessibleDescription(/use up and down arrows to review and enter to select/);
      await field.fill('a');
      await expect(field).not.toHaveAttribute('aria-describedby');
    });

    test('typing shows the options that contain the query, and hides the rest', async ({ page }) => {
      const field = input(page, id);
      await field.fill('u');
      await expect(field).toHaveAttribute('aria-expanded', 'true');
      await expect(listbox(page, id).getByRole('option')).toHaveText([
        'United Kingdom',
        'United States',
        'Uganda',
        'Ukraine',
      ]);
      await expect(option(page, id, 'Uganda')).toHaveAttribute('aria-posinset', '3');
      await expect(option(page, id, 'Uganda')).toHaveAttribute('aria-setsize', '4');
      await expect(option(page, id, 'Uganda')).toHaveAttribute('aria-selected', 'false');
      await field.fill('uni');
      await expect(listbox(page, id).getByRole('option')).toHaveText(['United Kingdom', 'United States']);
    });

    test('shows “No results found” when nothing matches, and closes when the query is empty', async ({ page }) => {
      const field = input(page, id);
      await field.fill('xyz');
      await expect(field).toHaveAttribute('aria-expanded', 'false');
      const noResults = listbox(page, id).getByRole('option', { name: 'No results found' });
      await expect(noResults).toBeVisible();
      await expect(noResults).toHaveAttribute('aria-disabled', 'true');
      await field.fill('');
      await expect(listbox(page, id)).toBeHidden();
    });

    test('Up and Down move focus through the options and back to the input', async ({ page }) => {
      const field = input(page, id);
      await field.fill('u');
      await field.press('ArrowDown');
      const first = option(page, id, 'United Kingdom');
      await expect(first).toBeFocused();
      await expect(first).toHaveAttribute('aria-selected', 'true');
      await expect(first).toHaveAttribute('data-focused');
      await expect(field).toHaveAttribute('aria-activedescendant', (await first.getAttribute('id')) ?? '');
      await page.keyboard.press('ArrowDown');
      await expect(option(page, id, 'United States')).toBeFocused();
      await expect(first).toHaveAttribute('aria-selected', 'false');
      await page.keyboard.press('ArrowUp');
      await page.keyboard.press('ArrowUp');
      await expect(field).toBeFocused();
      await expect(field).not.toHaveAttribute('aria-activedescendant');
      await expect(field).toHaveAttribute('aria-expanded', 'true');
    });

    test('Down does nothing at the last option', async ({ page }) => {
      const field = input(page, id);
      await field.fill('fra');
      await field.press('ArrowDown');
      await page.keyboard.press('ArrowDown');
      await expect(option(page, id, 'France')).toBeFocused();
    });

    test('Enter on an option confirms it', async ({ page }) => {
      const field = input(page, id);
      await field.fill('u');
      await field.press('ArrowDown');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');
      await expect(field).toHaveValue('United States');
      await expect(field).toBeFocused();
      await expect(field).toHaveAttribute('aria-expanded', 'false');
      await expect(listbox(page, id)).toBeHidden();
      if (id === 'hydrated') await expect(page.getByTestId(`confirmed-${id}`)).toHaveText('United States');
    });

    test('Space on an option confirms it', async ({ page }) => {
      const field = input(page, id);
      await field.fill('ger');
      await field.press('ArrowDown');
      await page.keyboard.press(' ');
      await expect(field).toHaveValue('Germany');
      await expect(listbox(page, id)).toBeHidden();
    });

    test('Enter on the input with the menu open does nothing, and doesn’t submit the form', async ({ page }) => {
      const field = input(page, id);
      await field.fill('u');
      await field.press('Enter');
      await expect(field).toHaveValue('u');
      await expect(listbox(page, id)).toBeVisible();
      await expect(page).toHaveURL(/\/test\/autocomplete$/);
    });

    test('Escape closes the menu', async ({ page }) => {
      const field = input(page, id);
      await field.fill('u');
      await field.press('Escape');
      await expect(listbox(page, id)).toBeHidden();
      await expect(field).toHaveValue('u');
      await field.fill('ug');
      await field.press('ArrowDown');
      await page.keyboard.press('Escape');
      await expect(listbox(page, id)).toBeHidden();
      await expect(field).toBeFocused();
    });

    test('typing on an option goes back to the input', async ({ page }) => {
      const field = input(page, id);
      await field.fill('u');
      await field.press('ArrowDown');
      await page.keyboard.press('k');
      await expect(field).toBeFocused();
      await expect(field).toHaveValue('uk');
      await expect(listbox(page, id).getByRole('option')).toHaveText(['Ukraine']);
    });

    test('clicking an option confirms it', async ({ page }) => {
      const field = input(page, id);
      await field.fill('u');
      await option(page, id, 'Uganda').hover();
      await expect(option(page, id, 'Uganda')).not.toHaveAttribute('data-focused');
      await option(page, id, 'Uganda').click();
      await expect(field).toHaveValue('Uganda');
      await expect(field).toBeFocused();
      await expect(listbox(page, id)).toBeHidden();
    });

    test('focusing the input again reopens the menu, until a choice is made', async ({ page }) => {
      const field = input(page, id);
      await field.fill('u');
      await demo(page, id).getByRole('button', { name: 'Continue' }).focus();
      await expect(listbox(page, id)).toBeHidden();
      await field.focus();
      await expect(listbox(page, id)).toBeVisible();
      await field.fill('fra');
      await option(page, id, 'France').click();
      await demo(page, id).getByRole('button', { name: 'Continue' }).focus();
      await field.focus();
      await expect(listbox(page, id)).toBeHidden();
    });

    test('focus leaving a highlighted option confirms it', async ({ page }) => {
      const field = input(page, id);
      await field.fill('ger');
      await field.press('ArrowDown');
      await page.keyboard.press('Tab');
      await expect(field).toHaveValue('Germany');
      await expect(listbox(page, id)).toBeHidden();
    });

    test('announces the options in alternate live regions, once the user pauses', async ({ page }) => {
      const field = input(page, id);
      expect(await statusOf(page, id)).toEqual(['', '']);
      await field.fill('u');
      await expect.poll(() => statusOf(page, id)).toContain('4 results are available.');
      const first = await statusOf(page, id);
      await field.fill('uk');
      await expect.poll(() => statusOf(page, id)).toContain('1 result is available.');
      // The other region this time, so the same text would still be announced.
      expect((await statusOf(page, id)).indexOf('1 result is available.')).not.toBe(
        first.indexOf('4 results are available.')
      );
      await field.press('ArrowDown');
      await expect.poll(() => statusOf(page, id)).toContain('1 result is available. Ukraine 1 of 1 is highlighted');
    });

    test('is silent once the user has made a choice', async ({ page }) => {
      const field = input(page, id);
      await field.fill('ger');
      await expect.poll(() => statusOf(page, id)).toContain('1 result is available.');
      await field.press('ArrowDown');
      await page.keyboard.press('Enter');
      await page.waitForTimeout(1600);
      expect(await statusOf(page, id)).toEqual(['', '']);
    });

    test('a value set directly, as speech recognition software does, is searched', async ({ page }) => {
      await input(page, id).focus();
      await input(page, id).evaluate((element) => {
        if (element instanceof HTMLInputElement) element.value = 'fra';
      });
      await expect(listbox(page, id).getByRole('option')).toHaveText(['France']);
    });
  });
}

for (const id of ['upgraded-submit', 'submit']) {
  test(`${id === 'submit' ? 'hydrated' : 'upgraded'}: confirming an option submits the form`, async ({ page }) => {
    await page.goto('/test/autocomplete');
    if (id === 'submit') await expect(demo(page, id)).toHaveAttribute('data-hydrated', 'true');
    const field = input(page, id);
    await expect(field).toHaveAttribute('role', 'combobox');
    await field.fill('fr');
    await field.press('ArrowDown');
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/autocomplete-submitted\?country=France$/);
  });

  test(`${id === 'submit' ? 'hydrated' : 'upgraded'}: Enter with no option highlighted submits the query`, async ({
    page,
  }) => {
    await page.goto('/test/autocomplete');
    if (id === 'submit') await expect(demo(page, id)).toHaveAttribute('data-hydrated', 'true');
    const field = input(page, id);
    await expect(field).toHaveAttribute('role', 'combobox');
    await field.fill('u');
    await expect(listbox(page, id)).toBeVisible();
    await field.press('Enter');
    await expect(page).toHaveURL(/autocomplete-submitted\?country=u$/);
  });
}

test.describe('options from a server', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test/autocomplete');
    await expect(demo(page, 'remote')).toHaveAttribute('data-hydrated', 'true');
  });

  test('asks for options once the query is long enough, and shows what comes back', async ({ page }) => {
    const field = input(page, 'remote');
    await field.fill('u');
    await expect.poll(() => statusOf(page, 'remote')).toContain('Type in 2 or more characters for results');
    await expect(listbox(page, 'remote')).toBeHidden();
    await field.fill('un');
    await expect(page.getByTestId('query-remote')).toHaveText('un');
    await expect(listbox(page, 'remote').getByRole('option')).toHaveText(['United Kingdom', 'United States']);
    await field.fill('uk');
    await expect(listbox(page, 'remote').getByRole('option')).toHaveText(['Ukraine']);
    await field.press('ArrowDown');
    await page.keyboard.press('Enter');
    await expect(field).toHaveValue('Ukraine');
    await expect(page.getByTestId('confirmed-remote')).toHaveText('Ukraine');
  });

  test('“No results” is left out when the page doesn’t render it', async ({ page }) => {
    const field = input(page, 'remote');
    await field.fill('xyz');
    await expect(page.getByTestId('query-remote')).toHaveText('xyz');
    await expect(listbox(page, 'remote')).toBeHidden();
  });
});

test('a query typed before hydration is kept and reported, and React keeps the element', async ({ page }) => {
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
  await page.route(/\/_astro\/(AutocompleteDemo|client)\.[^/]*\.js$/, async (route) => {
    await gate;
    await route.continue();
  });
  await page.goto('/test/autocomplete', { waitUntil: 'commit' });
  await expect(input(page, 'hydrated')).toHaveAttribute('role', 'combobox');
  await input(page, 'hydrated').fill('ger');
  await expect(listbox(page, 'hydrated').getByRole('option')).toHaveText(['Germany']);
  await input(page, 'remote').fill('uni');
  // The status text is the element's, so hydration must leave it alone.
  await expect.poll(() => statusOf(page, 'remote')).toContain('No search results');
  for (const id of ['hydrated', 'remote']) {
    // Mark the element, to tell whether hydration replaces it.
    await demo(page, id)
      .locator('govuk-react-autocomplete')
      .evaluate((element) => element.setAttribute('data-before-hydration', ''));
  }
  release();
  for (const id of ['hydrated', 'remote']) {
    await expect(demo(page, id)).toHaveAttribute('data-hydrated', 'true');
    await expect(demo(page, id).locator('govuk-react-autocomplete[data-before-hydration]')).toHaveCount(1);
  }
  await expect(input(page, 'hydrated')).toHaveValue('ger');
  await expect(page.getByTestId('query-hydrated')).toHaveText('ger');
  // The remote options arrive once React has heard the query.
  await expect(page.getByTestId('query-remote')).toHaveText('uni');
  await expect(listbox(page, 'remote').getByRole('option')).toHaveText(['United Kingdom', 'United States']);
  await input(page, 'remote').press('ArrowDown');
  await page.keyboard.press('Enter');
  await expect(page.getByTestId('confirmed-remote')).toHaveText('United Kingdom');
  expect(errors).toEqual([]);
});

test('works when rendered only in the browser', async ({ page }) => {
  await page.goto('/test/autocomplete-client-only');
  const field = input(page, 'client');
  await field.fill('ge');
  await expect(listbox(page, 'client').getByRole('option')).toHaveText(['Germany']);
  await field.press('ArrowDown');
  await page.keyboard.press('Enter');
  await expect(field).toHaveValue('Germany');
  await expect(page.getByTestId('confirmed-client')).toHaveText('Germany');
});
