import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import HintText from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/HintText', module);
stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
  <HintText>Example</HintText>
));
