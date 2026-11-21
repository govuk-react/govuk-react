import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import * as AutoFocus from '@govuk-react/primitives/auto-focus';
import * as Modal from '@govuk-react/primitives/modal';

/** A button that opens a controlled modal and moves focus to a field inside it, past the modal's first control. */
export default function FocusInModalDemo() {
  const [open, setOpen] = useState(false);
  const [request, setRequest] = useState(0);
  const hydrated = useRef<HTMLDivElement>(null);
  useEffect(() => {
    hydrated.current?.setAttribute('data-hydrated', 'true');
  }, []);
  const edit = () => {
    setOpen(true);
    setRequest((previous) => previous + 1);
  };
  return (
    <div ref={hydrated} data-hydrated="false" suppressHydrationWarning>
      <button type="button" onClick={edit}>
        Change your email address
      </button>
      <Modal.Root open={open} onOpenChange={setOpen}>
        <Modal.Content>
          <Modal.Title>Your details</Modal.Title>
          <button type="button">Help</button>
          <AutoFocus.Root focusKey={request || undefined} disabled={!request}>
            <label htmlFor="email">Email address</label>
            <AutoFocus.Target asChild>
              <input id="email" />
            </AutoFocus.Target>
          </AutoFocus.Root>
          <Modal.Close>Close</Modal.Close>
        </Modal.Content>
      </Modal.Root>
    </div>
  );
}
