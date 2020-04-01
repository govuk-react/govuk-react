import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import InsetText, { InsetTextWithParagraph } from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/InsetText', module);
const examples = storiesOf('Typography/InsetText/Examples', module);

stories.addDecorator(withDocsCustom(ReadMe));
stories.addDecorator(withKnobs);
examples.addDecorator(withKnobs);

stories.add('Component default', InsetText);

examples.add('Using a Paragraph for contents', InsetTextWithParagraph);
