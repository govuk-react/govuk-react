import * as React from 'react';
import { useState } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { renderToString } from 'react-dom/server';
import { act, fireEvent, render, screen } from '@testing-library/react';
import * as Disclosure from '.';

function Example(props: Disclosure.RootProps) {
  return (
    <Disclosure.Root {...props}>
      <Disclosure.Trigger>Menu</Disclosure.Trigger>
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
    expect(onOpenChange).toHaveBeenLastCalledWith(true, { beforeHydration: false });
    fireEvent.click(button);
    expect(screen.getByText('Navigation')).not.toBeVisible();
    expect(onOpenChange).toHaveBeenLastCalledWith(false, { beforeHydration: false });
  });

  test('marks the root, button and content with data-state', async () => {
    const { container } = render(<Example />);
    await upgraded();
    const parts = [
      container.firstElementChild,
      screen.getByRole('button', { name: 'Menu' }),
      screen.getByText('Navigation'),
    ];
    parts.forEach((part) => expect(part).toHaveAttribute('data-state', 'closed'));
    fireEvent.click(screen.getByRole('button', { name: 'Menu' }));
    parts.forEach((part) => expect(part).toHaveAttribute('data-state', 'open'));
  });

  test('starts open with defaultOpen', async () => {
    render(<Example defaultOpen />);
    await upgraded();
    expect(screen.getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('Navigation')).toBeVisible();
  });

  test('when controlled, starts as open says', async () => {
    render(<Example open />);
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

test('server markup: a click before hydration is reported as such, and undone when the handler does not adopt it', async () => {
  const onOpenChange = vi.fn();
  const container = document.createElement('div');
  document.body.appendChild(container);
  container.innerHTML = renderToString(<Example open={false} onOpenChange={onOpenChange} />);
  await upgraded();
  fireEvent.click(screen.getByRole('button', { name: 'Menu' }));
  expect(screen.getByText('Navigation')).toBeVisible();
  await act(async () => {
    hydrateRoot(container, <Example open={false} onOpenChange={onOpenChange} />);
  });
  await upgraded();
  expect(onOpenChange.mock.calls).toEqual([[true, { beforeHydration: true }]]);
  expect(screen.getByText('Navigation')).not.toBeVisible();
  container.remove();
});

test('server markup: an uncontrolled click before hydration is reported as such', async () => {
  const onOpenChange = vi.fn();
  const container = document.createElement('div');
  document.body.appendChild(container);
  container.innerHTML = renderToString(<Example onOpenChange={onOpenChange} />);
  await upgraded();
  fireEvent.click(screen.getByRole('button', { name: 'Menu' }));
  await act(async () => {
    hydrateRoot(container, <Example onOpenChange={onOpenChange} />);
  });
  await upgraded();
  expect(onOpenChange.mock.calls).toEqual([[true, { beforeHydration: true }]]);
  expect(screen.getByText('Navigation')).toBeVisible();
  container.remove();
});

test('hides the content with hidden="until-found" when asked, and a find-in-page match opens it', async () => {
  const onOpenChange = vi.fn();
  render(
    <Disclosure.Root onOpenChange={onOpenChange}>
      <Disclosure.Trigger>Menu</Disclosure.Trigger>
      <Disclosure.Content id="menu" hidden="until-found">
        Navigation
      </Disclosure.Content>
    </Disclosure.Root>
  );
  await upgraded();
  const content = screen.getByText('Navigation');
  expect(content).toHaveAttribute('hidden', 'until-found');
  fireEvent(content, new Event('beforematch'));
  expect(content).not.toHaveAttribute('hidden');
  expect(screen.getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-expanded', 'true');
  expect(onOpenChange).toHaveBeenLastCalledWith(true, { beforeHydration: false });
});

test('renders no hidden attribute before upgrade, whatever hidden asks for', () => {
  const html = renderToString(
    <Disclosure.Root>
      <Disclosure.Trigger>Menu</Disclosure.Trigger>
      <Disclosure.Content hidden="until-found">Navigation</Disclosure.Content>
    </Disclosure.Root>
  );
  expect(html).toContain('<div data-disclosure-content="" data-hidden="until-found">Navigation</div>');
});
