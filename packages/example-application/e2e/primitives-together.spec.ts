import path from 'node:path';
import { test, expect, type Page } from '@playwright/test';

const story = '/iframe.html?id=primitives-together--default&viewMode=story';

async function choose(page: Page, query: string, option: string) {
  const search = page.getByRole('combobox', { name: 'Find a form' });
  await search.fill(query);
  await page.getByRole('option', { name: option }).click();
}

async function expectFormFocused(page: Page, tab: string, section: string, sectionId: string) {
  const dialog = page.getByRole('dialog', { name: tab });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole('button', { name: new RegExp(`^${section}`) })).toHaveAttribute(
    'aria-expanded',
    'true'
  );
  await expect(page.locator(`#${sectionId}-contact`)).toBeFocused();
}

test.use({ viewport: { width: 1024, height: 800 } });

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    const errors: unknown[][] = [];
    Object.assign(window, { consoleErrors: errors });
    console.error = (...args: unknown[]) => errors.push(args);
  });
  await page.goto(story);
});

test.afterEach(async ({ page }) => {
  expect(await page.evaluate(() => Reflect.get(window, 'consoleErrors'))).toEqual([]);
});

for (const { name, width } of [
  { name: 'tabs', width: 1024 },
  { name: 'a list of links to the panels', width: 375 },
]) {
  test.describe(`with ${name}`, () => {
    test.use({ viewport: { width, height: 800 } });

    test('choosing a form selects its tab, opens its modal, expands it and focuses its first field', async ({
      page,
    }) => {
      await choose(page, 'tax', 'Tax decision');
      await expectFormFocused(page, 'Appeals', 'Tax decision', 'tax-decision');
      if (width > 640) {
        await expect(page.getByRole('tab', { name: 'Appeals' })).toHaveAttribute('aria-selected', 'true');
      }
    });
  });
}

test('the search works from the keyboard', async ({ page }) => {
  await page.getByRole('combobox', { name: 'Find a form' }).fill('pass');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await expectFormFocused(page, 'Applications', 'Passport', 'passport');
});

test('submitting the search goes to a form whose name matches', async ({ page }) => {
  await page.getByRole('combobox', { name: 'Find a form' }).fill('Transport');
  await page.getByRole('button', { name: 'Search' }).click();
  await expectFormFocused(page, 'Complaints', 'Transport', 'transport');
});

test('after closing the modal, choosing a form on another tab moves there', async ({ page }) => {
  await choose(page, 'blue', 'Blue Badge');
  await expectFormFocused(page, 'Applications', 'Blue Badge', 'blue-badge');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await choose(page, 'health', 'Health services');
  await expectFormFocused(page, 'Complaints', 'Health services', 'health-services');
  await expect(page.getByRole('tab', { name: 'Complaints' })).toHaveAttribute('aria-selected', 'true');
  await expect(page.getByRole('button', { name: /^Blue Badge/ })).toBeHidden();
});

test('choosing the same form again focuses its first field again', async ({ page }) => {
  await choose(page, 'tax', 'Tax decision');
  await expectFormFocused(page, 'Appeals', 'Tax decision', 'tax-decision');
  await page.getByRole('button', { name: 'Close' }).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await choose(page, 'tax', 'Tax decision');
  await expectFormFocused(page, 'Appeals', 'Tax decision', 'tax-decision');
});

test('closing the modal puts focus back on the search', async ({ page }) => {
  await choose(page, 'tax', 'Tax decision');
  await expectFormFocused(page, 'Appeals', 'Tax decision', 'tax-decision');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('combobox', { name: 'Find a form' })).toBeFocused();
});

test('what the user entered survives closing the modal and searching again', async ({ page }) => {
  await choose(page, 'tax', 'Tax decision');
  await expectFormFocused(page, 'Appeals', 'Tax decision', 'tax-decision');
  const form = page.getByRole('dialog', { name: 'Appeals' }).locator('#appeals-accordion-content-2');
  await form.getByLabel('Email', { exact: true }).check();
  await form.getByLabel('Email address').fill('name@example.com');
  await page.getByRole('button', { name: 'Close' }).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);

  await page.getByRole('button', { name: 'Update appeals' }).click();
  await expect(form.getByLabel('Email', { exact: true })).toBeChecked();
  await expect(form.getByLabel('Email address')).toHaveValue('name@example.com');
  await page.getByRole('button', { name: 'Close' }).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);

  await choose(page, 'tax', 'Tax decision');
  await expectFormFocused(page, 'Appeals', 'Tax decision', 'tax-decision');
  await expect(form.getByLabel('Email', { exact: true })).toBeChecked();
  await expect(form.getByLabel('Email address')).toHaveValue('name@example.com');
});

test('the form’s components work inside the modal', async ({ page }) => {
  await choose(page, 'tax', 'Tax decision');
  const dialog = page.getByRole('dialog', { name: 'Appeals' });
  const form = dialog.locator('#appeals-accordion-content-2');

  await expect(form.getByLabel('Phone number')).toBeHidden();
  await form.getByLabel('Phone', { exact: true }).check();
  await expect(form.getByLabel('Phone number')).toBeVisible();

  await form.getByLabel('Can you provide more detail?').fill('Hello');
  await expect(form.getByText('You have 195 characters remaining')).toBeVisible();

  const password = form.getByLabel('Password', { exact: true });
  await password.fill('secret');
  await expect(password).toHaveAttribute('type', 'password');
  await form.getByRole('button', { name: 'Show password' }).click();
  await expect(password).toHaveAttribute('type', 'text');

  await form.locator('input[type="file"]').setInputFiles(path.join(__dirname, 'logo.png'));
  await expect(form.getByText('logo.png')).toBeVisible();

  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
});
