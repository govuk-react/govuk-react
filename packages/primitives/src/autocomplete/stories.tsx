import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as Autocomplete from '.';

const meta = {
  title: 'Primitives/Autocomplete',
  id: 'primitives-autocomplete',
  component: Autocomplete.Root,
} satisfies Meta<typeof Autocomplete.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

const countries = ['France', 'Germany', 'Greece', 'Ireland', 'Italy', 'Spain', 'United Kingdom'];

export const Default: Story = {
  render: () => (
    <>
      <label htmlFor="country">Country</label>
      <Autocomplete.Root>
        <Autocomplete.Input id="country" name="country" />
        <Autocomplete.Listbox>
          {countries.map((country) => (
            <Autocomplete.Option key={country} value={country}>
              {country}
            </Autocomplete.Option>
          ))}
          <Autocomplete.NoResults />
        </Autocomplete.Listbox>
        <Autocomplete.Status className="visually-hidden" />
        <Autocomplete.AssistiveHint />
      </Autocomplete.Root>
    </>
  ),
};
