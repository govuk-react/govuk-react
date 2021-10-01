import type { Story } from '@storybook/react';

import * as React from 'react';
import Paragraph from '@govuk-react/paragraph';
import { Details } from '.';

export default {
  title: 'Typography/Details',
  component: Details,
};

const summaryText = 'Help with nationality';

const paragraphs = [
  'If you’re not sure about your nationality, try to find out from an official document like a passport or national ID card.',
  'We need to know your nationality so we can work out which elections you’re entitled to vote in. If you can’t provide your nationality, you’ll have to send copies of identity documents through the post.',
];

export const Default: Story<{ summary: string; children: string }> = (args) => <Details {...args} />;
Default.args = {
  summary: summaryText,
  children: paragraphs[0],
};

export const SetAsOpen: Story = (args) => <Details summary={summaryText} open {...args} />;
SetAsOpen.args = {
  children: paragraphs[0],
};

export const WithParagraphContents: Story = ({ open, children }: { open: boolean; children: string }) => (
  <Details summary={summaryText} open={open}>
    <Paragraph>{children}</Paragraph>
  </Details>
);
WithParagraphContents.args = {
  open: false,
  children: `${paragraphs[0]}\n\n${paragraphs[1]}`,
};
