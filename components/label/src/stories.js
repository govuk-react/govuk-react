import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import Label from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Form/Label', module);
stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => <Label>Example</Label>);
