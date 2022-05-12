import * as React from 'react';
import styled from 'styled-components';

import BaseInput, { InputProps as BaseInputProps } from '@govuk-react/input';
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

class Input extends React.Component<DateInputProps> {
  static defaultProps: Partial<DateInputProps> = {
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
    inputs: {
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
    refs: undefined,
    onChange: undefined,
    onBlur: undefined,
    onFocus: undefined,
  };

  inputs = {};

  renderInput(label, name, key, defaultValue, input, error) {
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
          ref={(inputElement) => {
            this.inputs[key] = inputElement;
            refs(this.inputs);
          }}
          {...input}
        />
      </StyledLabel>
    );
  }

  render() {
    const { labels, names, defaultValues, inputs, error } = this.props;
    return (
      <StyledList>
        {this.renderInput(labels.day, names.day, 'day', defaultValues.day, inputs.day, error)}
        {this.renderInput(labels.month, names.month, 'month', defaultValues.month, inputs.month, error)}
        {this.renderInput(labels.year, names.year, 'year', defaultValues.year, inputs.year, error)}
      </StyledList>
    );
  }
}

export interface DateInputProps {
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
  /**
   * Custom props to pass down to the input fields
   */
  inputs?: {
    day?: BaseInputProps;
    month?: BaseInputProps;
    year?: BaseInputProps;
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
  refs?: (refs: {
    day?: React.Ref<typeof BaseInput>;
    month?: React.Ref<typeof BaseInput>;
    year?: React.Ref<typeof BaseInput>;
  }) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, key: string) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>, key: string) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>, key: string) => void;
  error?: boolean;
}

// This component is dependent on multiInputInput HOC so we always export with HOC
export default multiInputInput(Input);
