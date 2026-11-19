import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { useRef, useState } from 'react';

import * as SearchBox from '.';

const meta = {
  title: 'Form/Search box',
  id: 'search-box',
  component: SearchBox.Composite,
  args: { id: 'search', name: 'q' },
  decorators: [
    (Story) => (
      <form role="search" action="#">
        <Story />
      </form>
    ),
  ],
} satisfies Meta<typeof SearchBox.Composite>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Large: Story = {
  args: { label: 'Search GOV.UK', labelSize: 'm', large: true },
};

export const Inverse: Story = {
  args: { label: 'Search', labelSize: 's', large: true, inverse: true },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: 'var(--govuk-brand-colour, #1d70b8)', padding: 20 }}>
        <Story />
      </div>
    ),
  ],
};

export const VisuallyHiddenLabel: Story = {
  args: { labelVisuallyHidden: true },
};

export const WithParts: Story = {
  render: () => (
    <SearchBox.Root>
      <SearchBox.Label htmlFor="search-parts">Search on GOV.UK</SearchBox.Label>
      <SearchBox.Wrapper>
        <SearchBox.Input id="search-parts" name="q" />
        <SearchBox.Button />
      </SearchBox.Wrapper>
    </SearchBox.Root>
  ),
};

const suggestions = [
  'Tax your vehicle',
  'Tax credits',
  'Tax on your private pension',
  'Self Assessment tax returns',
  'Council Tax',
  'Income Tax rates and Personal Allowances',
];

/** Suggests searches once the user has typed 3 characters. Choosing one submits the form. */
export const Autocomplete: StoryObj<typeof SearchBox.AutocompleteComposite> = {
  render: (args) => <SearchBox.AutocompleteComposite {...args} />,
  args: { id: 'search-autocomplete', name: 'q', suggestions },
};

/** Types a query on load, so the suggestions are open for visual regression. */
export const AutocompleteOpen: StoryObj<typeof SearchBox.AutocompleteComposite> = {
  render: function AutocompleteOpen(args) {
    const typed = useRef(false);
    const typeQuery = (input: HTMLInputElement | null) => {
      if (!input || typed.current) return;
      typed.current = true;
      // After the element upgrades.
      window.setTimeout(() => {
        input.focus();
        input.value = 'tax';
        input.dispatchEvent(new Event('input', { bubbles: true }));
      });
    };
    return <SearchBox.AutocompleteComposite {...args} ref={typeQuery} />;
  },
  args: { id: 'search-autocomplete-open', name: 'q', suggestions },
  decorators: [
    (Story) => (
      <div style={{ minHeight: 320 }}>
        <Story />
      </div>
    ),
  ],
};

/** Suggestions from a server, with the query highlighted, using the parts. */
export const AutocompleteWithParts: Story = {
  render: function AutocompleteWithParts() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<string[]>([]);
    const onQueryChange = (next: string) => {
      setQuery(next);
      // Stands in for a request to a server.
      window.setTimeout(() => {
        setResults(suggestions.filter((suggestion) => suggestion.toLowerCase().includes(next.toLowerCase())));
      }, 100);
    };
    return (
      <SearchBox.Root>
        <SearchBox.Label htmlFor="search-autocomplete-parts">Search on GOV.UK</SearchBox.Label>
        <SearchBox.Autocomplete
          minLength={3}
          filter="none"
          confirmOnBlur={false}
          submitOnConfirm
          onQueryChange={onQueryChange}
        >
          <SearchBox.Wrapper>
            <SearchBox.AutocompleteInput id="search-autocomplete-parts" name="q" />
            <SearchBox.Button />
          </SearchBox.Wrapper>
          <SearchBox.Listbox>
            {results.map((result) => {
              const start = result.toLowerCase().indexOf(query.toLowerCase());
              const end = start + query.length;
              return (
                <SearchBox.Option key={result} value={result}>
                  {start === -1 ? (
                    result
                  ) : (
                    <>
                      {result.slice(0, start)}
                      <SearchBox.Match>{result.slice(start, end)}</SearchBox.Match>
                      {result.slice(end)}
                    </>
                  )}
                </SearchBox.Option>
              );
            })}
          </SearchBox.Listbox>
          <SearchBox.Status />
          <SearchBox.AssistiveHint />
        </SearchBox.Autocomplete>
      </SearchBox.Root>
    );
  },
};
