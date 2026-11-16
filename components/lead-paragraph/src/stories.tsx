import type { StoryFn } from '@storybook/react';

import * as React from 'react';

import { LeadParagraph } from '.';

export default {
  title: 'Typography/Lead paragraph',
  id: 'lead-paragraph',
  component: LeadParagraph,
};

export const Default: StoryFn = (args) => <LeadParagraph {...args}>LeadParagraph example</LeadParagraph>;
