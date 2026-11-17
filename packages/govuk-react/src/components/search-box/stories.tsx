import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as SearchBox from '.';

const meta = {
  title: 'Form/Search box',
  id: 'search-box',
  component: SearchBox.Composite,
  args: { id: 'search', name: 'q', label: 'Search on GOV.UK' },
} satisfies Meta<typeof SearchBox.Composite>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <form role="search" action="#">
      <SearchBox.Composite {...args} />
    </form>
  ),
};

export const WithParts: Story = {
  render: () => (
    <form role="search" action="#">
      <SearchBox.Root>
        <SearchBox.Label htmlFor="search-parts">Search on GOV.UK</SearchBox.Label>
        <SearchBox.Input id="search-parts" name="q" />
        <SearchBox.Button />
      </SearchBox.Root>
    </form>
  ),
};
