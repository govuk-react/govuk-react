import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Heading } from '.';

const meta = {
  title: 'Typography/Heading',
  id: 'heading',
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { size: 'l', children: 'Heading text' },
};

export const LevelAliases: Story = {
  args: { size: 'xl' },
  render: () => (
    <>
      <Heading size="xl" headingLevel={1}>
        H1
      </Heading>
      <Heading size="l">H2</Heading>
      <Heading size="m" headingLevel={3}>
        H3
      </Heading>
      <Heading size="s" headingLevel={4}>
        H4
      </Heading>
      <Heading size="s" headingLevel={5}>
        H5
      </Heading>
      <Heading size="s" headingLevel={6}>
        H6
      </Heading>
    </>
  ),
};

export const DifferingSizes: Story = {
  args: { size: 'xl' },
  render: () => (
    <>
      <Heading size="xl" headingLevel={6}>
        h6 with xl size
      </Heading>
      <Heading size="s">h2 with s size</Heading>
      <Heading size="l" headingLevel={3}>
        h3 with l size
      </Heading>
    </>
  ),
};

export const PropsPassThrough: Story = {
  args: { size: 'xl', id: 'heading-id', children: 'Click me' },
};
