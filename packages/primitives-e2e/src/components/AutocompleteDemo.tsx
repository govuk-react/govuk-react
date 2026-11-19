import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import * as Autocomplete from '@govuk-react/primitives/autocomplete';

export const countries = ['France', 'Germany', 'United Kingdom', 'United States', 'Uganda', 'Ukraine'];

type Props = {
  id: string;
  /** Fetch matching options as the user types, rather than render them all. */
  remote?: boolean;
  submitOnConfirm?: boolean;
};

/**
 * A country picker. With `remote`, options come from a pretend server after a delay, and the
 * last confirmed value and query are shown.
 */
export default function AutocompleteDemo({ id, remote = false, submitOnConfirm = false }: Props) {
  const [options, setOptions] = useState(remote ? [] : countries);
  const [query, setQuery] = useState('');
  const [confirmed, setConfirmed] = useState('');
  // Marks hydration on the DOM, so tests can wait for it.
  const hydrated = useRef<HTMLDivElement>(null);
  useEffect(() => {
    hydrated.current?.setAttribute('data-hydrated', 'true');
  }, []);

  const onQueryChange = (next: string) => {
    setQuery(next);
    if (!remote) return;
    window.setTimeout(() => {
      setOptions(countries.filter((country) => country.toLowerCase().includes(next.toLowerCase())));
    }, 50);
  };

  return (
    <div ref={hydrated} data-testid={`autocomplete-${id}`} data-hydrated="false" suppressHydrationWarning>
      <form action="/test/autocomplete-submitted">
        <label htmlFor={`${id}-country`}>Country</label>
        <Autocomplete.Root
          minLength={remote ? 2 : 0}
          filter={remote ? 'none' : 'contains'}
          submitOnConfirm={submitOnConfirm}
          onQueryChange={onQueryChange}
          onConfirm={setConfirmed}
        >
          <Autocomplete.Input id={`${id}-country`} name="country" type="text" />
          <Autocomplete.Listbox>
            {options.map((country) => (
              <Autocomplete.Option key={country} value={country}>
                {country}
              </Autocomplete.Option>
            ))}
            {!remote && <Autocomplete.NoResults />}
          </Autocomplete.Listbox>
          <Autocomplete.Status data-testid={`status-${id}`} />
          <Autocomplete.AssistiveHint />
        </Autocomplete.Root>
        <button type="submit">Continue</button>
      </form>
      <p data-testid={`query-${id}`}>{query}</p>
      <p data-testid={`confirmed-${id}`}>{confirmed}</p>
    </div>
  );
}
