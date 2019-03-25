import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { shape, spacing, typography } from '@govuk-react/lib';
import { stripUnit } from 'polished';

import { BLACK, FOCUS_COLOUR, LINK_COLOUR, LINK_HOVER_COLOUR, BORDER_COLOUR } from 'govuk-colours';
import { BORDER_WIDTH, FOCUS_WIDTH, SPACING_POINTS } from '@govuk-react/constants';

const CUSTOM_FOCUS_WIDTH = `${stripUnit(FOCUS_WIDTH) + 1}px`;

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
  paddingLeft: stripUnit(SPACING_POINTS[4]) + stripUnit(BORDER_WIDTH),
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
 *
 * ### Usage
 *
 *
 * Simple
 * ```jsx
 * <Details summary="Help with nationality">
 *   I am a paragraph of hidden details, to be revealed when summary is clicked
 * </Details>
 * ```
 *
 * ### References
 * - https://design-system.service.gov.uk/components/details/
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/components/details/_details.scss
 */
const Details = ({ summary, children, ...props }) => (
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

Details.propTypes = {
  /** The content that will be displayed when details are revealed */
  children: PropTypes.node,
  /** Flag to indicate whether to show component open by default */
  open: PropTypes.bool,
  /** Text for the details summary link e.g. Help with nationality */
  summary: PropTypes.node.isRequired,
};

export default Details;
