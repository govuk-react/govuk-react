import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, fireEvent, render, screen } from '@testing-library/react';
import * as AutoFocus from '.';

// The element focuses in connectedCallback, after React commits.
const connected = () => act(() => Promise.resolve());

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
});
