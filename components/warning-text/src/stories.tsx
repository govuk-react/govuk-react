import type { StoryFn } from '@storybook/react';

import * as React from 'react';

import { WarningText } from '.';

export default {
  title: 'Typography/Warning text',
  id: 'warning-text',
  component: WarningText,
};

export const Default: StoryFn = (args: { children: string }) => <WarningText {...args} />;
Default.args = {
  children: 'Example text',
};

export const LongWarning: StoryFn = (args) => (
  <WarningText {...args}>
    A very long warning message. This includes a lot of text to give a good representation of a more average length
    warning. That way you can see more than one line wrapping.
  </WarningText>
);
