import path from 'node:path';
import { expect, test } from '@playwright/test';

// govuk-react's primitives together story, rendered on the server with no React in the browser.
test.use({ viewport: { width: 1024, height: 800 } });

test.beforeEach(async ({ page }) => {
  await page.goto('/test/govuk-react-together');
});

test('tabs, modal, accordion and form work together without React', async ({ page }) => {
  await page.getByRole('tab', { name: 'Appeals' }).click();
  await expect(page.getByRole('button', { name: 'Update applications' })).toBeHidden();
  const trigger = page.getByRole('button', { name: 'Update appeals' });
  await trigger.click();
  const dialog = page.getByRole('dialog', { name: 'Appeals' });
  await expect(dialog).toBeVisible();

  const section = dialog.getByRole('button', { name: /^Tax decision/ });
  await section.click();
  await expect(section).toHaveAttribute('aria-expanded', 'true');
  const form = dialog.locator('#appeals-accordion-tax-decision-content');

  await form.getByLabel('Phone', { exact: true }).check();
  await expect(form.getByLabel('Phone number')).toBeVisible();
  await form.getByLabel('Can you provide more detail?').fill('Hello');
  await expect(form.getByText('You have 195 characters remaining')).toBeVisible();
  const password = form.getByLabel('Password', { exact: true });
  await password.fill('secret');
  await form.getByRole('button', { name: 'Show password' }).click();
  await expect(password).toHaveAttribute('type', 'text');
  await form.locator('input[type="file"]').setInputFiles(path.join(import.meta.dirname, '../../package.json'));
  await expect(form.getByText('package.json')).toBeVisible();

  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await expect(form.getByLabel('Phone', { exact: true })).toBeChecked();
});
