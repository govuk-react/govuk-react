import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import SectionBreak from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/SectionBreak', module);
stories.addDecorator(withDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default', SectionBreak);
