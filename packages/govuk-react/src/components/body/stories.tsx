import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Body } from '.';
import { Link } from '../link';

const meta = {
  title: 'Typography/Body',
  id: 'body',
  component: Body,
} satisfies Meta<typeof Body>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Body text, rendered as a paragraph.' },
};

export const Sizes: Story = {
  render: () => (
    <>
      <Body size="l">Lead paragraph (size l)</Body>
      <Body>Body text (size m, the default)</Body>
      <Body size="s">Small body text (size s)</Body>
    </>
  ),
};

export const WithInlineContent: Story = {
  render: () => (
    <Body>
      Body text can contain <strong>bold text</strong> and <Link href="#">links</Link>.
    </Body>
  ),
};
