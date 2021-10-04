import type { Story } from '@storybook/react';

import * as React from 'react';

import { HintText } from '.';

export default {
  title: 'Form/Hint text',
  id: 'hint-text',
  component: HintText,
};

export const Default: Story = (args) => <HintText {...args}>Example</HintText>;
