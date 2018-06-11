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

stories.add('Component default', () => (
  <div>
    <ErrorSummary>ErrorSummary example</ErrorSummary>
    <StyledDiv id="target">Target Question</StyledDiv>
  </div>
));
