import type { Story } from '@storybook/react';

import * as React from 'react';

import SVGBaseComponent from '.';

export default {
  title: 'Utility/Icons/SVGBase',
};

export const SVGBase: Story = (args) => {
  return (
    <SVGBaseComponent {...args} title="Example of SVGBase">
      <polygon points="250,60 100,400 400,400" />
    </SVGBaseComponent>
  );
};

SVGBase.args = {
  width: '256px',
  height: '256px',
  fill: 'transparent',
  stroke: 'orange',
  viewBox: '0 0 500 500',
};
