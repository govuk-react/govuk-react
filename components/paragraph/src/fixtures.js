import React from 'react';
import { text, boolean } from '@storybook/addon-knobs/react';
import Paragraph from '.';

const exampleText = 'A 19px body copy paragraph. [This supports markdown](https://en.wikipedia.org/wiki/Markdown) to allow for **bold** text and italics. This includes even more text to give a good representation of a more average length paragraph. That way you can see more than one line wrapping.';
const exampleSupportingText = 'A 16px supporting text paragraph. This supports markdown to allow for **bold** text and *italics*. This includes even more text to give a good representation of a more average length paragraph. That way you can see more than one line wrapping.';

export default () => <Paragraph supportingText={boolean('supportingText', false)}>{text('children', exampleText)}</Paragraph>;

export const SupportingParagraph = () => <Paragraph supportingText>{text('children', exampleSupportingText)}</Paragraph>;
