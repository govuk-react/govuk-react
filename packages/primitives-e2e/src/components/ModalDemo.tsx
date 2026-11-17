import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import * as Modal from '@govuk-react/primitives/modal';

/**
 * An uncontrolled modal, with a button behind it to check the page is inert. The last
 * onOpenChange value is shown, so tests can check what was reported.
 */
export default function ModalDemo({ id }: { id: string }) {
  const [last, setLast] = useState('');
  const [behind, setBehind] = useState(0);
  // Marks hydration on the DOM, so tests can wait for it.
  const hydrated = useRef<HTMLDivElement>(null);
  useEffect(() => {
    hydrated.current?.setAttribute('data-hydrated', 'true');
  }, []);
  return (
    <div ref={hydrated} data-testid={`modal-${id}`} data-hydrated="false" suppressHydrationWarning>
      <Modal.Root dialogId={id} onOpenChange={(open) => setLast(String(open))}>
        <Modal.Trigger>Delete account</Modal.Trigger>
        <Modal.Content>
          <Modal.Title>Are you sure you want to delete your account?</Modal.Title>
          <p>You cannot undo this.</p>
          <button type="button">Yes, delete it</button>
          <Modal.Close>Cancel</Modal.Close>
          <div data-testid={`inner-${id}`}>
            <Modal.Root dialogId={`${id}-inner`}>
              <Modal.Trigger>Read more</Modal.Trigger>
              <Modal.Content>
                <Modal.Title>What deleting your account means</Modal.Title>
                <Modal.Close>Back</Modal.Close>
              </Modal.Content>
            </Modal.Root>
          </div>
        </Modal.Content>
      </Modal.Root>
      <button type="button" onClick={() => setBehind((count) => count + 1)}>
        Behind the modal
      </button>
      <p data-testid={`behind-${id}`}>{behind}</p>
      <p data-testid={`last-${id}`}>{last}</p>
    </div>
  );
}
