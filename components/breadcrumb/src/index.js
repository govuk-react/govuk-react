// https://github.com/alphagov/govuk-frontend/blob/master/src/components/breadcrumb/_breadcrumb.scss
import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

import { BLACK, GREY_1, YELLOW } from 'govuk-colours';
import {
  FONT_SIZE,
  MEDIA_QUERIES,
  NTA_LIGHT,
  SPACING,
} from '@govuk-react/constants';

const BreadcrumbContainer = glamorous.div({
  fontFamily: NTA_LIGHT,
  fontSize: '14px',
  lineHeight: '16px',
  marginTop: '15px',
  marginBottom: '10px',
  WebkitFontSmoothing: 'antialiased',
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: '16px',
    lineHeight: '20px',
  },
});

const BreadcrumbList = glamorous.ul({
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  display: 'block',
});

const BreadcrumbListItem = glamorous.li({
  position: 'relative',
  display: 'inline-block',
  whiteSpace: 'no-wrap',
  marginBottom: '5px',
  marginLeft: '10px',
  paddingLeft: '15px',
  ':first-child': {
    marginLeft: 0,
    paddingLeft: 0,
    '::before': {
      display: 'none',
    },
  },
  '::before': {
    content: ' ',
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

// TODO use Context API https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md
const Breadcrumb = ({ children, className, ...props }) => (
  <BreadcrumbContainer className={className} {...props}>
    <BreadcrumbList>
      {children.length && children.map ? (
        children.map((child, i) => (
          child && (child.length || child.props)
            ? <BreadcrumbListItem key={child.key || i}>{child}</BreadcrumbListItem>
            : null
        ))
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
   * Generally a series of anchors or Link components
   */
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Breadcrumb;
