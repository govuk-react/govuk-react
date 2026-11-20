import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as Checkboxes from '.';
import { InputField } from '../input';
import { TextareaField } from '../textarea';

const meta = {
  title: 'Form/Checkboxes',
  id: 'checkboxes',
  component: Checkboxes.Field,
  args: {
    idPrefix: 'nationality',
    legend: 'What is your nationality?',
    hint: 'Select all that apply',
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

/** As in the Design System's example, checking "No" unchecks the countries, and checking a country unchecks "No". */
export const WithNoneOption: Story = {
  args: {
    idPrefix: 'countries',
    legend: 'Will you be travelling to any of these countries?',
    hint: 'Select all countries that apply',
    items: [
      { id: 'countries', name: 'countries', value: 'france', label: 'France' },
      { id: 'countries-2', name: 'countries', value: 'portugal', label: 'Portugal' },
      { id: 'countries-3', name: 'countries', value: 'spain', label: 'Spain' },
      { divider: 'or' },
      {
        id: 'countries-4',
        name: 'countries',
        value: 'none',
        label: 'No, I will not be travelling to any of these countries',
        exclusive: true,
      },
    ],
  },
};

export const WithConditional: Story = {
  args: {
    idPrefix: 'contact',
    legend: 'How would you like to be contacted?',
    hint: 'Select all options that are relevant to you',
    children: (
      <>
        <Checkboxes.ItemComposite
          id="contact"
          name="contact"
          value="email"
          label="Email"
          defaultChecked
          conditional={<InputField id="contact-by-email" name="contactByEmail" type="email" label="Email address" />}
        />
        <Checkboxes.ItemComposite
          id="contact-2"
          name="contact"
          value="phone"
          label="Phone"
          conditional={<InputField id="contact-by-phone" name="contactByPhone" type="tel" label="Phone number" />}
        />
        <Checkboxes.ItemComposite id="contact-3" name="contact" value="text" label="Text message" />
      </>
    ),
  },
};

/** Checking "Another access need" reveals a question. Checking "None of these" unchecks the others, and checking another option unchecks "None of these". */
export const WithNoneOptionAndConditional: Story = {
  args: {
    idPrefix: 'access-needs',
    legend: 'Do you have any access needs?',
    hint: undefined,
    items: [
      { id: 'access-needs', name: 'accessNeeds', value: 'accessible-toilets', label: 'Accessible toilets available' },
      { id: 'access-needs-2', name: 'accessNeeds', value: 'braille', label: 'Braille translation service available' },
      {
        id: 'access-needs-3',
        name: 'accessNeeds',
        value: 'disabled-car-parking',
        label: 'Disabled car parking available',
      },
      {
        id: 'access-needs-4',
        name: 'accessNeeds',
        value: 'another-access-need',
        label: 'Another access need',
        conditional: (
          <TextareaField id="other-access-needs" name="otherAccessNeeds" label="Other access needs" width="one-third" />
        ),
      },
      { divider: 'or' },
      { id: 'access-needs-5', name: 'accessNeeds', value: 'none', label: 'None of these', exclusive: true },
    ],
  },
};
