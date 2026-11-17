import type { StoryFn } from '@storybook/react';

import * as React from 'react';

import { Heading } from '../heading';
import * as Input from '../input';
import * as Button from '../button';
import { Link } from '../link';
import * as Radios from '../radios';
import * as PhaseBanner from '../phase-banner';

import { LoadingBox } from '.';

export default {
  title: 'Utility/Loading box',
  id: 'loading-box',
  component: LoadingBox,
};

const Template: StoryFn<React.ComponentProps<typeof LoadingBox>> = (args) => <LoadingBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  loading: true,
  children: [
    <PhaseBanner.Composite tag="Alpha">
      This part of GOV.UK is being rebuilt &#8211; <Link href="https://example.com">find out what that means</Link>
    </PhaseBanner.Composite>,
    <Heading size="l">Example</Heading>,
    <Input.Field id="email-address" name="email-address" label="Email address" />,
    <Button.Composite start>Continue</Button.Composite>,
  ],
};

export const PartialCover = Template.bind({});
PartialCover.decorators = [
  (storyFn) => (
    <>
      <PhaseBanner.Composite tag="Alpha">
        This part of GOV.UK is being rebuilt &#8211; <Link href="https://example.com">find out what that means</Link>
      </PhaseBanner.Composite>
      {storyFn()}
    </>
  ),
];
PartialCover.args = {
  loading: true,
  children: [
    <Heading size="l">Example</Heading>,
    <Input.Field id="email-address" name="email-address" label="Email address" />,
    <Button.Composite start>Continue</Button.Composite>,
  ],
};

export const LoadingBoxLong = Template.bind({});
LoadingBoxLong.args = {
  loading: true,
  children: [
    <PhaseBanner.Composite tag="Alpha">
      This part of GOV.UK is being rebuilt &#8211; <Link href="https://example.com">find out what that means</Link>
    </PhaseBanner.Composite>,
    <Heading size="l">Example</Heading>,
    <Input.Field id="first-name" name="first-name" label="First name" />,
    <Input.Field id="last-name" name="last-name" label="Last name" />,
    <Input.Field id="email-address" name="email-address" label="Email address" />,
    <Radios.Field idPrefix="contact" legend="Do you want us to contact you?" inline>
      <Radios.ItemComposite id="contact" name="contact" value="yes" label="Yes" />
      <Radios.ItemComposite id="contact-2" name="contact" value="no" label="No" />
    </Radios.Field>,
    <Input.Field
      id="national-insurance-number"
      name="national-insurance-number"
      label="National Insurance number"
      hint="It’s on your National Insurance card"
    />,
    <Button.Composite start>Continue</Button.Composite>,
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
    <Heading size="xl" headingLevel={1}>
      Lorem ipsum dolor sit amet
    </Heading>,
    <Heading size="l">Consectetur adipisicing elit. Quia incidunt, earum molestiae omnis labore adipisci.</Heading>,
  ],
};

export const Toggle: StoryFn<React.ComponentProps<typeof LoadingBox>> = (args) => {
  const [loading, setLoading] = React.useState(false);
  return (
    <>
      <Button.Root type="button" onClick={() => setLoading((value) => !value)}>
        {loading ? 'Stop loading' : 'Start loading'}
      </Button.Root>
      <LoadingBox {...args} loading={loading}>
        <Heading size="l">Example</Heading>
        <Input.Field id="toggle-email-address" name="email-address" label="Email address" />
      </LoadingBox>
    </>
  );
};
