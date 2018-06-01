import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { BLACK, GREY_1, YELLOW } from 'govuk-colours';
import { withWhiteSpace } from '@govuk-react/hoc';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
  SPACING,
} from '@govuk-react/constants';

const BreadcrumbContainer = styled('div')({
  fontFamily: NTA_LIGHT,
  fontSize: FONT_SIZE.SIZE_14,
  lineHeight: LINE_HEIGHT.SIZE_14,
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: LINE_HEIGHT.SIZE_16,
  },
  marginTop: SPACING.SCALE_3,
  WebkitFontSmoothing: 'antialiased',
});

const BreadcrumbList = styled('ul')({
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  display: 'block',
});

const BreadcrumbListItem = styled('li')({
  position: 'relative',
  display: 'inline-block',
  whiteSpace: 'no-wrap',
  marginBottom: SPACING.SCALE_1,
  marginLeft: SPACING.SCALE_2,
  paddingLeft: SPACING.SCALE_3,
  ':first-child': {
    marginLeft: 0,
    paddingLeft: 0,
    '::before': {
      display: 'none',
    },
  },
  '::before': {
    content: "''",
    display: 'block',
    position: 'absolute',
    top: '-1px',
    bottom: '1px',
    left: '-3.31px',
    width: '7px',
    height: '7px',
    margin: 'auto 0',
    transform: 'rotate(45deg)',
    border: 'solid',
    borderWidth: '1px 1px 0 0',
    borderColor: `${GREY_1}`,
  },
  '> a': {
    color: `${BLACK}`,
    textDecoration: 'underline',
    ':focus': {
      backgroundColor: `${YELLOW}`,
      outline: `3px solid ${YELLOW}`,
    },
  },
});

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <Breadcrumb>
 *   <a href="/section">Section</a>
 *   <a href="/section/sub-section">Sub-section</a>
 *   Current page
 * </Breadcrumb>
 * ```
 *
 * Using `asAnchor` HOC with, or without React Router
 * ```jsx
 * import { Link } from 'react-router-dom';
 * import { asAnchor } from '@govuk-react/hoc';
 *
 * const AnchorLink = asAnchor(Link);
 * const AnchorTag = asAnchor('a');
 *
 * <Breadcrumb>
 *   <AnchorLink to="/section">Section</AnchorLink>
 *   <AnchorTag href="/section">Sub-section</AnchorTag>
 * </Breadcrumb>
 * ```
 *
 * ### References:
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/components/breadcrumb/_breadcrumb.scss
 *
 * ### TODO:
 * - Consider using the context API https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md
 * - Consider nested anchors, create an Atom for Breadcrumb links?
 *
 */
const Breadcrumb = ({ children, className, ...props }) => (
  <BreadcrumbContainer className={className} {...props}>
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

Breadcrumb.defaultProps = {
  className: undefined,
};

Breadcrumb.propTypes = {
  /**
   * Breadcrumb contents
   */
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default withWhiteSpace({ marginBottom: 2 })(Breadcrumb);
