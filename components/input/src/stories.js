import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import Input from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Form/Input', module);

stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => <Input type="text" />);
