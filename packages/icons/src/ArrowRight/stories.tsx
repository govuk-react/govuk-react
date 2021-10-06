import type { Story } from '@storybook/react';

import * as React from 'react';

import ArrowRightComponent from '.';

export default {
  title: 'Utility/Icons/ArrowRight',
};

export const ArrowRight: Story = (args) => {
  return <ArrowRightComponent {...args} title="Example ArrowRight implementation" />;
};
ArrowRight.args = {
  width: '256px',
  height: '256px',
  fill: 'black',
};
