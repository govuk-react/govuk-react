import type { Story } from '@storybook/react';

import * as React from 'react';
import { action } from '@storybook/addon-actions';

import { BackLink } from '.';

export default {
  title: 'Navigation/Back link',
  id: 'back-link',
  component: BackLink,
};

const Template: Story = (args) => <BackLink onClick={action('go-back')} {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Back',
};

export const WithHref = Template.bind({});
WithHref.args = {
  children: 'Back',
  href: '#',
};
