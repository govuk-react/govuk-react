import type { Story } from '@storybook/react';

import * as React from 'react';

import { ErrorText } from '.';

export default {
  title: 'Form/Error text',
  id: 'error-text',
  component: ErrorText,
};

export const Default: Story = (args) => <ErrorText {...args} />;

Default.args = {
  children: 'Example',
};
