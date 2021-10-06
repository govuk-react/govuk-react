import type { Story } from '@storybook/react';

import * as React from 'react';

import { H1, H2 } from '@govuk-react/heading';
import InputField from '@govuk-react/input-field';
import Button from '@govuk-react/button';
import Link from '@govuk-react/link';
import Radio from '@govuk-react/radio';
import PhaseBanner from '@govuk-react/phase-banner';
import MultiChoice from '@govuk-react/multi-choice';

import { LoadingBox } from '.';

export default {
  title: 'Utility/Loading box',
  id: 'loading-box',
  component: LoadingBox,
};

const Template: Story<React.ComponentProps<typeof LoadingBox>> = (args) => <LoadingBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  loading: true,
  children: [
    <PhaseBanner level="alpha" mb={6}>
      This part of GOV.UK is being rebuilt &#8211; <Link href="https://example.com">find out what that means</Link>
    </PhaseBanner>,
    <H2 mb={3}>Example</H2>,
    <InputField mb={6}>Email address</InputField>,
    <Button start>Continue</Button>,
  ],
};

export const PartialCover = Template.bind({});
PartialCover.decorators = [
  (storyFn) => (
    <>
      <PhaseBanner level="alpha" mb={6}>
        This part of GOV.UK is being rebuilt &#8211; <Link href="https://example.com">find out what that means</Link>
      </PhaseBanner>
      {storyFn()}
    </>
  ),
];
PartialCover.args = {
  loading: true,
  children: [<H2 mb={3}>Example</H2>, <InputField mb={6}>Email address</InputField>, <Button start>Continue</Button>],
};

export const LoadingBoxLong = Template.bind({});
LoadingBoxLong.args = {
  loading: true,
  children: [
    <PhaseBanner level="alpha" mb={6}>
      This part of GOV.UK is being rebuilt &#8211; <Link href="https://example.com">find out what that means</Link>
    </PhaseBanner>,
    <H2 mb={3}>Example</H2>,
    <InputField mb={3}>First name</InputField>,
    <InputField mb={3}>Last name</InputField>,
    <InputField mb={3}>Email address</InputField>,
    <MultiChoice label="Do you want us to contact you?" mb={3}>
      <Radio name="group1" inline>
        Yes
      </Radio>
      <Radio name="group1" inline>
        No
      </Radio>
    </MultiChoice>,
    <InputField hint="It’s on your National Insurance card" mb={3}>
      National Insurance number
    </InputField>,
    <Button start>Continue</Button>,
  ],
};

export const ShortHeight = Template.bind({});
ShortHeight.args = {
  loading: true,
  children: 'Lorem ipsum dolor sit amet',
};

export const WithBoldText = Template.bind({});
WithBoldText.args = {
  loading: true,
  children: [
    <H1>Lorem ipsum dolor sit amet</H1>,
    <H2>Consectetur adipisicing elit. Quia incidunt, earum molestiae omnis labore adipisci.</H2>,
  ],
};
