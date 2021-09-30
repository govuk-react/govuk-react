import type { Story } from '@storybook/react';

import React from 'react';

import { H1, H2 } from '@govuk-react/heading';
import InputField from '@govuk-react/input-field';
import Button from '@govuk-react/button';
import LabelText from '@govuk-react/label-text';
import Link from '@govuk-react/link';
import Radio from '@govuk-react/radio';
import PhaseBanner from '@govuk-react/phase-banner';

import { LoadingBox } from '.';

export default {
  title: 'Utility/Loading box',
};

const spacer = <p style={{ marginTop: 0 }}>&nbsp;</p>;

export const Default: Story = (args) => (
  <LoadingBox {...args}>
    <div style={{ padding: '0 12px' }}>
      <PhaseBanner level="alpha">
        This part of GOV.UK is being rebuilt &#8211; <Link href="https://example.com">find out what that means</Link>
      </PhaseBanner>
      {spacer}
      <H2>Toggle loading settings under `Controls`</H2>
      <InputField>Email address</InputField>
      {spacer}
      <Button start>Continue</Button>
    </div>
  </LoadingBox>
);
Default.args = {
  loading: false,
  backgroundColor: '#fff',
  timeIn: 800,
  timeOut: 200,
  backgroundColorOpacity: 0.85,
  spinnerColor: '#000',
  title: 'Hey now!',
};

export const PresetToLoading: Story = (args) => (
  <LoadingBox {...args}>
    <div style={{ padding: '0 12px' }}>
      <PhaseBanner level="alpha">
        This part of GOV.UK is being rebuilt &#8211; <Link href="https://example.com">find out what that means</Link>
      </PhaseBanner>
      {spacer}
      <H2>Toggle loading settings under `Controls`</H2>
      <InputField>Email address</InputField>
      {spacer}
      <Button start>Continue</Button>
    </div>
  </LoadingBox>
);
PresetToLoading.args = {
  loading: true,
  backgroundColor: '#fff',
  timeIn: 800,
  timeOut: 200,
  backgroundColorOpacity: 0.85,
  spinnerColor: '#000',
};

export const LoadingBoxLong: Story = (args) => (
  <LoadingBox {...args}>
    <div style={{ padding: '0 12px' }}>
      <PhaseBanner level="alpha">
        This part of GOV.UK is being rebuilt &#8211; <Link href="https://example.com">find out what that means</Link>
      </PhaseBanner>
      {spacer}
      <H2>Toggle loading settings under `Controls`</H2>
      <InputField>First name</InputField>
      {spacer}
      <InputField>Last name</InputField>
      {spacer}
      <InputField>Email address</InputField>
      {spacer}
      <div style={{ overflow: 'hidden' }}>
        <LabelText>Do you want us to contact you?</LabelText>
        <Radio name="group1" inline>
          Yes
        </Radio>
        <Radio name="group1" inline>
          No
        </Radio>
      </div>
      {spacer}
      <InputField hint="It’s on your National Insurance card">National Insurance number</InputField>
      {spacer}
      <Button start>Continue</Button>
    </div>
  </LoadingBox>
);
LoadingBoxLong.args = {
  loading: false,
  backgroundColor: '#fff',
  timeIn: 800,
  timeOut: 200,
  backgroundColorOpacity: 0.85,
  spinnerColor: '#000',
};

export const ShortHeight: Story = () => <LoadingBox loading>Lorem ipsum dolor sit amet</LoadingBox>;

export const WithBoldedTexts: Story = () => (
  <LoadingBox loading>
    <H1>Lorem ipsum dolor sit amet</H1>
    <H2>Consectetur adipisicing elit. Quia incidunt, earum molestiae omnis labore adipisci.</H2>
  </LoadingBox>
);
