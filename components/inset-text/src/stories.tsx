import { withKnobs } from '@storybook/addon-knobs';

import { InsetText } from '.';
import InsetTextExample, { InsetTextWithParagraph } from './fixtures';

export default {
  title: 'Typography/Inset text',
  component: InsetText,
  decorators: [withKnobs],
};

export const Default = InsetTextExample;

export const UsingAParagraphForContents = InsetTextWithParagraph;
