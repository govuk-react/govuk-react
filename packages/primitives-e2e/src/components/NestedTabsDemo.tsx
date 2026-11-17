import * as React from 'react';
import { useEffect, useRef } from 'react';
import * as Tabs from '@govuk-react/primitives/tabs';

// Tabs in the "account" panel of other tabs. useId keeps their radio groups apart.
export default function NestedTabsDemo() {
  // Marks hydration on the DOM, so tests can wait for it.
  const hydrated = useRef<HTMLDivElement>(null);
  useEffect(() => {
    hydrated.current?.setAttribute('data-hydrated', 'true');
  }, []);
  return (
    <div data-testid="nested-tabs" ref={hydrated} data-hydrated="false" suppressHydrationWarning>
      <Tabs.Root fallback="radios" defaultValue="account">
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">
          <p>Outer account panel.</p>
          <div data-testid="inner">
            <Tabs.Root fallback="radios" defaultValue="profile">
              <Tabs.List>
                <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
                <Tabs.Trigger value="email">Email</Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="profile">Inner profile.</Tabs.Content>
              <Tabs.Content value="email">Inner email.</Tabs.Content>
            </Tabs.Root>
          </div>
        </Tabs.Content>
        <Tabs.Content value="settings">Outer settings panel.</Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
