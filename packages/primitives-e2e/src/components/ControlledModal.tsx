import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import * as Modal from '@govuk-react/primitives/modal';

/** A controlled modal, opened from outside as well as by its trigger. */
export default function ControlledModal() {
  const [open, setOpen] = useState(false);
  const [locked, setLocked] = useState(false);
  const [asked, setAsked] = useState('');
  const hydrated = useRef<HTMLDivElement>(null);
  useEffect(() => {
    hydrated.current?.setAttribute('data-hydrated', 'true');
  }, []);
  return (
    <div ref={hydrated} data-testid="controlled" data-hydrated="false" suppressHydrationWarning>
      <button type="button" onClick={() => setOpen(true)}>
        Open from outside
      </button>
      <label>
        <input type="checkbox" checked={locked} onChange={(event) => setLocked(event.target.checked)} />
        Ignore changes
      </label>
      <p data-testid="controlled-open">{String(open)}</p>
      <p data-testid="controlled-asked">{asked}</p>
      <Modal.Root
        dialogId="controlled-dialog"
        open={open}
        onOpenChange={(next) => {
          setAsked(String(next));
          if (!locked) setOpen(next);
        }}
      >
        <Modal.Trigger>Open</Modal.Trigger>
        <Modal.Content>
          <Modal.Title>Controlled</Modal.Title>
          <Modal.Close>Close</Modal.Close>
        </Modal.Content>
      </Modal.Root>
    </div>
  );
}
