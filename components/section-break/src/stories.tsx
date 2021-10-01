import type { Story } from '@storybook/react';

import * as React from 'react';
import { SectionBreak } from '.';

export default {
  title: 'Page & Layout/Section break',
  component: SectionBreak,
};

export const Default: Story = (args) => <SectionBreak {...args} />;
Default.args = {
  visible: true,
  level: 'LARGE',
};
