import * as React from 'react';
import { lazy, Suspense, useState } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { renderToString } from 'react-dom/server';
import { act, fireEvent, render, screen } from '@testing-library/react';
import * as Tabs from '.';
import { TabsController } from './controller.js';

function Example(props: Tabs.RootProps) {
  return (
    <Tabs.Root {...props}>
      <Tabs.List>
        <Tabs.Trigger value="day">Past day</Tabs.Trigger>
        <Tabs.Trigger value="week">Past week</Tabs.Trigger>
        <Tabs.Trigger value="month">Past month</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="day">Day content</Tabs.Content>
      <Tabs.Content value="week">Week content</Tabs.Content>
      <Tabs.Content value="month">Month content</Tabs.Content>
    </Tabs.Root>
  );
}

function RadiosExample(props: Tabs.RadiosRootProps) {
  return (
    <Tabs.RadiosRoot {...props}>
      <Tabs.List>
        <Tabs.RadiosTrigger value="day">Past day</Tabs.RadiosTrigger>
        <Tabs.RadiosTrigger value="week">Past week</Tabs.RadiosTrigger>
        <Tabs.RadiosTrigger value="month">Past month</Tabs.RadiosTrigger>
      </Tabs.List>
      <Tabs.RadiosContent value="day">Day content</Tabs.RadiosContent>
      <Tabs.RadiosContent value="week">Week content</Tabs.RadiosContent>
      <Tabs.RadiosContent value="month">Month content</Tabs.RadiosContent>
    </Tabs.RadiosRoot>
  );
}

// The element upgrades in connectedCallback, after React commits.
const upgraded = () => act(() => Promise.resolve());

const live = { beforeHydration: false };

describe('Tabs', () => {
  afterEach(() => window.history.replaceState(null, '', window.location.pathname));

  test('upgrades to a tablist with the first tab selected', async () => {
    render(<Example />);
    await upgraded();
    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Past day' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tabpanel', { name: 'Past day' })).toHaveTextContent('Day content');
    expect(screen.getByText('Week content')).not.toBeVisible();
  });

  test('clicking a tab selects it and reports it once', async () => {
    const onValueChange = vi.fn();
    render(<Example defaultValue="week" onValueChange={onValueChange} />);
    await upgraded();
    fireEvent.click(screen.getByRole('tab', { name: 'Past month' }));
    fireEvent.click(screen.getByRole('tab', { name: 'Past month' }));
    expect(screen.getByRole('tab', { name: 'Past month' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Month content')).toBeVisible();
    expect(onValueChange.mock.calls).toEqual([['month', live]]);
  });

  test('arrow, Home and End keys move and select, with a roving tabindex', async () => {
    render(<Example />);
    await upgraded();
    const tab = (name: string) => screen.getByRole('tab', { name });
    fireEvent.keyDown(tab('Past day'), { key: 'ArrowLeft' });
    expect(tab('Past month')).toHaveFocus();
    expect(tab('Past month')).toHaveAttribute('tabindex', '0');
    expect(tab('Past day')).toHaveAttribute('tabindex', '-1');
    fireEvent.keyDown(tab('Past month'), { key: 'Home' });
    expect(tab('Past day')).toHaveAttribute('aria-selected', 'true');
    fireEvent.keyDown(tab('Past day'), { key: 'End' });
    expect(tab('Past month')).toHaveAttribute('aria-selected', 'true');
  });

  test('in a right-to-left direction, the left arrow moves forward', async () => {
    render(
      <div dir="rtl" style={{ direction: 'rtl' }}>
        <Example />
      </div>
    );
    await upgraded();
    const tab = (name: string) => screen.getByRole('tab', { name });
    fireEvent.keyDown(tab('Past day'), { key: 'ArrowLeft' });
    expect(tab('Past week')).toHaveAttribute('aria-selected', 'true');
    fireEvent.keyDown(tab('Past week'), { key: 'ArrowRight' });
    expect(tab('Past day')).toHaveAttribute('aria-selected', 'true');
  });

  test('marks the parts with data-orientation', async () => {
    const { container } = render(<Example orientation="vertical" />);
    await upgraded();
    [
      container.firstElementChild,
      screen.getByRole('tablist'),
      screen.getByRole('tab', { name: 'Past day' }),
      screen.getByRole('tabpanel', { name: 'Past day' }),
    ].forEach((part) => expect(part).toHaveAttribute('data-orientation', 'vertical'));
  });

  test('a controlled value drives the selected tab', async () => {
    function Controlled() {
      const [value, setValue] = useState('day');
      return (
        <>
          <button type="button" onClick={() => setValue('month')}>
            Show month
          </button>
          <Example value={value} onValueChange={setValue} />
        </>
      );
    }
    render(<Controlled />);
    await upgraded();
    fireEvent.click(screen.getByRole('button', { name: 'Show month' }));
    expect(screen.getByRole('tab', { name: 'Past month' })).toHaveAttribute('aria-selected', 'true');
    fireEvent.click(screen.getByRole('tab', { name: 'Past week' }));
    expect(screen.getByRole('tab', { name: 'Past week' })).toHaveAttribute('aria-selected', 'true');
  });

  test('the links fallback links each tab to its panel', () => {
    render(<Example />);
    expect(screen.getByText('Past week').closest('a')).toHaveAttribute('href', '#week');
    expect(screen.getByText('Week content')).toHaveAttribute('id', 'week');
  });

  test('the radios fallback labels a hidden radio in each panel', async () => {
    render(<RadiosExample defaultValue="week" />);
    const label = screen.getByText('Past week').closest('label');
    const radio = document.getElementById(label?.htmlFor ?? '');
    expect(radio).toBeInstanceOf(HTMLInputElement);
    expect(radio).toBeChecked();
    expect(radio?.parentElement).toHaveAttribute('id', 'week');
    await upgraded();
    fireEvent.click(screen.getByRole('tab', { name: 'Past month' }));
    expect(document.getElementById(screen.getByText('Past month').closest('label')?.htmlFor ?? '')).toBeChecked();
  });

  test('asChild parts render your own elements', async () => {
    render(
      <Tabs.Root activeItemClass="selected" hiddenContentClass="hidden">
        <Tabs.List asChild>
          <ul>
            <Tabs.Item value="day" asChild>
              <li>
                <Tabs.Trigger value="day">Past day</Tabs.Trigger>
              </li>
            </Tabs.Item>
            <Tabs.Item value="week" asChild>
              <li>
                <Tabs.Trigger value="week">Past week</Tabs.Trigger>
              </li>
            </Tabs.Item>
          </ul>
        </Tabs.List>
        <Tabs.Content value="day" asChild>
          <section>Day content</section>
        </Tabs.Content>
        <Tabs.Content value="week" asChild>
          <section>Week content</section>
        </Tabs.Content>
      </Tabs.Root>
    );
    await upgraded();
    expect(screen.getByRole('tablist').tagName).toBe('UL');
    expect(screen.getByText('Past day').closest('li')).toHaveClass('selected');
    expect(screen.getByText('Week content').tagName).toBe('SECTION');
    expect(screen.getByText('Week content')).toHaveClass('hidden');
  });

  test('does not report a change on mount', async () => {
    const onValueChange = vi.fn();
    render(
      <React.StrictMode>
        <Example onValueChange={onValueChange} />
      </React.StrictMode>
    );
    await upgraded();
    expect(onValueChange).not.toHaveBeenCalled();
  });

  test('when controlled, a choice is only reported until the value changes', async () => {
    const onValueChange = vi.fn();
    render(<Example value="day" onValueChange={onValueChange} />);
    await upgraded();
    fireEvent.click(screen.getByRole('tab', { name: 'Past week' }));
    expect(onValueChange.mock.calls).toEqual([['week', live]]);
    expect(screen.getByRole('tab', { name: 'Past day' })).toHaveAttribute('aria-selected', 'true');
  });

  test('when controlled and the value is kept, choosing the same tab again is reported again', async () => {
    const onValueChange = vi.fn();
    render(<Example value="day" onValueChange={onValueChange} />);
    await upgraded();
    fireEvent.click(screen.getByRole('tab', { name: 'Past week' }));
    await upgraded();
    fireEvent.click(screen.getByRole('tab', { name: 'Past week' }));
    expect(onValueChange.mock.calls).toEqual([
      ['week', live],
      ['week', live],
    ]);
  });

  test('after a controlled value changes, choosing the old tab again is reported', async () => {
    function Controlled({ onValueChange }: { onValueChange: (value: string) => void }) {
      const [value, setValue] = useState('day');
      return (
        <>
          <button type="button" onClick={() => setValue('month')}>
            Show month
          </button>
          <Example value={value} onValueChange={onValueChange} />
        </>
      );
    }
    const onValueChange = vi.fn();
    render(<Controlled onValueChange={onValueChange} />);
    await upgraded();
    fireEvent.click(screen.getByRole('button', { name: 'Show month' }));
    fireEvent.click(screen.getByRole('tab', { name: 'Past day' }));
    expect(onValueChange.mock.calls).toEqual([['day', live]]);
  });

  test('a choice checks its panel’s radio, which reports it through React', async () => {
    const onValueChange = vi.fn();
    const { container } = render(<Example onValueChange={onValueChange} />);
    await upgraded();
    container.addEventListener('govuk-react-tabs:change', (event) => onValueChange(`event:${event.detail.value}`));
    fireEvent.click(screen.getByRole('tab', { name: 'Past week' }));
    expect(screen.getByText('Week content').querySelector('input[type=radio]')).toBeChecked();
    expect(onValueChange.mock.calls).toEqual([['week', live], ['event:week']]);
  });

  test('a change in nested tabs is not reported by the outer tabs', async () => {
    const outer = vi.fn();
    render(
      <Tabs.Root onValueChange={outer}>
        <Tabs.List>
          <Tabs.Trigger value="outer-a">Outer A</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="outer-a">
          <Example />
        </Tabs.Content>
      </Tabs.Root>
    );
    await upgraded();
    fireEvent.click(screen.getByRole('tab', { name: 'Past week' }));
    expect(outer).not.toHaveBeenCalled();
  });

  test('tabs added after upgrade are wired up', async () => {
    function Growing() {
      const [more, setMore] = useState(false);
      return (
        <>
          <button type="button" onClick={() => setMore(true)}>
            Add
          </button>
          <Tabs.Root>
            <Tabs.List>
              <Tabs.Trigger value="a">A</Tabs.Trigger>
              {more && <Tabs.Trigger value="b">B</Tabs.Trigger>}
            </Tabs.List>
            <Tabs.Content value="a">A content</Tabs.Content>
            {more && <Tabs.Content value="b">B content</Tabs.Content>}
          </Tabs.Root>
        </>
      );
    }
    render(<Growing />);
    await upgraded();
    fireEvent.click(screen.getByRole('button', { name: 'Add' }));
    await upgraded();
    expect(screen.getByRole('tab', { name: 'B' })).toHaveAttribute('aria-selected', 'false');
    expect(screen.getByText('B content')).not.toBeVisible();
  });

  test('classes the element adds survive React re-rendering className', async () => {
    function Rerendered() {
      const [className, setClassName] = useState('one');
      return (
        <>
          <button type="button" onClick={() => setClassName('two')}>
            Change
          </button>
          <Tabs.Root className={className} upgradedClass="upgraded">
            <Tabs.List>
              <Tabs.Trigger value="a">A</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="a">A content</Tabs.Content>
          </Tabs.Root>
        </>
      );
    }
    const { container } = render(<Rerendered />);
    await upgraded();
    fireEvent.click(screen.getByRole('button', { name: 'Change' }));
    await upgraded();
    expect(container.querySelector('govuk-react-tabs')).toHaveClass('two', 'upgraded');
  });

  test('arrow keys move from the focused tab when a controlled parent keeps its value', async () => {
    const onValueChange = vi.fn();
    render(<Example value="day" onValueChange={onValueChange} />);
    await upgraded();
    fireEvent.keyDown(screen.getByRole('tab', { name: 'Past day' }), { key: 'ArrowRight' });
    fireEvent.keyDown(screen.getByRole('tab', { name: 'Past week' }), { key: 'ArrowRight' });
    expect(onValueChange.mock.calls).toEqual([
      ['week', live],
      ['month', live],
    ]);
  });

  test('with links, the URL hash follows the selected tab and selects it', async () => {
    render(<Example />);
    await upgraded();
    fireEvent.click(screen.getByRole('tab', { name: 'Past week' }));
    expect(window.location.hash).toBe('#week');
    window.location.hash = '#month';
    fireEvent(window, new HashChangeEvent('hashchange'));
    expect(screen.getByRole('tab', { name: 'Past month' })).toHaveAttribute('aria-selected', 'true');
  });

  test('below its media query, radios keep switching tabs and the selection is kept', async () => {
    const listeners = new Set<() => void>();
    const query = {
      matches: true,
      addEventListener: (_: string, l: () => void) => listeners.add(l),
      removeEventListener: () => {},
    };
    const matchMedia = vi.fn(() => query);
    vi.stubGlobal('matchMedia', matchMedia);
    const { container } = render(<RadiosExample defaultValue="day" media="(min-width: 40rem)" />);
    await upgraded();
    fireEvent.click(screen.getByRole('tab', { name: 'Past month' }));
    query.matches = false;
    listeners.forEach((listener) => listener());
    const element = container.querySelector('govuk-react-tabs');
    expect(element).not.toHaveAttribute('data-upgraded');
    expect(screen.queryByRole('tab')).not.toBeInTheDocument();
    expect(document.getElementById(screen.getByText('Past month').closest('label')?.htmlFor ?? '')).toBeChecked();
    query.matches = true;
    listeners.forEach((listener) => listener());
    expect(screen.getByRole('tab', { name: 'Past month' })).toHaveAttribute('aria-selected', 'true');
    vi.unstubAllGlobals();
  });

  test('parts work without a Root, as in an island', () => {
    render(
      <>
        <Tabs.RadiosTrigger value="day" name="island">
          Past day
        </Tabs.RadiosTrigger>
        <Tabs.RadiosContent value="day" name="island" defaultSelected>
          Day content
        </Tabs.RadiosContent>
      </>
    );
    expect(screen.getByText('Past day').closest('label')).toHaveAttribute('for', 'island-day');
    expect(document.getElementById('island-day')).toBeChecked();
  });
});

test('server markup: controlled tabs still switch before React hydrates', async () => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  container.innerHTML = renderToString(<Example value="day" />);
  await upgraded();
  fireEvent.click(screen.getByRole('tab', { name: 'Past week' }));
  expect(screen.getByRole('tab', { name: 'Past week' })).toHaveAttribute('aria-selected', 'true');
  container.remove();
});

test('server markup: a tab picked before hydration is reported once and stays selected', async () => {
  const onValueChange = vi.fn();
  function Controlled() {
    const [value, setValue] = useState('day');
    return (
      <Example
        value={value}
        onValueChange={(next, details) => {
          onValueChange(next, details);
          setValue(next);
        }}
      />
    );
  }
  const container = document.createElement('div');
  document.body.appendChild(container);
  container.innerHTML = renderToString(<Controlled />);
  await upgraded();
  fireEvent.click(screen.getByRole('tab', { name: 'Past week' }));
  await act(async () => {
    hydrateRoot(container, <Controlled />);
  });
  await upgraded();
  expect(screen.getByRole('tab', { name: 'Past week' })).toHaveAttribute('aria-selected', 'true');
  expect(onValueChange.mock.calls).toEqual([['week', { beforeHydration: true }]]);
  container.remove();
});

test('server markup: a tab picked before hydration that the handler does not adopt goes back to the value', async () => {
  const onValueChange = vi.fn();
  const container = document.createElement('div');
  document.body.appendChild(container);
  container.innerHTML = renderToString(<Example value="day" onValueChange={onValueChange} />);
  await upgraded();
  fireEvent.click(screen.getByRole('tab', { name: 'Past week' }));
  await act(async () => {
    hydrateRoot(container, <Example value="day" onValueChange={onValueChange} />);
  });
  await upgraded();
  expect(onValueChange.mock.calls).toEqual([['week', { beforeHydration: true }]]);
  expect(screen.getByRole('tab', { name: 'Past day' })).toHaveAttribute('aria-selected', 'true');
  container.remove();
});

test('server markup: going back to the value keeps the HTML of a Suspense boundary that has yet to hydrate', async () => {
  const Week = () => <p>Week content</p>;
  let load: () => void = () => {};
  const LazyWeek = lazy(
    () =>
      new Promise<{ default: typeof Week }>((resolve) => {
        load = () => resolve({ default: Week });
      })
  );
  const tabs = (week: React.ReactNode) => (
    <Tabs.Root value="day" onValueChange={() => {}}>
      <Tabs.List>
        <Tabs.Trigger value="day">Past day</Tabs.Trigger>
        <Tabs.Trigger value="week">Past week</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="day">Day content</Tabs.Content>
      <Tabs.Content value="week">
        <h2>Past week</h2>
        <Suspense fallback="Loading">{week}</Suspense>
      </Tabs.Content>
    </Tabs.Root>
  );
  const container = document.createElement('div');
  document.body.appendChild(container);
  container.innerHTML = renderToString(tabs(<Week />));
  await upgraded();
  fireEvent.click(screen.getByRole('tab', { name: 'Past week' }));
  await act(async () => {
    hydrateRoot(container, tabs(<LazyWeek />));
  });
  await upgraded();
  expect(screen.getByText('Week content')).toBeInTheDocument();
  expect(screen.queryByText('Loading')).not.toBeInTheDocument();
  await act(async () => load());
  expect(screen.getByRole('tab', { name: 'Past day' })).toHaveAttribute('aria-selected', 'true');
  container.remove();
});

test('a new media query takes over from the old one', async () => {
  vi.stubGlobal(
    'matchMedia',
    vi.fn((media: string) => ({ matches: media === 'wide', addEventListener: vi.fn(), removeEventListener: vi.fn() }))
  );
  const { rerender } = render(<Example media="narrow" />);
  await upgraded();
  expect(screen.queryByRole('tablist')).not.toBeInTheDocument();
  rerender(<Example media="wide" />);
  await upgraded();
  expect(screen.getByRole('tablist')).toBeInTheDocument();
  vi.unstubAllGlobals();
});

test('without React, a TabsController controls the selected tab, until its value is undefined or null', async () => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  container.innerHTML = renderToString(<Example />);
  await upgraded();
  const element = container.querySelector('govuk-react-tabs');
  if (!element) throw new Error('No element');
  const controller = new TabsController(element);
  const onChange = vi.fn();
  element.addEventListener('govuk-react-tabs:change', (event) => onChange(event.detail.value));
  const selected = (name: string) => screen.getByRole('tab', { name }).getAttribute('aria-selected');
  controller.value = 'week';
  expect(selected('Past week')).toBe('true');
  fireEvent.click(screen.getByRole('tab', { name: 'Past month' }));
  expect(onChange).toHaveBeenLastCalledWith('month');
  expect(selected('Past week')).toBe('true');
  // The element puts the radio back in a microtask.
  await Promise.resolve();
  controller.value = undefined;
  fireEvent.click(screen.getByRole('tab', { name: 'Past month' }));
  expect(selected('Past month')).toBe('true');
  controller.value = 'day';
  controller.value = null;
  fireEvent.click(screen.getByRole('tab', { name: 'Past week' }));
  expect(selected('Past week')).toBe('true');
  container.remove();
});

describe('while the page is still being parsed', () => {
  const parsedUpTo = (panel: string, example = <Example />) => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const [first, rest] = renderToString(example).split(new RegExp(`(?=<div[^>]*data-value="${panel}")`));
    container.innerHTML = `${first}</govuk-react-tabs>`;
    const laterPanels = document.createElement('template');
    laterPanels.innerHTML = rest.replace('</govuk-react-tabs>', '');
    return { container, parseTheRest: () => container.firstElementChild?.append(laterPanels.content) };
  };

  beforeEach(() => {
    window.location.hash = '';
    vi.spyOn(document, 'readyState', 'get').mockReturnValue('loading');
  });

  afterEach(() => {
    vi.restoreAllMocks();
    window.location.hash = '';
    document.body.replaceChildren();
  });

  test('upgrades without waiting for the rest of the page', async () => {
    const { parseTheRest } = parsedUpTo('week');
    await upgraded();
    expect(screen.getByRole('tab', { name: 'Past day' })).toHaveAttribute('aria-selected', 'true');
    parseTheRest();
    await upgraded();
    expect(screen.getByRole('tab', { name: 'Past day' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Week content')).not.toBeVisible();
  });

  test('selects the panel the URL hash names once it is parsed', async () => {
    window.location.hash = '#month';
    const { parseTheRest } = parsedUpTo('week');
    await upgraded();
    parseTheRest();
    await upgraded();
    expect(screen.getByRole('tab', { name: 'Past month' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Month content')).toBeVisible();
  });

  test('selects the radio checked in a panel parsed later', async () => {
    const { parseTheRest } = parsedUpTo('week', <RadiosExample defaultValue="month" />);
    await upgraded();
    parseTheRest();
    await upgraded();
    expect(screen.getByRole('tab', { name: 'Past month' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Day content')).not.toBeVisible();
  });

  test('keeps a tab the user chose as more panels are parsed', async () => {
    const { parseTheRest } = parsedUpTo('month');
    await upgraded();
    fireEvent.click(screen.getByRole('tab', { name: 'Past week' }));
    parseTheRest();
    await upgraded();
    expect(screen.getByRole('tab', { name: 'Past week' })).toHaveAttribute('aria-selected', 'true');
  });
});
