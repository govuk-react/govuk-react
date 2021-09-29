import type { Story } from '@storybook/react';

import React from 'react';
import { action } from '@storybook/addon-actions';

import { BackLink } from '.';

export default {
  title: 'Navigation/Back link',
  component: BackLink,
};

export const Default: Story = (args) => <BackLink onClick={action('go-back')} {...args} />;
Default.args = {
  children: 'Back',
};

export const WithHref: Story = () => <BackLink href="#">Back</BackLink>;
