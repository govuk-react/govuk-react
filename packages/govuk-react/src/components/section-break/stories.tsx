import type { StoryFn } from '@storybook/react';

import * as React from 'react';
import { SectionBreak } from '.';

export default {
  title: 'Page & Layout/Section break',
  id: 'section-break',
  component: SectionBreak,
};

export const Default: StoryFn = (args) => <SectionBreak {...args} />;
Default.args = {
  visible: true,
  level: 'LARGE',
};
