import React from 'react';

import ErrorText from '.';

export default {
  title: 'Core/Error message',
  component: ErrorText,
};

export const Default = () => <ErrorText errorText="example">Example</ErrorText>;
