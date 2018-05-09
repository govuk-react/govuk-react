import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, color, number } from '@storybook/addon-knobs/react';

import ButtonArrow from '.';

const stories = storiesOf('Icons', module);
stories.addDecorator(withKnobs);

stories.add('ButtonArrow', () => {
  const fillColour = color('fill', 'black');
  const width = number('width', 100);
  const height = number('height', '');
  return (<ButtonArrow width={width} height={height} fill={fillColour} title="Example ButtonArrow implementation" />);
});
