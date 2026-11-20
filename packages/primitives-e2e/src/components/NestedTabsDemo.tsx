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
      <Tabs.RadiosRoot defaultValue="account">
        <Tabs.List>
          <Tabs.RadiosTrigger value="account">Account</Tabs.RadiosTrigger>
          <Tabs.RadiosTrigger value="settings">Settings</Tabs.RadiosTrigger>
        </Tabs.List>
        <Tabs.RadiosContent value="account">
          <p>Outer account panel.</p>
          <div data-testid="inner">
            <Tabs.RadiosRoot defaultValue="profile">
              <Tabs.List>
                <Tabs.RadiosTrigger value="profile">Profile</Tabs.RadiosTrigger>
                <Tabs.RadiosTrigger value="email">Email</Tabs.RadiosTrigger>
              </Tabs.List>
              <Tabs.RadiosContent value="profile">Inner profile.</Tabs.RadiosContent>
              <Tabs.RadiosContent value="email">Inner email.</Tabs.RadiosContent>
            </Tabs.RadiosRoot>
          </div>
        </Tabs.RadiosContent>
        <Tabs.RadiosContent value="settings">Outer settings panel.</Tabs.RadiosContent>
      </Tabs.RadiosRoot>
    </div>
  );
}
