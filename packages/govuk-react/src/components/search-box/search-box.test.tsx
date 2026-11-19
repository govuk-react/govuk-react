import * as React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import * as SearchBox from '.';

// The element upgrades in connectedCallback, after React commits.
const upgraded = () => act(() => Promise.resolve());

describe('SearchBox.AutocompleteComposite', () => {
  afterEach(() => vi.useRealTimers());

  test('suggests searches from 3 characters, and choosing one submits the form', async () => {
    const onSubmit = vi.fn((event: SubmitEvent) => event.preventDefault());
    render(
      <form>
        <SearchBox.AutocompleteComposite id="search" name="q" suggestions={['Tax your vehicle', 'Tax credits']} />
      </form>
    );
    await upgraded();
    screen.getByRole('combobox').closest('form')?.addEventListener('submit', onSubmit);
    const input = screen.getByRole('combobox', { name: 'Search on GOV.UK' });
    fireEvent.focus(input);
    fireEvent.input(input, { target: { value: 'ta' } });
    expect(screen.queryAllByRole('option')).toEqual([]);
    fireEvent.input(input, { target: { value: 'tax' } });
    expect(screen.getAllByRole('option').map((option) => option.textContent)).toEqual([
      'Tax your vehicle',
      'Tax credits',
    ]);
    fireEvent.click(screen.getByRole('option', { name: 'Tax credits' }));
    expect(input).toHaveValue('Tax credits');
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  test('tells screen readers about search suggestions', async () => {
    render(<SearchBox.AutocompleteComposite id="search" name="q" suggestions={['Tax credits']} />);
    await upgraded();
    vi.useFakeTimers();
    const input = screen.getByRole('combobox');
    expect(input).toHaveAccessibleDescription(/When search suggestions are available/);
    fireEvent.focus(input);
    fireEvent.input(input, { target: { value: 'ta' } });
    act(() => vi.advanceTimersByTime(1400));
    expect(screen.getByText('Type in 3 or more characters for search suggestions')).toBeInTheDocument();
    fireEvent.input(input, { target: { value: 'tax' } });
    act(() => vi.advanceTimersByTime(1400));
    expect(screen.getByText('1 search suggestion is available.')).toBeInTheDocument();
  });
});
