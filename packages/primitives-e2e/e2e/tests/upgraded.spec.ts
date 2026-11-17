import { expect, test, type Page } from '@playwright/test';

// The element upgrades the server markup, and React never hydrates.
test.beforeEach(async ({ page }) => {
  await page.goto('/test/upgraded');
  await page.waitForFunction(() => !!customElements.get('govuk-react-tabs'));
});

const demo = (page: Page, id = 'up') => page.getByTestId(`demo-${id}`);

test('upgrades the list to a horizontal tablist', async ({ page }) => {
  const list = demo(page).getByRole('tablist');
  await expect(list).toBeVisible();
  await expect(list).toHaveAttribute('aria-orientation', 'horizontal');
});

test('adds roles, a roving tabindex and one visible panel', async ({ page }) => {
  const d = demo(page);
  await expect(d.getByRole('tab')).toHaveCount(3);
  await expect(d.getByRole('tabpanel')).toHaveCount(1);
  const account = d.getByRole('tab', { name: 'Account' });
  await expect(account).toHaveAttribute('aria-selected', 'true');
  await expect(account).toHaveAttribute('tabindex', '0');
  await expect(account).toHaveAttribute('data-state', 'active');
  await expect(d.getByRole('tab', { name: 'Documents' })).toHaveAttribute('tabindex', '-1');
});

test('links each tab and its panel', async ({ page }) => {
  const tab = demo(page).getByRole('tab', { name: 'Documents' });
  await tab.click();
  const panel = page.locator(`#${await tab.getAttribute('aria-controls')}`);
  await expect(panel).toBeVisible();
  await expect(panel).toHaveAttribute('aria-labelledby', (await tab.getAttribute('id')) ?? '');
});

test('arrow keys move along the tablist, and Home and End jump', async ({ page }) => {
  const d = demo(page);
  await d.getByRole('tab', { name: 'Account' }).focus();
  await page.keyboard.press('ArrowRight');
  await expect(d.getByRole('tab', { name: 'Documents' })).toBeFocused();
  await expect(d.getByRole('tab', { name: 'Documents' })).toHaveAttribute('aria-selected', 'true');
  await page.keyboard.press('End');
  await expect(d.getByRole('tab', { name: 'Settings' })).toBeFocused();
  await page.keyboard.press('Home');
  await expect(d.getByRole('tab', { name: 'Account' })).toBeFocused();
  await page.keyboard.press('ArrowLeft');
  await expect(d.getByRole('tab', { name: 'Settings' })).toBeFocused();
});

test('ignores arrows across a horizontal tablist', async ({ page }) => {
  const account = demo(page).getByRole('tab', { name: 'Account' });
  await account.focus();
  await page.keyboard.press('ArrowDown');
  await expect(account).toBeFocused();
  await expect(account).toHaveAttribute('aria-selected', 'true');
});

test('a choice checks its panel’s radio', async ({ page }) => {
  await demo(page).getByRole('tab', { name: 'Settings' }).click();
  await expect(page.locator('#up-up-settings')).toBeChecked();
});

test.describe('links fallback', () => {
  test('the URL hash follows the selected tab', async ({ page }) => {
    await demo(page, 'ul').getByRole('tab', { name: 'Documents' }).click();
    await expect(page).toHaveURL(/#ul-documents$/);
    await expect(demo(page, 'ul').getByText('Access and update your documents.')).toBeVisible();
    await expect(demo(page, 'ul').getByText('Make changes to your account.')).toBeHidden();
  });

  test('going back selects the previous tab', async ({ page }) => {
    await demo(page, 'ul').getByRole('tab', { name: 'Documents' }).click();
    await demo(page, 'ul').getByRole('tab', { name: 'Settings' }).click();
    await page.goBack();
    await expect(demo(page, 'ul').getByRole('tab', { name: 'Documents' })).toHaveAttribute('aria-selected', 'true');
  });

  test('a URL hash selects its tab on load', async ({ page }) => {
    await page.goto('/test/upgraded#ul-settings');
    await expect(demo(page, 'ul').getByRole('tab', { name: 'Settings' })).toHaveAttribute('aria-selected', 'true');
  });
});

test.describe('media', () => {
  test('below its media query, the tabs stay a list of links to panels', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await expect(demo(page, 'um').getByRole('tablist')).toHaveCount(0);
    await expect(demo(page, 'um').getByText('Access and update your documents.')).toBeVisible();
    await page.setViewportSize({ width: 1024, height: 800 });
    await expect(demo(page, 'um').getByRole('tablist')).toBeVisible();
    await expect(demo(page, 'um').getByText('Access and update your documents.')).toBeHidden();
  });
});

const inject = (page: Page, id: string, html: string) =>
  page.evaluate(
    ([hostId, markup]) => {
      const host = document.createElement('div');
      host.id = hostId;
      host.innerHTML = markup;
      document.body.appendChild(host);
    },
    [id, html]
  );

const panel = (value: string, name: string, checked = false) =>
  `<div data-tabs-content data-value="${value}"><input type="radio" name="${name}" id="${name}-${value}" hidden${checked ? ' checked' : ''}>${value} panel</div>`;

test('starts on a checked radio over the first tab', async ({ page }) => {
  await inject(
    page,
    'inject-pick',
    `<govuk-react-tabs fallback="radios"><div data-tabs-list><label data-tabs-trigger data-value="a" for="pk-a">A</label><label data-tabs-trigger data-value="b" for="pk-b">B</label></div>${panel('a', 'pk')}${panel('b', 'pk', true)}</govuk-react-tabs>`
  );
  await expect(page.locator('#inject-pick').getByRole('tab', { name: 'B' })).toHaveAttribute('aria-selected', 'true');
});

test('starts on the first tab when nothing else selects one', async ({ page }) => {
  await inject(
    page,
    'inject-first',
    `<govuk-react-tabs fallback="radios"><div data-tabs-list><label data-tabs-trigger data-value="a" for="fb-a">A</label><label data-tabs-trigger data-value="b" for="fb-b">B</label></div>${panel('a', 'fb')}${panel('b', 'fb')}</govuk-react-tabs>`
  );
  await expect(page.locator('#inject-first').getByRole('tab', { name: 'A' })).toHaveAttribute('aria-selected', 'true');
});

test('fires no change event at first, and none when the selected tab is chosen again', async ({ page }) => {
  await page.evaluate(() => {
    Object.assign(window, { changes: [] });
  });
  await inject(
    page,
    'inject-event',
    `<govuk-react-tabs fallback="radios" default-value="a"><div data-tabs-list><label data-tabs-trigger data-value="a" for="ev-a">A</label><label data-tabs-trigger data-value="b" for="ev-b">B</label></div>${panel('a', 'ev', true)}${panel('b', 'ev')}</govuk-react-tabs>`
  );
  await page.evaluate(() => {
    document.getElementById('inject-event')?.addEventListener('govuk-react-tabs:change', (event) => {
      if (event instanceof CustomEvent) Reflect.get(window, 'changes').push(event.detail.value);
    });
  });
  const host = page.locator('#inject-event');
  const changes = () => page.evaluate(() => Reflect.get(window, 'changes'));
  await expect(host.getByRole('tab', { name: 'A' })).toHaveAttribute('aria-selected', 'true');
  expect(await changes()).toEqual([]);
  await host.getByRole('tab', { name: 'B' }).click();
  expect(await changes()).toEqual(['b']);
  await host.getByRole('tab', { name: 'B' }).click();
  expect(await changes()).toEqual(['b']);
});

test('upgrades once its tabs are added later', async ({ page }) => {
  await page.evaluate(() => {
    const element = document.createElement('govuk-react-tabs');
    const host = document.createElement('div');
    host.id = 'inject-late';
    host.appendChild(element);
    document.body.appendChild(host);
    setTimeout(() => {
      element.innerHTML =
        '<div data-tabs-list><a data-tabs-trigger data-value="late" href="#late">Late</a></div><div data-tabs-content data-value="late" id="late"><input type="radio" name="late" hidden checked>Late panel</div>';
    }, 50);
  });
  await expect(page.locator('#inject-late').getByRole('tablist')).toBeVisible();
});
