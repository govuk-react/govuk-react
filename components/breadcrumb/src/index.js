import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BLACK, SECONDARY_TEXT_COLOUR } from 'govuk-colours';
import { withWhiteSpace } from '@govuk-react/hoc';
import {
  FOCUSABLE_FILL,
  SPACING_POINTS,
} from '@govuk-react/constants';
import { typography } from '@govuk-react/lib';

// Constants for chevron sourced from govuk-frontend
const CHEVRON_SIZE = 7;
const CHEVRON_BORDER_WIDTH = 1;
const CHEVRON_BORDER_COLOUR = SECONDARY_TEXT_COLOUR;
const CHEVRON_ALTITUDE_CALCULATED = 5.655;

const BreadcrumbContainer = styled('div')(
  typography.font({ size: 16 }),
  typography.textColour,
  {
    // margins here are not responsive, hence why they're not specified using withWhiteSpace
    marginTop: SPACING_POINTS[3],
    marginBottom: SPACING_POINTS[2],
  },
);

const BreadcrumbList = styled('ol')({
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  display: 'block',
});

const BreadcrumbListItem = styled('li')({
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
    left: ((CHEVRON_ALTITUDE_CALCULATED * -2) + CHEVRON_SIZE + CHEVRON_BORDER_WIDTH),
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

  // Additions to help ensure links get coloured as we expect
  // NB specificity of this should override default in Link component
  '> a': {
    color: `${BLACK}`,
    textDecoration: 'underline',
    ...FOCUSABLE_FILL,
  },
});

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * import Link from '@govuk-react/link';
 *
 * <Breadcrumb>
 *   <Link href="/section">Section</Link>
 *   <Link href="/section/sub-section">Sub-section</Link>
 *   Current page
 * </Breadcrumb>
 * ```
 *
 * Using `Link` with, or without React Router
 * ```jsx
 * import { Link as RouterLink } from 'react-router-dom';
 * import { Link } from '@govuk-react/link';
 *
 * <Breadcrumb>
 *   <Link as={RouterLink} to="/section">Section</Link>
 *   <Link href="/section">Sub-section</Link>
 * </Breadcrumb>
 * ```
 *
 * ### References:
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/components/breadcrumb/_breadcrumb.scss
 *
 */
const Breadcrumb = ({ children, ...props }) => (
  <BreadcrumbContainer {...props}>
    <BreadcrumbList>
      {children.length && children.map ? (
        children.map((child, i) =>
          (child && (child.length || child.props) ? (
            <BreadcrumbListItem key={child.key || i}>
              {child}
            </BreadcrumbListItem>
          ) : null))
      ) : (
        <BreadcrumbListItem>{children}</BreadcrumbListItem>
      )}
    </BreadcrumbList>
  </BreadcrumbContainer>
);

Breadcrumb.propTypes = {
  /**
   * Breadcrumb contents
   */
  children: PropTypes.node.isRequired,
};

export default withWhiteSpace()(Breadcrumb);
