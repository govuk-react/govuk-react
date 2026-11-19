import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { InputField } from '../input';
import { FormGroup } from '.';

const meta = {
  title: 'Form/Form group',
  id: 'form-group',
  component: FormGroup,
  args: {
    children: (
      <>
        <InputField id="first-name" name="first-name" label="First name" />
        <InputField id="last-name" name="last-name" label="Last name" />
      </>
    ),
  },
} satisfies Meta<typeof FormGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ErrorPropSet: Story = {
  args: { error: true },
};
