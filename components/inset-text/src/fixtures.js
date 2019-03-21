import React from 'react';
import { text } from '@storybook/addon-knobs/react';
import Paragraph from '@govuk-react/paragraph';

import InsetText, { DocumentedInsetText } from '.';

export const testText =
  'It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.';

export default () => <DocumentedInsetText>{text('children', testText)}</DocumentedInsetText>;

export const InsetTextWithParagraph = () => (
  <InsetText>
    <Paragraph mb={0}>{text('children', testText)}</Paragraph>
  </InsetText>
);
