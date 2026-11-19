import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { fireEvent, render, screen } from '@testing-library/react';
import * as Button from '.';

describe('Button', () => {
  afterEach(() => vi.useRealTimers());

  test('marks the button, and its double click setting, for the listeners', () => {
    expect(renderToStaticMarkup(<Button.Root preventDoubleClick>Save</Button.Root>)).toBe(
      '<button data-button="" data-prevent-double-click="true">Save</button>'
    );
  });

  test('with preventDoubleClick, ignores a second click within a second', () => {
    vi.useFakeTimers({ toFake: ['Date', 'performance'] });
    const onClick = vi.fn();
    render(
      <Button.Root preventDoubleClick onClick={onClick}>
        Save
      </Button.Root>
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
    vi.advanceTimersByTime(1000);
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  test('without preventDoubleClick, hears every click', () => {
    const onClick = vi.fn();
    render(<Button.Root onClick={onClick}>Save</Button.Root>);
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  test('Space activates a link button', () => {
    const onClick = vi.fn((event: React.MouseEvent) => event.preventDefault());
    render(
      <Button.Root asChild>
        <a href="#next" role="button" onClick={onClick}>
          Continue
        </a>
      </Button.Root>
    );
    const notCancelled = fireEvent.keyDown(screen.getByRole('button'), { key: ' ' });
    expect(onClick).toHaveBeenCalledTimes(1);
    // Space doesn't scroll the page.
    expect(notCancelled).toBe(false);
  });
});
