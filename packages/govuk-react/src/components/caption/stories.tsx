import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Caption } from '.';
import { Heading } from '../heading';

const meta = {
  title: 'Typography/Caption',
  id: 'caption',
  component: Caption,
} satisfies Meta<typeof Caption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { size: 'xl', children: 'Heading text' },
};

export const PlacedWithAHeadingComponent: Story = {
  args: { size: 'xl', children: 'Supporting heading text' },
  render: (args) => (
    <>
      <Caption {...args} />
      <Heading size="xl" headingLevel={1}>
        Main heading text
      </Heading>
    </>
  ),
};

export const PlacedInsideAHeadingComponent: Story = {
  args: { size: 'xl', children: 'Supporting heading text' },
  render: (args) => (
    <Heading size="xl" headingLevel={1}>
      <Caption {...args} />
      Main heading text
    </Heading>
  ),
};

export const ShowingAllStandardCaptionSizesWithHeadings: Story = {
  args: { size: 'xl', children: 'Supporting heading size xl' },
  render: (args) => (
    <>
      <Caption {...args} />
      <Heading size="xl" headingLevel={1}>
        Main heading size xl
      </Heading>
      <Caption size="l">Supporting heading size l</Caption>
      <Heading size="l">Main heading size l</Heading>
      <Caption size="m">Supporting heading size m</Caption>
      <Heading size="m" headingLevel={3}>
        Main heading size m
      </Heading>
    </>
  ),
};
