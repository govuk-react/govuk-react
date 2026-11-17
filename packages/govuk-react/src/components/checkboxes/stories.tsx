import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as Checkboxes from '.';

const meta = {
  title: 'Form/Checkboxes',
  id: 'checkboxes',
  component: Checkboxes.Field,
  args: {
    idPrefix: 'nationality',
    legend: 'What is your nationality?',
    hint: 'Select all that apply.',
  },
} satisfies Meta<typeof Checkboxes.Field>;

export default meta;

type Story = StoryObj<typeof meta>;

const items = (
  <>
    <Checkboxes.ItemComposite
      id="nationality"
      name="nationality"
      value="british"
      label="British"
      hint="including English, Scottish, Welsh and Northern Irish"
    />
    <Checkboxes.ItemComposite id="nationality-2" name="nationality" value="irish" label="Irish" />
    <Checkboxes.ItemComposite id="nationality-3" name="nationality" value="other" label="Citizen of another country" />
  </>
);

export const Default: Story = {
  args: { children: items },
};

export const CheckboxSmall: Story = {
  args: { small: true, children: items },
};

export const CheckboxPreselected: Story = {
  args: {
    children: (
      <>
        <Checkboxes.ItemComposite
          id="waste"
          name="waste"
          value="carcasses"
          label="Waste from animal carcasses"
          defaultChecked
        />
        <Checkboxes.ItemComposite id="waste-2" name="waste" value="mines" label="Waste from mines or quarries" />
        <Checkboxes.ItemComposite id="waste-3" name="waste" value="farm" label="Farm or agricultural waste" disabled />
      </>
    ),
  },
};

export const WithError: Story = {
  args: { errorMessage: 'Select if you are British, Irish or a citizen of a different country', children: items },
};

export const WithItemsArray: Story = {
  args: {
    items: [
      { id: 'contact', name: 'contact', value: 'email', label: 'Email' },
      { id: 'contact-2', name: 'contact', value: 'phone', label: 'Phone' },
      { divider: 'or' },
      { id: 'contact-3', name: 'contact', value: 'none', label: 'Do not contact me' },
    ],
  },
};
