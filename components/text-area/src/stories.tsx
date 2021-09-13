import React from 'react';

import TextArea from '.';

const meta = {
  touched: true,
  error: 'Example',
};

export default {
  title: 'Form/Textarea',
  component: TextArea,
};

export const Default = () => <TextArea input={{ name: 'group1' }}>Description of what you saw</TextArea>;

export const TextareaWithHintText = () => (
  <TextArea input={{ name: 'group1' }} hint={['Enter as many words as you like']}>
    Description of what you saw
  </TextArea>
);

export const TextareaWithHintTextError = () => (
  <TextArea input={{ name: 'group1' }} hint={['Enter as many words as you like']} meta={meta}>
    Description of what you saw
  </TextArea>
);
