import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as FocusLinks from '.';

const meta = {
  title: 'Primitives/Focus links',
  id: 'primitives-focus-links',
  component: FocusLinks.Root,
} satisfies Meta<typeof FocusLinks.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <FocusLinks.Root focusedClass="focused">
        <a href="#full-name">Enter your full name</a>
      </FocusLinks.Root>
      <p>
        <label htmlFor="full-name">Full name</label>
      </p>
      <input id="full-name" name="full-name" autoComplete="name" />
    </>
  ),
};
