import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, color, text } from '@storybook/addon-knobs/react';

import SVGBase from '.';

const stories = storiesOf('Icons', module);
stories.addDecorator(withKnobs);

stories.add('SVGBase', () => {
  const fill = color('fill', 'transparent');
  const stroke = color('stroke', 'orange');
  const viewBox = text('viewBox', '0 0 500 500');
  return (
    <SVGBase viewBox={viewBox} title="Example of SVGBase" fill={fill} stroke={stroke}>
      <polygon points="250,60 100,400 400,400" />
    </SVGBase>
  );
});
