import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs/react';
import { H1, H2 } from '@govuk-react/heading';
import InputField from '@govuk-react/input-field';
import Button from '@govuk-react/button';
import LabelText from '@govuk-react/label-text';
import Link from '@govuk-react/link';
import Radio from '@govuk-react/radio';
import PhaseBanner from '@govuk-react/phase-banner';
import { withDocsCustom } from '@govuk-react/storybook-components';

import LoadingBox from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Misc/LoadingBox', module);
const examples = storiesOf('Misc/LoadingBox/Examples', module);

stories.addDecorator(withDocsCustom(ReadMe));

const spacer = <p style={{ marginTop: 0 }}>&nbsp;</p>;
stories.addDecorator(withKnobs);

stories.add('Component default', () => (
  <LoadingBox
    loading={boolean('loading', false)}
    backgroundColor={text('backgroundColor', '#fff')}
    timeIn={number('timeIn', 800)}
    timeOut={number('timeOut', 200)}
    backgroundColorOpacity={number('backgroundColorOpacity', 0.85)}
    spinnerColor={text('spinnerColor', '#000')}
    title="Hey now!"
  >
    <div style={{ padding: '0 12px' }}>
      <PhaseBanner level="alpha">
        This part of GOV.UK is being rebuilt &#8211; <Link href="https://example.com">find out what that means</Link>
      </PhaseBanner>
      {spacer}
      <H2>Toggle loading settings under `knobs`</H2>
      <InputField>Email address</InputField>
      {spacer}
      <Button start>Continue</Button>
    </div>
  </LoadingBox>
));

examples.add('preset to loading', () => (
  <LoadingBox
    loading={boolean('loading', true)}
    backgroundColor={text('backgroundColor', '#fff')}
    timeIn={number('timeIn', 800)}
    timeOut={number('timeOut', 200)}
    backgroundColorOpacity={number('backgroundColorOpacity', 0.85)}
    spinnerColor={text('spinnerColor', '#000')}
  >
    <div style={{ padding: '0 12px' }}>
      <PhaseBanner level="alpha">
        This part of GOV.UK is being rebuilt &#8211; <Link href="https://example.com">find out what that means</Link>
      </PhaseBanner>
      {spacer}
      <H2>Toggle loading settings under `knobs`</H2>
      <InputField>Email address</InputField>
      {spacer}
      <Button start>Continue</Button>
    </div>
  </LoadingBox>
));

examples.add('LoadingBox (long)', () => (
  <LoadingBox
    loading={boolean('loading', false)}
    backgroundColor={text('backgroundColor', '#fff')}
    timeIn={number('timeIn', 800)}
    timeOut={number('timeOut', 200)}
    backgroundColorOpacity={number('backgroundColorOpacity', 0.85)}
    spinnerColor={text('spinnerColor', '#000')}
  >
    <div style={{ padding: '0 12px' }}>
      <PhaseBanner level="alpha">
        This part of GOV.UK is being rebuilt &#8211; <Link href="https://example.com">find out what that means</Link>
      </PhaseBanner>
      {spacer}
      <H2>Toggle loading settings under `knobs`</H2>
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
));

examples.add('with children that have short height (minHeight 10px)', () => (
  <LoadingBox loading>Lorem ipsum dolor sit amet</LoadingBox>
));

examples.add('with bolded texts', () => (
  <LoadingBox loading>
    <H1>Lorem ipsum dolor sit amet</H1>
    <H2>Consectetur adipisicing elit. Quia incidunt, earum molestiae omnis labore adipisci.</H2>
  </LoadingBox>
));
