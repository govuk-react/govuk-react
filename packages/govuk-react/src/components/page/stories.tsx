import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { BackLink } from '../back-link';
import { Heading } from '../heading';
import * as Footer from '../footer';
import { Page } from '.';

const meta = {
  title: 'Page & Layout/Page',
  id: 'page',
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    beforeChildren: <BackLink href="#" />,
    children: <Heading size="xl">Page title</Heading>,
  },
};

export const WithFooter: Story = {
  args: {
    children: <Heading size="xl">Page title</Heading>,
    footer: <Footer.Composite />,
  },
};
