import type { Story } from '@storybook/react';

import * as React from 'react';

import { Tag } from '.';

export default {
  title: 'Typography/Tag',
  component: Tag,
};

export const Default: Story = (args) => <Tag {...args} />;
Default.args = {
  children: 'beta',
  inactive: false,
};

export const Inactive: Story = (args) => <Tag {...args} />;
Inactive.args = {
  children: 'beta',
  inactive: true,
};
