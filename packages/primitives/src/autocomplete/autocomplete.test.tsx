import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, fireEvent, render, screen } from '@testing-library/react';
import * as Autocomplete from '.';

const countries = ['France', 'Germany', 'Guernsey', 'United Kingdom'];

function Example(props: Autocomplete.RootProps) {
  return (
    <form>
      <label htmlFor="country">Country</label>
      <span id="country-hint">For example, France</span>
      <Autocomplete.Root {...props}>
        <Autocomplete.Input id="country" aria-describedby="country-hint" />
        <Autocomplete.Listbox>
          {countries.map((country) => (
            <Autocomplete.Option key={country}>{country}</Autocomplete.Option>
          ))}
        </Autocomplete.Listbox>
        <Autocomplete.Status data-testid="status" />
        <Autocomplete.AssistiveHint>Use the arrows</Autocomplete.AssistiveHint>
      </Autocomplete.Root>
    </form>
  );
}

// The element upgrades in connectedCallback, after React commits.
const upgraded = () => act(() => Promise.resolve());

const type = (value: string) => {
  const input = screen.getByLabelText('Country');
  fireEvent.focus(input);
  fireEvent.input(input, { target: { value } });
};

const visibleOptions = () => screen.queryAllByRole('option').map((option) => option.textContent);

describe('Autocomplete', () => {
  afterEach(() => vi.useRealTimers());

  test('without JavaScript, renders a plain input and hidden options', () => {
    const container = document.createElement('div');
    container.innerHTML = renderToStaticMarkup(<Example />);
    expect(container.querySelector('input')).not.toHaveAttribute('role');
    expect(container.querySelector('ul')).toHaveAttribute('hidden');
  });

  test('keeps the input’s own description, adding the hint while the query is empty', async () => {
    render(<Example />);
    await upgraded();
    const input = screen.getByLabelText('Country');
    expect(input).toHaveAccessibleDescription('For example, France Use the arrows');
    type('fr');
    expect(input).toHaveAccessibleDescription('For example, France');
  });

  test('with filter "starts-with", matches the start of each option', async () => {
    render(<Example filter="starts-with" />);
    await upgraded();
    type('g');
    expect(visibleOptions()).toEqual(['Germany', 'Guernsey']);
    type('e');
    expect(visibleOptions()).toEqual([]);
  });

  test('announces the results with the messages it is given', async () => {
    render(<Example statusResults={{ one: '%{count} canlyniad', other: '%{count} o ganlyniadau' }} />);
    await upgraded();
    vi.useFakeTimers();
    type('g');
    act(() => vi.advanceTimersByTime(1400));
    expect(screen.getByTestId('status')).toHaveTextContent('3 o ganlyniadau');
  });

  test('works with an input that has no text selection, such as an email input', async () => {
    render(
      <Autocomplete.Root>
        <Autocomplete.Input id="email" type="email" aria-label="Email" />
        <Autocomplete.Listbox>
          <Autocomplete.Option>ali@example.com</Autocomplete.Option>
        </Autocomplete.Listbox>
        <Autocomplete.Status data-testid="status" />
      </Autocomplete.Root>
    );
    await upgraded();
    vi.useFakeTimers();
    const input = screen.getByLabelText('Email');
    fireEvent.focus(input);
    fireEvent.input(input, { target: { value: 'ali' } });
    act(() => vi.advanceTimersByTime(1400));
    expect(screen.getByTestId('status')).toHaveTextContent('1 result is available.');
  });

  test('calls onConfirm, and a cancelled confirm doesn’t submit the form', async () => {
    const onSubmit = vi.fn((event: SubmitEvent) => event.preventDefault());
    const onConfirm = vi.fn((_value: string, event: CustomEvent) => event.preventDefault());
    render(<Example submitOnConfirm onConfirm={onConfirm} />);
    await upgraded();
    screen.getByLabelText('Country').closest('form')?.addEventListener('submit', onSubmit);
    type('fra');
    fireEvent.click(screen.getByRole('option', { name: 'France' }));
    expect(onConfirm).toHaveBeenCalledWith('France', expect.any(CustomEvent));
    expect(screen.getByLabelText('Country')).toHaveValue('France');
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
