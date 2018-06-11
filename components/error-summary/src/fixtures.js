import React from 'react';
import { text } from '@storybook/addon-knobs/react';
import styled from 'react-emotion';

import ErrorSummary from '.';

export const heading = 'Message to alert the user to a problem goes here';
export const description = 'Optional description of the errors and how to correct them';
export const errors = [
  'Descriptive link to the target question with an error',
  'Descriptive link to the other target question with an error',
];

const StyledDiv = styled('div')({
  marginBottom: '150px',
});

export default class ErrorSummaryExample extends React.Component {
  errors = [
    {
      id: 0,
      handleScrollToElement: () => this.targetQuestion.scrollIntoView(),
      text: 'Descriptive link to the target question with an error',
    },
    {
      id: 1,
      handleScrollToElement: () => this.otherTargetQuestion.scrollIntoView(),
      text: 'Descriptive link to the other target question with an error',
    },
  ];

  render() {
    return (
      <div>
        <ErrorSummary
          heading={text('heading', heading)}
          description={text('description', description)}
          errors={this.errors}
        />
        <StyledDiv innerRef={(node) => { this.targetQuestion = node; }}>
          Target Question
        </StyledDiv>
        <div ref={(node) => { this.otherTargetQuestion = node; }}>
          Other Target Question
        </div>
      </div>
    );
  }
}
