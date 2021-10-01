import type { Story } from '@storybook/react';

import * as React from 'react';

import IconImportantComponent from '.';

export default {
  title: 'Utility/Icons/IconImportant',
};

export const IconImportant: Story = (args) => {
  return <IconImportantComponent {...args} title="Example IconImportant implementation" />;
};
IconImportant.args = {
  width: '256px',
  height: '256px',
  fill: 'black',
};
