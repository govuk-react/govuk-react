import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import HiddenText from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/HiddenText', module);

stories.addDecorator(withKnobs);
stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', HiddenText);
