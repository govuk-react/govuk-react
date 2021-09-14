import React from 'react';
import { text } from '@storybook/addon-knobs';

import Caption from '.';

const CaptionWithKnobs: React.FC = () => (
  <Caption size={text('size', 'XL')}>{text('children', 'Heading text')}</Caption>
);

export default Caption;

export { CaptionWithKnobs };
