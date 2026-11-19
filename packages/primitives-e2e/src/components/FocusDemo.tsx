import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import * as AutoFocus from '@govuk-react/primitives/auto-focus';
import * as FocusLinks from '@govuk-react/primitives/focus-links';

/** A skip link, an error summary that links to a field, and a button that shows a new summary. */
export default function FocusDemo({ id }: { id: string }) {
  const [submitted, setSubmitted] = useState(false);
  // Marks hydration on the DOM, so tests can wait for it.
  const hydrated = useRef<HTMLDivElement>(null);
  useEffect(() => {
    hydrated.current?.setAttribute('data-hydrated', 'true');
  }, []);
  return (
    <div ref={hydrated} data-testid={`focus-${id}`} data-hydrated="false" suppressHydrationWarning>
      <FocusLinks.Root focusedClass="focused">
        <a href={`#${id}-main`}>Skip to main content</a>
      </FocusLinks.Root>
      <FocusLinks.Root>
        <AutoFocus.Root>
          <AutoFocus.Target role="alert" aria-labelledby={`${id}-title`}>
            <h2 id={`${id}-title`}>There is a problem</h2>
            <a href={`#${id}-name`}>Enter your full name</a>
          </AutoFocus.Target>
        </AutoFocus.Root>
      </FocusLinks.Root>
      <main id={`${id}-main`}>
        <div style={{ height: '150vh' }} />
        <label htmlFor={`${id}-name`}>Full name</label>
        <input id={`${id}-name`} />
        <button type="button" onClick={() => setSubmitted(true)}>
          Save
        </button>
        {submitted && (
          <AutoFocus.Root>
            <AutoFocus.Target role="status">Saved</AutoFocus.Target>
          </AutoFocus.Root>
        )}
      </main>
    </div>
  );
}
