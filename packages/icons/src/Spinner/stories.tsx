import type { Story } from '@storybook/react';

import * as React from 'react';

import SpinnerComponent from '.';

export default {
  title: 'Utility/Icons/Spinner',
};

export const Spinner: Story = (args) => {
  return <SpinnerComponent {...args} title="Example Spinner implementation" />;
};
Spinner.args = {
  width: '256px',
  height: '256px',
  fill: 'black',
};
