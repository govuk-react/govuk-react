import * as React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import * as FocusLinks from '.';

// The element listens from connectedCallback, after React commits.
const connected = () => act(() => Promise.resolve());

describe('FocusLinks', () => {
  beforeEach(() => {
    Element.prototype.scrollIntoView = vi.fn();
  });

  test('a link to a field focuses it, and scrolls its label into view', async () => {
    render(
      <>
        <FocusLinks.Root>
          <a href="#full-name">Enter your full name</a>
        </FocusLinks.Root>
        <label htmlFor="full-name">Full name</label>
        <input id="full-name" />
      </>
    );
    await connected();
    const clicked = fireEvent.click(screen.getByRole('link'));
    expect(clicked).toBe(false);
    expect(screen.getByLabelText('Full name')).toHaveFocus();
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  });

  test('a link to a radio scrolls its legend into view', async () => {
    render(
      <>
        <FocusLinks.Root>
          <a href="#contact">Select how to contact you</a>
        </FocusLinks.Root>
        <fieldset>
          <legend>How should we contact you?</legend>
          <input type="radio" id="contact" name="contact" aria-label="Email" />
        </fieldset>
      </>
    );
    await connected();
    const scrolled = vi.spyOn(screen.getByText('How should we contact you?'), 'scrollIntoView');
    fireEvent.click(screen.getByRole('link'));
    expect(scrolled).toHaveBeenCalled();
    expect(screen.getByRole('radio')).toHaveFocus();
  });

  test('a link to content focuses it with the focused class until it loses focus', async () => {
    render(
      <>
        <FocusLinks.Root focusedClass="focused">
          <a href="#content">Skip to main content</a>
        </FocusLinks.Root>
        <main id="content">Main</main>
      </>
    );
    await connected();
    fireEvent.click(screen.getByRole('link'));
    const main = screen.getByRole('main');
    expect(main).toHaveFocus();
    expect(main).toHaveClass('focused');
    expect(main).toHaveAttribute('tabindex', '-1');
    fireEvent.blur(main);
    expect(main).not.toHaveClass('focused');
    expect(main).not.toHaveAttribute('tabindex');
  });
});
