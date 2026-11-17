import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as DateInput from '.';

const meta = {
  title: 'Form/Date input',
  id: 'date-input',
  component: DateInput.Field,
  args: {
    id: 'passport-issued',
    namePrefix: 'passport-issued',
    legend: 'When was your passport issued?',
    hint: 'For example, 27 3 2007',
  },
} satisfies Meta<typeof DateInput.Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DateWithDefaultValues: Story = {
  args: { values: { day: '27', month: '3', year: '2007' } },
};

export const DateWithHintTextError: Story = {
  args: { errorMessage: 'The date your passport was issued must be in the past' },
};

export const DateWithCustomItems: Story = {
  args: {
    legend: 'When does your passport expire?',
    hint: 'For example, 3 2027',
    children: (
      <>
        <DateInput.Item>
          <DateInput.Label htmlFor="expiry-month">Month</DateInput.Label>
          <DateInput.Input id="expiry-month" name="expiry-month" width={2} />
        </DateInput.Item>
        <DateInput.Item>
          <DateInput.Label htmlFor="expiry-year">Year</DateInput.Label>
          <DateInput.Input id="expiry-year" name="expiry-year" width={4} />
        </DateInput.Item>
      </>
    ),
  },
};
