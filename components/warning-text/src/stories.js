import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import WarningText from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/WarningText', module);
const examples = storiesOf('Typography/WarningText/Examples', module);
stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
  <WarningText>WarningText example</WarningText>
));

examples.add('With a very long warning', () => (
  <WarningText>
    A very long warning message. This includes a lot of text to give a good
    representation of a more average length warning. That way you can see more
    than one line wrapping.
  </WarningText>
));
