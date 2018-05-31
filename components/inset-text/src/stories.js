import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import InsetText, { InsetTextNarrowBorder } from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/InsetText', module);
const examples = storiesOf('Typography/InsetText/Examples', module);

stories.addDecorator(withKnobs);
stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', InsetText);

examples.add('Narrow border', InsetTextNarrowBorder);
