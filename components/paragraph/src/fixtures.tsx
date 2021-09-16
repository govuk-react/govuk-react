import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';

import { Paragraph } from '.';

const exampleParagraph =
  'Paragraph fields support markdown and allow for **bold** text and *italics*, as well as [links](https://en.wikipedia.org/wiki/Markdown). `Inline` code snippets are also supported, as well as code blocks PROVIDED they start on their own line';

const exampleCodeBlock = `\`\`\`
  const CustomStyledButton = styled(Button)({
    backgroundColor: WHITE,
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: BLUE,
    color: BLUE,
    ':hover': {
      backgroundColor: BLUE,
      color: WHITE
    }
  });
  \`\`\``;

const ParagraphWithKnobs: React.FC = () => (
  <Paragraph supportingText={boolean('supportingText', false)}>{text('children', exampleParagraph)}</Paragraph>
);

const SupportingParagraph: React.FC = () => <Paragraph supportingText>{text('children', exampleParagraph)}</Paragraph>;

const ParagraphWithCodeBlock: React.FC = () => (
  <Paragraph supportingText>{text('children', exampleCodeBlock)}</Paragraph>
);

export default Paragraph;

export { ParagraphWithKnobs, SupportingParagraph, ParagraphWithCodeBlock, exampleParagraph, exampleCodeBlock };
