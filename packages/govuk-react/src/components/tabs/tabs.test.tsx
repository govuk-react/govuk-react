import * as React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import * as Tabs from '.';

const items = [
  { id: 'past-day', label: 'Past day', panel: 'Day content' },
  { id: 'past-week', label: 'Past week', panel: 'Week content' },
];

// The element upgrades in connectedCallback, after React commits.
const upgraded = () => act(() => Promise.resolve());

const stubTablet = (matches: boolean) =>
  vi.stubGlobal('matchMedia', () => ({ matches, addEventListener: () => {}, removeEventListener: () => {} }));

describe('Tabs', () => {
  afterEach(() => {
    window.history.replaceState(null, '', window.location.pathname);
    vi.unstubAllGlobals();
  });

  test('renders govuk-frontend’s markup, with the first tab selected', () => {
    stubTablet(false);
    render(<Tabs.Composite items={items} />);
    expect(screen.getByRole('heading', { name: 'Contents' })).toHaveClass('govuk-tabs__title');
    expect(screen.getByRole('link', { name: 'Past day' })).toHaveAttribute('href', '#past-day');
    expect(screen.getByRole('link', { name: 'Past day' }).closest('li')).toHaveClass('govuk-tabs__list-item--selected');
    expect(screen.getByText('Week content')).toHaveClass('govuk-tabs__panel', 'govuk-tabs__panel--hidden');
    expect(screen.getByText('Week content')).toHaveAttribute('id', 'past-week');
  });

  test('from tablet width, upgrades with govuk-frontend’s classes', async () => {
    stubTablet(true);
    const onValueChange = vi.fn();
    const { container } = render(<Tabs.Composite items={items} onValueChange={onValueChange} />);
    await upgraded();
    expect(container.querySelector('govuk-react-tabs')).toHaveClass('govuk-frontend-supported');
    fireEvent.click(screen.getByRole('tab', { name: 'Past week' }));
    expect(screen.getByRole('tab', { name: 'Past week' }).closest('li')).toHaveClass('govuk-tabs__list-item--selected');
    expect(screen.getByText('Day content')).toHaveClass('govuk-tabs__panel--hidden');
    expect(screen.getByText('Week content')).not.toHaveClass('govuk-tabs__panel--hidden');
    expect(onValueChange).toHaveBeenCalledWith('past-week');
  });

  test('RadiosComposite makes each tab a label for its panel’s radio', () => {
    render(<Tabs.RadiosComposite items={items} name="cases" />);
    expect(screen.getByText('Past week').closest('label')).toHaveClass('govuk-tabs__tab');
    expect(document.getElementById('cases-past-day')).toBeChecked();
  });
});
