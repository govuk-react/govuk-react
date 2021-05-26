import React from 'react';

import { withKnobs, color, text } from '@storybook/addon-knobs';

import IconImportantComponent from '.';

export default {
  title: 'Icons',
  decorators: [withKnobs],
};

export const IconImportant = () => {
  const fillColour = color('fill', 'black');
  const width = text('width', '256px');
  const height = text('height', '256px');
  return (
    <IconImportantComponent
      width={width}
      height={height}
      fill={fillColour}
      title="Example IconImportant implementation"
    />
  );
};
