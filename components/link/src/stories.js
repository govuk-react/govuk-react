import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import Link, { LinkWithRouter } from './fixtures';

import ReadMe from '../README.md';

const stories = storiesOf('Typography/Link', module);
const examples = storiesOf('Typography/Link/Examples', module);
stories.addDecorator(withDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default', Link);
examples.add('With react-router', LinkWithRouter);
