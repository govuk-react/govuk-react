
import { withKnobs } from '@storybook/addon-knobs';

import Paragraph from '.';
import { SupportingParagraph, ParagraphWithKnobs } from './fixtures';

export default {
  title: 'Typography/Paragraph',
  decorators: [withKnobs],
  component: Paragraph,
};

export const Default = ParagraphWithKnobs;

export const SupportingParagaph = SupportingParagraph;
