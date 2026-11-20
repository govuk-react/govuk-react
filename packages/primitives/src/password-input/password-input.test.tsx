import * as React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import * as PasswordInput from '.';

function Example(props: PasswordInput.RootProps) {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <PasswordInput.Root {...props}>
        <label htmlFor="password">Password</label>
        <PasswordInput.Input id="password" />
        <PasswordInput.Status />
        <PasswordInput.Toggle />
      </PasswordInput.Root>
      <button type="submit">Sign in</button>
    </form>
  );
}

// The element upgrades in connectedCallback, after React commits.
const upgraded = () => act(() => Promise.resolve());

describe('PasswordInput', () => {
  test('shows the button on upgrade, and toggles the password', async () => {
    render(<Example />);
    await upgraded();
    const input = screen.getByLabelText('Password');
    fireEvent.click(screen.getByRole('button', { name: 'Show password' }));
    expect(input).toHaveAttribute('type', 'text');
    expect(screen.getByRole('button', { name: 'Hide password' })).toHaveTextContent('Hide');
    expect(screen.getByText('Your password is visible')).toHaveAttribute('aria-live', 'polite');
    fireEvent.click(screen.getByRole('button', { name: 'Hide password' }));
    expect(input).toHaveAttribute('type', 'password');
    expect(screen.getByText('Your password is hidden')).toBeInTheDocument();
  });

  test('hides the password when its form is submitted', async () => {
    render(<Example />);
    await upgraded();
    fireEvent.click(screen.getByRole('button', { name: 'Show password' }));
    fireEvent.submit(screen.getByRole('button', { name: 'Sign in' }).closest('form') ?? document.body);
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password');
  });

  test('keeps the password shown when a hidden button submits, as form libraries do to validate', async () => {
    render(<Example />);
    await upgraded();
    fireEvent.click(screen.getByRole('button', { name: 'Show password' }));
    const form = screen.getByRole('button', { name: 'Sign in' }).closest('form');
    const submitter = document.createElement('button');
    submitter.hidden = true;
    form?.appendChild(submitter);
    form?.requestSubmit(submitter);
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'text');
  });

  test('keeps the password shown when React updates the input', async () => {
    function Controlled() {
      const [value, setValue] = React.useState('');
      return (
        <PasswordInput.Root>
          <label htmlFor="password">Password</label>
          <PasswordInput.Input id="password" value={value} onChange={(event) => setValue(event.target.value)} />
          <PasswordInput.Toggle />
        </PasswordInput.Root>
      );
    }
    render(<Controlled />);
    await upgraded();
    fireEvent.click(screen.getByRole('button', { name: 'Show password' }));
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'violin' } });
    expect(screen.getByLabelText('Password')).toHaveValue('violin');
    await upgraded();
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'text');
  });

  test('uses the text it is given', async () => {
    render(<Example showText="Dangos" showLabel="Dangos cyfrinair" hideText="Cuddio" />);
    await upgraded();
    fireEvent.click(screen.getByRole('button', { name: 'Dangos cyfrinair' }));
    expect(screen.getByLabelText('Password').nextElementSibling?.textContent).toBe('Your password is visible');
    expect(screen.getByRole('button', { name: 'Hide password' })).toHaveTextContent('Cuddio');
  });

  test('adds a live region when there is none', async () => {
    render(
      <PasswordInput.Root>
        <PasswordInput.Input aria-label="Password" />
        <PasswordInput.Toggle />
      </PasswordInput.Root>
    );
    await upgraded();
    fireEvent.click(screen.getByRole('button', { name: 'Show password' }));
    expect(screen.getByText('Your password is visible')).toHaveAttribute('aria-live', 'polite');
  });
});

test('keeps the text node React rendered in the button, and marks the element upgraded', async () => {
  render(
    <PasswordInput.Root data-testid="root">
      <PasswordInput.Input aria-label="Password" />
      <PasswordInput.Toggle />
    </PasswordInput.Root>
  );
  const button = screen.getByText('Show');
  const text = button.firstChild;
  await upgraded();
  fireEvent.click(button);
  expect(button.firstChild).toBe(text);
  expect(button).toHaveTextContent('Hide');
  expect(screen.getByTestId('root')).toHaveAttribute('data-upgraded');
});
