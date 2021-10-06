import type { Story } from '@storybook/react';

import * as React from 'react';

import ArrowLeftComponent from '.';

export default {
  title: 'Utility/Icons/ArrowLeft',
};

export const ArrowLeft: Story = (args) => {
  return <ArrowLeftComponent {...args} title="Example ArrowLeft implementation" />;
};
ArrowLeft.args = {
  width: '256px',
  height: '256px',
  fill: 'black',
};
