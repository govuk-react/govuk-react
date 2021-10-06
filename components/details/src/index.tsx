/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/details/_details.scss
 */
import * as React from 'react';
import styled from 'styled-components';

import { shape, spacing, typography } from '@govuk-react/lib';
import { stripUnit } from 'polished';

import { BLACK, FOCUS_COLOUR, LINK_COLOUR, LINK_HOVER_COLOUR, BORDER_COLOUR } from 'govuk-colours';
import { BORDER_WIDTH, FOCUS_WIDTH, SPACING_POINTS } from '@govuk-react/constants';

const CUSTOM_FOCUS_WIDTH = `${Number(stripUnit(FOCUS_WIDTH)) + 1}px`;

const StyledDetails = styled('details')(
  typography.font({ size: 19 }),
  typography.textColour,
  spacing.withWhiteSpace({ marginBottom: 6 }),
  {
    display: 'block',
  }
);

const StyledSummary = styled('summary')({
  display: 'inline-block',
  position: 'relative',
  marginBottom: SPACING_POINTS[1],
  paddingLeft: Number(stripUnit(SPACING_POINTS[4])) + Number(stripUnit(BORDER_WIDTH)),
  color: LINK_COLOUR,
  cursor: 'pointer',

  ':hover': {
    color: LINK_HOVER_COLOUR,
  },

  ':focus': {
    outline: `${CUSTOM_FOCUS_WIDTH} solid ${FOCUS_COLOUR}`,
    outlineOffset: -1,
    color: BLACK,
    background: FOCUS_COLOUR,
  },

  '::-webkit-details-marker': {
    display: 'none',
  },

  ':before': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',

    ...shape.arrow({ direction: 'right', base: 14 }),

    '[open] > &': shape.arrow({ direction: 'down', base: 14 }),
  },
});

const SummaryText = styled('span')({
  textDecoration: 'underline',
});

const DetailsText = styled('div')({
  padding: SPACING_POINTS[3],
  paddingLeft: SPACING_POINTS[4],
  borderLeft: `${BORDER_WIDTH} solid ${BORDER_COLOUR}`,

  p: {
    marginTop: 0,
    marginBottom: SPACING_POINTS[4],
  },

  '> :last-child, p:last-child': {
    marginBottom: 0,
  },
});

/**
 * Make a page easier to scan by letting users reveal more detailed information only if they need it.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/details
 * - https://design-system.service.gov.uk/components/details/
 */
export const Details: React.FC<DetailsProps> = ({ summary, children, ...props }: DetailsProps) => (
  <StyledDetails {...props}>
    <StyledSummary>
      <SummaryText>{summary}</SummaryText>
    </StyledSummary>
    <DetailsText>{children}</DetailsText>
  </StyledDetails>
);

Details.defaultProps = {
  children: undefined,
  open: false,
};

Details.displayName = 'Details';

export interface DetailsProps {
  /** The content that will be displayed when details are revealed */
  children?: React.ReactNode;
  /** Flag to indicate whether to show component open by default */
  open?: boolean;
  /** Text for the details summary link e.g. Help with nationality */
  summary: React.ReactNode;
}
export default Details;
