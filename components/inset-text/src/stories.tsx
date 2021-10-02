import type { Story } from '@storybook/react';

import * as React from 'react';
import Paragraph from '@govuk-react/paragraph';

import { InsetText } from '.';

export default {
  title: 'Typography/Inset text',
  id: 'inset-text',
  component: InsetText,
};

const testText =
  'It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.';

export const Default: Story = (args) => <InsetText {...args} />;
Default.args = {
  children: testText,
};

export const UsingAParagraphForContents: Story = ({ children }: { children: string }) => (
  <InsetText>
    <Paragraph mb={0}>{children}</Paragraph>
  </InsetText>
);
UsingAParagraphForContents.args = {
  children: testText,
};
