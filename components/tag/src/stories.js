import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import { TagWithKnobs, TagInactive } from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Misc/Tag', module);
const examples = storiesOf('Misc/Tag/Examples', module);

stories.addDecorator(withDocsCustom(ReadMe));
stories.addDecorator(withKnobs);
examples.addDecorator(withKnobs);

stories.add('Component default', TagWithKnobs);

examples.add('Inactive', TagInactive);
