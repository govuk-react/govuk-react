import { useState } from 'react';
import { Body } from 'govuk-react/body';
import * as Accordion from 'govuk-react/accordion';
import { guide } from './content';

/**
 * An accordion that records which sections the user has read. The inline script opens and closes
 * sections before React hydrates; once it has, React is told about sections opened before then.
 */
export function ReadingAccordion() {
  const [read, setRead] = useState<string[]>([]);
  const [beforeReact, setBeforeReact] = useState<string[]>([]);

  return (
    <>
      <Body>
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
        sections={guide.map(({ value, heading, content }) => ({ value, heading, children: content }))}
      />
    </>
  );
}
