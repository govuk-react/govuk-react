import type { Story } from '@storybook/react';

import React from 'react';
import Paragraph from '@govuk-react/paragraph';

import { InsetText } from '.';

export default {
  title: 'Typography/Inset text',
  component: InsetText,
};

const testText =
  'It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.';

const InsetTextExample: Story = (args) => <InsetText {...args} />;
InsetTextExample.args = {
  children: testText,
};

export const InsetTextWithParagraph: Story = ({ children }: { children: string }) => (
  <InsetText>
    <Paragraph mb={0}>{children}</Paragraph>
  </InsetText>
);
InsetTextWithParagraph.args = {
  children: testText,
};

export const Default = InsetTextExample;

export const UsingAParagraphForContents = InsetTextWithParagraph;
