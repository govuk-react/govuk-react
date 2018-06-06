import React from 'react';
import { text } from '@storybook/addon-knobs/react';
import Paragraph from '@govuk-react/paragraph';

import HiddenText from '.';

export const summaryText = 'Help with nationality';

export const paragraphs = [
  'If you’re not sure about your nationality, try to find out from an official document like a passport or national ID card.',
  'We need to know your nationality so we can work out which elections you’re entitled to vote in. If you can’t provide your nationality, you’ll have to send copies of identity documents through the post.',
];

export default () => (
  <HiddenText summaryText={summaryText}>
    { paragraphs.map((paragraphText, index) =>
      (index === paragraphs.length - 1
       ? <Paragraph key={`paragraphText${index + 1}`} mb={0}>{text(`paragraphText${index + 1}`, paragraphText)}</Paragraph>
       : <Paragraph key={`paragraphText${index + 1}`}>{text(`paragraphText${index + 1}`, paragraphText)}</Paragraph>
      ))}
  </HiddenText>
);
