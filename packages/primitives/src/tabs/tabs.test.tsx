import * as React from 'react';
import { useState } from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import * as Tabs from '.';

function Example(props: Omit<Tabs.RootProps, 'children'>) {
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

// The element upgrades in connectedCallback, after React commits.
const upgraded = () => act(() => Promise.resolve());

describe('Tabs', () => {
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
    render(<Example fallback="radios" defaultValue="week" />);
    const label = screen.getByText('Past week').closest('label');
    const radio = document.getElementById('week-radio');
    expect(label).toHaveAttribute('for', 'week-radio');
    expect(radio).toBeChecked();
    expect(radio?.parentElement).toHaveAttribute('id', 'week');
    await upgraded();
    fireEvent.click(screen.getByRole('tab', { name: 'Past month' }));
    expect(document.getElementById('month-radio')).toBeChecked();
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
});
