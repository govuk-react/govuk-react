import React from 'react';

import { withKnobs, color, text } from '@storybook/addon-knobs';

import IconImportantComponent from '.';

export default {
  title: 'Utility/Icons/IconImportant',
  decorators: [withKnobs],
};

export const IconImportant: React.FC = () => {
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
