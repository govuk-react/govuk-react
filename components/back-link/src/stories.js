import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import BackLink from '.';

export const Default = () => <BackLink onClick={action('go-back')}>{text('Children', 'Back')}</BackLink>;

export const WithHref = () => <BackLink href="#">Back</BackLink>;

export default {
  title: 'Navigation/BackLink',
  component: BackLink,
  decorators: [withKnobs],
};
