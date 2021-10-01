import type { Story } from '@storybook/react';

import * as React from 'react';

import SearchComponent from '.';

export default {
  title: 'Utility/Icons/Search',
};

export const Search: Story = (args) => {
  return <SearchComponent {...args} title="Example Search implementation" />;
};
Search.args = {
  width: '256px',
  height: '256px',
  fill: 'black',
};
