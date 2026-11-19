import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import * as CharacterCount from '@govuk-react/primitives/character-count';

const visuallyHidden = { position: 'absolute', left: '-9999px' } as const;

/** A field limited to 10 characters. When `controlled`, a button outside clears it. */
export default function CharacterCountDemo({ id, controlled = false }: { id: string; controlled?: boolean }) {
  const [value, setValue] = useState('');
  // Marks hydration on the DOM, so tests can wait for it.
  const hydrated = useRef<HTMLDivElement>(null);
  useEffect(() => {
    hydrated.current?.setAttribute('data-hydrated', 'true');
  }, []);
  return (
    <div ref={hydrated} data-testid={`character-count-${id}`} data-hydrated="false" suppressHydrationWarning>
      <CharacterCount.Root maxLength={10} threshold={controlled ? undefined : 50}>
        <label htmlFor={`${id}-message`}>Message</label>
        <CharacterCount.Input
          id={`${id}-message`}
          aria-describedby={`${id}-message-info`}
          maxLength={10}
          {...(controlled ? { value, onChange: (event) => setValue(event.target.value) } : {})}
        />
        <CharacterCount.Description id={`${id}-message-info`}>
          You can enter up to 10 characters
        </CharacterCount.Description>
        <CharacterCount.Status data-testid={`status-${id}`} />
        <CharacterCount.ScreenReaderStatus style={visuallyHidden} data-testid={`sr-status-${id}`} />
      </CharacterCount.Root>
      {controlled && (
        <button type="button" onClick={() => setValue('')}>
          Clear
        </button>
      )}
    </div>
  );
}
