import type { Story } from '@storybook/react';

import * as React from 'react';

import Link from '@govuk-react/link';

import { PhaseBanner } from '.';

export default {
  title: 'Typography/Phase banner',
  id: 'phase-banner',
  component: PhaseBanner,
};

const Template: Story<React.ComponentProps<typeof PhaseBanner>> = (args) => <PhaseBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  level: 'alpha',
  children: [
    'This part of GOV.UK is being rebuilt – ',
    <Link href="https://example.com">find out what that means</Link>,
  ],
};

export const BetaPhaseTag = Template.bind({});
BetaPhaseTag.args = {
  level: 'beta',
  children: [
    'This part of GOV.UK is being rebuilt – ',
    <Link href="https://example.com">find out what that means</Link>,
  ],
};
