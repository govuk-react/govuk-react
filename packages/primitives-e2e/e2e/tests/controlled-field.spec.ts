import { expect, test, type Locator, type Page } from '@playwright/test';

// Holds back every script until release(), so a test can fill the form in before React hydrates.
async function holdScripts(page: Page) {
  let release = () => {};
  const gate = new Promise<void>((resolve) => {
    release = resolve;
  });
  await page.route(
    (url) => url.pathname.startsWith('/_astro/') && url.pathname.endsWith('.js'),
    async (route) => {
      await gate;
      await route.continue();
    }
  );
  return () => release();
}

const entered = { name: 'Ada', notes: 'Hello', country: 'wales', agreed: true, contact: 'phone' };
const starting = { name: '', notes: '', country: 'england', agreed: false, contact: 'email' };

async function enter(form: Locator) {
  await form.getByLabel('Name').fill(entered.name);
  await form.getByLabel('Notes').fill(entered.notes);
  await form.getByLabel('Country').selectOption(entered.country);
  await form.getByLabel('Agree').check();
  await form.getByLabel('Phone').check();
}

async function expectShown(form: Locator, values: typeof entered) {
  await expect(form.getByLabel('Name')).toHaveValue(values.name);
  await expect(form.getByLabel('Notes')).toHaveValue(values.notes);
  await expect(form.getByLabel('Country')).toHaveValue(values.country);
  await expect(form.getByLabel('Agree')).toBeChecked({ checked: values.agreed });
  await expect(form.getByLabel('Phone')).toBeChecked({ checked: values.contact === 'phone' });
  await expect(form.getByLabel('Email')).toBeChecked({ checked: values.contact === 'email' });
}

test('what the user entered before hydration is reported, and kept through later renders', async ({ page }) => {
  const release = await holdScripts(page);
  await page.goto('/test/controlled-field', { waitUntil: 'commit' });
  const form = page.getByTestId('field-fv');
  await enter(form);
  release();
  await expect(form).toHaveAttribute('data-hydrated', 'true');
  await expect(page.getByTestId('fv-state')).toHaveText(JSON.stringify(entered));
  await expect(page.getByTestId('fv-early')).toHaveText('5');
  await form.getByRole('button', { name: 'Render' }).click();
  await expectShown(form, entered);
  await expect(page.getByTestId('fv-early')).toHaveText('5');
});

test('what the user entered before hydration that the app does not adopt is reported, then undone', async ({
  page,
}) => {
  const release = await holdScripts(page);
  await page.goto('/test/controlled-field', { waitUntil: 'commit' });
  const form = page.getByTestId('field-fk');
  await enter(form);
  release();
  await expect(form).toHaveAttribute('data-hydrated', 'true');
  await expect(page.getByTestId('fk-early')).toHaveText('5');
  await expect(page.getByTestId('fk-state')).toHaveText(JSON.stringify(starting));
  await expectShown(form, starting);
});

test('changes after hydration are reported as live', async ({ page }) => {
  await page.goto('/test/controlled-field');
  const form = page.getByTestId('field-fv');
  await expect(form).toHaveAttribute('data-hydrated', 'true');
  await enter(form);
  await expect(page.getByTestId('fv-state')).toHaveText(JSON.stringify(entered));
  await expect(page.getByTestId('fv-early')).toHaveText('0');
});
