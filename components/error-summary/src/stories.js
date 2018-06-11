import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';
import styled from 'react-emotion';

import ErrorSummary from '.';
import ReadMe from '../README.md';

const StyledDiv = styled('div')({
  marginBottom: '600px',
});

const stories = storiesOf('Form/ErrorSummary', module);

stories.addDecorator(WithDocsCustom(ReadMe));

const heading = 'Message to alert the user to a problem goes here';
const description = 'Optional description of the errors and how to correct them';
const errors = [
  { target: '#target', text: 'Descriptive link to the question with an error' },
  { target: '#target', text: 'Descriptive link to the question with an error' },
];

stories.add('Component default', () => (
  <div>
    <ErrorSummary heading={heading} description={description} errors={errors} />
    <StyledDiv id="target">Target Question</StyledDiv>
  </div>
));
