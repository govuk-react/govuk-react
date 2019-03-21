import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, color, text } from '@storybook/addon-knobs/react';

import IconImportant from '.';

const stories = storiesOf('Icons', module);
stories.addDecorator(withKnobs);

stories.add('IconImportant', () => {
  const fillColour = color('fill', 'black');
  const width = text('width', '100%');
  const height = text('height', '100%');
  return <IconImportant width={width} height={height} fill={fillColour} title="Example IconImportant implementation" />;
});
