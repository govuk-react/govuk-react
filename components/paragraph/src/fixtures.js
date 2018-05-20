import React from 'react';
import { text, boolean } from '@storybook/addon-knobs/react';
import Paragraph from '.';

const exampleText = 'A 19px body copy paragraph. This includes even more text to give a good representation of a more average length paragraph. That way you can see more than one line wrapping.';
const exampleSupportingText = 'A 16px supporting text paragraph. This includes even more text to give a good representation of a more average length paragraph. That way you can see more than one line wrapping.';

export default () => <Paragraph supportingText={boolean('supportingText', false)}>{text('children', exampleText)}</Paragraph>;

export const SupportingParagraph = () => <Paragraph supportingText>{text('children', exampleSupportingText)}</Paragraph>;
