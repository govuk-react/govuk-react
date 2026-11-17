import * as React from 'react';
import { useState } from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import * as Disclosure from '.';

function Example(props: Disclosure.RootProps) {
  return (
    <Disclosure.Root {...props}>
      <Disclosure.Toggle>Menu</Disclosure.Toggle>
      <Disclosure.Content id="menu">Navigation</Disclosure.Content>
    </Disclosure.Root>
  );
}

// The element upgrades in connectedCallback, after React commits.
const upgraded = () => act(() => Promise.resolve());

describe('Disclosure', () => {
  test('on upgrade, shows the button and hides the content, which the button toggles', async () => {
    const onOpenChange = vi.fn();
    render(<Example onOpenChange={onOpenChange} />);
    await upgraded();
    const button = screen.getByRole('button', { name: 'Menu' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveAttribute('aria-controls', 'menu');
    expect(screen.getByText('Navigation')).not.toBeVisible();
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('Navigation')).toBeVisible();
    expect(onOpenChange).toHaveBeenLastCalledWith(true);
    fireEvent.click(button);
    expect(screen.getByText('Navigation')).not.toBeVisible();
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
  });

  test('starts open with defaultOpen', async () => {
    render(<Example defaultOpen />);
    await upgraded();
    expect(screen.getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('Navigation')).toBeVisible();
  });

  test('when controlled, changes only when open does', async () => {
    function Controlled() {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Example open={open} onOpenChange={setOpen} />
          <button type="button" onClick={() => setOpen(false)}>
            Navigate
          </button>
        </>
      );
    }
    render(<Controlled />);
    await upgraded();
    fireEvent.click(screen.getByRole('button', { name: 'Menu' }));
    expect(screen.getByText('Navigation')).toBeVisible();
    fireEvent.click(screen.getByRole('button', { name: 'Navigate' }));
    expect(screen.getByText('Navigation')).not.toBeVisible();

    const { unmount } = render(<Example open={false} />);
    await upgraded();
    const [, kept] = screen.getAllByRole('button', { name: 'Menu' });
    fireEvent.click(kept);
    expect(kept).toHaveAttribute('aria-expanded', 'false');
    unmount();
  });
});
