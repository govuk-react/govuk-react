import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import { DetailsSimple, DetailsOpen, DetailsParagraph } from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/Details', module);
const examples = storiesOf('Typography/Details/Examples', module);

stories.addDecorator(withDocsCustom(ReadMe));
stories.addDecorator(withKnobs);
examples.addDecorator(withKnobs);

stories.add('Component default', DetailsSimple);
examples.add('Set as open', DetailsOpen);
examples.add('With Paragraph contents', DetailsParagraph);
