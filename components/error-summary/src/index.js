import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TEXT_COLOUR, ERROR_COLOUR, FOCUS_COLOUR } from 'govuk-colours';

import { H2 } from '@govuk-react/heading';
import Paragraph from '@govuk-react/paragraph';
import UnorderedList from '@govuk-react/unordered-list';
import Link from '@govuk-react/link';
import ListItem from '@govuk-react/list-item';

import {
  NTA_LIGHT,
  FONT_SIZE,
  BORDER_WIDTH,
  BORDER_WIDTH_MOBILE,
  FOCUS_WIDTH,
  LINE_HEIGHT,
  SPACING,
  MEDIA_QUERIES,
  RESPONSIVE_4,
} from '@govuk-react/constants';

import { spacing } from '@govuk-react/lib';

const StyledErrorText = styled(Link)({
  fontFamily: NTA_LIGHT,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontWeight: 700,
  marginBottom: SPACING.SCALE_1,
  textDecoration: 'underline',
  textDecorationSkipInk: 'none',
  textTransform: 'none',
  cursor: 'pointer',
  fontSize: FONT_SIZE.SIZE_16,
  lineHeight: LINE_HEIGHT.SIZE_16,
  ':visited': {
    color: `${ERROR_COLOUR}`,
  },
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_19,
    lineHeight: LINE_HEIGHT.SIZE_19,
  },
  color: `${ERROR_COLOUR}`,
  paddingTop: '4px',
  paddingBottom: '2px',
});

const StyledErrorSummary = styled('div')(
  {
    color: TEXT_COLOUR,
    padding: RESPONSIVE_4.mobile,
    border: `${BORDER_WIDTH_MOBILE} solid ${ERROR_COLOUR}`,
    '&:focus': {
      outline: `${FOCUS_WIDTH} solid ${FOCUS_COLOUR}`,
      outlineOffset: '0',
    },
    [MEDIA_QUERIES.LARGESCREEN]: {
      padding: RESPONSIVE_4.tablet,
      border: `${BORDER_WIDTH} solid ${ERROR_COLOUR}`,
    },
  },
  spacing.withWhiteSpace({ marginBottom: 6 })
);

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * const heading = 'Message to alert the user to a problem goes here';
 * const description = 'Optional description of the errors and how to correct them';
 * const errors = [
 *   {
 *     targetName: 'national-insurance-number',
 *     text: 'National Insurance number error',
 *   },
 *   {
 *     targetName: 'description',
 *     text: 'Description of what you saw error',
 *   },
 * ];
 *
 * const onHandleErrorClick = (targetName) => {
 *   document.getElementsByName(targetName)[0].scrollIntoView();
 * };
 *
 * <div>
 *   <ErrorSummary
 *     heading={heading}
 *     description={description}
 *     onHandleErrorClick={onHandleErrorClick}
 *     errors={errors}
 *   />
 *   <InputField
 *     name="national-insurance-number"
 *     hint="It’s on your National Insurance card, benefit letter, payslip or P60."
 *   >
 *     National Insurance number
 *   </InputField>
 *   <br />
 *   <TextArea name="description">Description of what you saw</TextArea>
 * </div>
 * ```
 *
 * ### References:
 * - https://govuk-elements.herokuapp.com/errors/#summarise-errors
 * - https://github.com/alphagov/govuk-frontend/tree/master/src/components/error-summary
 *
 * ### TODO:
 * - Swap out browser dependancy for context API to help with React Native support
 */
const ErrorSummary = ({ onHandleErrorClick, heading, description, errors, ...props }) => (
  <StyledErrorSummary tabIndex={-1} {...props}>
    <H2 size="MEDIUM">{heading}</H2>
    {description && <Paragraph mb={3}>{description}</Paragraph>}
    {errors.length > 0 && (
      <UnorderedList mb={0} listStyleType="none">
        {errors.map((error, index) => (
          <ListItem key={error.targetName}>
            <StyledErrorText tabIndex={index + 1} onClick={() => onHandleErrorClick(error.targetName)}>
              {error.text}
            </StyledErrorText>
          </ListItem>
        ))}
      </UnorderedList>
    )}
  </StyledErrorSummary>
);

ErrorSummary.defaultProps = {
  onHandleErrorClick: () => {},
  description: undefined,
  errors: [],
};

ErrorSummary.propTypes = {
  /** onClick function to scroll the target element into view */
  onHandleErrorClick: PropTypes.func,
  /** Heading text */
  heading: PropTypes.string,
  /** Optional description of the errors */
  description: PropTypes.string,
  /** Array of errors with text and target element name to scroll into view when clicked */
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      targetName: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

ErrorSummary.defaultProps = {
  heading: 'There is a problem',
};

export default ErrorSummary;
