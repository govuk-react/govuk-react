import type { Story } from '@storybook/react';

import * as React from 'react';

import { action } from '@storybook/addon-actions';

import Heading, { H1, H2, H3, H4, H5, H6 } from '.';

export default {
  title: 'Typography/Heading',
  id: 'heading',
  component: Heading,
};

const Template: Story<React.ComponentProps<typeof Heading>> = (args) => <Heading {...args} />;

export const Default: Story = Template.bind({});
Default.args = {
  size: 'LARGE',
  children: 'Heading text',
};

export const LevelAliases: Story = (args) => (
  <>
    <H1 {...args}>H1</H1>
    <H2>H2</H2>
    <H3>H3</H3>
    <H4>H4</H4>
    <H5>H5</H5>
    <H6>H6</H6>
  </>
);
export const DifferingSizes: Story = (args) => (
  <>
    <H6 size={80} {...args}>
      h6 with XXLARGE style
    </H6>
    <Heading as="h2" size={16}>
      h2 with XSMALL style
    </Heading>
    <H3 size="LARGE">H3 with size large</H3>
  </>
);

export const PropsPassThrough: Story = Template.bind({});
PropsPassThrough.args = {
  onClick: action('onClick'),
  children: 'Click me',
};
