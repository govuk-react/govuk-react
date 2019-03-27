import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import WarningText, { WarningWithLongText } from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/WarningText', module);
const examples = storiesOf('Typography/WarningText/Examples', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => <WarningText />);

examples.add('With a very long warning', () => <WarningWithLongText />);
