import * as React from 'react';
import { useEffect, useRef } from 'react';
import * as Tabs from '@govuk-react/primitives/tabs';
import '@govuk-react/primitives/styles.css';

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
          <Tabs.RadioTrigger value="account">Account</Tabs.RadioTrigger>
          <Tabs.RadioTrigger value="settings">Settings</Tabs.RadioTrigger>
        </Tabs.List>
        <Tabs.RadioContent value="account">
          <p>Outer account panel.</p>
          <div data-testid="inner">
            <Tabs.RadiosRoot defaultValue="profile">
              <Tabs.List>
                <Tabs.RadioTrigger value="profile">Profile</Tabs.RadioTrigger>
                <Tabs.RadioTrigger value="email">Email</Tabs.RadioTrigger>
              </Tabs.List>
              <Tabs.RadioContent value="profile">Inner profile.</Tabs.RadioContent>
              <Tabs.RadioContent value="email">Inner email.</Tabs.RadioContent>
            </Tabs.RadiosRoot>
          </div>
        </Tabs.RadioContent>
        <Tabs.RadioContent value="settings">Outer settings panel.</Tabs.RadioContent>
      </Tabs.RadiosRoot>
    </div>
  );
}
