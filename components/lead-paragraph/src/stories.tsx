import type { Story } from '@storybook/react';

import * as React from 'react';

import { LeadParagraph } from '.';

export default {
  title: 'Typography/Lead paragraph',
  id: 'lead-paragraph',
  component: LeadParagraph,
};

export const Default: Story = (args) => <LeadParagraph {...args}>LeadParagraph example</LeadParagraph>;
