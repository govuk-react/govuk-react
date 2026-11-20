import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import * as Modal from '.';

function Example(props: Modal.RootProps) {
  return (
    <Modal.Root {...props}>
      <Modal.Trigger>Open</Modal.Trigger>
      <Modal.Content>
        <Modal.Title>Are you sure?</Modal.Title>
        <Modal.Close>Cancel</Modal.Close>
      </Modal.Content>
    </Modal.Root>
  );
}

// jsdom has no showModal(), so the browser tests in primitives-e2e cover the behaviour.
describe('Modal', () => {
  test('the buttons name the dialog with invoker commands, and the title names it', () => {
    render(<Example dialogId="confirm" />);
    expect(screen.getByText('Open')).toHaveAttribute('command', 'show-modal');
    expect(screen.getByText('Open')).toHaveAttribute('commandfor', 'confirm');
    expect(screen.getByText('Cancel', { selector: 'button' })).toHaveAttribute('command', 'close');
    const dialog = document.getElementById('confirm');
    expect(dialog?.tagName).toBe('DIALOG');
    expect(dialog).toHaveAttribute('aria-labelledby', 'confirm-title');
    expect(document.getElementById('confirm-title')).toHaveTextContent('Are you sure?');
  });
});

test('with asChild, reports through the dialog’s own ref as well as the child’s', () => {
  const onOpenChange = vi.fn();
  const childRef = React.createRef<HTMLDialogElement>();
  const { unmount } = render(
    <Modal.Root onOpenChange={onOpenChange}>
      <Modal.Content asChild>
        <dialog ref={childRef} aria-label="Confirm" />
      </Modal.Content>
    </Modal.Root>
  );
  const dialog = childRef.current;
  if (!dialog) throw new Error('No dialog');
  dialog.setAttribute('open', '');
  fireEvent(dialog, new Event('toggle'));
  expect(onOpenChange).toHaveBeenCalledExactlyOnceWith(true);
  unmount();
  expect(childRef.current).toBeNull();
});
