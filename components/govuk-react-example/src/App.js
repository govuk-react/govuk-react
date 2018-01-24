import React, { Component } from 'react';
import { Breadcrumb, Button, Checkbox, DateInput } from 'govuk-react';

class App extends Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <a href="/section">Section 1</a>
          <a href="/section/sub-section">Sub-section</a>
          <a href="/section/three">Three sections and a long line</a>
        </Breadcrumb>
        <Checkbox>Waste from animal carcasses</Checkbox>
        <Checkbox>Waste from mines or quarries</Checkbox>
        <Checkbox>Farm or agricultural waste</Checkbox>
        <DateInput
          hintText="For example, 31 03 1980"
          errorText="Error message goes here"
        >
          What is your date of birth?
        </DateInput>

        <Button start>Start now</Button>
      </div>
    );
  }
}

export default App;
