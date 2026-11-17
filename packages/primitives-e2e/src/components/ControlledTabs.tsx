import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import * as Tabs from '@govuk-react/primitives/tabs';

const items = [
  { value: 'account', label: 'Account' },
  { value: 'documents', label: 'Documents' },
  { value: 'settings', label: 'Settings' },
];

/**
 * Controlled tabs. A button sets the value from outside, and `changes` counts onValueChange
 * calls, so tests can tell a user's choice (reported) from a value change (not reported).
 * With `keep`, the value ignores the user's choices.
 */
export default function ControlledTabs({
  id,
  preHydration,
  keep = false,
}: {
  id: string;
  preHydration?: 'ignore' | 'report';
  keep?: boolean;
}) {
  const [value, setValue] = useState(`${id}-account`);
  const [changes, setChanges] = useState(0);
  // Marks hydration on the DOM, so tests can wait for it.
  const hydrated = useRef<HTMLDivElement>(null);
  useEffect(() => {
    hydrated.current?.setAttribute('data-hydrated', 'true');
  }, []);
  return (
    <div data-testid={`ctrl-${id}`} ref={hydrated} data-hydrated="false" suppressHydrationWarning>
      <button type="button" data-testid={`${id}-ext`} onClick={() => setValue(`${id}-settings`)}>
        Set settings from outside
      </button>
      <p data-testid={`${id}-value`}>{value}</p>
      <p data-testid={`${id}-changes`}>{changes}</p>
      <Tabs.Root
        name={id}
        fallback="radios"
        value={value}
        preHydration={preHydration}
        onValueChange={(next) => {
          if (!keep) setValue(next);
          setChanges((count) => count + 1);
        }}
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
            {item.label} panel
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
}
