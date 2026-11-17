import { expect, test, type Page } from '@playwright/test';

const demo = (page: Page, id: string) => page.getByTestId(`modal-${id}`);
const dialog = (page: Page, id: string) =>
  page.getByRole('dialog', { name: 'Are you sure you want to delete your account?' }).and(page.locator(`#${id}`));

async function checkModal(page: Page, id: string) {
  await demo(page, id).getByRole('button', { name: 'Delete account' }).click();
  await expect(dialog(page, id)).toBeVisible();
  // Focus moves into the dialog, and the page behind is inert.
  await expect(dialog(page, id).getByRole('button', { name: 'Yes, delete it' })).toBeFocused();
  await demo(page, id).getByRole('button', { name: 'Behind the modal' }).click({ force: true, timeout: 1000 });
  await expect(page.getByTestId(`behind-${id}`)).toHaveText('0');
  // Tab never reaches the page behind. It can leave the page for the browser's own controls.
  for (let i = 0; i < 6; i += 1) {
    await page.keyboard.press('Tab');
    const focus = await page.evaluate(
      (dialogId) =>
        !document.activeElement || document.activeElement === document.body
          ? 'outside the page'
          : document.activeElement.closest(`#${dialogId}`)
            ? 'in the dialog'
            : 'behind the dialog',
      id
    );
    expect(focus).not.toBe('behind the dialog');
  }
  await page.keyboard.press('Escape');
  await expect(dialog(page, id)).toBeHidden();
  await expect(demo(page, id).getByRole('button', { name: 'Delete account' })).toBeFocused();
  await demo(page, id).getByRole('button', { name: 'Delete account' }).click();
  await dialog(page, id).getByRole('button', { name: 'Cancel' }).click();
  await expect(dialog(page, id)).toBeHidden();
}

test.describe('without JavaScript, with invoker commands', () => {
  test.use({ javaScriptEnabled: false });

  test('opens a true modal, which Escape and Cancel close', async ({ page }) => {
    await page.goto('/test/modal');
    await checkModal(page, 'upgraded');
  });

  test('a modal opens over another, and Escape closes the top one first', async ({ page }) => {
    await page.goto('/test/modal');
    await demo(page, 'upgraded').getByRole('button', { name: 'Delete account' }).click();
    await page.getByTestId('inner-upgraded').getByRole('button', { name: 'Read more' }).click();
    const inner = page.getByRole('dialog', { name: 'What deleting your account means' });
    await expect(inner).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(inner).toBeHidden();
    await expect(dialog(page, 'upgraded')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(dialog(page, 'upgraded')).toBeHidden();
  });
});

test.describe('hydrated', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test/modal');
    await expect(demo(page, 'hydrated')).toHaveAttribute('data-hydrated', 'true');
  });

  test('opens a true modal, which Escape and Cancel close', async ({ page }) => {
    await checkModal(page, 'hydrated');
  });

  test('reports opening and closing through onOpenChange', async ({ page }) => {
    await expect(page.getByTestId('last-hydrated')).toHaveText('');
    await demo(page, 'hydrated').getByRole('button', { name: 'Delete account' }).click();
    await expect(page.getByTestId('last-hydrated')).toHaveText('true');
    await page.keyboard.press('Escape');
    await expect(page.getByTestId('last-hydrated')).toHaveText('false');
  });
});

test.describe('controlled', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test/modal');
    await expect(page.getByTestId('controlled')).toHaveAttribute('data-hydrated', 'true');
  });

  test('`open` opens it as a modal, and Escape reports it closed', async ({ page }) => {
    await page.getByRole('button', { name: 'Open from outside' }).click();
    const controlled = page.getByRole('dialog', { name: 'Controlled' });
    await expect(controlled).toBeVisible();
    expect(await controlled.evaluate((element) => element.matches(':modal'))).toBe(true);
    await page.keyboard.press('Escape');
    await expect(controlled).toBeHidden();
    await expect(page.getByTestId('controlled-open')).toHaveText('false');
  });

  test('the trigger opens it and reports it open', async ({ page }) => {
    await page.getByTestId('controlled').getByRole('button', { name: 'Open', exact: true }).click();
    await expect(page.getByRole('dialog', { name: 'Controlled' })).toBeVisible();
    await expect(page.getByTestId('controlled-open')).toHaveText('true');
    await page.getByRole('dialog', { name: 'Controlled' }).getByRole('button', { name: 'Close' }).click();
    await expect(page.getByTestId('controlled-open')).toHaveText('false');
  });
});

test.describe('in a browser without invoker commands', () => {
  test.beforeEach(async ({ page }) => {
    // Stop the browser running the commands, and hide its support, so only the element runs them.
    await page.addInitScript(() => {
      Reflect.deleteProperty(HTMLButtonElement.prototype, 'command');
      window.addEventListener(
        'click',
        (event) => {
          if (event.target instanceof Element && event.target.closest('button[commandfor]')) event.preventDefault();
        },
        true
      );
    });
    await page.goto('/test/modal');
  });

  test('the element opens a true modal', async ({ page }) => {
    await checkModal(page, 'upgraded');
  });
});

test('works when rendered only in the browser', async ({ page }) => {
  await page.goto('/test/modal-client-only');
  await expect(demo(page, 'client')).toHaveAttribute('data-hydrated', 'true');
  await checkModal(page, 'client');
});
