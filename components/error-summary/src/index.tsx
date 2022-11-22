/**
 * ### References:
 *
 * - https://govuk-elements.herokuapp.com/errors/#summarise-errors
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/error-summary
 */
import * as React from 'react';
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

export interface ErrorSummaryProps {
  /** onClick function to scroll the target element into view */
  onHandleErrorClick?: (targetName: string) => void;
  /** Heading text */
  heading?: string;
  /** Optional description of the errors */
  description?: string;
  /** Array of errors with text and target element name to scroll into view when clicked */
  errors?: {
    targetName?: string;
    text?: string;
  }[];
}

/**
 * Use this component at the top of a page to summarise any errors a user has made.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/error-summary
 * - https://design-system.service.gov.uk/components/error-summary/
 */
export const ErrorSummary: React.FC<ErrorSummaryProps> = ({
  onHandleErrorClick = undefined,
  heading = 'There is a problem',
  description = undefined,
  errors = [],
  ...props
}: ErrorSummaryProps) => (
  <StyledErrorSummary tabIndex={-1} {...props}>
    <H2 size="MEDIUM">{heading}</H2>
    {description && <Paragraph mb={3}>{description}</Paragraph>}
    {errors.length > 0 && (
      <UnorderedList mb={0} listStyleType="none">
        {errors.map((error, index) => (
          <ListItem key={error.targetName}>
            <StyledErrorText tabIndex={0} onClick={() => onHandleErrorClick?.(error.targetName)}>
              {error.text}
            </StyledErrorText>
          </ListItem>
        ))}
      </UnorderedList>
    )}
  </StyledErrorSummary>
);

ErrorSummary.defaultProps = {
  description: undefined,
  errors: [],
  heading: 'There is a problem',
  onHandleErrorClick: undefined,
};

ErrorSummary.displayName = 'ErrorSummary';

export default ErrorSummary;
