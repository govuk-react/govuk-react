import React from 'react';

import { color, text } from '@storybook/addon-knobs';

import ArrowRightComponent from '.';

export default {
  title: 'Utility/Icons/ArrowRight',
};

export const ArrowRight: React.FC = () => {
  const fillColour = color('fill', 'black');
  const width = text('width', '256px');
  const height = text('height', '256px');
  return (
    <ArrowRightComponent width={width} height={height} fill={fillColour} title="Example ArrowRight implementation" />
  );
};
