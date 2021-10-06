import type { Story } from '@storybook/react';

import * as React from 'react';

import { SearchBox } from '.';

export default {
  title: 'Form/Search box',
  id: 'search-box',
  component: SearchBox,
};

export const Default: Story = (args) => (
  <SearchBox {...args}>
    <SearchBox.Input placeholder="Search GOV.UK" />
    <SearchBox.Button />
  </SearchBox>
);
