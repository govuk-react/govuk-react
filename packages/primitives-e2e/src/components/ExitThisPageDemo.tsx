import * as React from 'react';
import { useEffect, useRef } from 'react';
import * as ExitThisPage from '@govuk-react/primitives/exit-this-page';

/** A skip link and an exit this page button, both to a safe page on this site. */
export default function ExitThisPageDemo({ id }: { id: string }) {
  // Marks hydration on the DOM, so tests can wait for it.
  const hydrated = useRef<HTMLDivElement>(null);
  useEffect(() => {
    hydrated.current?.setAttribute('data-hydrated', 'true');
  }, []);
  return (
    <div ref={hydrated} data-testid={`exit-${id}`} data-hydrated="false" suppressHydrationWarning>
      <ExitThisPage.SkipLink href="/?exited">Exit this page</ExitThisPage.SkipLink>
      <ExitThisPage.Root hideContentClass="hide-content" lightOnClass="on">
        <ExitThisPage.Button href="/?exited">
          Exit this page now
          <ExitThisPage.Indicator />
        </ExitThisPage.Button>
        <ExitThisPage.Status />
      </ExitThisPage.Root>
      <input aria-label="Name" />
    </div>
  );
}
