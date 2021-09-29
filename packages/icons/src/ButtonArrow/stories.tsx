import React from 'react';

import { withKnobs, color, text } from '@storybook/addon-knobs';

import ButtonArrowComponent from '.';

export default {
  title: 'Utility/Icons',
  decorators: [withKnobs],
};

export const ButtonArrow = () => {
  const fillColour = color('fill', 'black');
  const width = text('width', '256px');
  const height = text('height', '256px');
  return (
    <ButtonArrowComponent width={width} height={height} fill={fillColour} title="Example ButtonArrow implementation" />
  );
};
