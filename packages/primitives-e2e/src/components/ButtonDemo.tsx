import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@govuk-react/primitives/button';

/** A form whose submit button prevents double clicks, a button that doesn't, and a link button. */
export default function ButtonDemo({ id }: { id: string }) {
  const [submits, setSubmits] = useState(0);
  const [clicks, setClicks] = useState(0);
  // Marks hydration on the DOM, so tests can wait for it.
  const hydrated = useRef<HTMLDivElement>(null);
  useEffect(() => {
    hydrated.current?.setAttribute('data-hydrated', 'true');
  }, []);
  return (
    <div ref={hydrated} data-testid={`button-${id}`} data-hydrated="false" suppressHydrationWarning>
      <form
        action={`#${id}-submitted`}
        onSubmit={(event) => {
          event.preventDefault();
          setSubmits((count) => count + 1);
        }}
      >
        <Button preventDoubleClick>Save and continue</Button>
        <Button type="button" onClick={() => setClicks((count) => count + 1)}>
          Add another
        </Button>
        <Button asChild>
          <a href={`#${id}-linked`} role="button" draggable="false">
            Link button
          </a>
        </Button>
      </form>
      <p data-testid="submits">{submits}</p>
      <p data-testid="clicks">{clicks}</p>
    </div>
  );
}
