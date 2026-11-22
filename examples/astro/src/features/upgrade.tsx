import { useState, useSyncExternalStore } from 'react';
import { Body } from 'govuk-react/body';
import * as Accordion from 'govuk-react/accordion';
import { guide } from './content';

/**
 * An accordion that records which sections the user has read. The inline script opens and closes
 * sections before React hydrates; once it has, React is told about sections open by then. The count
 * is hidden until then, since only React knows it.
 */
const subscribe = () => () => {};

/** Whether React has hydrated: false on the server and while hydrating, then true. */
function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}

export function ReadingAccordion() {
  const hydrated = useHydrated();
  const [read, setRead] = useState<string[]>([]);
  const [beforeReact, setBeforeReact] = useState<string[]>([]);

  return (
    <>
      <Body hidden={!hydrated}>
        You’ve read {read.length} of {guide.length} sections
        {beforeReact.length > 0 && `, ${beforeReact.length} of them before React loaded`}.
      </Body>
      <Accordion.Composite
        id="upgrade-guide"
        rememberExpanded={false}
        onValueChange={(open, { beforeHydration }) => {
          setRead((previous) => [...new Set([...previous, ...open])]);
          if (beforeHydration) setBeforeReact(open);
        }}
        sections={guide.map(({ value, heading, content }) => ({ value, heading, children: <Body>{content}</Body> }))}
      />
    </>
  );
}
