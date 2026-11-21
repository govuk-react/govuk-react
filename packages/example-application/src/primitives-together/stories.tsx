import type { Meta, StoryObj } from '@storybook/react';

import { PrimitivesTogether } from '.';

const meta = {
  title: 'Example Application/Primitives together',
  id: 'primitives-together',
  component: PrimitivesTogether,
  parameters: {
    docs: {
      description: {
        component:
          'Tabs, each with a modal holding an accordion of forms with radios, a character count, a file upload and a password input. It checks that the primitives work together.',
      },
    },
  },
} satisfies Meta<typeof PrimitivesTogether>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** The Appeals modal open with Tax decision expanded, for visual regression. Left out of the docs page, where it would cover everything else. */
export const Open: Story = {
  args: { defaultTab: 'appeals', openModal: 'appeals', defaultExpanded: ['tax-decision'] },
  tags: ['!autodocs'],
};
