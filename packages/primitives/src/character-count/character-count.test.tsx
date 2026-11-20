import * as React from 'react';
import { useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import * as CharacterCount from '.';

function Example(props: CharacterCount.RootProps) {
  return (
    <CharacterCount.Root maxLength={10} {...props}>
      <label htmlFor="message">Message</label>
      <CharacterCount.Input id="message" aria-describedby="message-info" maxLength={props.maxLength ?? 10} />
      <CharacterCount.Description id="message-info">You can enter up to 10 characters</CharacterCount.Description>
      <CharacterCount.Status data-testid="status" />
      <CharacterCount.ScreenReaderStatus data-testid="sr-status" />
    </CharacterCount.Root>
  );
}

// The element upgrades in connectedCallback, after React commits.
const upgraded = () => act(() => Promise.resolve());

const type = (value: string) => fireEvent.input(screen.getByLabelText('Message'), { target: { value } });

describe('CharacterCount', () => {
  afterEach(() => vi.useRealTimers());

  test('without JavaScript, shows the description and hides the counts', () => {
    const container = document.createElement('div');
    container.innerHTML = renderToStaticMarkup(<Example />);
    expect(container.querySelector('[data-testid="status"]')).toHaveAttribute('hidden');
    expect(container.querySelector('[data-testid="sr-status"]')).toHaveAttribute('hidden');
    expect(container.querySelector('textarea')).toHaveAttribute('maxlength', '10');
  });

  test('on upgrade, hides the description visually and shows the count', async () => {
    render(<Example hiddenDescriptionClass="visually-hidden" />);
    await upgraded();
    expect(screen.getByLabelText('Message')).not.toHaveAttribute('maxlength');
    expect(screen.getByText('You can enter up to 10 characters')).toHaveClass('visually-hidden');
    expect(screen.getByTestId('status')).toBeVisible();
    expect(screen.getByTestId('status')).toHaveTextContent('You have 10 characters remaining');
    expect(screen.getByLabelText('Message')).toHaveAccessibleDescription('You can enter up to 10 characters');
  });

  test('counts as the user types, and marks the count and field over the limit', async () => {
    render(<Example overLimitClass="error" withinLimitClass="hint" inputOverLimitClass="field-error" />);
    await upgraded();
    const status = screen.getByTestId('status');
    type('Hello');
    expect(status).toHaveTextContent('You have 5 characters remaining');
    expect(status).toHaveClass('hint');
    type('Hello there');
    expect(status).toHaveTextContent('You have 1 character too many');
    expect(status).toHaveAttribute('data-state', 'over');
    expect(status).toHaveClass('error');
    expect(status).not.toHaveClass('hint');
    expect(screen.getByLabelText('Message')).toHaveClass('field-error');
    type('Hello there');
    type('Helloworld');
    expect(status).toHaveTextContent('You have 0 characters remaining');
    expect(screen.getByLabelText('Message')).not.toHaveClass('field-error');
  });

  test('tells screen readers the count once the user pauses', async () => {
    render(<Example />);
    await upgraded();
    vi.useFakeTimers();
    const input = screen.getByLabelText('Message');
    fireEvent.focus(input);
    type('Hi');
    expect(screen.getByTestId('sr-status')).toHaveTextContent('You have 10 characters remaining');
    act(() => vi.advanceTimersByTime(2000));
    expect(screen.getByTestId('sr-status')).toHaveTextContent('You have 8 characters remaining');
    fireEvent.blur(input);
  });

  test('shows the count from the threshold', async () => {
    render(<Example threshold={50} belowThresholdClass="disabled" />);
    await upgraded();
    const status = screen.getByTestId('status');
    expect(status).toHaveClass('disabled');
    expect(screen.getByTestId('sr-status')).toHaveAttribute('aria-hidden', 'true');
    type('Hello');
    expect(screen.getByTestId('sr-status')).not.toHaveAttribute('aria-hidden');
    expect(status).not.toHaveClass('disabled');
    expect(status).not.toHaveAttribute('data-below-threshold');
  });

  test('counts words, with the messages it is given and their plural forms', async () => {
    render(
      <Example
        countType="words"
        maxLength={3}
        wordsUnderLimit={{ one: '%{count} gair ar ôl', other: '%{count} o eiriau ar ôl' }}
      />
    );
    await upgraded();
    type('Mae hi’n');
    expect(screen.getByTestId('status')).toHaveTextContent('1 gair ar ôl');
    type('Un');
    expect(screen.getByTestId('status')).toHaveTextContent('2 o eiriau ar ôl');
  });

  test('counts characters as users see them', async () => {
    render(<Example countType="characters" />);
    await upgraded();
    type('👍🏽👍🏽');
    expect(screen.getByTestId('status')).toHaveTextContent('You have 8 characters remaining');
  });

  test('counts a value React sets', async () => {
    function Controlled() {
      const [value, setValue] = useState('');
      return (
        <>
          <CharacterCount.Root maxLength={10}>
            <CharacterCount.Input
              aria-label="Message"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
            <CharacterCount.Status data-testid="status" />
          </CharacterCount.Root>
          <button type="button" onClick={() => setValue('Hello')}>
            Fill
          </button>
        </>
      );
    }
    render(<Controlled />);
    await upgraded();
    fireEvent.click(screen.getByRole('button', { name: 'Fill' }));
    expect(screen.getByTestId('status')).toHaveTextContent('You have 5 characters remaining');
  });

  test('counts a value a script sets, as form libraries do, and a form reset', async () => {
    render(
      <form>
        <Example />
      </form>
    );
    await upgraded();
    const field = screen.getByLabelText('Message');
    if (!(field instanceof HTMLTextAreaElement)) throw new Error('No textarea');
    field.value = 'Hello';
    await waitFor(() => expect(screen.getByTestId('status')).toHaveTextContent('You have 5 characters remaining'));
    field.form?.reset();
    await act(() => new Promise((resolve) => setTimeout(resolve)));
    expect(screen.getByTestId('status')).toHaveTextContent('You have 10 characters remaining');
  });

  test('a new limit keeps the field free of maxlength, and React leaves the counts alone', async () => {
    const { rerender } = render(<Example />);
    await upgraded();
    type('abc');
    rerender(<Example maxLength={20} />);
    await upgraded();
    expect(screen.getByLabelText('Message')).not.toHaveAttribute('maxlength');
    expect(screen.getByTestId('status')).toHaveTextContent('You have 17 characters remaining');
    expect(screen.getByTestId('sr-status')).toHaveTextContent('You have 10 characters remaining');
  });

  test('without a limit, goes back to the markup without JavaScript', async () => {
    const { rerender } = render(<Example hiddenDescriptionClass="visually-hidden" />);
    await upgraded();
    rerender(<Example hiddenDescriptionClass="visually-hidden" maxLength={undefined} />);
    await upgraded();
    expect(screen.getByTestId('status')).not.toBeVisible();
    expect(screen.getByText('You can enter up to 10 characters')).not.toHaveClass('visually-hidden');
  });

  test('uses the plural forms of the field’s language', async () => {
    render(
      <CharacterCount.Root maxLength={4} charactersUnderLimit={{ two: '%{count} nod (dau)', other: '%{count} nod' }}>
        <div lang="cy">
          <CharacterCount.Input aria-label="Message" />
          <CharacterCount.Status data-testid="status" />
        </div>
      </CharacterCount.Root>
    );
    await upgraded();
    type('ab');
    expect(screen.getByTestId('status')).toHaveTextContent('2 nod (dau)');
  });
});
