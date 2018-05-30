import React from 'react';
import { storiesOf } from '@storybook/react';
import { ORANGE } from 'govuk-colours';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import Input from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Form/Input', module);
const examples = storiesOf('Form/Input/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
  <Input type="text" />
));

examples.add('Custom error colour', () => (
  <Input type="text" errorColor={ORANGE} error="example" />
));
