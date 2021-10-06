import type { Story } from '@storybook/react';

import * as React from 'react';
import { GlobalStyle } from '.';

export default {
  title: 'Page & Layout/GlobalStyle',
  id: 'global-style',
  component: GlobalStyle,
};

const Template: Story<React.ComponentProps<typeof GlobalStyle>> = (args) => <GlobalStyle {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (storyFn) => (
    <div>
      {storyFn()}
      Example of GlobalStyle
    </div>
  ),
];
