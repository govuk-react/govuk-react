import * as React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { SkipLink } from '.';

describe('SkipLink', () => {
  test('moves focus to the main content, outlined until focus moves on, as in govuk-frontend', async () => {
    render(
      <>
        <SkipLink href="#main-content">Skip to main content</SkipLink>
        <main id="main-content">Content</main>
      </>
    );
    await act(() => Promise.resolve());
    fireEvent.click(screen.getByRole('link'));
    const main = screen.getByRole('main');
    expect(main).toHaveFocus();
    expect(main).toHaveClass('govuk-skip-link-focused-element');
    fireEvent.blur(main);
    expect(main).not.toHaveClass('govuk-skip-link-focused-element');
    expect(main).not.toHaveAttribute('tabindex');
  });
});
