import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import TextArea from '.';
import ReadMe from '../README.md';

const meta = {
  touched: true,
  error: 'Example',
};

const stories = storiesOf('Form/Textarea', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Textarea', () => (
  <TextArea name="group1">Description of what you saw</TextArea>
));

stories.add('Textarea with HintText', () => (
  <TextArea name="group1" hint={['Enter as many words as you like']}>
    Description of what you saw
  </TextArea>
));

stories.add('Textarea with HintText & error', () => (
  <TextArea
    name="group1"
    hint={['Enter as many words as you like']}
    meta={meta}
  >
    Description of what you saw
  </TextArea>
));
