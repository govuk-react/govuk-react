import React from 'react';

import { color, text } from '@storybook/addon-knobs';

import SpinnerComponent from '.';

export default {
  title: 'Utility/Icons/Spinner',
};

export const Spinner: React.FC = () => {
  const fillColour = color('fill', 'black');
  const width = text('width', '256px');
  const height = text('height', '256px');
  return <SpinnerComponent width={width} height={height} fill={fillColour} title="Example Search implementation" />;
};
