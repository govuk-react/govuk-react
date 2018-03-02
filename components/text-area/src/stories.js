import React from 'react';
import { storiesOf } from '@storybook/react';

import TextArea from '.';

const meta = {
  touched: true,
  error: 'Example',
};

storiesOf('Textarea', module).add('Textarea', () => (
  <TextArea name="group1">Description of what you saw</TextArea>
));

storiesOf('Textarea', module).add('Textarea with HintText', () => (
  <TextArea name="group1" hint={['Enter as many words as you like']}>
    Description of what you saw
  </TextArea>
));

storiesOf('Textarea', module).add('Textarea with HintText & error', () => (
  <TextArea
    name="group1"
    hint={['Enter as many words as you like']}
    meta={meta}
  >
    Description of what you saw
  </TextArea>
));
