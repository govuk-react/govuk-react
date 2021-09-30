import type { Story } from '@storybook/react';

import React from 'react';
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

const DetailsSimple: Story<{ summary: string; children: string }> = (args) => <Details {...args} />;
DetailsSimple.args = {
  summary: summaryText,
  children: paragraphs[0],
};

const DetailsOpen: Story = (args) => <Details summary={summaryText} open {...args} />;

DetailsOpen.args = {
  children: paragraphs[0],
};

const DetailsParagraph: Story = ({ open, children }: { open: boolean; children: string }) => (
  <Details summary={summaryText} open={open}>
    <Paragraph>{children}</Paragraph>
  </Details>
);

DetailsParagraph.args = {
  open: false,
  children: `${paragraphs[0]}\n\n${paragraphs[1]}`,
};

export { DetailsSimple, DetailsOpen, DetailsParagraph };

export const Default = DetailsSimple;
export const SetAsOpen = DetailsOpen;
export const WithParagraphContents = DetailsParagraph;
