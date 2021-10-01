import * as React from 'react';

import { TextArea } from '.';

const meta = {
  touched: true,
  error: 'Example',
};

export default {
  title: 'Form/Textarea',
  component: TextArea,
};

export const Default: React.FC = () => <TextArea input={{ name: 'group1' }}>Description of what you saw</TextArea>;

export const TextareaWithHintText: React.FC = () => (
  <TextArea input={{ name: 'group1' }} hint={['Enter as many words as you like']}>
    Description of what you saw
  </TextArea>
);

export const TextareaWithHintTextError: React.FC = () => (
  <TextArea input={{ name: 'group1' }} hint={['Enter as many words as you like']} meta={meta}>
    Description of what you saw
  </TextArea>
);
