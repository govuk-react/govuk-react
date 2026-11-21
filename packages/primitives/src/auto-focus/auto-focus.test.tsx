import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import * as AutoFocus from '.';

// The element focuses in connectedCallback, after React commits.
const connected = () => act(() => Promise.resolve());
const nextFrames = () =>
  act(() => new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))));

describe('AutoFocus', () => {
  test('without JavaScript, the browser focuses the target when the page loads', () => {
    const html = renderToStaticMarkup(
      <AutoFocus.Root>
        <AutoFocus.Target>There is a problem</AutoFocus.Target>
      </AutoFocus.Root>
    );
    expect(html).toContain('tabindex="-1"');
    expect(html).toContain('autofocus=""');
  });

  test('focuses the target when it appears, and drops its tabindex when focus moves on', async () => {
    render(
      <>
        <button type="button">Continue</button>
        <AutoFocus.Root>
          <AutoFocus.Target role="alert">There is a problem</AutoFocus.Target>
        </AutoFocus.Root>
      </>
    );
    await connected();
    const target = screen.getByRole('alert');
    expect(target).toHaveFocus();
    fireEvent.blur(target);
    expect(target).not.toHaveAttribute('tabindex');
  });

  test('when disabled, leaves focus alone', async () => {
    render(
      <AutoFocus.Root disabled>
        <AutoFocus.Target disabled role="alert">
          There is a problem
        </AutoFocus.Target>
      </AutoFocus.Root>
    );
    await connected();
    expect(screen.getByRole('alert')).not.toHaveFocus();
    expect(screen.getByRole('alert')).not.toHaveAttribute('tabindex');
  });

  test('a disabled Root disables its Target', async () => {
    render(
      <AutoFocus.Root disabled>
        <AutoFocus.Target role="alert">There is a problem</AutoFocus.Target>
      </AutoFocus.Root>
    );
    await connected();
    expect(screen.getByRole('alert')).not.toHaveFocus();
    expect(screen.getByRole('alert')).not.toHaveAttribute('tabindex');
  });

  test('keeps a tabindex the target already had', async () => {
    render(
      <AutoFocus.Root>
        <AutoFocus.Target asChild>
          <button type="button" tabIndex={0}>
            Undo
          </button>
        </AutoFocus.Target>
      </AutoFocus.Root>
    );
    await connected();
    const button = screen.getByRole('button');
    expect(button).toHaveFocus();
    fireEvent.blur(button);
    expect(button).toHaveAttribute('tabindex', '0');
  });

  test('server markup: leaves the user where they moved to before the script ran', async () => {
    const container = document.createElement('div');
    container.innerHTML = `<button type="button">Continue</button>${renderToStaticMarkup(
      <AutoFocus.Target role="alert">There is a problem</AutoFocus.Target>
    )}`;
    document.body.appendChild(container);
    container.querySelector('button')?.focus();
    const element = document.createElement('govuk-react-auto-focus');
    const target = container.querySelector('[role=alert]');
    if (!target) throw new Error('No target');
    container.appendChild(element);
    element.appendChild(target);
    await connected();
    expect(screen.getByRole('button')).toHaveFocus();
    expect(target).not.toHaveAttribute('tabindex');
    expect(target).not.toHaveAttribute('autofocus');
    container.remove();
  });

  test('tries again when a target that could not take focus moves into place', async () => {
    const hidden = document.createElement('div');
    hidden.hidden = true;
    document.body.appendChild(hidden);
    const element = document.createElement('govuk-react-auto-focus');
    element.innerHTML = '<div data-auto-focus role="alert">There is a problem</div>';
    hidden.appendChild(element);
    await connected();
    expect(screen.getByRole('alert', { hidden: true })).not.toHaveFocus();
    document.body.appendChild(element);
    await connected();
    expect(screen.getByRole('alert')).toHaveFocus();
    element.remove();
    hidden.remove();
  });

  const hiddenTarget = () => {
    const container = document.createElement('div');
    container.hidden = true;
    container.innerHTML =
      '<govuk-react-auto-focus><div data-auto-focus role="alert">There is a problem</div></govuk-react-auto-focus>';
    document.body.appendChild(container);
    const element = container.firstElementChild;
    if (!element) throw new Error('No element');
    return { container, element };
  };

  test('focuses a target that is not shown yet once an ancestor shows it', async () => {
    const { container } = hiddenTarget();
    await connected();
    container.hidden = false;
    await waitFor(() => expect(screen.getByRole('alert')).toHaveFocus());
    container.remove();
  });

  test('focuses a target that is itself hidden at first once it is shown', async () => {
    const container = document.createElement('div');
    container.innerHTML =
      '<govuk-react-auto-focus><div data-auto-focus role="alert" hidden>There is a problem</div></govuk-react-auto-focus>';
    document.body.appendChild(container);
    await connected();
    const target = screen.getByRole('alert', { hidden: true });
    target.hidden = false;
    await waitFor(() => expect(target).toHaveFocus());
    container.remove();
  });

  test.each([
    ['the user presses a key', () => fireEvent.keyDown(document.body, { key: 'Tab' })],
    ['the user clicks', () => fireEvent.pointerDown(document.body)],
    ['it is disabled', (element: Element) => element.setAttribute('disabled', '')],
  ])('stops waiting for a target to be shown once %s', async (_, act) => {
    const { container, element } = hiddenTarget();
    await connected();
    act(element);
    container.hidden = false;
    await nextFrames();
    expect(screen.getByRole('alert')).not.toHaveFocus();
    expect(screen.getByRole('alert')).not.toHaveAttribute('tabindex');
    container.remove();
  });

  test('stops waiting for a target to be shown after a second', async () => {
    const now = vi.spyOn(performance, 'now');
    const { container } = hiddenTarget();
    await connected();
    now.mockReturnValue(performance.now() + 1001);
    await nextFrames();
    now.mockRestore();
    container.hidden = false;
    await nextFrames();
    expect(screen.getByRole('alert')).not.toHaveFocus();
    container.remove();
  });

  test('moves focus again when focusKey changes, keeping what the user entered', async () => {
    function Search({ focusKey }: { focusKey?: number }) {
      return (
        <>
          <button type="button">Search</button>
          <AutoFocus.Root focusKey={focusKey} disabled={focusKey === undefined}>
            <AutoFocus.Target asChild>
              <input aria-label="Email address" />
            </AutoFocus.Target>
          </AutoFocus.Root>
        </>
      );
    }
    const { rerender } = render(<Search />);
    await connected();
    const input = screen.getByRole('textbox');
    expect(input).not.toHaveFocus();
    rerender(<Search focusKey={1} />);
    await connected();
    expect(input).toHaveFocus();
    fireEvent.change(input, { target: { value: 'name@example.com' } });
    screen.getByRole('button').focus();
    rerender(<Search focusKey={1} />);
    await connected();
    expect(input).not.toHaveFocus();
    rerender(<Search focusKey={2} />);
    await connected();
    expect(screen.getByRole('textbox')).toBe(input);
    expect(input).toHaveFocus();
    expect(input).toHaveValue('name@example.com');
  });
});
