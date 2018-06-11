ErrorSummary
============

### Import
```js
  import ErrorSummary from '@govuk-react/error-summary';
```
<!-- STORY -->

### Usage

Simple
```jsx
import React from 'react';
import styled from 'react-emotion';

export const heading = 'Message to alert the user to a problem goes here';
export const description = 'Optional description of the errors and how to correct them';

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
          heading={heading}
          description={description}
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
```

### References:
- https://govuk-elements.herokuapp.com/errors/#summarise-errors
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/error-summary

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `description` |  | undefined | string | 
 `errors` |  | [] | arrayOf[object Object] | 
 `heading` | true |  | string | 


