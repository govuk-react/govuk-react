import type { StoryFn } from '@storybook/react';

import * as React from 'react';

import { Heading } from '../heading';
import { InputField } from '../input';
import { Button, StartButton } from '../button';
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
    <InputField id="email-address" name="email-address" label="Email address" />,
    <StartButton>Continue</StartButton>,
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
    <InputField id="email-address" name="email-address" label="Email address" />,
    <StartButton>Continue</StartButton>,
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
    <InputField id="first-name" name="first-name" label="First name" />,
    <InputField id="last-name" name="last-name" label="Last name" />,
    <InputField id="email-address" name="email-address" label="Email address" />,
    <Radios.Field idPrefix="contact" legend="Do you want us to contact you?" inline>
      <Radios.ItemComposite id="contact" name="contact" value="yes" label="Yes" />
      <Radios.ItemComposite id="contact-2" name="contact" value="no" label="No" />
    </Radios.Field>,
    <InputField
      id="national-insurance-number"
      name="national-insurance-number"
      label="National Insurance number"
      hint="It’s on your National Insurance card"
    />,
    <StartButton>Continue</StartButton>,
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
      <Button type="button" onClick={() => setLoading((value) => !value)}>
        {loading ? 'Stop loading' : 'Start loading'}
      </Button>
      <LoadingBox {...args} loading={loading}>
        <Heading size="l">Example</Heading>
        <InputField id="toggle-email-address" name="email-address" label="Email address" />
      </LoadingBox>
    </>
  );
};

export const SubmittingAForm: StoryFn<React.ComponentProps<typeof LoadingBox>> = () => {
  const [state, setState] = React.useState<'editing' | 'sending' | 'sent'>('editing');
  const sending = React.useRef(false);
  const confirmation = React.useRef<HTMLHeadingElement>(null);
  React.useEffect(() => {
    if (state === 'sent') confirmation.current?.focus();
  }, [state]);
  if (state === 'sent') {
    return (
      <Heading size="l" ref={confirmation} tabIndex={-1}>
        Details sent
      </Heading>
    );
  }
  return (
    <LoadingBox loading={state === 'sending'} statusText="Sending your details" inertWhileLoading>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // Ignore repeat submissions rather than disabling the button.
          if (sending.current) return;
          sending.current = true;
          setState('sending');
          // Keep the loading state for at least a couple of seconds.
          setTimeout(() => setState('sent'), 2000);
        }}
      >
        <InputField id="form-email-address" name="email-address" label="Email address" />
        <Button type="submit">Continue</Button>
      </form>
    </LoadingBox>
  );
};
SubmittingAForm.parameters = {
  docs: {
    description: {
      story:
        'Announces what’s happening, shows for at least 2 seconds, blocks interaction without disabling the button, ignores repeat submissions and moves focus to the result.',
    },
  },
};
