import type { Story } from '@storybook/react';

import * as React from 'react';

import { action } from '@storybook/addon-actions';

import Heading, { H1, H2, H3, H4, H5, H6 } from '.';

export default {
  title: 'Typography/Heading',
  id: 'heading',
  component: Heading,
};

export const Default: Story = (args) => <Heading {...args} />;
Default.args = {
  size: 'LARGE',
  children: 'Heading text',
};

export const LevelAliases: Story = () => (
  <div>
    <H1>H1</H1>
    <H2>H2</H2>
    <H3>H3</H3>
    <H4>H4</H4>
    <H5>H5</H5>
    <H6>H6</H6>
  </div>
);
export const DifferingSizes: Story = () => (
  <div>
    <H6 size={80}>h6 with XXLARGE style</H6>
    <Heading as="h2" size={16}>
      h2 with XSMALL style
    </Heading>
    <H3 size="LARGE">H3 with size large</H3>
  </div>
);
export const PropsPassThrough: Story = () => (
  <div>
    <Heading onClick={action('heading-click')}>Click me</Heading>
  </div>
);
