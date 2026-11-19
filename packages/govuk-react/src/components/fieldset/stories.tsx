import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as Fieldset from '.';
import { InputField } from '../input';

const meta = {
  title: 'Form/Fieldset',
  id: 'fieldset',
  component: Fieldset.Composite,
  args: {
    legend: 'What is your address?',
    children: (
      <>
        <InputField id="address-line-1" name="address-line-1" label="Address line 1" autoComplete="address-line1" />
        <InputField
          id="address-line-2"
          name="address-line-2"
          label="Address line 2 (optional)"
          autoComplete="address-line2"
        />
        <InputField id="address-town" name="address-town" label="Town or city" width="two-thirds" />
        <InputField id="address-postcode" name="address-postcode" label="Postcode" width={10} />
      </>
    ),
  },
} satisfies Meta<typeof Fieldset.Composite>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LegendAsPageHeading: Story = {
  args: { legendSize: 'l', legendIsPageHeading: true },
};
