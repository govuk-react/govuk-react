import React from 'react';
import { text } from '@storybook/addon-knobs/react';

import Caption from '.';

const CaptionWithKnobs = () => <Caption size={text('size', 'XL')}>{text('children', 'Heading text')}</Caption>;

export default Caption;

export { CaptionWithKnobs };
