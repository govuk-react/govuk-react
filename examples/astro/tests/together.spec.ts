import { expect, test, type Page } from '@playwright/test';

/** The page works the same once its inline scripts have run, before React hydrates, and after. */
const modes = ['before hydration', 'hydrated'] as const;

async function open(page: Page, mode: (typeof modes)[number]) {
  if (mode === 'before hydration') {
    await page.route('**/_astro/*.js', (route) => route.abort());
  }
  await page.goto('together');
  if (mode === 'hydrated') {
    await expect(page.locator('astro-island:not([ssr])')).toHaveCount(1);
  }
}

for (const mode of modes) {
  test.describe(mode, () => {
    test.beforeEach(({ page }) => {
      page.on('pageerror', (error) => {
        throw error;
      });
    });

    test('change how we contact you and your password, in modals', async ({ page }) => {
      await open(page, mode);
      const dialog = page.getByRole('dialog');

      await page.getByRole('button', { name: 'Change how we contact you' }).click();
      await expect(dialog).toBeVisible();
      await expect(page.getByLabel('Email address')).toBeHidden();
      await dialog.getByLabel('Email', { exact: true }).check();
      await page.getByLabel('Email address').fill('name@example.com');
      await dialog.getByRole('button', { name: 'Save' }).click();
      await expect(dialog).toBeHidden();

      await page.getByRole('button', { name: 'Change how we contact you' }).click();
      await expect(page.getByLabel('Email address')).toHaveValue('name@example.com');
      await dialog.getByRole('button', { name: 'Cancel' }).click();
      await expect(dialog).toBeHidden();

      await page.getByRole('button', { name: 'Change your password' }).click();
      const password = page.getByLabel('Current password');
      await password.fill('secret');
      await expect(password).toHaveAttribute('type', 'password');
      await dialog.getByRole('button', { name: 'Show password' }).first().click();
      await expect(password).toHaveAttribute('type', 'text');
    });

    test('read what documents to send, and upload one', async ({ page }) => {
      await open(page, mode);
      await page.getByRole('tab', { name: 'Documents' }).click();
      await expect(page.getByText('A passport or photocard driving licence.')).toBeHidden();
      await page.getByRole('button', { name: 'Proof of identity' }).click();
      await expect(page.getByText('A passport or photocard driving licence.')).toBeVisible();

      await page.getByRole('button', { name: 'Upload a document' }).click();
      await page
        .getByRole('dialog')
        .locator('input[type="file"]')
        .setInputFiles({
          name: 'passport.pdf',
          mimeType: 'application/pdf',
          buffer: Buffer.from('%PDF-1.4'),
        });
      await expect(page.getByRole('dialog')).toContainText('passport.pdf');
      await page.getByRole('dialog').getByRole('button', { name: 'Upload', exact: true }).click();
      await expect(page.getByRole('dialog')).toBeHidden();
    });

    test('send a message, with a character count', async ({ page }) => {
      await open(page, mode);
      await page.getByRole('tab', { name: 'Messages' }).click();
      await page.getByRole('button', { name: 'Send us a message' }).click();
      await page.getByLabel('Your message').fill('When will I hear back?');
      await expect(page.getByText('You have 478 characters remaining', { exact: true })).toBeVisible();
      await page.getByRole('dialog').getByRole('button', { name: 'Send' }).click();
      await expect(page.getByRole('dialog')).toBeHidden();
    });
  });
}
