import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import * as Disclosure from '@govuk-react/primitives/disclosure';

const tablet = '(min-width: 40.0625em)';

/**
 * A navigation menu that collapses below tablet width. When `controlled`, choosing a link closes
 * it, as an app would after navigating.
 */
export default function DisclosureDemo({ id, controlled = false }: { id: string; controlled?: boolean }) {
  const [open, setOpen] = useState(false);
  const [last, setLast] = useState('none');
  // Marks hydration on the DOM, so tests can wait for it.
  const hydrated = useRef<HTMLDivElement>(null);
  useEffect(() => {
    hydrated.current?.setAttribute('data-hydrated', 'true');
  }, []);
  const onOpenChange = (next: boolean) => {
    setOpen(next);
    setLast(String(next));
  };
  return (
    <div ref={hydrated} data-testid={`disclosure-${id}`} data-hydrated="false" suppressHydrationWarning>
      <nav aria-label={`Menu ${id}`}>
        <Disclosure.Root media={tablet} open={controlled ? open : undefined} onOpenChange={onOpenChange}>
          <Disclosure.Toggle aria-controls={`${id}-menu`}>Menu</Disclosure.Toggle>
          <Disclosure.Content asChild>
            <ul id={`${id}-menu`}>
              <li>
                <a href={`#${id}-home`} onClick={() => setOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href={`#${id}-account`} onClick={() => setOpen(false)}>
                  Account
                </a>
              </li>
            </ul>
          </Disclosure.Content>
        </Disclosure.Root>
      </nav>
      <p data-testid={`last-${id}`}>{last}</p>
    </div>
  );
}
