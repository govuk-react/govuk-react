import type { Story } from '@storybook/react';

import React from 'react';

import { Caption } from '.';

const CaptionWithKnobs: Story = (args) => <Caption {...args} />;

CaptionWithKnobs.args = {
  size: 'XL',
  children: 'Heading text',
};

export default Caption;

export { CaptionWithKnobs };
