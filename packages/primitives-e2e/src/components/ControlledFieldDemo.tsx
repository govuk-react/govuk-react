import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import * as ControlledField from '@govuk-react/primitives/controlled-field';

type Details = { beforeHydration: boolean };

/**
 * A form of controlled fields. `state` shows what React holds and `early` counts reports of what
 * the user entered before hydration. With `keep`, those reports aren't adopted.
 */
export default function ControlledFieldDemo({ id, keep = false }: { id: string; keep?: boolean }) {
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const [country, setCountry] = useState('england');
  const [agreed, setAgreed] = useState(false);
  const [contact, setContact] = useState('email');
  const [early, setEarly] = useState(0);
  const [renders, setRenders] = useState(0);
  // Marks hydration on the DOM, so tests can wait for it.
  const hydrated = useRef<HTMLFormElement>(null);
  useEffect(() => {
    hydrated.current?.setAttribute('data-hydrated', 'true');
  }, []);

  function adopt<State>(set: (state: State) => void) {
    return (state: State, { beforeHydration }: Details) => {
      if (beforeHydration) setEarly((count) => count + 1);
      if (!beforeHydration || !keep) set(state);
    };
  }
  const pickContact = adopt(setContact);

  return (
    <form data-testid={`field-${id}`} ref={hydrated} data-hydrated="false" suppressHydrationWarning>
      <label>
        Name
        <ControlledField.Input name={`${id}-name`} value={name} onValueChange={adopt(setName)} />
      </label>
      <label>
        Notes
        <ControlledField.Textarea name={`${id}-notes`} value={notes} onValueChange={adopt(setNotes)} />
      </label>
      <label>
        Country
        <ControlledField.Select name={`${id}-country`} value={country} onValueChange={adopt(setCountry)}>
          <option value="england">England</option>
          <option value="wales">Wales</option>
        </ControlledField.Select>
      </label>
      <label>
        <ControlledField.Checkbox name={`${id}-agreed`} checked={agreed} onCheckedChange={adopt(setAgreed)} />
        Agree
      </label>
      <label>
        <ControlledField.Radio
          name={`${id}-contact`}
          value="email"
          checked={contact === 'email'}
          onCheck={(details) => pickContact('email', details)}
        />
        Email
      </label>
      <label>
        <ControlledField.Radio
          name={`${id}-contact`}
          value="phone"
          checked={contact === 'phone'}
          onCheck={(details) => pickContact('phone', details)}
        />
        Phone
      </label>
      <button type="button" onClick={() => setRenders(renders + 1)}>
        Render
      </button>
      <output data-testid={`${id}-state`}>{JSON.stringify({ name, notes, country, agreed, contact })}</output>
      <p data-testid={`${id}-early`}>{early}</p>
    </form>
  );
}
