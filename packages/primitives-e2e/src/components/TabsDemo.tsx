import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import * as Tabs from '@govuk-react/primitives/tabs';

const items = [
  { value: 'account', label: 'Account', body: 'Make changes to your account.' },
  { value: 'documents', label: 'Documents', body: 'Access and update your documents.' },
  { value: 'settings', label: 'Settings', body: 'Edit your profile or update contact information.' },
];

/**
 * Uncontrolled tabs. Each value is prefixed with `id`, because a panel's id is its value. The
 * last onValueChange value is shown, so tests can check what was reported.
 */
export default function TabsDemo({
  id,
  name,
  fallback = 'radios',
  orientation,
  media,
}: {
  id: string;
  name?: string;
  fallback?: 'links' | 'radios';
  orientation?: 'horizontal' | 'vertical';
  media?: string;
}) {
  const [last, setLast] = useState('');
  // Marks hydration on the DOM, so tests can wait for it.
  const hydrated = useRef<HTMLDivElement>(null);
  useEffect(() => {
    hydrated.current?.setAttribute('data-hydrated', 'true');
  }, []);
  return (
    <div data-testid={`demo-${id}`} ref={hydrated} data-hydrated="false" suppressHydrationWarning>
      <Tabs.Root
        name={name}
        {...(fallback === 'radios'
          ? { fallback: 'radios', defaultValue: `${id}-account` }
          : { fallback: 'links', defaultValue: `${id}-account` })}
        orientation={orientation}
        media={media}
        onValueChange={setLast}
      >
        <Tabs.List>
          {items.map((item) => (
            <Tabs.Trigger key={item.value} value={`${id}-${item.value}`}>
              {item.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {items.map((item) => (
          <Tabs.Content key={item.value} value={`${id}-${item.value}`}>
            {item.body}
          </Tabs.Content>
        ))}
      </Tabs.Root>
      <p data-testid={`last-${id}`}>{last}</p>
    </div>
  );
}
