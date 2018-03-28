import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs/react';
import Header from '@govuk-react/header';
import InputField from '@govuk-react/input-field';
import Button from '@govuk-react/button';
import LabelText from '@govuk-react/label-text';
import Radio from '@govuk-react/radio';
import PhaseBanner from '@govuk-react/phase-banner';
import { asAnchor } from '@govuk-react/hoc';

import LoadingBox from '.';

const stories = storiesOf('LoadingBox', module);
const AnchorLink = asAnchor('a');
const spacer = <p style={{ marginTop: 0 }}>&nbsp;</p>;
stories.addDecorator(withKnobs);

stories.add('LoadingBox default', () => (
  <LoadingBox
    loading={boolean('loading', false)}
    backgroundColor={text('backgroundColor', '#fff')}
    timeIn={number('timeIn', 300)}
    timeOut={number('timeOut', 800)}
    backgroundColorOpacity={number('backgroundColorOpacity', 0.5)}
    spinnerColor={text('spinnerColor', '#000')}
  >
    <div style={{ padding: '0 12px' }}>
      <PhaseBanner level="alpha">
      This part of GOV.UK is being rebuilt &#8211;{' '}
        <AnchorLink href="https://example.com">find out what that means</AnchorLink>
      </PhaseBanner>
      {spacer}
      <Header level={2}>Toggle loading settings under `knobs`</Header>
      <InputField
        name="group1"
      >
      Email address
      </InputField>
      {spacer}
      <Button start>Continue</Button>
    </div>
  </LoadingBox>
));

stories.add('LoadingBox (long)', () => (
  <LoadingBox
    loading={boolean('loading', false)}
    backgroundColor={text('backgroundColor', '#fff')}
    timeIn={number('timeIn', 300)}
    timeOut={number('timeOut', 800)}
    backgroundColorOpacity={number('backgroundColorOpacity', 0.5)}
    spinnerColor={text('spinnerColor', '#000')}
  >
    <div style={{ padding: '0 12px' }}>
      <PhaseBanner level="alpha">
      This part of GOV.UK is being rebuilt &#8211;{' '}
        <AnchorLink href="https://example.com">find out what that means</AnchorLink>
      </PhaseBanner>
      {spacer}
      <Header level={2}>Toggle loading settings under `knobs`</Header>
      <InputField name="group1">
        First name
      </InputField>
      {spacer}
      <InputField name="group1">
        Last name
      </InputField>
      {spacer}
      <InputField name="group1">
        Email address
      </InputField>
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
      <InputField
        name="group1"
        hint="It’s on your National Insurance card"
      >
      National Insurance number
      </InputField>
      {spacer}
      <Button start>Continue</Button>
    </div>
  </LoadingBox>
));
