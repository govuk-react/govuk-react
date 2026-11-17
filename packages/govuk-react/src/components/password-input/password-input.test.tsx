import * as React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import * as PasswordInput from '.';

// The element upgrades in connectedCallback, after React commits.
const upgraded = () => act(() => Promise.resolve());

describe('PasswordInput', () => {
  test('renders govuk-frontend’s markup, and shows and hides the password', async () => {
    render(<PasswordInput.Field id="password" label="Password" />);
    const input = screen.getByLabelText('Password', { exact: true });
    expect(input).toHaveClass('govuk-input', 'govuk-password-input__input');
    await upgraded();
    const toggle = screen.getByRole('button', { name: 'Show password' });
    expect(toggle).toHaveClass('govuk-button', 'govuk-password-input__toggle');
    fireEvent.click(toggle);
    expect(input).toHaveAttribute('type', 'text');
    expect(screen.getByText('Your password is visible')).toHaveClass('govuk-visually-hidden');
  });

  test('uses the text it is given', async () => {
    render(
      <PasswordInput.Field
        id="password"
        label="Cyfrinair"
        showPasswordText="Datguddia"
        hidePasswordText="Cuddio"
        showPasswordAriaLabelText="Datgelu cyfrinair"
      />
    );
    await upgraded();
    fireEvent.click(screen.getByRole('button', { name: 'Datgelu cyfrinair' }));
    expect(screen.getByRole('button', { name: 'Hide password' })).toHaveTextContent('Cuddio');
  });
});
