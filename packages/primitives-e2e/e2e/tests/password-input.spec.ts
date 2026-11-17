import { expect, test, type Page } from '@playwright/test';

const field = (page: Page, id: string) => page.getByTestId(`password-${id}`);

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('is a password field with no button', async ({ page }) => {
    await page.goto('/test/password');
    await expect(field(page, 'upgraded').getByLabel('Password', { exact: true })).toHaveAttribute('type', 'password');
    await expect(field(page, 'upgraded').getByRole('button', { name: 'Show password' })).toBeHidden();
  });
});

for (const id of ['upgraded', 'hydrated']) {
  test.describe(id === 'upgraded' ? 'upgraded without React' : 'hydrated', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/test/password');
      if (id === 'hydrated') await expect(field(page, id)).toHaveAttribute('data-hydrated', 'true');
    });

    test('the button shows and hides the password, and announces it', async ({ page }) => {
      const form = field(page, id);
      const input = form.getByLabel('Password', { exact: true });
      await input.fill('hunter2');
      await form.getByRole('button', { name: 'Show password' }).click();
      await expect(input).toHaveAttribute('type', 'text');
      await expect(form.getByRole('button', { name: 'Hide password' })).toHaveText('Hide');
      await expect(form.locator('[aria-live=polite]')).toHaveText('Your password is visible');
      await form.getByRole('button', { name: 'Hide password' }).click();
      await expect(input).toHaveAttribute('type', 'password');
      await expect(form.locator('[aria-live=polite]')).toHaveText('Your password is hidden');
      await expect(input).toHaveValue('hunter2');
    });

    test('submitting the form hides the password', async ({ page }) => {
      const form = field(page, id);
      await form.getByRole('button', { name: 'Show password' }).click();
      await form.getByRole('button', { name: 'Sign in' }).click();
      await expect(form.getByLabel('Password', { exact: true })).toHaveAttribute('type', 'password');
    });
  });
}

test('works when rendered only in the browser', async ({ page }) => {
  await page.goto('/test/password-client-only');
  const form = field(page, 'client');
  await form.getByRole('button', { name: 'Show password' }).click();
  await expect(form.getByLabel('Password', { exact: true })).toHaveAttribute('type', 'text');
});

test('a password shown before hydration stays shown, and logs no errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  page.on('pageerror', (error) => errors.push(String(error)));
  await page.goto('/test/password');
  const form = field(page, 'hydrated');
  await form.getByRole('button', { name: 'Show password' }).click();
  await expect(form).toHaveAttribute('data-hydrated', 'true');
  await expect(form.getByLabel('Password', { exact: true })).toHaveAttribute('type', 'text');
  expect(errors).toEqual([]);
});
