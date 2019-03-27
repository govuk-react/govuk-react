import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import MultiChoiceWithKnobs, { MultiChoiceWithKnobsHint, MultiChoiceWithKnobsError } from './fixtures';

import ReadMe from '../README.md';

const stories = storiesOf('Form/MultiChoice', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withDocsCustom(ReadMe));
stories.add('Component default', MultiChoiceWithKnobs);

const examples = storiesOf('Form/MultiChoice/Examples', module);
examples.addDecorator(withKnobs);
examples.add('With a hint', MultiChoiceWithKnobsHint);
examples.add('With an error', MultiChoiceWithKnobsError);
