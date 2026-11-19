import * as React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import * as ExitThisPage from '.';

// Stays on the page, and records where the element would have gone.
const exits: string[] = [];
const stay = (event: Event) => {
  if (event instanceof CustomEvent) exits.push(String(event.detail.href));
  event.preventDefault();
};
beforeEach(() => {
  exits.length = 0;
  document.addEventListener('govuk-react-exit-this-page:exit', stay);
});
afterEach(() => {
  document.removeEventListener('govuk-react-exit-this-page:exit', stay);
  vi.useRealTimers();
});

const shift = () => {
  fireEvent.keyDown(document.body, { key: 'Shift', shiftKey: true });
  fireEvent.keyUp(document.body, { key: 'Shift', shiftKey: false });
};

function Demo() {
  return (
    <>
      <ExitThisPage.SkipLink href="https://www.bbc.co.uk/weather">Exit this page</ExitThisPage.SkipLink>
      <ExitThisPage.Root lightOnClass="on" indicatorVisibleClass="visible">
        <ExitThisPage.Button href="https://www.bbc.co.uk/weather">
          Exit this page
          <ExitThisPage.Indicator />
        </ExitThisPage.Button>
        <ExitThisPage.Status />
      </ExitThisPage.Root>
    </>
  );
}

describe('ExitThisPage', () => {
  test('the button and the skip link exit to the button’s href', () => {
    render(<Demo />);
    const [skipLink, button] = screen.getAllByRole('link');
    fireEvent.click(button);
    fireEvent.click(skipLink);
    expect(exits).toEqual(['https://www.bbc.co.uk/weather', 'https://www.bbc.co.uk/weather']);
  });

  test('pressing Shift 3 times exits, counting on the indicator and for screen readers', () => {
    render(<Demo />);
    const lights = document.querySelectorAll('[data-exit-this-page-light]');
    shift();
    expect(screen.getByRole('status')).toHaveTextContent('Shift, press 2 more times to exit.');
    expect(lights[0]).toHaveClass('on');
    expect(lights[1]).not.toHaveClass('on');
    shift();
    expect(screen.getByRole('status')).toHaveTextContent('Shift, press 1 more time to exit.');
    expect(exits).toEqual([]);
    shift();
    expect(exits).toEqual(['https://www.bbc.co.uk/weather']);
  });

  test('Shift with another key doesn’t count', () => {
    render(<Demo />);
    shift();
    fireEvent.keyUp(document.body, { key: 'A', shiftKey: true });
    fireEvent.keyUp(document.body, { key: 'Shift', shiftKey: false });
    expect(screen.getByRole('status')).toHaveTextContent('Exit this page expired.');
    expect(document.querySelector('[data-exit-this-page-indicator]')).not.toHaveClass('visible');
  });

  test('the presses time out after 5 seconds', () => {
    vi.useFakeTimers();
    render(<Demo />);
    shift();
    shift();
    act(() => vi.advanceTimersByTime(5000));
    expect(screen.getByRole('status')).toHaveTextContent('Exit this page expired.');
    // The count starts again.
    shift();
    expect(screen.getByRole('status')).toHaveTextContent('Shift, press 2 more times to exit.');
    expect(exits).toEqual([]);
  });

  test('once allowed to exit, hides the page behind an overlay, which pageshow removes', () => {
    document.removeEventListener('govuk-react-exit-this-page:exit', stay);
    render(<Demo />);
    // jsdom can't navigate, so stop it trying.
    const location = vi.spyOn(window, 'location', 'get').mockReturnValue({ ...window.location, href: '' });
    fireEvent.click(screen.getAllByRole('link')[1]);
    expect(screen.getByRole('alert')).toHaveTextContent('Loading.');
    window.dispatchEvent(new Event('pageshow'));
    expect(screen.queryByRole('alert')).toBeNull();
    location.mockRestore();
  });
});
