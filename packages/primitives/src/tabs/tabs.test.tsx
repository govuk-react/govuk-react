import * as React from 'react';
import { useState } from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import * as Tabs from '.';

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
        <Tabs.RadioTrigger value="day">Past day</Tabs.RadioTrigger>
        <Tabs.RadioTrigger value="week">Past week</Tabs.RadioTrigger>
        <Tabs.RadioTrigger value="month">Past month</Tabs.RadioTrigger>
      </Tabs.List>
      <Tabs.RadioContent value="day">Day content</Tabs.RadioContent>
      <Tabs.RadioContent value="week">Week content</Tabs.RadioContent>
      <Tabs.RadioContent value="month">Month content</Tabs.RadioContent>
    </Tabs.RadiosRoot>
  );
}

// The element upgrades in connectedCallback, after React commits.
const upgraded = () => act(() => Promise.resolve());

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
    expect(onValueChange.mock.calls).toEqual([['month']]);
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
    expect(onValueChange.mock.calls).toEqual([['week']]);
    expect(screen.getByRole('tab', { name: 'Past day' })).toHaveAttribute('aria-selected', 'true');
  });

  test('when controlled and the value is kept, choosing the same tab again is reported again', async () => {
    const onValueChange = vi.fn();
    render(<Example value="day" onValueChange={onValueChange} />);
    await upgraded();
    fireEvent.click(screen.getByRole('tab', { name: 'Past week' }));
    await upgraded();
    fireEvent.click(screen.getByRole('tab', { name: 'Past week' }));
    expect(onValueChange.mock.calls).toEqual([['week'], ['week']]);
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
    expect(onValueChange.mock.calls).toEqual([['day']]);
  });

  test('a choice checks its panel’s radio, which reports it through React', async () => {
    const onValueChange = vi.fn();
    const { container } = render(<Example onValueChange={onValueChange} />);
    await upgraded();
    container.addEventListener('govuk-react-tabs:change', (event) => onValueChange(`event:${event.detail.value}`));
    fireEvent.click(screen.getByRole('tab', { name: 'Past week' }));
    expect(screen.getByText('Week content').querySelector('input[type=radio]')).toBeChecked();
    expect(onValueChange.mock.calls).toEqual([['week'], ['event:week']]);
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
    expect(onValueChange.mock.calls).toEqual([['week'], ['month']]);
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
        <Tabs.RadioTrigger value="day" name="island">
          Past day
        </Tabs.RadioTrigger>
        <Tabs.RadioContent value="day" name="island" defaultSelected>
          Day content
        </Tabs.RadioContent>
      </>
    );
    expect(screen.getByText('Past day').closest('label')).toHaveAttribute('for', 'island-day');
    expect(document.getElementById('island-day')).toBeChecked();
  });
});
