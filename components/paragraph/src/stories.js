import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import { SupportingParagraph, ParagraphWithKnobs } from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/Paragraph', module);
const examples = storiesOf('Typography/Paragraph/Examples', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', ParagraphWithKnobs);

examples.add('Supporting paragaph', SupportingParagraph);
