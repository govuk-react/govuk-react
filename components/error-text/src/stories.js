import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import ErrorText from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/Error text', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
  <ErrorText errorText="example">Example</ErrorText>
));
