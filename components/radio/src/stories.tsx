import type { Story } from '@storybook/react';

import type { FieldInputProps } from 'react-final-form';

import * as React from 'react';
import { Form, Field } from 'react-final-form';

import { action } from '@storybook/addon-actions';

import Button from '@govuk-react/button';

import MultiChoice from '@govuk-react/multi-choice';
import { Radio } from '.';

export default {
  title: 'Form/Radio',
  id: 'radio',
  component: Radio,
};

const Template: Story<React.ComponentProps<typeof Radio>> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'group1',
  children: 'Radio button text example',
};

export const RadioStacked = Template.bind({});
RadioStacked.args = {
  name: 'group1',
  children: 'Waste from animal carcasses',
};
RadioStacked.decorators = [
  (storyFn) => (
    <>
      {storyFn()}
      <Radio name="group1">Waste from mines or quarries</Radio>
      <Radio name="group1">Farm or agricultural waste</Radio>
    </>
  ),
];

export const RadioInline = Template.bind({});
RadioInline.args = {
  name: 'group1',
  inline: true,
  children: 'Yes',
};
RadioInline.decorators = [
  (storyFn) => (
    <>
      {storyFn()}
      <Radio name="group1" inline>
        No
      </Radio>
    </>
  ),
];

export const RadioDisabled = Template.bind({});
RadioDisabled.args = {
  name: 'group1',
  disabled: true,
  children: 'Disabled checkbox option',
};

export const RadioPreselected = Template.bind({});
RadioPreselected.args = {
  name: 'group1',
  defaultChecked: true,
  children: 'Farm or agricultural waste',
};

export const RadioPreselectedDisabled = Template.bind({});
RadioPreselectedDisabled.args = {
  name: 'group1',
  defaultChecked: true,
  disabled: true,
  children: 'Farm or agricultural waste',
};

export const RadioWithHintText = Template.bind({});
RadioWithHintText.args = {
  name: 'group1',
  hint: "You'll have a user ID if you've registered for Self Assessment or filed a tax return online before.",
  children: 'Sign in with Government Gateway',
};
RadioWithHintText.decorators = [
  (storyFn) => (
    <>
      {storyFn()}
      <Radio
        name="group1"
        hint="You'll have an account if you've already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
      >
        Sign in with GOV.UK Verify
      </Radio>
    </>
  ),
];

const FinalFormWrapper: React.FC = ({ children }: { children: React.ReactNode }) => (
  <Form
    onSubmit={action('submit')}
    render={({ handleSubmit, form: { reset }, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <div>{children}</div>
        <div>
          <Button type="submit" disabled={submitting}>
            Submit
          </Button>
        </div>
        <div>
          <Button onClick={reset} disabled={submitting || pristine}>
            Reset
          </Button>
        </div>
        <div>
          <hr />
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </div>
      </form>
    )}
  />
);
FinalFormWrapper.displayName = 'Form';

interface RadioGroupProps {
  input?: FieldInputProps<string, HTMLElement>;
  meta?: {
    active?: boolean;
    dirty?: boolean;
    dirtySinceLastSubmit?: boolean;
    error?: string | string[];
    invalid?: boolean;
    pristine?: boolean;
    submitFailed?: boolean;
    submitSucceeded?: boolean;
    touched?: boolean;
    valid?: boolean;
    visited?: boolean;
  };
  label?: string;
  hint?: string;
  inline?: boolean;
  options?: {
    title?: string;
    value?: string;
  }[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({ label, hint, options, inline, input, meta }: RadioGroupProps) => (
  <MultiChoice label={label} hint={hint} meta={meta}>
    {options.map((o) => (
      <div key={o.value}>
        <Radio {...input} value={o.value} inline={inline} checked={o.value === input.value}>
          {o.title}
        </Radio>
      </div>
    ))}
  </MultiChoice>
);

RadioGroup.defaultProps = {
  input: undefined,
  meta: {},
  hint: undefined,
  inline: false,
  options: [],
  label: undefined,
};

export const UsageWithFinalReduxFormMultiCheckboxValidation: Story = (args) => (
  <FinalFormWrapper>
    <Field
      name="likesAnimals"
      label="Do you like animals?"
      hint="You must tell us"
      component={RadioGroup}
      options={[
        { title: 'Yep', value: 'yes' },
        { title: 'Nope', value: 'no' },
      ]}
      validate={(value) => (value ? undefined : 'Required')}
      inline
      {...args}
    />
  </FinalFormWrapper>
);

UsageWithFinalReduxFormMultiCheckboxValidation.parameters = {
  docs: {
    storyDescription: 'See the Example Application source code for example implementation with Final Form.',
  },
};
