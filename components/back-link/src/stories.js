import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import BackLink from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Navigation/BackLink', module);
const examples = storiesOf('Navigation/BackLink/Examples', module);

stories.addDecorator(withDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default', () => <BackLink goBack={action('go-back')}>{text('Children', 'Back')}</BackLink>);

examples.add('With href', () => <BackLink href="#">Back</BackLink>);
