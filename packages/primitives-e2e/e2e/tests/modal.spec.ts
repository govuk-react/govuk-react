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

  test('a form with method="dialog" closes it through `onOpenChange`', async ({ page }) => {
    await page.getByRole('button', { name: 'Open from outside' }).click();
    const controlled = page.getByRole('dialog', { name: 'Controlled' });
    await controlled.getByRole('button', { name: 'Submit' }).click();
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

async function checkHeld(page: Page) {
  await page.getByLabel('Ignore changes').check();
  const controlled = page.getByRole('dialog', { name: 'Controlled' });
  await page.getByTestId('controlled').getByRole('button', { name: 'Open', exact: true }).click();
  await expect(page.getByTestId('controlled-asked')).toHaveText('true');
  await expect(controlled).toBeHidden();
  await page.getByRole('button', { name: 'Open from outside' }).click();
  await expect(controlled).toBeVisible();
  await controlled.getByRole('button', { name: 'Close' }).click();
  await expect(page.getByTestId('controlled-asked')).toHaveText('false');
  await expect(controlled).toBeVisible();
}

test.describe('controlled, when the app ignores a change', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test/modal');
    await expect(page.getByTestId('controlled')).toHaveAttribute('data-hydrated', 'true');
  });

  test('the buttons only ask, and the dialog stays as `open` says', async ({ page }) => {
    await checkHeld(page);
  });

  test('Escape only asks', async ({ page }) => {
    await page.getByLabel('Ignore changes').check();
    await page.getByRole('button', { name: 'Open from outside' }).click();
    const controlled = page.getByRole('dialog', { name: 'Controlled' });
    await expect(controlled).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByTestId('controlled-asked')).toHaveText('false');
    await expect(controlled).toBeVisible();
  });

  test('a form with method="dialog" only asks', async ({ page }) => {
    await page.getByLabel('Ignore changes').check();
    await page.getByRole('button', { name: 'Open from outside' }).click();
    const controlled = page.getByRole('dialog', { name: 'Controlled' });
    await controlled.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByTestId('controlled-asked')).toHaveText('false');
    await expect(controlled).toBeVisible();
  });

  test('Escape closes a popover open in the dialog, and doesn’t ask', async ({ page }) => {
    await page.getByRole('button', { name: 'Open from outside' }).click();
    const controlled = page.getByRole('dialog', { name: 'Controlled' });
    await controlled.getByRole('button', { name: 'More' }).click();
    await expect(page.getByText('More about this')).toBeVisible();
    // Focus stays on the button, outside the popover.
    await page.keyboard.press('Escape');
    await expect(page.getByText('More about this')).toBeHidden();
    await expect(controlled).toBeVisible();
    await expect(page.getByTestId('controlled-open')).toHaveText('true');
  });

  test('Escape that a React handler in the dialog prevented doesn’t ask', async ({ page }) => {
    await page.getByRole('button', { name: 'Open from outside' }).click();
    const controlled = page.getByRole('dialog', { name: 'Controlled' });
    await controlled.getByLabel('Escape is mine').focus();
    await page.keyboard.press('Escape');
    await page.keyboard.press('Escape');
    await expect(controlled).toBeVisible();
    await expect(page.getByTestId('controlled-open')).toHaveText('true');
  });

  test('a script’s showModal() only asks', async ({ page }) => {
    await page.getByLabel('Ignore changes').check();
    const opened = await page.locator('#controlled-dialog').evaluate((dialog) => {
      if (!(dialog instanceof HTMLDialogElement)) return undefined;
      dialog.showModal();
      return dialog.open;
    });
    expect(opened).toBe(false);
    await expect(page.getByTestId('controlled-asked')).toHaveText('true');
  });

  test('Escape pressed again and again only asks, and never closes it', async ({ page }) => {
    await page.getByLabel('Ignore changes').check();
    await page.getByRole('button', { name: 'Open from outside' }).click();
    const controlled = page.getByRole('dialog', { name: 'Controlled' });
    await expect(controlled).toBeVisible();
    await page.evaluate(() => {
      document.querySelector('#controlled-dialog')?.addEventListener('close', () => {
        document.body.dataset.closed = 'true';
      });
    });
    // Nothing between the presses: a browser lets a page cancel only the first `cancel` in a row,
    // and the test's own checks would count as the user doing something.
    for (let press = 0; press < 4; press += 1) await page.keyboard.press('Escape');
    await expect(page.getByTestId('controlled-asked')).toHaveText('false');
    await expect(controlled).toBeVisible();
    expect(await page.locator('body').getAttribute('data-closed')).toBeNull();
    expect(await controlled.evaluate((element) => element.matches(':modal'))).toBe(true);
  });

  test('a close the browser won’t let the page cancel is reported, then undone', async ({ page }) => {
    await page.getByLabel('Ignore changes').check();
    await page.getByRole('button', { name: 'Open from outside' }).click();
    const controlled = page.getByRole('dialog', { name: 'Controlled' });
    await expect(controlled).toBeVisible();
    await controlled.evaluate((dialog) => {
      if (dialog instanceof HTMLDialogElement) dialog.close();
    });
    await expect(page.getByTestId('controlled-asked')).toHaveText('false');
    await expect(controlled).toBeVisible();
    expect(await controlled.evaluate((element) => element.matches(':modal'))).toBe(true);
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

  test('controlled: the buttons only ask, and the dialog stays as `open` says', async ({ page }) => {
    await expect(page.getByTestId('controlled')).toHaveAttribute('data-hydrated', 'true');
    await checkHeld(page);
  });
});

test.describe('in a browser that fires no toggle events on dialogs', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      for (const name of ['beforetoggle', 'toggle'])
        window.addEventListener(name, (event) => event.stopImmediatePropagation(), true);
    });
    await page.goto('/test/modal');
  });

  test('reports opening and closing through onOpenChange', async ({ page }) => {
    await expect(demo(page, 'hydrated')).toHaveAttribute('data-hydrated', 'true');
    await demo(page, 'hydrated').getByRole('button', { name: 'Delete account' }).click();
    await expect(page.getByTestId('last-hydrated')).toHaveText('true');
    await page.keyboard.press('Escape');
    await expect(page.getByTestId('last-hydrated')).toHaveText('false');
  });

  test('controlled: a script’s showModal() is reported, then undone', async ({ page }) => {
    await expect(page.getByTestId('controlled')).toHaveAttribute('data-hydrated', 'true');
    await page.getByLabel('Ignore changes').check();
    const opened = await page.locator('#controlled-dialog').evaluate((dialog) => {
      if (!(dialog instanceof HTMLDialogElement)) return undefined;
      dialog.showModal();
      return dialog.open;
    });
    expect(opened).toBe(true);
    await expect(page.getByTestId('controlled-asked')).toHaveText('true');
    await expect(page.locator('#controlled-dialog')).toBeHidden();
  });
});

test('without React, the open property controls the dialog, until it is undefined or null', async ({ page }) => {
  await page.goto('/test/modal');
  const setOpen = (open: boolean | null | undefined) =>
    page.evaluate((value) => {
      const element = document.getElementById('upgraded')?.closest('govuk-react-modal');
      if (element) Reflect.set(element, 'open', value);
    }, open);
  await setOpen(true);
  await expect(dialog(page, 'upgraded')).toBeVisible();
  expect(await dialog(page, 'upgraded').evaluate((element) => element.matches(':modal'))).toBe(true);
  await dialog(page, 'upgraded').getByRole('button', { name: 'Cancel' }).click();
  await expect(dialog(page, 'upgraded')).toBeVisible();
  await setOpen(false);
  await expect(dialog(page, 'upgraded')).toBeHidden();
  await demo(page, 'upgraded').getByRole('button', { name: 'Delete account' }).click();
  await expect(dialog(page, 'upgraded')).toBeHidden();
  for (const released of [undefined, null]) {
    await setOpen(false);
    await setOpen(released);
    await demo(page, 'upgraded').getByRole('button', { name: 'Delete account' }).click();
    await expect(dialog(page, 'upgraded')).toBeVisible();
    await dialog(page, 'upgraded').getByRole('button', { name: 'Cancel' }).click();
    await expect(dialog(page, 'upgraded')).toBeHidden();
  }
});

test('works when rendered only in the browser', async ({ page }) => {
  await page.goto('/test/modal-client-only');
  await expect(demo(page, 'client')).toHaveAttribute('data-hydrated', 'true');
  await checkModal(page, 'client');
});
