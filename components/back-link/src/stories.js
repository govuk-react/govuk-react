import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BackLink from '.';

const stories = storiesOf('Navigation/BackLink', module);

stories.add('Component default', () => (
  <BackLink goBack={action('go-back')}>Back</BackLink>
));
