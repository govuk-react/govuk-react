import React from 'react';
import { boolean, text } from '@storybook/addon-knobs/react';
import Paragraph from '@govuk-react/paragraph';

import Details from '.';

export const summaryText = 'Help with nationality';

export const paragraphs = [
  'If you’re not sure about your nationality, try to find out from an official document like a passport or national ID card.',
  'We need to know your nationality so we can work out which elections you’re entitled to vote in. If you can’t provide your nationality, you’ll have to send copies of identity documents through the post.',
];

const DetailsSimple = () => <Details summary={summaryText}>{text('Contents', paragraphs[0])}</Details>;

const DetailsOpen = () => (
  <Details summary={summaryText} open>
    {text('Contents', paragraphs[0])}
  </Details>
);

const DetailsParagraph = () => (
  <Details summary={summaryText} open={boolean('Open', false)}>
    <Paragraph>{text('Contents', `${paragraphs[0]}\n\n${paragraphs[1]}`)}</Paragraph>
  </Details>
);

export { DetailsSimple, DetailsOpen, DetailsParagraph };
