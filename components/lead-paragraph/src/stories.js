import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import LeadParagraph from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/LeadParagraph', module);

stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => <LeadParagraph>LeadParagraph example</LeadParagraph>);
