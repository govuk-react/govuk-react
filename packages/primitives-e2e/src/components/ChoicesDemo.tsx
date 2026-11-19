import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import * as Choices from '@govuk-react/primitives/choices';

const countries = ['France', 'Spain'];

/** Radios with reveals, and checkboxes with an exclusive "None". When `controlled`, React owns the checkboxes. */
export default function ChoicesDemo({ id, controlled = false }: { id: string; controlled?: boolean }) {
  const [checked, setChecked] = useState<string[]>([]);
  // Marks hydration on the DOM, so tests can wait for it.
  const hydrated = useRef<HTMLDivElement>(null);
  useEffect(() => {
    hydrated.current?.setAttribute('data-hydrated', 'true');
  }, []);
  const control = (value: string) =>
    controlled
      ? {
          checked: checked.includes(value),
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            const isChecked = event.target.checked;
            setChecked((current) => (isChecked ? [...current, value] : current.filter((item) => item !== value)));
          },
        }
      : {};
  return (
    <div ref={hydrated} data-testid={`choices-${id}`} data-hydrated="false" suppressHydrationWarning>
      <Choices.Root>
        {['Email', 'Phone'].map((method) => (
          <React.Fragment key={method}>
            <Choices.Input
              type="radio"
              id={`${id}-${method}`}
              name={`${id}-contact`}
              value={method}
              controls={`${id}-${method}-conditional`}
            />
            <label htmlFor={`${id}-${method}`}>{method}</label>
            <Choices.Conditional id={`${id}-${method}-conditional`}>{method} details</Choices.Conditional>
          </React.Fragment>
        ))}
      </Choices.Root>
      <Choices.Root>
        {[...countries, 'None'].map((country) => (
          <React.Fragment key={country}>
            <Choices.Input
              type="checkbox"
              id={`${id}-${country}`}
              name={`${id}-countries`}
              value={country}
              exclusive={country === 'None'}
              {...control(country)}
            />
            <label htmlFor={`${id}-${country}`}>{country}</label>
          </React.Fragment>
        ))}
      </Choices.Root>
      {controlled && <output>{checked.join(' ') || 'nothing'}</output>}
    </div>
  );
}
