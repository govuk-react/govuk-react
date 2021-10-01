import type { Story } from '@storybook/react';

import * as React from 'react';

import { Paragraph } from '.';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
};

const exampleParagraph =
  'Paragraph fields support markdown and allow for **bold** text and *italics*, as well as [links](https://en.wikipedia.org/wiki/Markdown). `Inline` code snippets are also supported, as well as code blocks PROVIDED they start on their own line';

export const Default: Story = (args: { supportingText: boolean; children: string }) => <Paragraph {...args} />;
Default.args = {
  supportingText: false,
  children: exampleParagraph,
};

export const SupportingParagaph: Story = (args: { children: string }) => <Paragraph supportingText {...args} />;
SupportingParagaph.args = {
  children: exampleParagraph,
};
