import { expect, test } from '@playwright/test';

test.beforeEach(({ page }) => {
  page.on('pageerror', (error) => {
    throw error;
  });
});

test('islands hydrate only the components with a client directive', async ({ page }) => {
  await page.goto('islands');
  await expect(page.locator('astro-island[client="idle"]:not([ssr])')).toHaveCount(1);
  await expect(page.locator('astro-island[client="visible"][ssr]')).toHaveCount(1);
  await page.getByText('Help with nationality').click();
  await expect(page.getByText('We need to know your nationality')).toBeVisible();

  await page.getByLabel('Can you provide more detail?').fill('Some detail');
  await expect(page.getByText('You have 189 characters remaining', { exact: true })).toBeVisible();

  await page.getByRole('button', { name: 'How to apply' }).scrollIntoViewIfNeeded();
  await expect(page.locator('astro-island[client="visible"]:not([ssr])')).toHaveCount(1);
  await page.getByRole('button', { name: 'How to apply' }).click();
  await expect(page.getByText('Apply online.')).toBeVisible();
});

test('without React, inline scripts enhance the components', async ({ page }) => {
  const scripts: string[] = [];
  page.on('request', (request) => {
    if (request.resourceType() === 'script') scripts.push(request.url());
  });
  await page.goto('without-react');

  await expect(page.getByRole('button', { name: 'Before you start' })).toHaveAttribute('aria-expanded', 'false');
  await page.getByRole('button', { name: 'Before you start' }).click();
  await expect(page.getByText('You need your National Insurance number')).toBeVisible();

  await page.getByRole('tab', { name: 'Past week' }).click();
  await expect(page.getByText('27 cases reported in the past week.')).toBeVisible();
  await expect(page.getByText('3 cases reported in the past day.')).toBeHidden();

  await page.getByLabel('Can you provide more detail?').fill('Some detail');
  await expect(page.getByText('You have 189 characters remaining', { exact: true })).toBeVisible();

  expect(scripts).toEqual([]);
});

test('React takes over from the inline script, and keeps what the user did', async ({ page }) => {
  let loadReact = () => {};
  const reactLoads = new Promise<void>((resolve) => {
    loadReact = resolve;
  });
  await page.route('**/_astro/*.js', async (route) => {
    await reactLoads;
    await route.continue();
  });
  await page.goto('upgrade');

  const howToApply = page.getByRole('button', { name: 'How to apply' });
  await howToApply.click();
  await expect(howToApply).toHaveAttribute('aria-expanded', 'true');
  await expect(page.getByText('You’ve read 0 of 3 sections.')).toBeVisible();

  loadReact();
  await expect(page.locator('astro-island:not([ssr])')).toHaveCount(1);
  await expect(page.getByText('You’ve read 1 of 3 sections, 1 of them before React loaded.')).toBeVisible();
  await expect(howToApply).toHaveAttribute('aria-expanded', 'true');

  await page.getByRole('button', { name: 'After you apply' }).click();
  await expect(page.getByText('You’ve read 2 of 3 sections, 1 of them before React loaded.')).toBeVisible();
});
