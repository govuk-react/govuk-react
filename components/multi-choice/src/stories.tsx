import type { Story } from '@storybook/react';

import * as React from 'react';
import Radio from '@govuk-react/radio';

import { MultiChoice } from '.';

export default {
  title: 'Form/Multi choice',
  id: 'multi-choice',
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

export const InlineWithAHint: Story = (args: { label: string; hint: string }) => (
  <MultiChoice {...args}>
    <Radio name="group1" inline>
      Yes
    </Radio>
    <Radio name="group1" inline>
      No
    </Radio>
  </MultiChoice>
);
InlineWithAHint.args = {
  label: 'Example label',
  hint: 'Example hint',
};

export const InlineWithAnError: Story = (args: { label: string; meta: { touched: boolean; error: string } }) => (
  <MultiChoice {...args}>
    <Radio name="group1" inline>
      Yes
    </Radio>
    <Radio name="group1" inline>
      No
    </Radio>
  </MultiChoice>
);
InlineWithAnError.args = {
  label: 'Example label',
  meta: { touched: true, error: 'Example error' },
};

export const WithAHintAndError: Story = (args: { label: string; meta: { touched: boolean; error: string } }) => (
  <MultiChoice {...args}>
    <Radio name="group1">Yes</Radio>
    <Radio name="group1">No</Radio>
  </MultiChoice>
);
WithAHintAndError.args = {
  label: 'Example label',
  hint: 'Example hint',
  meta: { touched: true, error: 'Example error' },
};
