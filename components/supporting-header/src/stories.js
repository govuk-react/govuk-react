import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import SupportingHeader from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/SupportingHeader', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => <SupportingHeader>{text('children', 'Heading text')}</SupportingHeader>);
