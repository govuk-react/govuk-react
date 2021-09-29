import React from 'react';

import { color, text } from '@storybook/addon-knobs';

import ArrowLeftComponent from '.';

export default {
  title: 'Utility/Icons/ArrowLeft',
};

export const ArrowLeft: React.FC = () => {
  const fillColour = color('fill', 'black');
  const width = text('width', '256px');
  const height = text('height', '256px');
  return (
    <ArrowLeftComponent width={width} height={height} fill={fillColour} title="Example ArrowLeft implementation" />
  );
};
