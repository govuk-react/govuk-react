// https://github.com/alphagov/govuk-frontend/tree/master/src/components/select

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { BLACK, ERROR_COLOUR, YELLOW } from 'govuk-colours';
import {
  MEDIA_QUERIES,
  NTA_LIGHT,
} from '@govuk-react/constants';

import Label from '@govuk-react/label';
import LabelText from '@govuk-react/label-text';
import ErrorText from '@govuk-react/error-text';
import HintText from '@govuk-react/hint-text';
import { withWhiteSpace } from '@govuk-react/hoc';

const StyledSelect = styled('select')(
  {
    boxSizing: 'border-box',
    fontFamily: NTA_LIGHT,
    fontWeight: 400,
    textTransform: 'none',
    fontSize: '16px',
    lineHeight: '1.25',
    width: '100%',
    height: '33px',
    padding: '5px 4px 4px',
    border: `2px solid ${BLACK}`,
    [MEDIA_QUERIES.LARGESCREEN]: {
      width: '50%',
      height: '38px',
      fontSize: '19px',
      lineHeight: '1.31579',
    },
    ':focus': {
      outline: `3px solid ${YELLOW}`,
      outlineOffset: 0,
    },
  },
  ({ error }) => ({
    border: error ? `4px solid ${ERROR_COLOUR}` : undefined,
  }),
);

const Select = ({
  children, hint, label, meta, input, className,
}) => (
  <Label className={className} error={meta.touched && meta.error}>
    <LabelText>{label}</LabelText>
    {hint && <HintText>{hint}</HintText>}
    {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
    <StyledSelect error={meta.touched && meta.error} {...input}>
      {children}
    </StyledSelect>
  </Label>
);

Select.defaultProps = {
  hint: undefined,
  errorText: undefined,
  className: undefined,
  input: {},
  meta: {},
};

Select.propTypes = {
  hint: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.any,
  }),
  meta: PropTypes.shape({
    active: PropTypes.bool,
    dirty: PropTypes.bool,
    dirtySinceLastSubmit: PropTypes.bool,
    error: PropTypes.any,
    initial: PropTypes.bool,
    invalid: PropTypes.bool,
    pristine: PropTypes.bool,
    submitError: PropTypes.any,
    submitFailed: PropTypes.bool,
    submitSucceeded: PropTypes.bool,
    touched: PropTypes.bool,
    valid: PropTypes.bool,
    visited: PropTypes.bool,
  }),
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  errorText: PropTypes.string,
  className: PropTypes.string,
};

export default withWhiteSpace({ marginBottom: 6 })(Select);
export { StyledSelect as SelectInput };
