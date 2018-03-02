// https://github.com/alphagov/govuk-frontend/tree/master/src/components/date-input

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { BLACK, YELLOW, ERROR_COLOUR } from 'govuk-colours';
import {
  FONT_SIZE,
  MEDIA_QUERIES,
  NTA_LIGHT,
  SPACING,
} from '@govuk-react/constants';

import Label from '@govuk-react/label';
import LabelText from '@govuk-react/label-text';
import ErrorText from '@govuk-react/error-text';
import HintText from '@govuk-react/hint-text';

const LabelWrapper = glamorous.div(
  {
    display: 'flex',
    flexDirection: 'column',
  },
  ({ errorText }) => ({
    borderLeft: errorText ? `4px solid ${ERROR_COLOUR}` : undefined,
    marginRight: errorText ? SPACING.SCALE_3 : undefined,
    paddingLeft: errorText ? SPACING.SCALE_2 : undefined,
  }),
);

const Input = glamorous.input(
  {
    boxSizing: 'border-box',
    fontFamily: NTA_LIGHT,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontWeight: 400,
    textTransform: 'none',
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: '20px',
    width: '100%',
    padding: '5px 4px 4px',
    border: `2px solid ${BLACK}`,
    [MEDIA_QUERIES.LARGESCREEN]: {
      fontSize: FONT_SIZE.SIZE_19,
      lineHeight: '25px',
    },
    '[disabled]': {
      cursor: 'auto',
    },
    ':focus': {
      outline: `3px solid ${YELLOW}`,
      outlineOffset: 0,
    },
  },
  ({ errorText }) => ({
    border: errorText ? `4px solid ${ERROR_COLOUR}` : `2px solid ${BLACK}`,
  }),
);

const ListParent = glamorous.div({
  fontFamily: NTA_LIGHT,
  display: 'flex',
  '> label': {
    width: '50px',
    marginRight: '20px',
    marginBottom: 0,
    '.year': {
      width: '70px',
    },
  },
});

const DateInput = ({ children, ...props }) => (
  <LabelWrapper errorText={props.errorText}>
    <LabelText errorText={props.errorText}>{children}</LabelText>
    {props.hintText ? <HintText>{props.hintText}</HintText> : <span />}
    {props.errorText ? (
      <ErrorText errorText={props.errorText}>{props.errorText}</ErrorText>
    ) : (
      <span />
    )}
    <ListParent>
      <Label>
        <LabelText>Day</LabelText>
        <Input errorText={props.errorText} type="text" />
      </Label>
      <Label>
        <LabelText>Month</LabelText>
        <Input errorText={props.errorText} type="text" />
      </Label>
      <Label className="year">
        <LabelText>Year</LabelText>
        <Input errorText={props.errorText} type="text" />
      </Label>
    </ListParent>
  </LabelWrapper>
);

DateInput.defaultProps = {
  hintText: null,
  errorText: null,
};

DateInput.propTypes = {
  children: PropTypes.node.isRequired,
  hintText: PropTypes.string,
  errorText: PropTypes.string,
};

export default DateInput;
