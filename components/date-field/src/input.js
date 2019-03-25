import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { StyledInput } from '@govuk-react/input';
import LabelText from '@govuk-react/label-text';
import Label from '@govuk-react/label';

import multiInputInput from 'multi-input-input';

const StyledLabel = styled(Label)(
  {
    marginRight: '20px',
    marginBottom: 0,
  },
  ({ year }) => ({
    width: year ? '70px' : '50px',
  })
);

const StyledList = styled('div')({
  display: 'flex',
});

class Input extends React.Component {
  inputs = {};

  renderInput(label, name, key, defaultValue, error) {
    return (
      <StyledLabel year={key === 'year'}>
        <LabelText>{label}</LabelText>
        <StyledInput
          name={name}
          error={error}
          type="number"
          defaultValue={defaultValue}
          value={this.props.value ? this.props.value[key] : undefined}
          onChange={e => this.props.onChange(e, key)}
          onBlur={e => this.props.onBlur(e, key)}
          onFocus={e => this.props.onFocus(e, key)}
          ref={input => {
            this.inputs[key] = input;
            this.props.refs(this.inputs);
          }}
        />
      </StyledLabel>
    );
  }

  render() {
    const { labels, names, defaultValues, error } = this.props;
    return (
      <StyledList>
        {/* TODO: text should be configurable  */}
        {this.renderInput(labels.day, names.day, 'day', defaultValues.day, error)}
        {this.renderInput(labels.month, names.month, 'month', defaultValues.month, error)}
        {this.renderInput(labels.year, names.year, 'year', defaultValues.year, error)}
      </StyledList>
    );
  }
}

Input.propTypes = {
  names: PropTypes.shape({
    day: PropTypes.string,
    month: PropTypes.string,
    year: PropTypes.string,
  }),
  defaultValues: PropTypes.shape({
    day: PropTypes.string,
    month: PropTypes.string,
    year: PropTypes.string,
  }),
  value: PropTypes.shape({
    day: PropTypes.number,
    month: PropTypes.number,
    year: PropTypes.number,
  }),
  labels: PropTypes.shape({
    day: PropTypes.string,
    month: PropTypes.string,
    year: PropTypes.string,
  }),
  /**
   * This comes from the multiInputInput HOC and is needed to track all 3 inputs
   */
  refs: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  error: PropTypes.bool,
};

Input.defaultProps = {
  value: undefined,
  names: {
    day: 'DateFieldDay',
    month: 'DateFieldMonth',
    year: 'DateFieldYear',
  },
  defaultValues: {
    day: '',
    month: '',
    year: '',
  },
  labels: {
    day: 'Day',
    month: 'Month',
    year: 'Year',
  },
  error: false,
};

// This component is dependent on multiInputInput HOC so we always export with HOC
export default multiInputInput(Input);
