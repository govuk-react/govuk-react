import React from 'react';

import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import Heading, { H1, H2, H3, H4, H5, H6 } from '.';

export default {
  title: 'Typography/Heading',
  component: Heading,
  decorators: [withKnobs],
};

export const Default: React.FC = () => (
  <Heading size={text('size', 'LARGE')}>{text('Children', 'Heading text')}</Heading>
);

export const LevelAliases: React.FC = () => (
  <div>
    <H1>H1</H1>
    <H2>H2</H2>
    <H3>H3</H3>
    <H4>H4</H4>
    <H5>H5</H5>
    <H6>H6</H6>
  </div>
);
export const DifferingSizes: React.FC = () => (
  <div>
    <H6 size={80}>h6 with XXLARGE style</H6>
    <Heading as="h2" size={16}>
      h2 with XSMALL style
    </Heading>
    <H3 size="LARGE">H3 with size large</H3>
  </div>
);
export const PropsPassThrough: React.FC = () => (
  <div>
    <Heading onClick={action('heading-click')}>Click me</Heading>
  </div>
);
