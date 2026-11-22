import { expect, test, type Page } from '@playwright/test';

/**
 * Each form is tested three ways: without JavaScript, with JavaScript before React hydrates (only
 * the inlined scripts run), and once React has hydrated, when Conform validates in the browser.
 */
type Mode = 'without JavaScript' | 'before hydration' | 'hydrated';

const modes: Mode[] = ['without JavaScript', 'before hydration', 'hydrated'];

async function open(page: Page, mode: Mode, path: string) {
  if (mode === 'before hydration') {
    await page.route('**/_astro/*.js', (route) => route.abort());
  }
  await page.goto(path.replace(/^\//, ''));
  if (mode === 'hydrated') {
    await expect(page.locator('astro-island:not([ssr])')).toHaveCount(1);
  }
}

async function expectErrors(page: Page, errors: { field: string; message: string }[]) {
  await expect(page).toHaveTitle(/^Error: /);
  const summary = page.locator(':focus');
  await expect(summary.getByRole('alert')).toContainText('There is a problem');
  await expect(summary.getByRole('link')).toHaveText(errors.map(({ message }) => message));
  for (const { field, message } of errors) {
    await expect(page.getByLabel(field, { exact: true })).toHaveAccessibleDescription(
      new RegExp(`Error:\\s+${message.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`)
    );
  }
}

for (const mode of modes) {
  test.describe(mode, () => {
    test.use({ javaScriptEnabled: mode !== 'without JavaScript' });

    if (mode === 'hydrated') {
      const errors: string[] = [];
      test.beforeEach(({ page }) => {
        errors.length = 0;
        // React reports hydration and other uncaught errors with reportError.
        page.on('pageerror', (error) => errors.push(error.message));
      });
      test.afterEach(() => expect(errors).toEqual([]));
    }

    test('sign in shows errors, keeps the email address but not the password, then signs in', async ({ page }) => {
      await open(page, mode, '/login');
      await page.getByRole('button', { name: 'Sign in' }).click();
      await expectErrors(page, [
        { field: 'Email address', message: 'Enter your email address' },
        { field: 'Password', message: 'Enter your password' },
      ]);

      await page.getByLabel('Email address').fill('name');
      await page.getByLabel('Password', { exact: true }).fill('password');
      await page.getByRole('button', { name: 'Sign in' }).click();
      await expectErrors(page, [
        { field: 'Email address', message: 'Enter an email address in the correct format, like name@example.com' },
      ]);
      await expect(page.getByLabel('Email address')).toHaveValue('name');
      if (mode !== 'hydrated') await expect(page.getByLabel('Password', { exact: true })).toHaveValue('');

      await page.getByLabel('Email address').fill('name@example.com');
      await page.getByLabel('Password', { exact: true }).fill('password');
      await page.getByLabel('Remember me').check();
      await page.getByRole('button', { name: 'Sign in' }).click();

      await expect(page).toHaveURL(/\/\?value=/);
      await expect(page).toHaveTitle('Examples – Astro example');
      const banner = page.getByRole('alert').filter({ hasText: 'Form submitted' });
      await expect(banner).toContainText('name@example.com');
      await expect(banner).toContainText('on');
    });

    for (const path of ['/signup', '/signup-async-schema']) {
      test(`${path} checks the username is available and the passwords match`, async ({ page }) => {
        await open(page, mode, path);
        await page.getByRole('button', { name: 'Create account' }).click();
        await expectErrors(page, [
          { field: 'Username', message: 'Enter a username' },
          { field: 'Create a password', message: 'Enter a password' },
          { field: 'Confirm password', message: 'Confirm your password' },
        ]);

        await page.getByLabel('Username').fill('example');
        await page.getByLabel('Create a password').fill('correct horse');
        await page.getByLabel('Confirm password').fill('battery staple');
        await page.getByRole('button', { name: 'Create account' }).click();
        await expectErrors(page, [
          ...(path === '/signup-async-schema' || mode === 'hydrated'
            ? [{ field: 'Username', message: 'That username is already taken. Try another, like example1' }]
            : []),
          { field: 'Confirm password', message: 'Passwords must match' },
        ]);
        await expect(page.getByLabel('Username')).toHaveValue('example');

        await page.getByLabel('Username').fill('example1');
        await page.getByLabel('Create a password').fill('correct horse');
        await page.getByLabel('Confirm password').fill('correct horse');
        await page.getByRole('button', { name: 'Create account' }).click();

        await expect(page).toHaveURL(/\/\?value=/);
        await expect(page.getByRole('alert').filter({ hasText: 'Form submitted' })).toContainText('example1');
      });
    }

    test('tasks can be added, reordered, removed and submitted', async ({ page }) => {
      await open(page, mode, '/todos');

      await page.getByRole('button', { name: 'Save' }).click();
      await expectErrors(page, [
        { field: 'Title', message: 'Enter a title' },
        { field: 'Description', message: 'Enter a description for task 1' },
      ]);

      const task = (n: number) => page.getByRole('group', { name: `Task ${n}` });

      await page.getByLabel('Title').fill('Shopping');
      await task(1).getByLabel('Description').fill('Bread');
      await page.getByRole('button', { name: 'Add another task' }).click();
      await task(2).getByLabel('Description').fill('Milk');
      await page.getByRole('button', { name: 'Add another task' }).click();
      await task(3).getByLabel('Description').fill('Eggs');
      await task(3).getByLabel('Completed').check();

      await page.getByRole('button', { name: 'Move up task 3' }).click();
      await expect(task(2).getByLabel('Description')).toHaveValue('Eggs');
      await expect(task(2).getByLabel('Completed')).toBeChecked();
      await expect(task(3).getByLabel('Description')).toHaveValue('Milk');

      await page.getByRole('button', { name: 'Remove task 1' }).click();
      await expect(page.getByRole('group', { name: /^Task \d$/ })).toHaveCount(2);
      await expect(page.getByLabel('Title')).toHaveValue('Shopping');

      // Enter submits, rather than clicking the first task's Remove button.
      await page.getByLabel('Title').press('Enter');
      await expect(page).toHaveURL(/\/\?value=/);
      await expect(page.getByRole('alert').filter({ hasText: 'Form submitted' })).toContainText(
        '[{"content":"Eggs","completed":true},{"content":"Milk","completed":false}]'
      );
    });
  });
}
