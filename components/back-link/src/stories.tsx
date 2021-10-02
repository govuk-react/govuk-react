import type { Story } from '@storybook/react';

import * as React from 'react';
import { action } from '@storybook/addon-actions';

import { BackLink } from '.';

export default {
  title: 'Navigation/Back link',
  id: 'back-link',
  component: BackLink,
};

export const Default: Story = (args) => <BackLink onClick={action('go-back')} {...args} />;
Default.args = {
  children: 'Back',
};

export const WithHref: Story = () => <BackLink href="#">Back</BackLink>;
