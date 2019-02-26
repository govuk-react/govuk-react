import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { link, spacing, typography } from '@govuk-react/lib';

import { BLACK, BORDER_COLOUR, GREY_4, WHITE } from 'govuk-colours';
import { MEDIA_QUERIES } from '@govuk-react/constants';

const spacingSimple1 = spacing.simple(1);
const spacingSimple2 = spacing.simple(2);
const spacingSimple3 = spacing.simple(3);
const spacingSimple4 = spacing.simple(4);
const spacingSimple5 = spacing.simple(5);

const StyledListItem = styled('li')({
  marginLeft: spacingSimple5,
  ':before': {
    content: "'— '",
    marginLeft: -spacingSimple5,
    paddingRight: spacingSimple1,
  },
  [MEDIA_QUERIES.TABLET]: {
    marginLeft: 0,
    ':before': {
      content: 'none',
    },
  },
});

const StyledHyperLink = styled('a')(
  typography.font({ size: 19 }),
  link.common(),
  link.styleDefault,
  {
    display: 'inline-block',
    paddingTop: spacingSimple2,
    paddingBottom: spacingSimple2,
  },
  ({ isActive }) => ({
    color: isActive && BLACK,
    textDecoration: isActive ? 'none' : undefined,

    [MEDIA_QUERIES.TABLET]: {
      marginRight: spacingSimple1,
      float: 'left',
      color: BLACK,
      textAlign: 'center',
      textDecoration: 'none',
      ':link': {
        color: BLACK,
      },
      marginTop: isActive ? -(spacingSimple1) : undefined,
      marginBottom: isActive ? -1 : undefined,

      paddingTop: isActive ? (spacingSimple3 - 1) : undefined,
      paddingRight: isActive ? (spacingSimple4 - 1) : spacingSimple4,
      paddingBottom: isActive ? (spacingSimple3 + 1) : undefined,
      paddingLeft: isActive ? (spacingSimple4 - 1) : spacingSimple4,
      border: isActive && `1px solid ${BORDER_COLOUR}`,
      borderBottom: isActive ? 0 : 1,
      backgroundColor: isActive ? WHITE : GREY_4,
      ':focus': {
        backgroundColor: isActive ? 'transparent' : GREY_4,
      },
    },
  }),
);

const Tab = ({
  children, isActive, href, onClick,
}) => (
  <StyledListItem>
    <StyledHyperLink
      isActive={isActive}
      onClick={(e) => {
        e.preventDefault();
        return onClick(e);
      }}
      href={href}
    >
      {children}
    </StyledHyperLink>
  </StyledListItem>
);

Tab.defaultProps = {
  isActive: false,
  href: '#',
};

Tab.propTypes = {
  isActive: PropTypes.bool,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
