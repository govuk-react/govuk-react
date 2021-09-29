import React from 'react';

import { withKnobs, color, text } from '@storybook/addon-knobs';

import SVGBaseComponent from '.';

export default {
  title: 'Utility/Icons/SVGBase',
  decorators: [withKnobs],
};

export const SVGBase: React.FC = () => {
  const fill = color('fill', 'transparent');
  const stroke = color('stroke', 'orange');
  const viewBox = text('viewBox', '0 0 500 500');
  const width = text('width', '256px');
  const height = text('height', '256px');
  return (
    <SVGBaseComponent
      width={width}
      height={height}
      viewBox={viewBox}
      title="Example of SVGBase"
      fill={fill}
      stroke={stroke}
    >
      <polygon points="250,60 100,400 400,400" />
    </SVGBaseComponent>
  );
};
