import { InsetText } from '.';
import InsetTextExample, { InsetTextWithParagraph } from './fixtures';

export default {
  title: 'Typography/Inset text',
  component: InsetText,
};

export const Default = InsetTextExample;

export const UsingAParagraphForContents = InsetTextWithParagraph;
