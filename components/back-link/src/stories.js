import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import BackLink from '.';

export default {
  title: 'Navigation/Back link',
  component: BackLink,
  decorators: [withKnobs],
};

export const Default = () => <BackLink onClick={action('go-back')}>{text('Children', 'Back')}</BackLink>;
export const WithHref = () => <BackLink href="#">Back</BackLink>;
