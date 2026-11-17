import * as React from 'react';
import { useEffect, useRef } from 'react';
import * as PasswordInput from '@govuk-react/primitives/password-input';

/** A password field in a form. Submitting it is cancelled, so the page stays. */
export default function PasswordDemo({ id }: { id: string }) {
  // Marks hydration on the DOM, so tests can wait for it.
  const hydrated = useRef<HTMLFormElement>(null);
  useEffect(() => {
    hydrated.current?.setAttribute('data-hydrated', 'true');
  }, []);
  return (
    <form
      ref={hydrated}
      data-testid={`password-${id}`}
      data-hydrated="false"
      suppressHydrationWarning
      onSubmit={(event) => event.preventDefault()}
    >
      <PasswordInput.Root>
        <label htmlFor={`${id}-password`}>Password</label>
        <PasswordInput.Input id={`${id}-password`} name="password" />
        <PasswordInput.Status style={{ position: 'absolute', left: '-9999px' }} />
        <PasswordInput.Toggle />
      </PasswordInput.Root>
      <button type="submit">Sign in</button>
    </form>
  );
}
