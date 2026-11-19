import { expect, test, type Page } from '@playwright/test';

const demo = (page: Page, id: string) => page.getByTestId(`file-upload-${id}`);
const button = (page: Page, id: string) => demo(page, id).locator('button[data-file-upload-button]');
const status = (page: Page, id: string) => page.getByTestId(`status-${id}`);
const chosen = (page: Page, id: string) => page.getByTestId(`chosen-${id}`);
const file = (name: string) => ({ name, mimeType: 'image/png', buffer: Buffer.from('png') });

const choose = async (page: Page, id: string, ...names: string[]) => {
  const chooser = page.waitForEvent('filechooser');
  await button(page, id).click();
  await (await chooser).setFiles(names.map(file));
};

const transfer = (page: Page, ...names: string[]) =>
  page.evaluateHandle((files) => {
    const data = new DataTransfer();
    files.forEach((name) => data.items.add(new File(['png'], name, { type: 'image/png' })));
    return data;
  }, names);

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('is the native file input, with the button hidden', async ({ page }) => {
    await page.goto('/test/file-upload');
    await expect(demo(page, 'upgraded').getByLabel('Upload a file')).toHaveAttribute('type', 'file');
    await expect(button(page, 'upgraded')).toBeHidden();
    await demo(page, 'upgraded').getByLabel('Upload a file').setInputFiles(file('passport.png'));
    await expect(demo(page, 'upgraded').getByLabel('Upload a file')).toHaveJSProperty('files.length', 1);
  });
});

for (const id of ['upgraded', 'hydrated']) {
  test.describe(id === 'upgraded' ? 'upgraded without React' : 'hydrated', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/test/file-upload');
      if (id === 'hydrated') await expect(demo(page, id)).toHaveAttribute('data-hydrated', 'true');
    });

    test('the label names the button, which replaces the input', async ({ page }) => {
      const field = demo(page, id).getByRole('button', { name: 'Upload a file' });
      await expect(field).toHaveAccessibleName('Upload a file , No file chosen Choose file or drop file');
      await expect(field).toHaveAccessibleDescription('This can be in either JPG or PNG format');
      await expect(field).toHaveClass('empty');
      await expect(demo(page, id).locator('input[type="file"]')).toBeHidden();
    });

    test('the button opens the file picker, and says which file is chosen', async ({ page }) => {
      await choose(page, id, 'passport.png');
      await expect(status(page, id)).toHaveText('passport.png');
      await expect(button(page, id)).not.toHaveClass('empty');
    });

    test('takes a dropped file, showing the drop zone and announcing it', async ({ page }) => {
      const data = await transfer(page, 'passport.png');
      await button(page, id).dispatchEvent('dragenter', { dataTransfer: data });
      await expect(button(page, id)).toHaveClass(/dragging/);
      await expect(page.getByTestId(`announcements-${id}`)).toHaveText('Entered drop zone');
      await button(page, id).dispatchEvent('drop', { dataTransfer: data });
      await expect(status(page, id)).toHaveText('passport.png');
      await expect(button(page, id)).not.toHaveClass(/dragging/);
      await expect(demo(page, id).locator('input[type="file"]')).toHaveJSProperty('files.length', 1);
    });

    test('ignores more files than the input takes', async ({ page }) => {
      const data = await transfer(page, 'passport.png', 'licence.png');
      await button(page, id).dispatchEvent('dragenter', { dataTransfer: data });
      await expect(button(page, id)).not.toHaveClass(/dragging/);
      await button(page, id).dispatchEvent('drop', { dataTransfer: data });
      await expect(status(page, id)).toHaveText('No file chosen');
    });
  });
}

test('hydrated: React hears chosen and dropped files, and disables the button with the input', async ({ page }) => {
  await page.goto('/test/file-upload');
  await expect(demo(page, 'multiple')).toHaveAttribute('data-hydrated', 'true');
  await choose(page, 'multiple', 'passport.png', 'licence.png');
  await expect(status(page, 'multiple')).toHaveText('2 files chosen');
  await expect(chosen(page, 'multiple')).toHaveText('React heard: passport.png, licence.png');
  await button(page, 'multiple').dispatchEvent('drop', { dataTransfer: await transfer(page, 'photo.png') });
  await expect(chosen(page, 'multiple')).toHaveText('React heard: photo.png');
  await demo(page, 'multiple').getByRole('button', { name: 'Disable' }).click();
  await expect(button(page, 'multiple')).toBeDisabled();
  await expect(page.getByTestId('zone-multiple')).toHaveClass('disabled');
  await demo(page, 'multiple').getByRole('button', { name: 'Enable' }).click();
  await expect(button(page, 'multiple')).toBeEnabled();
});

test('a file chosen before hydration is kept, and React keeps the element', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  page.on('pageerror', (error) => errors.push(String(error)));
  // Hold back React, but not the element, which the page's own script defines.
  let release = () => {};
  const gate = new Promise<void>((resolve) => {
    release = resolve;
  });
  await page.route(/\/_astro\/(FileUploadDemo|client)\.[^/]*\.js$/, async (route) => {
    await gate;
    await route.continue();
  });
  await page.goto('/test/file-upload', { waitUntil: 'commit' });
  await choose(page, 'hydrated', 'passport.png');
  await expect(status(page, 'hydrated')).toHaveText('passport.png');
  // Mark the element, to tell whether hydration replaces it.
  await demo(page, 'hydrated')
    .locator('govuk-react-file-upload')
    .evaluate((element) => element.setAttribute('data-before-hydration', ''));
  release();
  await expect(demo(page, 'hydrated')).toHaveAttribute('data-hydrated', 'true');
  await expect(demo(page, 'hydrated').locator('govuk-react-file-upload[data-before-hydration]')).toHaveCount(1);
  await expect(status(page, 'hydrated')).toHaveText('passport.png');
  await expect(demo(page, 'hydrated').locator('input[type="file"]')).toHaveJSProperty('files.length', 1);
  await choose(page, 'hydrated', 'licence.png');
  await expect(status(page, 'hydrated')).toHaveText('licence.png');
  await expect(chosen(page, 'hydrated')).toHaveText('React heard: licence.png');
  expect(errors).toEqual([]);
});

test('works when rendered only in the browser', async ({ page }) => {
  await page.goto('/test/file-upload-client-only');
  await choose(page, 'client', 'passport.png');
  await expect(status(page, 'client')).toHaveText('passport.png');
  await expect(chosen(page, 'client')).toHaveText('React heard: passport.png');
});
