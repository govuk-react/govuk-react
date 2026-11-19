import { expect, test, type Page } from '@playwright/test';

const demo = (page: Page, id: string) => page.getByTestId(`button-${id}`);

test.describe('hydrated', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test/button');
    await expect(demo(page, 'hydrated')).toHaveAttribute('data-hydrated', 'true');
  });

  test('a double click submits the form once', async ({ page }) => {
    await demo(page, 'hydrated').getByRole('button', { name: 'Save and continue' }).dblclick();
    await expect(page.getByTestId('submits')).toHaveText('1');
  });

  test('clicks a second apart both submit', async ({ page }) => {
    const button = demo(page, 'hydrated').getByRole('button', { name: 'Save and continue' });
    await button.click();
    await page.waitForTimeout(1100);
    await button.click();
    await expect(page.getByTestId('submits')).toHaveText('2');
  });

  test('a button without preventDoubleClick hears both clicks', async ({ page }) => {
    await demo(page, 'hydrated').getByRole('button', { name: 'Add another' }).dblclick();
    await expect(page.getByTestId('clicks')).toHaveText('2');
  });

  test('Space activates a link button', async ({ page }) => {
    await demo(page, 'hydrated').getByRole('button', { name: 'Link button' }).focus();
    await page.keyboard.press('Space');
    await expect(page).toHaveURL(/#hydrated-linked$/);
    // The page didn't scroll as Space would.
    expect(await page.evaluate(() => window.scrollY)).toBe(0);
  });
});

test.describe('upgraded without React', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test/button-upgraded');
  });

  test('a double click submits the form once', async ({ page }) => {
    // Counts submissions without leaving the page.
    await page.evaluate(() => {
      document.querySelector('form')?.addEventListener('submit', (event) => {
        event.preventDefault();
        const count = document.querySelector('[data-testid="submits"]');
        if (count) count.textContent = String(Number(count.textContent) + 1);
      });
    });
    await demo(page, 'upgraded').getByRole('button', { name: 'Save and continue' }).dblclick();
    await expect(page.getByTestId('submits')).toHaveText('1');
  });

  test('Space activates a link button', async ({ page }) => {
    await demo(page, 'upgraded').getByRole('button', { name: 'Link button' }).focus();
    await page.keyboard.press('Space');
    await expect(page).toHaveURL(/#upgraded-linked$/);
  });
});
