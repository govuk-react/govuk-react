import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as Radios from '.';
import * as Input from '../input';

const meta = {
  title: 'Form/Radios',
  id: 'radios',
  component: Radios.Field,
  args: {
    idPrefix: 'where-do-you-live',
    legend: 'Where do you live?',
  },
} satisfies Meta<typeof Radios.Field>;

export default meta;

type Story = StoryObj<typeof meta>;

const items = (
  <>
    <Radios.ItemComposite id="where-do-you-live" name="where-do-you-live" value="england" label="England" />
    <Radios.ItemComposite id="where-do-you-live-2" name="where-do-you-live" value="scotland" label="Scotland" />
    <Radios.ItemComposite id="where-do-you-live-3" name="where-do-you-live" value="wales" label="Wales" />
    <Radios.ItemComposite
      id="where-do-you-live-4"
      name="where-do-you-live"
      value="northern-ireland"
      label="Northern Ireland"
    />
  </>
);

export const Default: Story = {
  args: { children: items },
};

export const RadioSmall: Story = {
  args: { small: true, children: items },
};

export const RadioInline: Story = {
  args: {
    legend: 'Have you changed your name?',
    hint: 'This includes changing your last name or spelling your name differently.',
    inline: true,
    children: (
      <>
        <Radios.ItemComposite id="changed-name" name="changed-name" value="yes" label="Yes" />
        <Radios.ItemComposite id="changed-name-2" name="changed-name" value="no" label="No" />
      </>
    ),
  },
};

export const RadioPreselected: Story = {
  args: {
    children: (
      <>
        <Radios.ItemComposite id="pre" name="pre" value="yes" label="Yes" defaultChecked />
        <Radios.ItemComposite id="pre-2" name="pre" value="no" label="No" disabled />
      </>
    ),
  },
};

export const RadioWithHintText: Story = {
  args: {
    legend: 'How do you want to sign in?',
    children: (
      <>
        <Radios.ItemComposite
          id="sign-in"
          name="sign-in"
          value="gateway"
          label="Sign in with Government Gateway"
          hint="You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before."
        />
        <Radios.ItemComposite
          id="sign-in-2"
          name="sign-in"
          value="verify"
          label="Sign in with GOV.UK Verify"
          hint="You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
        />
      </>
    ),
  },
};

export const WithError: Story = {
  args: { errorMessage: 'Select the country where you live', children: items },
};

export const WithConditional: Story = {
  args: {
    legend: 'How would you prefer to be contacted?',
    children: (
      <>
        <Radios.ItemComposite
          id="contact"
          name="contact"
          value="email"
          label="Email"
          defaultChecked
          conditional={<Input.Field id="contact-by-email" name="contact-by-email" type="email" label="Email address" />}
        />
        <Radios.ItemComposite
          id="contact-2"
          name="contact"
          value="phone"
          label="Phone"
          conditional={<Input.Field id="contact-by-phone" name="contact-by-phone" type="tel" label="Phone number" />}
        />
        <Radios.ItemComposite id="contact-3" name="contact" value="text" label="Text message" />
      </>
    ),
  },
};
