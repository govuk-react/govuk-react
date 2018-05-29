import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withDocs } from 'storybook-readme';

import BackLink from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Navigation/BackLink', module);

stories.addDecorator(withDocs(ReadMe));

stories.add('Component default', () => (
  <BackLink goBack={action('go-back')}>Back</BackLink>
));
