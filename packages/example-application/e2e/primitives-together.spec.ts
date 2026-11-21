import path from 'node:path';
import { test, expect, type Page } from '@playwright/test';

const story = '/iframe.html?id=primitives-together--default&viewMode=story';

async function openTaxDecision(page: Page) {
  await page.getByRole('button', { name: 'Update appeals' }).click();
  const dialog = page.getByRole('dialog', { name: 'Appeals' });
  await expect(dialog).toBeVisible();
  const button = dialog.getByRole('button', { name: /^Tax decision/ });
  await button.click();
  await expect(button).toHaveAttribute('aria-expanded', 'true');
  return { dialog, form: dialog.locator('#appeals-accordion-content-2') };
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

test('a tab’s button opens its modal, and Escape closes it and puts focus back on the button', async ({ page }) => {
  await page.getByRole('tab', { name: 'Appeals' }).click();
  await expect(page.getByRole('tab', { name: 'Appeals' })).toHaveAttribute('aria-selected', 'true');
  const trigger = page.getByRole('button', { name: 'Update appeals' });
  await expect(trigger).toBeVisible();
  await expect(page.getByRole('button', { name: 'Update applications' })).toBeHidden();

  await trigger.click();
  const dialog = page.getByRole('dialog', { name: 'Appeals' });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole('button', { name: 'Show all sections' })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

test.describe('with a list of links to the panels', () => {
  test.use({ viewport: { width: 375, height: 800 } });

  test('each panel’s button opens its modal', async ({ page }) => {
    await page.getByRole('button', { name: 'Update complaints' }).click();
    await expect(page.getByRole('dialog', { name: 'Complaints' })).toBeVisible();
  });
});

test('the form’s components work inside the modal', async ({ page }) => {
  await page.getByRole('tab', { name: 'Appeals' }).click();
  const { dialog, form } = await openTaxDecision(page);
  await expect(dialog.locator('#appeals-accordion-content-1')).toBeHidden();

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
});

test('what the user entered survives closing the modal and switching tabs', async ({ page }) => {
  await page.getByRole('tab', { name: 'Appeals' }).click();
  const { form } = await openTaxDecision(page);
  await form.getByLabel('Email', { exact: true }).check();
  await form.getByLabel('Email address').fill('name@example.com');
  await page.getByRole('button', { name: 'Close' }).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);

  await page.getByRole('tab', { name: 'Complaints' }).click();
  await page.getByRole('tab', { name: 'Appeals' }).click();
  await page.getByRole('button', { name: 'Update appeals' }).click();
  await expect(form.getByLabel('Email', { exact: true })).toBeChecked();
  await expect(form.getByLabel('Email address')).toHaveValue('name@example.com');
});
