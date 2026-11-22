import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Button', () => {
  afterEach(() => vi.useRealTimers());

  test('marks the button, and its double click setting, for the listeners', () => {
    expect(renderToStaticMarkup(<Button preventDoubleClick>Save</Button>)).toBe(
      '<button data-button="" data-prevent-double-click="true">Save</button>'
    );
  });

  test('with preventDoubleClick, ignores a second click within a second', () => {
    vi.useFakeTimers({ toFake: ['Date', 'performance'] });
    const onClick = vi.fn();
    render(
      <Button preventDoubleClick onClick={onClick}>
        Save
      </Button>
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
    render(<Button onClick={onClick}>Save</Button>);
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  test('Space activates a link button', () => {
    const onClick = vi.fn((event: React.MouseEvent) => event.preventDefault());
    render(
      <Button asChild>
        <a href="#next" role="button" onClick={onClick}>
          Continue
        </a>
      </Button>
    );
    const notCancelled = fireEvent.keyDown(screen.getByRole('button'), { key: ' ' });
    expect(onClick).toHaveBeenCalledTimes(1);
    // Space doesn't scroll the page.
    expect(notCancelled).toBe(false);
  });

  test('Space activates a link button once while held, and not when a handler took the key', () => {
    const onClick = vi.fn((event: React.MouseEvent) => event.preventDefault());
    render(
      <Button asChild>
        <a href="#next" role="button" onClick={onClick} onKeyDown={(event) => event.shiftKey && event.preventDefault()}>
          Continue
        </a>
      </Button>
    );
    const link = screen.getByRole('button');
    fireEvent.keyDown(link, { key: ' ' });
    fireEvent.keyDown(link, { key: ' ', repeat: true });
    fireEvent.keyDown(link, { key: ' ', shiftKey: true });
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
