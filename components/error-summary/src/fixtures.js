import React from 'react';
import { text } from '@storybook/addon-knobs/react';
import styled from 'react-emotion';

import ErrorSummary from '.';

export const heading = 'Message to alert the user to a problem goes here';
export const description = 'Optional description of the errors and how to correct them';
export const errors = [
  { id: 0, target: '#target', text: 'Descriptive link to the question with an error' },
  { id: 1, target: '#target', text: 'Descriptive link to the question with an error' },
];

const StyledDiv = styled('div')({
  marginBottom: '600px',
});

const headingKnob = text('heading', heading);
const descriptionKnob = text('description', description);

export default () => (
  <div>
    <ErrorSummary heading={headingKnob} description={descriptionKnob} errors={errors} />
    <StyledDiv id="target">Target Question</StyledDiv>
  </div>
);
