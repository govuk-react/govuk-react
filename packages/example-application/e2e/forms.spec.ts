import path from 'node:path';
import { test, expect, type Page } from '@playwright/test';

const formModes = ['Basic', 'Final Form', 'Formik', 'React Hook Form', 'React JSON Schema Form'];

const errors = {
  firstName: 'Please enter a first name',
  description: 'Please enter a description',
  nationality: 'Please select at least one nationality',
  dateOfBirth: 'Please enter a date of birth',
  animal: 'Please select an animal',
  petPhoto: 'Please select a valid photo',
  hasMultiplePets: 'Please let us know if you have multiple pets',
};

const parent = (page: Page, selector: string, levels = 1) =>
  page
    .locator(selector)
    .first()
    .locator(`xpath=${Array(levels).fill('..').join('/')}`);

async function fillInAllFields(page: Page) {
  await page.getByLabel('First name').fill('Mark');
  await page.getByLabel('Description of what you saw').fill('Mark');
  await page.getByText('British').click();
  await page.getByLabel('Day').fill('19');
  await page.getByLabel('Month').fill('9');
  await page.getByLabel('Year').fill('1999');
  await parent(page, 'text=What animal is your pet').locator('select').selectOption({ label: 'Other feline' });
  await parent(page, 'text=Do you have more than one pet?').getByText('No', { exact: true }).click();
  await page.locator('input[type="file"]').setInputFiles(path.join(__dirname, 'logo.png'));
}

async function expectAllErrors(page: Page) {
  const summary = parent(page, 'text=Error summary');
  await expect(summary).toBeVisible();
  for (const message of Object.values(errors)) {
    await expect(summary.getByText(message)).toBeVisible();
  }
  await expect(parent(page, '[name="firstName"]').getByText(errors.firstName)).toBeVisible();
  await expect(parent(page, '[name="description"]').getByText(errors.description)).toBeVisible();
  await expect(parent(page, '[name="nationality"]', 2).getByText(errors.nationality)).toBeVisible();
  await expect(parent(page, 'text=Date of birth').getByText(errors.dateOfBirth)).toBeVisible();
  await expect(parent(page, '[name="animal"]').getByText(errors.animal)).toBeVisible();
  await expect(parent(page, '[name="hasMultiplePets"]', 2).getByText(errors.hasMultiplePets)).toBeVisible();
  await expect(parent(page, '[name="petPhoto"]').getByText(errors.petPhoto)).toBeVisible();
}

for (const formMode of formModes) {
  test.describe(`When a user clicks Start now and browses to ${formMode}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.addInitScript(() => {
        const errors: unknown[][] = [];
        Object.assign(window, { consoleErrors: errors });
        console.error = (...args: unknown[]) => errors.push(args);
      });
      await page.goto('/iframe.html?id=example-application--example-application&viewMode=story');
      await page.getByRole('link', { name: 'Start now' }).click();
      await page.getByRole('link', { name: formMode }).click();
    });

    test.afterEach(async ({ page }) => {
      // rjsf logs a known warning: https://github.com/rjsf-team/react-jsonschema-form/issues/1794
      if (formMode !== 'React JSON Schema Form') {
        expect(await page.evaluate(() => (window as unknown as { consoleErrors: unknown[] }).consoleErrors)).toEqual(
          []
        );
      }
    });

    test('no error messages are shown', async ({ page }) => {
      await expect(page.getByText('Error summary')).toHaveCount(0);
      for (const message of Object.values(errors)) {
        await expect(page.getByText(message)).toHaveCount(0);
      }
    });

    test('submitting shows error messages', async ({ page }) => {
      await page.getByRole('button', { name: 'Submit' }).click();
      await expectAllErrors(page);
    });

    test('filling in every field after a failed submit keeps the errors until resubmitting', async ({ page }) => {
      await page.getByRole('button', { name: 'Submit' }).click();
      await fillInAllFields(page);
      await expectAllErrors(page);
      await page.getByRole('button', { name: 'Submit' }).click();
      await expect(page.getByText('Application complete')).toBeVisible();
    });

    test('filling in every field and submitting shows the answers', async ({ page }) => {
      await fillInAllFields(page);
      await page.getByRole('button', { name: 'Submit' }).click();
      await expect(page.getByText('Application complete')).toBeVisible();
      await expect(page.getByText('Name: Mark')).toBeVisible();
      await expect(page.getByText('Description: Mark')).toBeVisible();
      await expect(page.getByText('Nationality: british')).toBeVisible();
      await expect(page.getByText('Date of birth: 19/9/1999')).toBeVisible();
      await expect(page.getByText('Animal: other-feline')).toBeVisible();
      await expect(page.getByText('Multiple pets: no')).toBeVisible();
      const photo = page.getByAltText('Your pet');
      await expect(photo).toBeVisible();
      expect(await photo.evaluate((image: HTMLImageElement) => image.naturalWidth)).toBe(276);
    });
  });
}
