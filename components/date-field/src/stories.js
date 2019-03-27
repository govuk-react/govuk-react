import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withDocsCustom } from '@govuk-react/storybook-components';
import { action } from '@storybook/addon-actions';

import DateField from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Form/Date field', module);
const examples = storiesOf('Form/Date field/Examples', module);

class ManagedDateField extends React.Component {
  state = {
    value: {
      day: 0,
      month: 1,
      year: 2,
    },
  };

  render() {
    const input = {
      ...this.props.input,
      value: this.state.value,
      onChange: value => {
        this.setState({
          value,
        });
      },
    };
    return <DateField {...this.props} input={input} />;
  }
}

ManagedDateField.defaultProps = {
  input: {},
};

ManagedDateField.propTypes = {
  input: PropTypes.shape({}),
};

stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => (
  <ManagedDateField
    input={{
      onFocus: action('date-focus'),
      onBlur: action('date-blur'),
      onChange: action('date-change'),
    }}
    inputNames={{ day: 'dayInputName' }}
  >
    What is your date of birth?
  </ManagedDateField>
));

examples.add('Date with hint text', () => (
  <DateField hintText="For example, 31 03 1980">What is your date of birth?</DateField>
));

examples.add('Date with default values', () => (
  <DateField defaultValues={{ day: '01', month: '02', year: '2018' }}>What is your date of birth ?</DateField>
));

examples.add('Date with hint text & error', () => (
  <DateField hintText="For example, 31 03 1980" errorText="Error message goes here">
    What is your date of birth?
  </DateField>
));
