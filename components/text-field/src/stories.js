import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import { TextFieldFinalForm, TextFieldWithHint, TextFieldWithError, TextFieldWithKnobs } from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Form/Fields/TextField', module);
const examples = storiesOf('Form/Fields/TextField/Examples', module);

stories.addDecorator(withKnobs);
stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
  <TextFieldWithKnobs />
));

examples.add('With hint text', () => (
  <TextFieldWithHint />
));

examples.add('With error', () => (
  <TextFieldWithError />
));

examples.add('With final form', () => (
  <TextFieldFinalForm />
));
