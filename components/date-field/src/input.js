import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { BLACK, YELLOW, ERROR_COLOUR } from 'govuk-colours';

import Label from '@govuk-react/label';
import {
  NTA_LIGHT,
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
} from '@govuk-react/constants';

import multiInputInput from 'multi-input-input';

const StyledList = styled('div')({
  fontFamily: NTA_LIGHT,
  display: 'flex',
  '> label': {
    width: '50px',
    marginRight: '20px',
    marginBottom: 0,
  },
  '> label.year': {
    width: '70px',
  },
});

const StyledInput = styled('input')(
  {
    boxSizing: 'border-box',
    fontFamily: NTA_LIGHT,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontWeight: 400,
    textTransform: 'none',
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: LINE_HEIGHT.SIZE_16,
    [MEDIA_QUERIES.LARGESCREEN]: {
      fontSize: FONT_SIZE.SIZE_19,
      lineHeight: LINE_HEIGHT.SIZE_19,
    },
    width: '100%',
    padding: '5px 4px 4px',
    border: `2px solid ${BLACK}`,
    ':focus': {
      outline: `3px solid ${YELLOW}`,
      outlineOffset: 0,
    },
  },
  ({ error }) => ({
    border: error ? `4px solid ${ERROR_COLOUR}` : `2px solid ${BLACK}`,
  }),
);

class OptionalDateField extends React.Component {
  inputs = {}

  renderInput(label, name, key, defaultValue, error) {
    return (
      <Label>
        {label}:
        <StyledInput
          name={name}
          error={error}
          type="text"
          defaultValue={defaultValue}
          value={(this.props.value ? this.props.value[key] : undefined)}
          onChange={e => this.props.onChange(e, key)}
          onBlur={e => this.props.onBlur(e, key)}
          onFocus={e => this.props.onFocus(e, key)}
          innerRef={(input) => { this.inputs[key] = input; this.props.refs(this.inputs); }}
        />
      </Label>);
  }

  render() {
    const {
      labels, names, defaultValues, error,
    } = this.props;
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

OptionalDateField.propTypes = {
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

OptionalDateField.defaultProps = {
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
export default multiInputInput(OptionalDateField);
