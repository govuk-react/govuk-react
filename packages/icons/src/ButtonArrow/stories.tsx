import type { Story } from '@storybook/react';

import * as React from 'react';

import ButtonArrowComponent from '.';

export default {
  title: 'Utility/Icons/ButtonArrow',
};

export const ButtonArrow: Story = (args) => {
  return <ButtonArrowComponent {...args} title="Example ButtonArrow implementation" />;
};
ButtonArrow.args = {
  width: '256px',
  height: '256px',
  fill: 'black',
};
