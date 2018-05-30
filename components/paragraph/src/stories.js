import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import Paragraph, { SupportingParagraph } from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/Paragraph', module);
const examples = storiesOf('Typography/Paragraph/Examples', module);

stories.addDecorator(withKnobs);
stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', Paragraph);

examples.add('Supporting paragaph', SupportingParagraph);
