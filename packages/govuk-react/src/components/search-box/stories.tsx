import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

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

export const OnGovukBlue: Story = {
  args: { label: 'Search', labelSize: 's', large: true, onGovukBlue: true },
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
