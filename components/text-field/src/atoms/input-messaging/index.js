import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import LabelText from '@govuk-react/label-text';
import ErrorText from '@govuk-react/error-text';
import HintText from '@govuk-react/hint-text';

const InputMessaging = ({
  label, hint, meta,
}) => (
  <Fragment>
    <LabelText className="govuk-react--label-text">{label}</LabelText>
    {hint && <HintText className="govuk-react--hint-text">{hint}</HintText>}
    {meta.touched && meta.error && <ErrorText className="govuk-react--error-text">{meta.error}</ErrorText>}
  </Fragment>
);

InputMessaging.propTypes = {
  /**
   * The text label presented to a user
   */
  label: PropTypes.string,
  /**
   * An optional text string to help a user enter form data
   */
  hint: PropTypes.string,
  /**
   * A meta object based off https://redux-form.com/7.1.2/docs/api/field.md/#meta-props
   */
  meta: PropTypes.shape({
    active: PropTypes.bool,
    dirty: PropTypes.bool,
    dirtySinceLastSubmit: PropTypes.bool,
    error: PropTypes.any,
    initial: PropTypes.any,
    invalid: PropTypes.bool,
    pristine: PropTypes.bool,
    submitError: PropTypes.any,
    submitFailed: PropTypes.bool,
    submitSucceeded: PropTypes.bool,
    touched: PropTypes.bool,
    valid: PropTypes.bool,
    visited: PropTypes.bool,
  }),
};

InputMessaging.defaultProps = {
  label: undefined,
  hint: undefined,
  meta: {
    active: undefined,
    dirty: undefined,
    dirtySinceLastSubmit: undefined,
    error: undefined,
    initial: undefined,
    invalid: undefined,
    pristine: undefined,
    submitError: undefined,
    submitFailed: undefined,
    submitSucceeded: undefined,
    touched: undefined,
    valid: undefined,
    visited: undefined,
  },
};

export default InputMessaging;
