import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as CharacterCount from '.';

const meta = {
  title: 'Primitives/Character count',
  id: 'primitives-character-count',
  component: CharacterCount.Root,
} satisfies Meta<typeof CharacterCount.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <CharacterCount.Root maxLength={200}>
      <label htmlFor="more-detail">Can you provide more detail?</label>
      <CharacterCount.Input
        id="more-detail"
        name="more-detail"
        rows={5}
        aria-describedby="more-detail-info"
        maxLength={200}
      />
      <CharacterCount.Description id="more-detail-info">You can enter up to 200 characters</CharacterCount.Description>
      <CharacterCount.Status />
      <CharacterCount.ScreenReaderStatus className="visually-hidden" />
    </CharacterCount.Root>
  ),
};
