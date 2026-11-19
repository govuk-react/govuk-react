import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import * as Accordion from '@govuk-react/primitives/accordion';

const sections = [
  { value: 'web', heading: 'Writing well for the web', summary: 'An introduction' },
  { value: 'specialists', heading: 'Writing well for specialists' },
];

/** An accordion. When `controlled`, a button outside closes every section. */
export default function AccordionDemo({ id, controlled = false }: { id: string; controlled?: boolean }) {
  const [value, setValue] = useState<string[]>([]);
  const [last, setLast] = useState('none');
  // Marks hydration on the DOM, so tests can wait for it.
  const hydrated = useRef<HTMLDivElement>(null);
  useEffect(() => {
    hydrated.current?.setAttribute('data-hydrated', 'true');
  }, []);
  const onValueChange = (next: string[]) => {
    setValue(next);
    setLast(next.join(' ') || 'none');
  };
  return (
    <div ref={hydrated} data-testid={`accordion-${id}`} data-hydrated="false" suppressHydrationWarning>
      {controlled && (
        <button type="button" onClick={() => setValue([])}>
          Close every section
        </button>
      )}
      <Accordion.Root
        rememberExpanded={false}
        value={controlled ? value : undefined}
        defaultValue={controlled ? undefined : ['specialists']}
        onValueChange={onValueChange}
      >
        <Accordion.Controls>
          <Accordion.ShowAll>
            <Accordion.ShowAllText />
          </Accordion.ShowAll>
        </Accordion.Controls>
        {sections.map((section) => (
          <Accordion.Section key={section.value} value={section.value}>
            <h2>
              <Accordion.Fallback>{section.heading}</Accordion.Fallback>
              <Accordion.Trigger>
                <Accordion.Label>{section.heading}</Accordion.Label>
                {section.summary && <Accordion.Label>{section.summary}</Accordion.Label>} <Accordion.ToggleText />
              </Accordion.Trigger>
            </h2>
            {section.summary && (
              <Accordion.Fallback asChild>
                <p>{section.summary}</p>
              </Accordion.Fallback>
            )}
            <Accordion.Content id={`${id}-${section.value}`}>{section.heading} content</Accordion.Content>
          </Accordion.Section>
        ))}
      </Accordion.Root>
      <p data-testid={`last-${id}`}>{last}</p>
    </div>
  );
}
