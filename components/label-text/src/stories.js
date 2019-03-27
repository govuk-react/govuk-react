import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import LabelText from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Form/LabelText', module);

stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => <LabelText>Example</LabelText>);
