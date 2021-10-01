import type { Story } from '@storybook/react';

import * as React from 'react';
import Radio from '@govuk-react/radio';

import { MultiChoice } from '.';

export default {
  title: 'Form/Multi choice',
  component: MultiChoice,
};

export const Default: Story = ({ label }: { label: string }) => (
  <MultiChoice label={label}>
    <Radio name="group1" inline>
      Yes
    </Radio>
    <Radio name="group1" inline>
      No
    </Radio>
  </MultiChoice>
);
Default.args = {
  label: 'Example label',
};

export const WithAHint: Story = (args: { label: string; hint: string }) => (
  <MultiChoice {...args}>
    <Radio name="group1" inline>
      Yes
    </Radio>
    <Radio name="group1" inline>
      No
    </Radio>
  </MultiChoice>
);
WithAHint.args = {
  label: 'Example label',
  hint: 'Example hint',
};

export const WithAnError: Story = (args: { label: string; meta: { touched: boolean; error: string } }) => (
  <MultiChoice {...args}>
    <Radio name="group1" inline>
      Yes
    </Radio>
    <Radio name="group1" inline>
      No
    </Radio>
  </MultiChoice>
);
WithAnError.args = {
  label: 'Example label',
  meta: { touched: true, error: 'Example error' },
};
