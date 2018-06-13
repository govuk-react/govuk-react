/* eslint-env browser */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { TEXT_COLOUR, ERROR_COLOUR, FOCUS_COLOUR } from 'govuk-colours';

import Header from '@govuk-react/header';
import Paragraph from '@govuk-react/paragraph';
import UnorderedList from '@govuk-react/unordered-list';
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

import { asAnchor, withWhiteSpace } from '@govuk-react/hoc';

const AnchorTag = asAnchor('a');

const StyledErrorText = styled(AnchorTag)({
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

const StyledErrorSummary = styled('div')({
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
});

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
 * <div>
 *   <ErrorSummary
 *     heading={heading}
 *     description={description}
 *     errors={errors}
 *   />
 *   <InputField
 *     name="national-insurance-number"
 *     hint={[
 *       'It’s on your National Insurance card, benefit letter, payslip or P60.',
 *       <br />,
 *       'For example, ‘QQ 12 34 56 C’.',
 *     ]}
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
const ErrorSummary = ({
  heading, description, errors, ...props
}) => (
  <StyledErrorSummary tabIndex={-1} {...props}>
    <Header level={2}>{ heading }</Header>
    { description && <Paragraph mb={2}>{ description }</Paragraph> }
    { errors.length > 0 &&
      <UnorderedList listStyleType="none">
        { errors.map(error => (
          <ListItem key={error.targetName}>
            <StyledErrorText
              tabIndex={-1}
              onClick={() => document.getElementsByName(error.targetName)[0].scrollIntoView()}
            >
              {error.text}
            </StyledErrorText>
          </ListItem>
          ))
        }
      </UnorderedList>
    }
  </StyledErrorSummary>
);

ErrorSummary.defaultProps = {
  description: undefined,
  errors: [],
};

ErrorSummary.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.shape({
    targetName: PropTypes.string,
    text: PropTypes.string,
  })),
};

export default withWhiteSpace({ marginBottom: 6 })(ErrorSummary);
