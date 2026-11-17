import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { InsetText } from '.';
import { Body } from '../body';

const meta = {
  title: 'Typography/Inset text',
  id: 'inset-text',
  component: InsetText,
} satisfies Meta<typeof InsetText>;

export default meta;

type Story = StoryObj<typeof meta>;

const testText =
  'It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.';

export const Default: Story = {
  args: { children: testText },
};

export const UsingAParagraphForContents: Story = {
  args: { children: <Body marginBottom={0}>{testText}</Body> },
};
