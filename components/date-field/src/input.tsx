import React from 'react';
import styled from 'styled-components';

import BaseInput from '@govuk-react/input';
import LabelText from '@govuk-react/label-text';
import Label from '@govuk-react/label';

import multiInputInput from 'multi-input-input';

const StyledLabel = styled(Label)<{ year: boolean }>(
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

class Input extends React.Component<InputProps> {
  static defaultProps = {
    value: undefined,
    names: {
      day: 'DateFieldDay',
      month: 'DateFieldMonth',
      year: 'DateFieldYear',
    },
    defaultValues: {
      day: undefined,
      month: undefined,
      year: undefined,
    },
    labels: {
      day: 'Day',
      month: 'Month',
      year: 'Year',
    },
    error: false,
  };

  inputs = {};

  renderInput(label, name, key, defaultValue, error) {
    const { value, onChange, onBlur, onFocus, refs } = this.props;
    return (
      <StyledLabel year={key === 'year'}>
        <LabelText>{label}</LabelText>
        <BaseInput
          name={name}
          error={!!error}
          defaultValue={defaultValue}
          value={value ? value[key] : undefined}
          onChange={(e) => onChange(e, key)}
          onBlur={(e) => onBlur(e, key)}
          onFocus={(e) => onFocus(e, key)}
          ref={(input) => {
            this.inputs[key] = input;
            refs(this.inputs);
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

export interface InputProps {
  names?: {
    day?: string;
    month?: string;
    year?: string;
  };
  defaultValues?: {
    day?: string;
    month?: string;
    year?: string;
  };
  value?: {
    day?: string;
    month?: string;
    year?: string;
  };
  labels?: {
    day?: string;
    month?: string;
    year?: string;
  };
  /**
   * This comes from the multiInputInput HOC and is needed to track all 3 inputs
   */
  refs?: (...args: unknown[]) => unknown;
  onChange?: (...args: unknown[]) => unknown;
  onBlur?: (...args: unknown[]) => unknown;
  onFocus?: (...args: unknown[]) => unknown;
  error?: boolean;
}

// This component is dependent on multiInputInput HOC so we always export with HOC
export default multiInputInput(Input);
