import type { Story } from '@storybook/react';

import * as React from 'react';
import Paragraph from '@govuk-react/paragraph';
import { Details } from '.';

export default {
  title: 'Typography/Details',
  id: 'details',
  component: Details,
};

const summaryText = 'Help with nationality';

const paragraphs = [
  'If you’re not sure about your nationality, try to find out from an official document like a passport or national ID card.',
  'We need to know your nationality so we can work out which elections you’re entitled to vote in. If you can’t provide your nationality, you’ll have to send copies of identity documents through the post.',
];

const Template: Story<React.ComponentProps<typeof Details>> = (args) => <Details {...args} />;

export const Default = Template.bind({});
Default.args = {
  summary: summaryText,
  children: paragraphs[0],
};

export const SetAsOpen = Template.bind({});
SetAsOpen.args = {
  open: true,
  summary: summaryText,
  children: paragraphs[0],
};

export const WithParagraphContents = Template.bind({});
WithParagraphContents.args = {
  summary: summaryText,
  open: true,
  children: <Paragraph>{`${paragraphs[0]}\n\n${paragraphs[1]}`}</Paragraph>,
};
