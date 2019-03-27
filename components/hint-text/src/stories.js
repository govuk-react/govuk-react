import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import HintText from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/HintText', module);
stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => <HintText>Example</HintText>);
