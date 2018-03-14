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

const DateInput = ({
  children, errorText, hintText, className,
}) => (
  <LabelWrapper errorText={errorText} css={[className]}>
    <LabelText errorText={errorText}>{children}</LabelText>
    {hintText ? <HintText>{hintText}</HintText> : <span />}
    {errorText ? (
      <ErrorText errorText={errorText}>{errorText}</ErrorText>
    ) : (
      <span />
    )}
    <ListParent>
      <Label>
        <LabelText>Day</LabelText>
        <Input errorText={errorText} type="text" />
      </Label>
      <Label>
        <LabelText>Month</LabelText>
        <Input errorText={errorText} type="text" />
      </Label>
      <Label className="year">
        <LabelText>Year</LabelText>
        <Input errorText={errorText} type="text" />
      </Label>
    </ListParent>
  </LabelWrapper>
);

DateInput.defaultProps = {
  hintText: undefined,
  errorText: undefined,
  className: undefined,
};

DateInput.propTypes = {
  children: PropTypes.node.isRequired,
  hintText: PropTypes.string,
  errorText: PropTypes.string,
  className: PropTypes.string,
};

export default DateInput;
