/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/breadcrumbs/_breadcrumbs.scss
 */
import * as React from 'react';
import styled from 'styled-components';
import { SECONDARY_TEXT_COLOUR } from 'govuk-colours';
import { SPACING_POINTS } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';

import Link from './atoms/link';

// Constants for chevron sourced from govuk-frontend
const CHEVRON_SIZE = 7;
const CHEVRON_BORDER_WIDTH = 1;
const CHEVRON_BORDER_COLOUR = SECONDARY_TEXT_COLOUR;
const CHEVRON_ALTITUDE_CALCULATED = 5.655;

const BreadcrumbsContainer = styled('div')(
  typography.font({ size: 16 }),
  typography.textColour,
  {
    // margins here are not responsive, hence why they're not specified using withWhiteSpace
    marginTop: SPACING_POINTS[3],
    marginBottom: SPACING_POINTS[2],
  },
  spacing.withWhiteSpace()
);

const BreadcrumbsList = styled('ol')({
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  display: 'block',
});

const BreadcrumbsListItem = styled('li')({
  display: 'inline-block',
  position: 'relative',
  marginBottom: SPACING_POINTS[1],
  marginLeft: SPACING_POINTS[2],
  paddingLeft: SPACING_POINTS[2] + CHEVRON_ALTITUDE_CALCULATED,
  '::before': {
    content: "''",
    display: 'block',
    position: 'absolute',
    top: '-1px',
    bottom: '1px',
    left: CHEVRON_ALTITUDE_CALCULATED * -2 + CHEVRON_SIZE + CHEVRON_BORDER_WIDTH,
    width: CHEVRON_SIZE,
    height: CHEVRON_SIZE,
    margin: 'auto 0',
    transform: 'rotate(45deg)',
    border: 'solid',
    borderWidth: `${CHEVRON_BORDER_WIDTH}px ${CHEVRON_BORDER_WIDTH}px 0 0`,
    borderColor: CHEVRON_BORDER_COLOUR,
  },
  ':first-child': {
    marginLeft: 0,
    paddingLeft: 0,
    '::before': {
      content: 'none',
      display: 'none',
    },
  },
});

/**
 * The breadcrumbs component helps users to understand where they are within a website’s structure and move between levels.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/breadcrumbs
 * - https://design-system.service.gov.uk/components/breadcrumbs/
 */
export const Breadcrumbs: BreadcrumbsType = ({ children, ...props }: BreadcrumbsProps) => (
  <BreadcrumbsContainer {...props}>
    <BreadcrumbsList>
      {Array.isArray(children) ? (
        React.Children.map(children, (child, i) => (child ? <BreadcrumbsListItem>{child}</BreadcrumbsListItem> : null))
      ) : (
        <BreadcrumbsListItem>{children}</BreadcrumbsListItem>
      )}
    </BreadcrumbsList>
  </BreadcrumbsContainer>
);

export interface BreadcrumbsType extends React.FC<BreadcrumbsProps> {
  Link?: typeof Link;
}
interface BreadcrumbsProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Breadcrumbs contents
   */
  children: React.ReactNode;
}

Breadcrumbs.Link = Link;

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;
